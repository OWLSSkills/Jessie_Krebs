import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactRateLimit } from "@/lib/rate-limit";

type ContactRequestBody = {
  subject?: unknown;
  message?: unknown;
  turnstileToken?: unknown;
  website?: unknown;
};

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
  hostname?: string;
  action?: string;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getClientIp(request: Request): string {
  // Preferred when deployed directly on Vercel.
  const vercelForwardedFor = request.headers.get("x-vercel-forwarded-for");

  if (vercelForwardedFor) {
    return vercelForwardedFor.split(",")[0]?.trim() || "unknown";
  }

  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return "unknown";
}

async function verifyTurnstileToken(
  token: string,
  ip: string
): Promise<TurnstileResponse> {
  const secret = getRequiredEnv("TURNSTILE_SECRET_KEY");

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  if (ip !== "unknown") {
    formData.append("remoteip", ip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `Turnstile verification request failed with ${response.status}`
    );
  }

  return (await response.json()) as TurnstileResponse;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  try {
    /*
     * Rate-limit before parsing the body or calling Cloudflare/Gmail.
     * This reduces work caused by abusive requests.
     */
    const rateLimitResult = await contactRateLimit.limit(ip);

    if (!rateLimitResult.success) {
      const retryAfterSeconds = Math.max(
        1,
        Math.ceil((rateLimitResult.reset - Date.now()) / 1000)
      );

      return NextResponse.json(
        {
          error: "RATE_LIMITED",
          message:
            "Too many requests were submitted. Please wait and try again.",
          retryAfterSeconds,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfterSeconds),
            "X-RateLimit-Limit": String(rateLimitResult.limit),
            "X-RateLimit-Remaining": String(rateLimitResult.remaining),
            "X-RateLimit-Reset": String(rateLimitResult.reset),
          },
        }
      );
    }

    let body: ContactRequestBody;

    try {
      body = (await request.json()) as ContactRequestBody;
      if (typeof body.website === "string" && body.website.trim()) {
        return NextResponse.json({
          ok: true,
          message: "Email sent successfully.",
        });
      }
    } catch {
      return NextResponse.json(
        {
          error: "INVALID_JSON",
          message: "The request body was not valid JSON.",
        },
        { status: 400 }
      );
    }

    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    const turnstileToken =
      typeof body.turnstileToken === "string"
        ? body.turnstileToken.trim()
        : "";

    if (!subject || !message) {
      return NextResponse.json(
        {
          error: "VALIDATION_ERROR",
          message: "Subject and message are required.",
        },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        {
          error: "CAPTCHA_REQUIRED",
          message: "Please complete the anti-bot verification.",
        },
        { status: 400 }
      );
    }

    // Prevent an attacker from sending excessively large emails.
    if (subject.length > 150 || message.length > 10_000) {
      return NextResponse.json(
        {
          error: "VALIDATION_ERROR",
          message: "The submitted request is too long.",
        },
        { status: 400 }
      );
    }

    const captchaResult = await verifyTurnstileToken(turnstileToken, ip);

    if (!captchaResult.success) {
      console.warn("Turnstile rejected submission", {
        ip,
        errorCodes: captchaResult["error-codes"],
      });

      return NextResponse.json(
        {
          error: "CAPTCHA_FAILED",
          message:
            "We could not verify this submission. Please refresh and try again.",
        },
        { status: 403 }
      );
    }

    const mailProvider = getRequiredEnv("MAIL_PROVIDER");
    const gmailUser = getRequiredEnv("GMAIL_USER");
    const gmailAppPass = getRequiredEnv("GMAIL_APP_PASS");
    const mailTo = getRequiredEnv("MAIL_TO");

    const transporter = nodemailer.createTransport({
      service: mailProvider,
      auth: {
        user: gmailUser,
        pass: gmailAppPass,
      },
    });

    await transporter.sendMail({
      from: gmailUser,
      to: mailTo,

      // Consider setting this entirely on the server instead of accepting
      // arbitrary subjects from the browser.
      subject,

      text: message,

      // Until you separately send and validate the visitor's email,
      // replies should remain pointed at your own mailbox.
      replyTo: gmailUser,
    });

    return NextResponse.json({
      ok: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      {
        error: "EMAIL_SEND_FAILED",
        message:
          "We could not send your request right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
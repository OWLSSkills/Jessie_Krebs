import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactRequestBody = {
  subject?: string;
  message?: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    if (!body.message || !body.subject) {
      return NextResponse.json(
        { error: "VALIDATION_ERROR", message: "Subject and message are required." },
        { status: 400 }
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
      subject: body.subject,
      text: body.message,
      replyTo: gmailUser,
    });

    return NextResponse.json({ ok: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      {
        error: "EMAIL_SEND_FAILED",
        message: "We could not send your request right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
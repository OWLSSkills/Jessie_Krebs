import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = Redis.fromEnv();

export const contactRateLimit = new Ratelimit({
  redis,

  // Allow up to 3 contact submissions from one IP per 60 minutes.
  limiter: Ratelimit.slidingWindow(2, "60 m"),

  // Gives this limiter its own Redis key namespace.
  prefix: "rate-limit:contact",

  analytics: true,
});
// pages/api/env-check.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    NODE_ENV: process.env.NODE_ENV || "undefined",
    VERCEL_ENV: process.env.VERCEL_ENV || "undefined",
    NEXT_PUBLIC_ROBOTS_INDEX: process.env.NEXT_PUBLIC_ROBOTS_INDEX || "not set",
  });
}


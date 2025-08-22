// src/app/api/env-check/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    NODE_ENV: process.env.NODE_ENV || "undefined",
    VERCEL_ENV: process.env.VERCEL_ENV || "undefined",
    NEXT_PUBLIC_ROBOTS_INDEX: process.env.NEXT_PUBLIC_ROBOTS_INDEX || "not set",
    VERCEL_URL: process.env.VERCEL_URL || "undefined",
    timestamp: new Date().toISOString(),
  });
}


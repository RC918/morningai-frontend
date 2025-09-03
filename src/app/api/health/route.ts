import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function GET() {
  const versionPath = path.join(process.cwd(), 'public', 'version.json');
  let versionInfo = {};

  try {
    const versionData = fs.readFileSync(versionPath, 'utf8');
    versionInfo = JSON.parse(versionData);
  } catch (error) {
    console.error('Error reading version.json:', error);
  }

  return NextResponse.json({
    ok: true,
    timestamp: new Date().toISOString(),
    ...versionInfo,
    envCheck: {
      hasNodeEnv: !!process.env.NODE_ENV,
      nodeEnv: process.env.NODE_ENV,
      hasVercelEnv: !!process.env.VERCEL_ENV,
      vercelEnv: process.env.VERCEL_ENV,
    },
  });
}

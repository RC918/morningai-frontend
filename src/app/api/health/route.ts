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
    console.log('Version file not found, using default values');
    versionInfo = {
      commit: process.env.VERCEL_GIT_COMMIT_SHA || 'unknown',
      buildTime: new Date().toISOString(),
      buildId: process.env.VERCEL_DEPLOYMENT_ID || 'local'
    };
  }

  return NextResponse.json({
    ok: true,
    timestamp: new Date().toISOString(),
    node: process.version,
    runtime: 'nodejs',
    platform: process.platform,
    arch: process.arch,
    ...versionInfo,
    envCheck: {
      hasNodeEnv: !!process.env.NODE_ENV,
      nodeEnv: process.env.NODE_ENV,
      hasVercelEnv: !!process.env.VERCEL_ENV,
      vercelEnv: process.env.VERCEL_ENV,
    },
  });
}

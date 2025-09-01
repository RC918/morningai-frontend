// Force Node.js runtime to avoid Edge compatibility issues
export const runtime = 'nodejs';

export async function GET() {
  return new Response(JSON.stringify({
    ok: true,
    timestamp: new Date().toISOString(),
    node: process.version,
    runtime: process.env.NEXT_RUNTIME || 'nodejs',
    platform: process.platform,
    arch: process.arch,
    nextVersion: process.env.npm_package_dependencies_next || 'unknown',
    envCheck: {
      hasNodeEnv: Boolean(process.env.NODE_ENV),
      nodeEnv: process.env.NODE_ENV,
      hasVercelEnv: Boolean(process.env.VERCEL),
      vercelEnv: process.env.VERCEL_ENV
    }
  }), { 
    headers: { 
      'content-type': 'application/json',
      'cache-control': 'no-store'
    }
  });
}

// Force deployment trigger Mon Sep  1 10:33:11 EDT 2025

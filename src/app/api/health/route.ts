import fs from 'fs';
import path from 'path';

// Force Node.js runtime to avoid Edge compatibility issues
export const runtime = 'nodejs';

export async function GET() {
  try {
    // Try to read version.json from public directory
    const versionPath = path.join(process.cwd(), 'public', 'version.json');
    
    let versionInfo;
    if (fs.existsSync(versionPath)) {
      const versionData = fs.readFileSync(versionPath, 'utf8');
      versionInfo = JSON.parse(versionData);
    } else {
      // Fallback version info using Vercel environment variables
      const commit = process.env.VERCEL_GIT_COMMIT_SHA || 'unknown';
      versionInfo = {
        commit: commit,
        shortCommit: commit.substring(0, 7),
        buildId: `${Date.now()}-${commit.substring(0, 7)}`,
        buildTime: new Date().toISOString(),
        version: '2.2.0',
        environment: process.env.NODE_ENV || 'production',
        source: 'vercel-env'
      };
    }
    
    return new Response(JSON.stringify({
      ok: true,
      status: 'healthy',
      timestamp: new Date().toISOString(),
      
      // Version information
      ...versionInfo,
      
      // System information
      node: process.version,
      runtime: process.env.NEXT_RUNTIME || 'nodejs',
      platform: process.platform,
      arch: process.arch,
      nextVersion: process.env.npm_package_dependencies_next || 'unknown',
      uptime: process.uptime(),
      
      // Environment checks
      envCheck: {
        hasNodeEnv: Boolean(process.env.NODE_ENV),
        nodeEnv: process.env.NODE_ENV,
        hasVercelEnv: Boolean(process.env.VERCEL),
        vercelEnv: process.env.VERCEL_ENV
      },
      
      // Vercel specific info
      vercel: {
        region: process.env.VERCEL_REGION || 'unknown',
        url: process.env.VERCEL_URL || 'unknown',
        env: process.env.VERCEL_ENV || 'unknown',
        gitCommitSha: process.env.VERCEL_GIT_COMMIT_SHA || 'unknown',
        gitCommitMessage: process.env.VERCEL_GIT_COMMIT_MESSAGE || 'unknown'
      }
    }), { 
      headers: { 
        'content-type': 'application/json',
        'cache-control': 'no-store'
      }
    });
    
  } catch (error) {
    console.error('Health check error:', error);
    
    return new Response(JSON.stringify({
      ok: false,
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      commit: 'unknown',
      shortCommit: 'unknown',
      buildId: 'error',
      version: '2.2.0'
    }), {
      status: 500,
      headers: { 
        'content-type': 'application/json',
        'cache-control': 'no-store'
      }
    });
  }
}

// Force deployment trigger Mon Sep  1 10:33:11 EDT 2025

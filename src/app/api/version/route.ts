export const runtime = 'nodejs';

export async function GET() {
  return Response.json({
    sha: process.env.VERCEL_GIT_COMMIT_SHA || 'local',
    buildTime: process.env.VERCEL_GIT_COMMIT_DATE || 'unknown',
    node: process.version,
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
}


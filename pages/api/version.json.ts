import type { NextApiRequest, NextApiResponse } from 'next'

type VersionResponse = {
  commit: string
  build_id: string
  built_at: string
  version: string
  environment: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<VersionResponse>
) {
  // Set proper JSON headers
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  
  const versionData: VersionResponse = {
    commit: process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || 'local-dev',
    build_id: process.env.VERCEL_GIT_COMMIT_REF || process.env.GITHUB_REF_NAME || 'main',
    built_at: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  }
  
  res.status(200).json(versionData)
}

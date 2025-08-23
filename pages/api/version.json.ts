import type { NextApiRequest, NextApiResponse } from 'next'

type VersionResponse = {
  commit: string
  build_id: string
  built_at: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<VersionResponse>
) {
  res.status(200).json({
    commit: process.env.VERCEL_GIT_COMMIT_SHA || 'unknown',
    build_id: process.env.VERCEL_GIT_COMMIT_REF || 'unknown',
    built_at: new Date().toISOString()
  })
}

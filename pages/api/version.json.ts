import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const version = {
    commit: process.env.VERCEL_GIT_COMMIT_SHA || 'unknown',
    build_id: process.env.VERCEL_GIT_COMMIT_REF || 'unknown',
    built_at: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  };

  res.status(200).json(version);
}

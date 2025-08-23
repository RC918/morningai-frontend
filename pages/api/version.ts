import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const version = {
    version: '1.0.0',
    buildTime: new Date().toISOString(),
    stage: process.env.NEXT_PUBLIC_STAGE || 'prod',
    apiBase: process.env.NEXT_PUBLIC_API_BASE || 'https://api.morningai.me',
    commit: process.env.NEXT_PUBLIC_BUILD_ID || 'unknown'
  }
  
  res.status(200).json(version)
}
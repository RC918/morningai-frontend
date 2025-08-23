import type { NextApiRequest, NextApiResponse } from 'next'

type HealthResponse = {
  status: string
  timestamp: string
  environment: string
  uptime: number
  version: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  // Set proper JSON headers
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  
  const healthData: HealthResponse = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime(),
    version: '1.0.0'
  }
  
  res.status(200).json(healthData)
}

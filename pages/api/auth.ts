import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  
  const { username, password } = req.body
  
  if (username === 'morningai' && password === 'staging2025!') {
    res.status(200).json({ success: true, message: 'Authentication successful' })
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' })
  }
}

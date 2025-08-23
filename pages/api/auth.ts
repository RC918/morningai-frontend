import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('WWW-Authenticate', 'Basic realm="Staging Environment"');
  res.status(401).end('Authentication required');
}

export default function handler(req, res) {
  const robotsContent = `User-agent: *
Allow: /
`;
  
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(200).send(robotsContent);
}

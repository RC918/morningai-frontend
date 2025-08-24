// pages/api/robots.js
export default function handler(req, res) {
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://morningai.me/sitemap.xml

# Morning AI Production Environment
# Generated: ${new Date().toISOString()}
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 hour cache
  res.status(200).send(robotsContent);
}

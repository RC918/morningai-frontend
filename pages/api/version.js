export default function handler(req, res) {
  const version = {
    commit: process.env.VERCEL_GIT_COMMIT_SHA || "production",
    build_id: process.env.NEXT_PUBLIC_BUILD_ID || new Date().toISOString().slice(0,19).replace(/[-:]/g, '').replace('T', '_'),
    built_at: new Date().toISOString(),
    environment: process.env.NEXT_PUBLIC_STAGE || "production",
    version: "1.0.2",
    commit_message: "Final acceptance: Fix robots.txt and version sync",
    commit_date: new Date().toISOString()
  }
  
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-store')
  res.status(200).json(version)
}

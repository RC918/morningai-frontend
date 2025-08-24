export default function handler(req, res) {
  const version = {
    commit: process.env.VERCEL_GIT_COMMIT_SHA || "final_acceptance",
    build_id: process.env.NEXT_PUBLIC_BUILD_ID || "20250824_030000",
    built_at: new Date().toISOString(),
    environment: process.env.NEXT_PUBLIC_STAGE || "production",
    version: "1.0.1",
    commit_message: "Final acceptance: Environment variables setup",
    commit_date: new Date().toISOString()
  }
  
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'public, max-age=3600')
  res.status(200).json(version)
}

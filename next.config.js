/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_STAGE: 'prod',
    NEXT_PUBLIC_API_BASE: 'https://api.morningai.me',
    NEXT_PUBLIC_BUILD_ID: process.env.VERCEL_GIT_COMMIT_SHA || '20250824_030000'
  },
  async rewrites() {
    return [
      {
        source: '/version.json',
        destination: '/api/version'
      }
    ]
  }
}

module.exports = nextConfig

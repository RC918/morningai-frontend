/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // 環境變數配置
  env: {
    NEXT_PUBLIC_STAGE: process.env.NEXT_PUBLIC_STAGE || 'prod',
    NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE || 'https://api.morningai.me',
    NEXT_PUBLIC_BUILD_ID: process.env.NEXT_PUBLIC_BUILD_ID || 'unknown'
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 確保靜態文件正確處理
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // 重寫規則確保 robots.txt 正確路由
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots'
      }
    ]
  },
  
  // 環境變數配置
  env: {
    NEXT_PUBLIC_STAGE: process.env.NEXT_PUBLIC_STAGE || 'prod',
    NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE || 'https://api.morningai.me',
    NEXT_PUBLIC_BUILD_ID: process.env.NEXT_PUBLIC_BUILD_ID || 'unknown'
  }
}

module.exports = nextConfig

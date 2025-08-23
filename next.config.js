/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Ensure proper API routes
  async rewrites() {
    return [
      {
        source: '/version.json',
        destination: '/api/version.json',
      },
      {
        source: '/healthz',
        destination: '/api/healthz',
      },
    ]
  },
  
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

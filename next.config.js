const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src']
  },
  typescript: {
    ignoreBuildErrors: false
  }
}

module.exports = withNextIntl(nextConfig)


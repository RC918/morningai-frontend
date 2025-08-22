import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const isProd = process.env.VERCEL_ENV === "production";
    const headers = [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];

    // 🔧 非生產環境添加SEO保護
    if (!isProd) {
      headers.push({
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      });
    }

    return headers;
  },
};

export default nextConfig;

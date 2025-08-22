// next.config.js
const isProd = process.env.VERCEL_ENV === "production";

module.exports = {
  async headers() {
    const headers = [];

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


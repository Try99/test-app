/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cdn-Cache-Control",
            value: "public, max-age=30, stale-while-revalidate=300, stale-if-error=300",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=30, stale-while-revalidate=300, stale-if-error=300",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

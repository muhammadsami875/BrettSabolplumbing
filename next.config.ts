import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 160, 240, 320, 400, 480],
  },
  async redirects() {
    return [
      // The old Duda site used /residential. Keep its links and rankings.
      { source: "/residential", destination: "/residential-plumbing", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      // One canonical host: www.
      {
        source: "/:path*",
        has: [{ type: "host", value: "brettsabolplumbing.com" }],
        destination: "https://www.brettsabolplumbing.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Keep Vercel preview and deployment URLs out of search results.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<sub>.*)\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;

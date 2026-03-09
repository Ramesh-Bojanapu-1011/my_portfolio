import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  reactCompiler: true,
  reactStrictMode: true,

  // SEO and Performance Optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization for better performance
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Trailing slashes for consistent URLs
  trailingSlash: false,
};

export default nextConfig;

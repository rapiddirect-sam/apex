import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  images: {
    /* Smaller default widths for phones so `sizes: 100vw` picks a lighter LCP candidate. */
    deviceSizes: [360, 390, 414, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "apex-batch-images.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "apexbatch.com",
      },
      {
        protocol: "https",
        hostname: "www.apexbatch.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
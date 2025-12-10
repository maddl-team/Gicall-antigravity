import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gicall.it',
      },
      {
        protocol: 'https',
        hostname: 'gicall.it',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 20, 32, 48, 64, 80, 96, 128, 160, 192, 256, 320, 384, 512, 640],
  },
};

export default nextConfig;

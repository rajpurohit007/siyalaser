import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required: Generates a static HTML/CSS/JS export
  images: {
    unoptimized: true, // Required: Disables Next.js server-side image optimization
  },
};

export default nextConfig;

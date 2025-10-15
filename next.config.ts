import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow serving SVGs via next/image from /public safely
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    dirs: ["src"],
  },
  /* config options here */
};

export default nextConfig;

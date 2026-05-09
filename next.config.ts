import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/El-Umbral" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

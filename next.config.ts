import type { NextConfig } from "next";

// next.config.js
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? "/React-shadcn-pane-layouts" : "",
  assetPrefix: isProd ? "/React-shadcn-pane-layouts/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Export as static HTML for GitHub Pages */
  output: "export",
  /* Optimization: Reduce on-demand entries to speed up initial compile */
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
    pagesBufferLength: 3, // Reduced from 5 for faster startup
  },
  /* Skip validation during dev for faster startup */
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
};

export default nextConfig;

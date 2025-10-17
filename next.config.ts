import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ This tells Next.js to skip ESLint errors during production builds (e.g., on Vercel)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

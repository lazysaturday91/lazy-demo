import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',            // 정적 export
  images: { unoptimized: true } // next/image 쓰면 필요
};

export default nextConfig;

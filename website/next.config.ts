import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;

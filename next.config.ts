import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Retired routes: the former portfolio page now lives on /cases; the insights section was removed
  redirects() {
    return [
      { source: "/portfolio", destination: "/cases", permanent: true },
      { source: "/insights", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

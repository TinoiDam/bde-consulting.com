import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Retired routes: portfolio and cases were merged into /expertise (case pages on /expertise/[slug]); the insights
  // section was removed
  redirects() {
    return [
      { source: "/portfolio", destination: "/expertise#cases", permanent: true },
      { source: "/cases", destination: "/expertise#cases", permanent: true },
      { source: "/cases/:slug", destination: "/expertise/:slug", permanent: true },
      { source: "/insights", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The former portfolio page is consolidated into the Cases & Deliverables section on the homepage
  redirects() {
    return [{ source: "/portfolio", destination: "/#cases", permanent: true }];
  },
};

export default nextConfig;

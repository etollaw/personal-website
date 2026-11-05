import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The live site's hero button used to point at /projects
  async redirects() {
    return [{ source: "/projects", destination: "/work", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/etollaw/personal-website/**",
      },
    ],
  },
};

export default nextConfig;

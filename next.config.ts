/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",   // allow ALL HTTPS hosts
      },
    ],
  },
};

module.exports = nextConfig;

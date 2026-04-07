/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.gstatic.com",
        port: "",
        pathname: "/**",
      },
      // ✅ Wildcard untuk semua subdomain googleapis.com
      {
        protocol: "https",
        hostname: "**.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
};

module.exports = nextConfig;

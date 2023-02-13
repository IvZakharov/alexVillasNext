/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: ["img.youtube.com"],
  },
};

module.exports = nextConfig;

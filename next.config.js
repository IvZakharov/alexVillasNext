/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: ["img.youtube.com", "alexvillas.sgp1.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig;

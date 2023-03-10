/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: [
      "img.youtube.com",
      "alexvillas.sgp1.digitaloceanspaces.com",
      "a0.muscache.com",
      "alexvillas.sgp1.cdn.digitaloceanspaces.com"
    ],
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },
};

module.exports = nextConfig;

const withPlugins = require("next-compose-plugins");

const nextConfig = {
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["en", "pl", "ja"],
    defaultLocale: "en",
  },
};

module.exports = withPlugins([], nextConfig);

const nextConfig = {
  swcMinify: true,
  i18n: {
    locales: ["en", "pl", "ja"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: "/.well-known/webfinger",
        destination: "/api/webfinger",
      },
    ];
  },
};

module.exports = nextConfig;

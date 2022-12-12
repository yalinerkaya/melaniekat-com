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
        destination:
          "https://nyan.lol/.well-known/webfinger?resource=acct:zicklepop@nyan.lol",
      },
    ];
  },
};

module.exports = nextConfig;

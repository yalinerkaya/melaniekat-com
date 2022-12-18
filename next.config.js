const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['en', 'pl', 'ja'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '/.well-known/webfinger',
        destination:
          'http://nyan.lol/.well-known/webfinger?resource=acct:zicklepop@nyan.lol',
      },
    ]
  },
}

module.exports = nextConfig

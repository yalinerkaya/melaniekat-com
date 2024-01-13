const nextConfig = {
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

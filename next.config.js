const withPlugins = require('next-compose-plugins')

const nextConfig = {
  i18n: {
    locales: ['en', 'pl', 'ja'],
    defaultLocale: 'en'
  }
}

module.exports = withPlugins(
  [],
  nextConfig
)

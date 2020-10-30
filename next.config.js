const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  i18n: {
    locales: ['en', 'pl', 'ja'],
    defaultLocale: 'en'
  }
}

module.exports = withPlugins(
  [
    [withCss],
    [withPurgeCss]
  ],
  nextConfig
)

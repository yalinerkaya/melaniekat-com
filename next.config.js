const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  images: {
    iconSizes: [256]
  }
}

module.exports = withPlugins(
  [
    [withCss],
    [withPurgeCss]
  ],
  nextConfig
)

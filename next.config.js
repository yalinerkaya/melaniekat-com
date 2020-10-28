const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    [withCss],
    [withPurgeCss]
  ]
)

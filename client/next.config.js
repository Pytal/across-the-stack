const withPlugins = require('next-compose-plugins')
const withCSS = require('@pytal/next-css')

module.exports = withPlugins(
  [ withCSS ], {
    target: 'serverless',
    typescript: { ignoreDevErrors: true },
    poweredByHeader: false,
    devIndicators: { buildActivity: true, autoPrerender: false },
    reactStrictMode: true,
    experimental: { reactRefresh: true, modern: true },
    webpack: ( config, { dev } ) => {
      config.module.rules.push({
        test: /.tsx?$/,
        use: [{
          loader: 'linaria/loader',
          options: {
            displayName: dev,
            cacheDirectory: '.linaria',
            extension: '.css'
          }
        }]
      })
      return config
    }
  }
)

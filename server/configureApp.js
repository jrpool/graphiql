/* eslint-disable xo/filename-case */
const config = require('src/config')

export default function configureApp(app) {
  if (config.app.hotReload) {
    // Must be required rather than imported since it's only a devDependency and
    // won't exist in production, and all import statements must be static.
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpackConfig = require('src/config/webpack')

    const compiler = webpack(webpackConfig)

    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    }))
    app.use(webpackHotMiddleware(compiler))
  }
}

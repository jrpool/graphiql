/* eslint-disable no-undef */
require('babel-core/register')
require('babel-polyfill')

const config = require('src/config')

// These may also be defined by webpack on the client-side.
global.__CLIENT__ = false
global.__SERVER__ = true

function startServer() {
  require('./configureCSSModules')()
  require('./server').start()
}

if (config.server.hotReload) {
  if (require('piping')()) {
    // because we use piping; this file will be evaluated twice;
    // ensure we only process setup once.
    startServer()
  }
} else {
  startServer()
}

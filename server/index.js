/* eslint-disable no-undef */
const path = require('path')

const ENV_PATH = path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)

require('babel-core/register')
require('babel-polyfill')
require('dotenv').config({path: ENV_PATH, silent: true})

const config = require('config')
const piping = require('piping')

// These may also be defined by webpack on the client-side.
global.__CLIENT__ = false
global.__SERVER__ = true

if (!config.server.hotReload || piping()) {
  // because we use piping; this file will be evaluated twice;
  // ensure we only process setup once.
  require('./configureCSSModules')()
  require('./server').start()
}

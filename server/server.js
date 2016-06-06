/* eslint-disable no-console, no-undef, no-unused-vars */
/* eslint new-cap: [2, {"capIsNewExceptions": ["HTTPS"]}] */

import http from 'http'
import path from 'path'
import Express from 'express'
import serveStatic from 'serve-static'
import cookieParser from 'cookie-parser'
import raven from 'raven'
import {HTTPS as https} from 'express-sslify'

const config = require('config')

import configureApp from './configureApp'
import configureAuth from './configureAuth'
import handleRender from './render'

export function start() {
  // error handling
  raven.patchGlobal(config.server.sentryDSN)

  const app = new Express()
  const httpServer = http.createServer(app)

  // catch-all error handler
  app.use((err, req, res, next) => {
    const errCode = err.code || 500
    const errType = err.type || 'Internal Server Error'
    const errMessage = err.message || config.server.secure ? err.toString() : err.stack
    const errInfo = `<h1>${errCode} - ${errType}</h1><p>${errMessage}</p>`
    console.error(err.stack)
    res.status(500).send(errInfo)
  })

  configureApp(app)

  // Parse cookies.
  app.use(cookieParser())

  // Ensure secure connection in production.
  if (config.server.secure) {
    app.use(https({trustProtoHeader: true}))
  }

  // Use this middleware to server up static files
  app.use(serveStatic(path.join(__dirname, '../dist')))
  app.use(serveStatic(path.join(__dirname, '../public')))

  // Configure authentication via Auth0.
  configureAuth(app)

  // Default React application
  app.use(handleRender)

  return httpServer.listen(config.server.port, error => {
    if (error) {
      console.error(error)
    } else {
      console.info('🌍  Listening at %s', config.app.baseURL)
    }
  })
}

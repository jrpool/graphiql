/**
 * Auto-merged environment-specific configuration.
 * Optimizes for security and performance ("production mode") by default.
 */

module.exports = {
  server: {
    secure: true,
    hotReload: false,
    port: process.env.PORT || '8080',
    sentryDSN: process.env.SENTRY_SERVER_DSN,
  },

  app: {
    baseURL: process.env.APP_BASE_URL,
    sentryDSN: process.env.SENTRY_CLIENT_DSN,
    minify: true,
    hotReload: false,
    devTools: false,
    noErrors: false
  },

  idm: {
    baseURL: process.env.IDM_BASE_URL,
  },

  game: {
    baseURL: process.env.GAME_BASE_URL,
  },

  jwt: {
    privateKey: process.env.JWT_PRIVATE_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
  }
}

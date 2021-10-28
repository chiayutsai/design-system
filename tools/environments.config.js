import git from 'git-rev-sync'
import pkg from '../package.json'

const env = process.env.NODE_ENV || 'development'
const { name, engines, version, browserslist } = pkg
const gitHash = git.short()
const release = `${version}-${env}-${gitHash}`

// ========================================================
// Default Configuration
// ========================================================
const config = {
  isDebug: false, // Compile optimization
  isVerbose: false, // Prints detailed information to the console
  isTest: false,
  env,
  name,
  engines,
  version,
  gitHash,
  release,
  browserslist,
  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  port: process.env.PORT || 5000,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  publicPath: './assets/',

  cdnUrlPathVariable: 'window.__CDN_URL_PATH__',
}

// ========================================================
// Environment Configuration
// ========================================================
const environments = {
  // ======================================================
  // Overrides when NODE_ENV === 'test'
  // ======================================================
  test: {
    isDebug: true,
    isTest: true,
    proxies: [
      {
        endpoint: 'http://slgwa.playthefun.com',
        paths: ['/LinkedGamesWebPortal'],
      },
    ],
  },

  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  development: {
    isDebug: true,
    proxies: [
      {
        endpoint: 'http://slgwa.playthefun.com',
        paths: ['/LinkedGamesWebPortal'],
      },
    ],
  },

  // ======================================================
  // Overrides when NODE_ENV === 'sit'
  // ======================================================
  sit: {
    proxies: [
      {
        endpoint: 'http://slgwa.playthefun.com',
        paths: ['/LinkedGamesWebPortal'],
      },
    ],
  },

  // ======================================================
  // Overrides when NODE_ENV === 'uat'
  // ======================================================
  uat: {
    isDebug: process.env.DEBUG === 'true',
    isVerbose: true,
    proxies: [
      {
        endpoint: 'http://qlgwa.155551.com',
        paths: ['/LinkedGamesWebPortal'],
      },
    ],
  },

  // ======================================================
  // Overrides when NODE_ENV === 'production'
  // ======================================================
  production: {
    isDebug: process.env.DEBUG === 'true',
    isVerbose: true,
    proxies: [
      {
        endpoint: 'http://qlgwa.155551.com',
        paths: ['/LinkedGamesWebPortal'],
      },
    ],
  },
}

Object.assign(config, environments[config.env])

// ------------------------------------
// Environment
// ------------------------------------
// N.B.: globals added here must _also_ be added to .eslintrc
config.globals = {
  'process.env.NODE_ENV': config.isDebug ? '"development"' : '"production"',
  // 'process.env.BLUEBIRD_DEBUG': 0,
  PORT: config.port,
  // available for both client side and server side
  __ENV__: JSON.stringify(config.env),
  __DEV__: process.env.DEBUG === 'true' || config.env === 'development',
  __SIT__: config.env === 'sit',
  __UAT__: config.env === 'uat',
  __PROD__: config.env === 'production',
  __TEST__: config.env === 'test',
  __VERSION__: JSON.stringify(config.version),
  __HASH__: JSON.stringify(config.gitHash),
  __RELEASE__: JSON.stringify(config.release),
  __GA__: config.analytics.googleTrackingId
    ? JSON.stringify(config.analytics.googleTrackingId)
    : '""',
}
export default config

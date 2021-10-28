/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
import { apiStart } from 'actions/api/gameApi'
import { setDarkMode } from 'actions/darkMode'
import { setLocale } from 'actions/locale'
import { setPlatform } from 'actions/platform'
import { SYSTEM_ERROR } from 'constants/error'
import { DESKTOP, MOBILE, MOBILE_FOR_API } from 'constants/platform'
import Locale, { DEFAULT_LOCALE } from 'locales'
import globalState from 'utils/GlobalState'

const handleQueryLocale = (store, query) => {
  Locale.setup({ store })

  // get initial locale
  const locale = query.language || DEFAULT_LOCALE
  store.dispatch(setLocale(locale))
}

const handleQueryPlatform = (store, query) => {
  const queryPlatform = query.platform || ''
  const isMobile = queryPlatform === MOBILE_FOR_API
  const platform = isMobile ? MOBILE : DESKTOP
  store.dispatch(setPlatform(platform))
  globalState.update('layout', platform)
}

const handleQueryDarkmode = (store, query) => {
  const isDarkMode = query.darkmode === 'true'
  store.dispatch(setDarkMode(isDarkMode))
  globalState.update('darkmode', isDarkMode)
}

const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      // This route is just for DEMO, it can be deleted later.
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      // This route is just for DEMO, it can be deleted later.
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/error',
      load: () => import(/* webpackChunkName: 'error' */ './error'),
    },
    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async config(store, query) {
    const { dispatch } = store

    try {
      await dispatch(apiStart())

      // handle url query
      // query - locale
      handleQueryLocale(store, query)

      // query - platform
      handleQueryPlatform(store, query)

      // query - darkmode
      handleQueryDarkmode(store, query)
    } catch (error) {
      console.error(error)
      return { next: `/error?code=${error?.code || SYSTEM_ERROR}` }
    }

    return null
  },

  async action({ next, route: contextRoute, store, query }) {
    /*
     * config() can block whole app render
     * request() wont block
     *
     * because component rendering need i18n initialize,
     * so put apiStart and Locale.setup in config
     *
     */
    // Execute each child route until one of them return the result
    if (contextRoute.config) {
      const result = await contextRoute.config(store, query)
      // https://juejin.im/post/5d59fd7ff265da03f233cc4b
      contextRoute.config = undefined // eslint-disable-line no-param-reassign
      if (result) return result
    }

    // Execute each child route until one of them return the result
    const route = await next()

    ;(async () => {
      if (contextRoute.request) {
        await contextRoute.request(store, query)
        // https://juejin.im/post/5d59fd7ff265da03f233cc4b
        contextRoute.request = undefined // eslint-disable-line no-param-reassign
      }
    })()

    // Provide default values for title, description etc.
    route.title = `${route.title || ''}`
    route.description = route.description || ''

    return route
  },
}

export default routes

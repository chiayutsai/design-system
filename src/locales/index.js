/**
 * PLEASE DO NOT import `i18next` in your component directly,
 * use this lib instead!
 */
/* eslint-disable no-return-await */
import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { getResource } from 'actions/api/gameApi'
import { setAppReady } from 'actions/loading'
import { SYSTEM_ERROR } from 'constants/error'
import { EN_US, ZH_CN } from 'constants/locale'
import BrowserStorage from 'utils/BrowserStorage'
import en from './en.json'

// constants
export const DEFAULT_LOCALE = ZH_CN
export const FALLBACK_LOCALE = EN_US

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb(),
  init: () => {},
  cacheUserLanguage: () => {},
}

/**
 * A translation and localization with i18next
 * @class
 * @name Locale
 */
class Locale {
  constructor() {
    this.initialized = false
  }

  /**
   * Inject locale class to html tag
   * @private
   */
  #injectLocaleClass = code => {
    if (process.env.BROWSER) {
      const $html = document.getElementsByTagName('html')[0]
      const classAttr =
        ($html.getAttribute && $html.getAttribute('class')) || ''
      const classes = classAttr.split(' ')
      const newClasses = classes.filter(c => c !== this.getLocale() && c !== '')
      const newClassAttr = `${newClasses.join(' ')} ${code}`.trim()
      $html.setAttribute('class', newClassAttr)

      // https://ithelp.ithome.com.tw/articles/10194236
      $html.lang = code
    }
  }

  /**
   * Set locale with code
   * @private
   */
  #updateLocale = async code => {
    await i18next.changeLanguage(code)

    this.#injectLocaleClass(code)
  }

  /**
   * Setup locales on startup
   */
  setup = ({ store }) =>
    new Promise(resolve => {
      i18next
        .use(languageDetector)
        .use(Backend)
        .use(initReactI18next)
        .init(
          {
            debug: __DEV__,
            fallbackLng: FALLBACK_LOCALE,
            preload: [FALLBACK_LOCALE],
            interpolation: {
              escapeValue: false, // not needed for react as it escapes by default
            },
            backend: {
              loadPath: lng => `${lng}`,
              parse: data => JSON.parse(data),
              crossDomain: true,
              request: async (options, lng, payload, callback) => {
                if (__TEST__) {
                  // TODO: find better way to mock response
                  callback(null, {
                    status: 200,
                    data: __TEST__ && en.Result.LangResource,
                  })
                  return
                }

                let errorCode
                let langResource
                try {
                  const { Result } = await store.dispatch(
                    getResource({ language: lng }),
                  )

                  errorCode = Result.ErrorCode
                  langResource = Result.LangResource
                } catch (error) {
                  errorCode = error.code || SYSTEM_ERROR
                }

                const hasError = errorCode !== '0'
                if (hasError) {
                  callback(new Error(errorCode))
                } else {
                  callback(null, {
                    status: 200,
                    data: langResource,
                  })
                }
              },
            },
            react: {
              useSuspense: false,
            },
          },
          err => {
            if (err) {
              // 若初始化有問題, 只顯示 error, App 照常運行
              console.error(err)('i18next init error', err)
            }

            store.dispatch(setAppReady(true))
            this.initialized = true
            resolve()
          },
        )
    })

  /**
   * Set locale with code
   * @param {string} code - `en-US`/`zh-TW`/`zh-CN`
   * @returns code
   */
  async setLocale(code) {
    // const nextLocale = LOCALE_LIST.find(
    //   locale => locale.toLowerCase() === code.toLowerCase(),
    // )
    // if (nextLocale) {
    //   await this.updateLocale(BrowserStorage.set('locale', nextLocale))
    //   return nextLocale
    // }

    // Switch to fallback if not found
    await this.#updateLocale(BrowserStorage.set('locale', code))

    return code
  }

  /**
   * Get current locale
   * @returns code
   */
  getLocale = () => i18next.language

  /**
   * Get default locale
   * @returns default code
   */
  getDefaultLocale = () => BrowserStorage.get('locale', DEFAULT_LOCALE)

  onInitialized = callback => i18next.on('initialized', callback)

  offInitialized = callback => i18next.off('initialized', callback)

  /**
   * In case of a locale change, it emits an event you can listen to.
   * @param {localeChangeCallback} callback
   */
  onLocaleChange = callback => i18next.on('languageChanged', callback)

  /**
   * Removes a given listener from locale change emitter
   * @param {localeChangeCallback} callback
   */
  offLocaleChange = callback => i18next.off('languageChanged', callback)
}

/**
 * This callback is displayed as part of the Requester class.
 * @callback localeChangeCallback
 * @param {string} newLocale - next locale code
 * @param {string} oldLocale - prev locale code
 */

export default new Locale()

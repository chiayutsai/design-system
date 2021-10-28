import { createAction } from 'redux-actions'
import Locale from 'locales'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_LOCALE_REQUEST = 'SET_LOCALE_REQUEST'
export const SET_LOCALE_SUCCESS = 'SET_LOCALE_SUCCESS'
export const SET_LOCALE_FAILURE = 'SET_LOCALE_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const setLocaleRequest = createAction(SET_LOCALE_REQUEST)
export const setLocaleSuccess = createAction(SET_LOCALE_SUCCESS)
export const setLocaleFailure = createAction(SET_LOCALE_FAILURE)

// ------------------------------------
// Actions (Thunks)
// ------------------------------------
export const setLocale = langCode => async dispatch => {
  dispatch(setLocaleRequest(langCode))
  try {
    const prevLocale = Locale.getLocale()
    const locale = await Locale.setLocale(langCode)
    dispatch(
      setLocaleSuccess({
        from: prevLocale,
        to: langCode,
      }),
    )
    return locale
  } catch (error) {
    dispatch(
      setLocaleFailure({
        locale: langCode,
        error,
      }),
    )
  }
  return null
}

export default {
  setLocale,
}

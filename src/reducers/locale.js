/**
 * Locale switcher
 */
import { handleActions } from 'redux-actions'
import { SET_LOCALE_SUCCESS } from 'actions/locale'
import Locale from 'locales'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Locale.getDefaultLocale()

export default handleActions(
  {
    [SET_LOCALE_SUCCESS]: (state, { payload }) => payload.to,
  },
  initialState,
)

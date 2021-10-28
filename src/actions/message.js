import { createAction } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_SYSTEM_MESSAGE = '@SET_SYSTEM_MESSAGE'
export const DISMISS_SYSTEM_MESSAGE = '@DISMISS_SYSTEM_MESSAGE'

export const SET_NOTIFICATION = '@SET_NOTIFICATION'
export const DISMISS_NOTIFICATION = '@DISMISS_NOTIFICATION'

// ------------------------------------
// Actions
// ------------------------------------
export const setSystemMessage = createAction(SET_SYSTEM_MESSAGE)

export const dismissSystemMessage = createAction(DISMISS_SYSTEM_MESSAGE)

// param: code, message, fallback, timeToClose, translateOptions
export const setNotification = createAction(SET_NOTIFICATION)
export const dismissNotification = createAction(DISMISS_NOTIFICATION)

export const showNotification = payload => dispatch => {
  dispatch(dismissNotification())
  dispatch(setNotification(payload))
}

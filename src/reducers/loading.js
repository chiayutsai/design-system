// import {
//   SET_LOCALE_FAILURE,
//   SET_LOCALE_REQUEST,
//   SET_LOCALE_SUCCESS,
// } from 'actions/locale'
import { handleActions } from 'redux-actions'
import { SET_LOADING_DONE, SET_LOADING_PROGRESS } from 'actions/loading'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false

let targets = []

export default handleActions(
  {
    [SET_LOADING_PROGRESS]: (state, { payload }) => {
      if (!targets.includes(payload)) {
        targets.push(payload)
      }
      return true
    },
    [SET_LOADING_DONE]: (state, { payload }) => {
      targets = targets.filter(target => target !== payload)
      return targets.length !== 0
    },

    // [SET_LOCALE_REQUEST]: () => true,
    // [SET_LOCALE_SUCCESS]: () => false,
    // [SET_LOCALE_FAILURE]: () => false,
  },
  initialState,
)

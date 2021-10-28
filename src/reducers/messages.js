import { handleActions } from 'redux-actions'
import { DISMISS_SYSTEM_MESSAGE, SET_SYSTEM_MESSAGE } from 'actions/message'

// const exampleModal = {
//   type: 'message',
//   code: '1000',
//   messageContent: ['lbl_BbinErr_1000', 'lbl_SysErrorMsg'],
//   shouldCloseOnOverlayClick: false,
//   buttons: [
//     {
//       label: 'CONFIRM',
//     },
//   ],
//   id: 997,
// }

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []

export default handleActions(
  {
    [SET_SYSTEM_MESSAGE]: (state, { payload }) => [...state, payload],

    [DISMISS_SYSTEM_MESSAGE]: (state, { payload: { id } }) =>
      state.filter(message => message.id !== id),
  },
  initialState,
)

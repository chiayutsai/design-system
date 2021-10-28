import { handleActions } from 'redux-actions'
import { SET_PLATFORM } from 'actions/platform'
import { DESKTOP } from 'constants/platform'

const initialState = DESKTOP

export default handleActions(
  {
    [SET_PLATFORM]: (state, action) => action.payload,
  },
  initialState,
)

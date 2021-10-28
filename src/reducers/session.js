import { handleActions } from 'redux-actions'
import {
  apiStartAction,
  enterGameAction,
  exchangeTokenAction,
} from 'actions/api/gameApi'
import { SET_SITE_ID } from 'actions/session'
import objectKeyFirstLetterToLowerCase from 'utils/objectKeyFirstLetterToLowerCase'
import isCreditSite from 'utils/site'

const initialState = {
  siteId: '',
  actstatus: null,
  isCreditSite: true,
  token: '',
  accessToken: '',
  masterToken: '',
  webSessionID: '',
}

export default handleActions(
  {
    [SET_SITE_ID]: (state, action) => ({
      ...state,
      siteId: action.payload,
      isCreditSite: isCreditSite(action.payload),
    }),
    [enterGameAction.success]: (state, action) => ({
      ...state,
      ...objectKeyFirstLetterToLowerCase(action.payload?.Result),
    }),
    [exchangeTokenAction.success]: (state, action) => ({
      ...state,
      ...objectKeyFirstLetterToLowerCase(action.payload?.Result),
    }),
    [apiStartAction.success]: (state, action) => ({
      ...state,
      ...objectKeyFirstLetterToLowerCase(action.payload?.Result),
    }),
  },
  initialState,
)

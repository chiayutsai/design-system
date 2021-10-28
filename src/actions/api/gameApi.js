import { v4 as uuidv4 } from 'uuid'
import { DESKTOP, DESKTOP_FOR_API, MOBILE_FOR_API } from 'constants/platform'
import {
  localeSelector,
  platformSelector,
  sportTypeIdSelector,
} from 'selectors'
import {
  sessionIdSelector,
  sessionMasterTokenSelector,
  sessionSiteIdSelector,
  sessionTokenSelector,
  webSessionIDSelector,
} from 'selectors/session'
import createApiActions from 'utils/createApiActions'
import BaseApi from './BaseApi'

// base api
const api = new BaseApi().create({
  baseURL: '/LinkedGamesWebPortal',
  method: 'POST',
})

const getApi = new BaseApi().create({
  baseURL: '/LinkedGamesWebPortal',
})

// helper
const getTimeStamp = () => ({ TimeStamp: new Date().toISOString() })
const getSeq = () => ({ Seq: uuidv4().replace(/-/g, '') })

// api actions

// define
export const apiStartAction = createApiActions('API_START')
// request
const apiStart = () => async dispatch => {
  const data = {}

  try {
    dispatch(apiStartAction.request(data))
    const result = await dispatch(
      getApi({
        url: '/api/CLTokenAPI/ApiStart',
      }),
    )
    dispatch(apiStartAction.success(result))
    return result
  } catch (error) {
    console.error(error)
    dispatch(apiStartAction.failure(error))
    throw error
  }
}

// define
export const enterGameAction = createApiActions('ENTER_GAME')
// request
const enterGame = ({ token }) => async (dispatch, getState) => {
  // TODO: getState() once
  const webSessionID = webSessionIDSelector(getState())
  const siteId = sessionSiteIdSelector(getState())
  const sportTypeId = sportTypeIdSelector(getState())
  const language = localeSelector(getState())
  const platform = platformSelector(getState())
  const Platform = platform === DESKTOP ? DESKTOP_FOR_API : MOBILE_FOR_API

  try {
    const data = {
      ...getTimeStamp(),
      Call: {
        ...getSeq(),
        Token: token,
        SiteId: siteId,
        SporttypeId: sportTypeId,
        Language: language,
        Platform,
      },
    }

    dispatch(enterGameAction.request(data))
    const result = await dispatch(
      api({
        url: `/(S(${webSessionID}))/api/CLTokenAPI/EnterGame`,
        data,
      }),
    )
    dispatch(enterGameAction.success(result))
    return result
  } catch (error) {
    console.error(error)
    dispatch(enterGameAction.failure(error))
    throw error
  }
}

// define
export const exchangeTokenAction = createApiActions('EXCHANGE_TOKEN')
// request
const exchangeToken = () => async (dispatch, getState) => {
  const webSessionID = webSessionIDSelector(getState())
  const sessionId = sessionIdSelector(getState())
  const token = sessionTokenSelector(getState())
  const masterToken = sessionMasterTokenSelector(getState())

  try {
    const data = {
      ...getTimeStamp(),
      SessionId: sessionId,
      Call: {
        ...getSeq(),
        Token: token,
        MasterToken: masterToken,
      },
    }

    dispatch(exchangeTokenAction.request(data))
    const result = await dispatch(
      api({
        url: `/(S(${webSessionID}))/api/CLTokenAPI/ExchangeToken`,
        data,
      }),
    )
    dispatch(exchangeTokenAction.success(result))
    return result
  } catch (error) {
    console.error(error)
    dispatch(exchangeTokenAction.failure(error))
    throw error
  }
}

// define
export const getResourceAction = createApiActions('GET_RESOURCE')
// request
const getResource = ({ language }) => async (dispatch, getState) => {
  const webSessionID = webSessionIDSelector(getState())
  const sessionId = sessionIdSelector(getState())
  const token = sessionTokenSelector(getState())

  try {
    const data = {
      ...getTimeStamp(),
      SessionId: sessionId,
      Call: {
        ...getSeq(),
        Token: token,
        Language: language,
      },
    }

    dispatch(getResourceAction.request(data))
    const result = await dispatch(
      api({
        url: `/(S(${webSessionID}))/api/CLTokenAPI/GetResource`,
        data,
      }),
    )
    dispatch(getResourceAction.success(result))
    return result
  } catch (error) {
    console.error(error)
    dispatch(getResourceAction.failure(error))
    throw error
  }
}

// define
export const getBetSettingsAction = createApiActions('GET_BET_SETTINGS')
// request
const getBetSettings = () => async (dispatch, getState) => {
  const webSessionID = webSessionIDSelector(getState())
  const sessionId = sessionIdSelector(getState())
  const token = sessionTokenSelector(getState())
  const sportTypeId = sportTypeIdSelector(getState())

  try {
    const data = {
      ...getTimeStamp(),
      SessionId: sessionId,
      Call: {
        ...getSeq(),
        Token: token,
        SporttypeId: sportTypeId,
      },
    }

    dispatch(getBetSettingsAction.request(data))
    const result = await dispatch(
      api({
        url: `/(S(${webSessionID}))/api/CLAPI/GetBetSettings`,
        data,
      }),
    )
    dispatch(getBetSettingsAction.success(result))
    return result
  } catch (error) {
    console.error(error)
    dispatch(getBetSettingsAction.failure(error))
    throw error
  }
}

// define
export const placeBetAction = createApiActions('PLACE_BET')
// request
const placeBet = ({ matchId, bets }) => async (dispatch, getState) => {
  const webSessionID = webSessionIDSelector(getState())
  const sessionId = sessionIdSelector(getState())
  const token = sessionTokenSelector(getState())

  try {
    const data = {
      ...getTimeStamp(),
      SessionId: sessionId,
      Call: {
        ...getSeq(),
        Token: token,
        MatchId: matchId,
        Bets: bets,
      },
    }

    dispatch(placeBetAction.request(data))
    const result = await dispatch(
      api({
        url: `/(S(${webSessionID}))/api/CLAPI/PlaceBet`,
        data,
      }),
    )
    dispatch(placeBetAction.success(result))
    return result
  } catch (error) {
    console.error(error)
    dispatch(placeBetAction.failure(error))
    throw error
  }
}

export {
  apiStart,
  enterGame,
  exchangeToken,
  getResource,
  getBetSettings,
  placeBet,
}

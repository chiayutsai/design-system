import { SYSTEM_ERROR } from 'constants/error'
import { ERROR } from 'constants/messageType'

// const mapErrorType = code => {
//   switch (code) {
// case ERR_BET_LOWER_THAN_LIMIT:
// case ERR_BET_BIGGER_THAN_LIMIT:
// case ERR_BET_BANKER_AND_PLAYER_SAME:
//   return INFO
// case ERR_MONEY_NOT_ENOUGH:
//   return RED_EXCLAMATION
//
//     default:
//       return ERROR
//   }
// }

const createMessage = (data = {}) => ({
  ...data,
  id: new Date().getMilliseconds(),
})

export const createError = ({
  code = SYSTEM_ERROR,
  messageText = '',
  messageContent = '',
  actions = null,
  fallback = null,
} = {}) => ({
  code,
  messageText,
  messageContent,
  actions,
  fallback,
  type: ERROR,
  id: new Date().getMilliseconds(),
})

export default createMessage

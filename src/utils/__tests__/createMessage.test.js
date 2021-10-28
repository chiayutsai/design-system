import { SYSTEM_ERROR } from 'constants/error'
import { ERROR } from 'constants/messageType'
import createMessage, { createError } from 'utils/createMessage'

describe('createMessage', () => {
  const mockTime = new Date('2019-05-14T11:01:58.135Z')

  beforeEach(() => {
    jest
      .spyOn(global.Date.prototype, 'getMilliseconds')
      .mockImplementationOnce(() => mockTime.getMilliseconds())
  })

  test('createMessage with empty params', () => {
    expect(createMessage()).toEqual({
      id: mockTime.getMilliseconds(),
    })
  })

  test('createMessage with params', () => {
    expect(createMessage({ code: 1000 })).toEqual({
      id: mockTime.getMilliseconds(),
      code: 1000,
    })
  })

  test('createError with empty params', () => {
    expect(createError()).toEqual({
      type: ERROR,
      id: mockTime.getMilliseconds(),
      code: SYSTEM_ERROR,
      messageText: '',
      messageContent: '',
      actions: null,
      fallback: null,
    })
  })

  test('createError with exact params', () => {
    const messageText = 'testText'
    const messageContent = 'testContent'
    const actions = () => {}
    const fallback = 'testFallback'

    expect(
      createError({
        code: 100,
        messageText,
        messageContent,
        actions,
        fallback,
      }),
    ).toEqual({
      type: ERROR,
      id: mockTime.getMilliseconds(),
      code: 100,
      messageText,
      messageContent,
      actions,
      fallback,
    })
  })

  test('createError with random params', () => {
    const messageText = 'testText'
    const wrongKey = 'wrongKey'

    expect(
      createError({
        messageText,
        wrongKey,
      }),
    ).toEqual({
      type: ERROR,
      id: mockTime.getMilliseconds(),
      code: SYSTEM_ERROR,
      messageText,
      messageContent: '',
      actions: null,
      fallback: null,
    })
  })
})

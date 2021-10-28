import createApiActions from 'utils/createApiActions'

describe('createApiActions', () => {
  const ACTION_REQUEST = 'ACTION_REQUEST'
  const ACTION_SUCCESS = 'ACTION_SUCCESS'
  const ACTION_FAILURE = 'ACTION_FAILURE'

  const prefix = 'ACTION'
  const payload = 'test'

  const action = createApiActions(prefix)

  test('create ACTION: object has properties', () => {
    expect(action).toHaveProperty('request')
    expect(action).toHaveProperty('success')
    expect(action).toHaveProperty('failure')
  })

  test('create ACTION: action creator type is Function', () => {
    expect(action.request).toBeInstanceOf(Function)
    expect(action.success).toBeInstanceOf(Function)
    expect(action.failure).toBeInstanceOf(Function)
  })

  test('create ACTION: action type', () => {
    expect(action.request.toString()).toBe(ACTION_REQUEST)
    expect(action.success.toString()).toBe(ACTION_SUCCESS)
    expect(action.failure.toString()).toBe(ACTION_FAILURE)
  })

  test('create ACTION call', () => {
    expect(action.request()).toEqual({ type: ACTION_REQUEST })
    expect(action.success()).toEqual({ type: ACTION_SUCCESS })
    expect(action.failure()).toEqual({ type: ACTION_FAILURE })
  })

  test('create ACTION call with payload', () => {
    expect(action.request(payload)).toEqual({ type: ACTION_REQUEST, payload })
    expect(action.success(payload)).toEqual({ type: ACTION_SUCCESS, payload })
    expect(action.failure(payload)).toEqual({ type: ACTION_FAILURE, payload })
  })
})

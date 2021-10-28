import assert from 'assert'
import store from 'store/dist/store.modern'
import browserStorage from 'utils/BrowserStorage'

describe('BrowserStorage', () => {
  const key = 'test'
  const value = 'test value'

  test('set { test: "test value" }', () => {
    browserStorage.set(key, value)

    const expect = value
    const actual = store.get(key)

    assert.deepStrictEqual(actual, expect)
  })

  test('get undefined', () => {
    const expect = undefined
    const actual = browserStorage.get('random')

    assert.deepStrictEqual(actual, expect)
  })

  test('get undefined with defaultValue', () => {
    const defaultValue = 'default'

    const expect = defaultValue
    const actual = browserStorage.get('random', defaultValue)

    assert.deepStrictEqual(actual, expect)
  })

  test('get test', () => {
    const expect = value
    const actual = browserStorage.get(key)

    assert.deepStrictEqual(actual, expect)
  })

  test('remove test', () => {
    browserStorage.remove(key)

    const expect = undefined
    const actual = store.get(key)

    assert.deepStrictEqual(actual, expect)
  })
})

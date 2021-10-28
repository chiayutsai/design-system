import globalState from 'utils/GlobalState'

describe('GlobalState', () => {
  test('add new state', () => {
    expect(document.querySelector('html').dataset.darkmode).toBe(undefined)

    globalState.update('darkmode', true)
    expect(document.querySelector('html').dataset.darkmode).toBe('true')
  })

  test('add new state with empty value', () => {
    expect(document.querySelector('html').dataset.state).toBe(undefined)

    globalState.update('state')
    expect(document.querySelector('html').dataset.state).toBe('')
  })

  test('update state', () => {
    expect(document.querySelector('html').dataset.layout).toBe(undefined)

    globalState.update('layout', true)
    expect(document.querySelector('html').dataset.layout).toBe('true')

    globalState.update('layout', false)
    expect(document.querySelector('html').dataset.layout).toBe('false')
  })
})

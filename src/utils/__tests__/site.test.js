import isCreditSite from 'utils/site'

describe('isCreditSite', () => {
  test('param empty siteId', () => {
    expect(isCreditSite()).toBe(false)
  })

  test('param siteId -1', () => {
    expect(isCreditSite(-1)).toBe(false)
  })

  test('param siteId start with 41 and type is number', () => {
    expect(isCreditSite(4100200)).toBe(true)
  })

  test('param siteId start with 41 and type is string', () => {
    expect(isCreditSite('4100200')).toBe(true)
  })

  test('param siteId start with 42 and type is number', () => {
    expect(isCreditSite(4200200)).toBe(false)
  })

  test('param siteId start with 42 and type is string', () => {
    expect(isCreditSite('4200200')).toBe(false)
  })
})

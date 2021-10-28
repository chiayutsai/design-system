import objectKeyFirstLetterToLowerCase from 'utils/objectKeyFirstLetterToLowerCase'

describe('objectKeyFirstLetterToLowerCase', () => {
  test('handle empty object', () => {
    expect(objectKeyFirstLetterToLowerCase({})).toEqual({})
  })

  test('handle camelCase key object', () => {
    expect(
      objectKeyFirstLetterToLowerCase({
        keyA: 'valueA',
        keyB: 'valueB',
      }),
    ).toEqual({
      keyA: 'valueA',
      keyB: 'valueB',
    })
  })

  test('handle PascalCase key object', () => {
    expect(
      objectKeyFirstLetterToLowerCase({
        KeyA: 'valueA',
        KeyB: 'valueB',
      }),
    ).toEqual({
      keyA: 'valueA',
      keyB: 'valueB',
    })
  })

  test('handle mix case key object', () => {
    expect(
      objectKeyFirstLetterToLowerCase({
        keyA: 'valueA',
        KeyB: 'valueB',
      }),
    ).toEqual({
      keyA: 'valueA',
      keyB: 'valueB',
    })
  })
})

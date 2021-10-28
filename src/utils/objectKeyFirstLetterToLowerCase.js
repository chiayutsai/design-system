const objectKeyFirstLetterToLowerCase = object => {
  const newObject = {}
  Object.keys(object).forEach(key => {
    const keyArray = key.split('')
    keyArray[0] = keyArray[0].toLowerCase()
    const newKey = keyArray.join('')

    newObject[newKey] = object[key]
  })

  return newObject
}

export default objectKeyFirstLetterToLowerCase

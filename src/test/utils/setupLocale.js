import Locale from 'locales'

const setupLocale = store =>
  beforeAll(async () => {
    await Locale.setup({ store })
  }, 10 * 1000)

export default setupLocale

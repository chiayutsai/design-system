import renderer from 'react-test-renderer'
import MockAppWrapper, { store } from 'components/MockAppWrapper'
import setupLocale from 'test/utils/setupLocale'
import action from './index'

describe('error', () => {
  // setup i18next if component needed
  setupLocale(store)

  test('render correctly', async () => {
    const query = {}

    const { component } = await action({ query })

    const wrapper = renderer
      .create(<MockAppWrapper>{component}</MockAppWrapper>)
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

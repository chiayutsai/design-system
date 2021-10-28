import renderer from 'react-test-renderer'
import MockAppWrapper, { store } from 'components/MockAppWrapper'
import { injectReducer } from 'store/makeRootReducer'
import setupLocale from 'test/utils/setupLocale'
import action from './index'

describe('home', () => {
  // setup i18next if component needed
  setupLocale(store)

  test('render correctly', async () => {
    const { component } = await action({ store, injectReducer })

    const wrapper = renderer
      .create(<MockAppWrapper>{component}</MockAppWrapper>)
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

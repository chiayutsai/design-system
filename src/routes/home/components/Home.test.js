import renderer from 'react-test-renderer'
import MockAppWrapper, { store } from 'components/MockAppWrapper'
import setupLocale from 'test/utils/setupLocale'
import Home from './Home'

describe('Home', () => {
  // setup i18next if component needed
  setupLocale(store)

  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Home />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

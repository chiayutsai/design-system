import history from 'history'
import renderer from 'react-test-renderer'
import configureStore from 'store/configureStore'
import { injectReducer } from 'store/makeRootReducer'
import insertCss from 'utils/insertCss'
import App from './App'

describe('App', () => {
  test('render correctly', () => {
    const context = {
      store: configureStore({}, { history }),
      injectReducer,
      pathname: '/',
    }

    const wrapper = renderer
      .create(
        <App context={context} insertCss={insertCss}>
          <div className="child" />
        </App>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

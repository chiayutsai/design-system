import history from 'history'
import PropTypes from 'prop-types'
import App from 'components/App'
import configureStore from 'store/configureStore'
import { injectReducer } from 'store/makeRootReducer'

const initialState = {}

export const store = configureStore(initialState, { history })

const MockAppWrapper = ({ children }) => (
  <App
    context={{
      pathname: '',
      store,
      injectReducer,
    }}
    insertCss={() => {}}>
    {children}
  </App>
)

MockAppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MockAppWrapper

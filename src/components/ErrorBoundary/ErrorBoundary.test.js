import renderer from 'react-test-renderer'
import MockAppWrapper, { store } from 'components/MockAppWrapper'
import setupLocale from 'test/utils/setupLocale'
import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary', () => {
  // setup i18next if component needed
  setupLocale(store)

  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <ErrorBoundary>
            <div className="child" />
          </ErrorBoundary>
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

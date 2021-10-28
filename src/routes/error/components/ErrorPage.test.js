import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import ErrorPage from './ErrorPage'

describe('ErrorPage', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <ErrorPage />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import Navigation from './Navigation'

describe('Navigation', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Navigation />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

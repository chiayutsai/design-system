import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import Header from './Header'

describe('Header', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Header />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

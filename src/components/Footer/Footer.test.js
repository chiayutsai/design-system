import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import Footer from './Footer'

describe('Footer', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Footer />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

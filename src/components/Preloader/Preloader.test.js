import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import Preloader from './Preloader'

describe('Preloader', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Preloader />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

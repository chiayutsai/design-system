import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import NotFound from './NotFound'

describe('NotFound', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <NotFound title="title" />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

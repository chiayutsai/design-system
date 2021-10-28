import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'

describe('MockAppWrapper', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <div className="child" />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

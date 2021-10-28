import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import LoadingLayout from './LoadingLayout'

describe('LoadingLayout', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <LoadingLayout />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

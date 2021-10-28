import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import LoadingModal from './LoadingModal'

describe('LoadingModal', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <LoadingModal />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

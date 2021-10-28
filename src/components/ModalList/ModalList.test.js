import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import ModalList from './ModalList'

describe('ModalList', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <ModalList />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

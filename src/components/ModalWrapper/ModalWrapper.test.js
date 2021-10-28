import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import ModalWrapper from './ModalWrapper'

describe('ModalWrapper', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <ModalWrapper>
            <div className="child" />
          </ModalWrapper>
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

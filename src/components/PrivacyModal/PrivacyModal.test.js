import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import PrivacyModal from './PrivacyModal'

describe('PrivacyModal', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <PrivacyModal onClose={() => {}} />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

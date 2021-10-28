import renderer from 'react-test-renderer'
import MockAppWrapper, { store } from 'components/MockAppWrapper'
import setupLocale from 'test/utils/setupLocale'
import MessageModal from './MessageModal'

describe('MessageModal', () => {
  // setup i18next if component needed
  setupLocale(store)

  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <MessageModal id={1} type="message" />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

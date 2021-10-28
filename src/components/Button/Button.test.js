import renderer from 'react-test-renderer'
import MockAppWrapper, { store } from 'components/MockAppWrapper'
import setupLocale from 'test/utils/setupLocale'
import { Button } from './Button'

describe('Button', () => {
  // setup i18next if component needed
  setupLocale(store)

  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Button label="lbl_betting" />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

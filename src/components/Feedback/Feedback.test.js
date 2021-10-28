import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import Feedback from './Feedback'

describe('Feedback', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Feedback />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import Contact from './Contact'

describe('Contact', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Contact title="title" />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

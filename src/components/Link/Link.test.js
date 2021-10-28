import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import Link from './Link'

describe('Link', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Link to="/">
            <div className="child" />
          </Link>
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

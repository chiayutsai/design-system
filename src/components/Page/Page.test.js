import renderer from 'react-test-renderer'
import MockAppWrapper from 'components/MockAppWrapper'
import Page from './Page'

describe('Page', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Page title="title" html="html" />
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

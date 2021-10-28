import renderer from 'react-test-renderer'
import Html from './Html'

describe('Html', () => {
  test('render correctly', () => {
    const wrapper = renderer
      .create(<Html title="title" description="description" />)
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

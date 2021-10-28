/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import renderer from 'react-test-renderer'
import setupLocale from 'test/utils/setupLocale'
import MockAppWrapper, { store } from '../MockAppWrapper'
import Layout from './Layout'

describe('Layout', () => {
  // setup i18next if component needed
  setupLocale(store)

  test('renders children correctly', () => {
    const wrapper = renderer
      .create(
        <MockAppWrapper>
          <Layout>
            <div className="child" />
          </Layout>
        </MockAppWrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})

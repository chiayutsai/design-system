/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Layout from 'components/Layout'
import Home from './components/Home'
import homeReducer from './reducers'

const action = async ({ store, injectReducer }) => {
  injectReducer(store, { key: 'home', reducer: homeReducer })

  return {
    title: '',
    chunks: ['home'],
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  }
}

export default action

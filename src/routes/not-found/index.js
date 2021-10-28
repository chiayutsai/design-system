/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Layout from 'components/Layout'
import NotFound from './components/NotFound'

const title = 'Page Not Found'

const action = () => ({
  title,
  chunks: ['not-found'],
  component: (
    <Layout>
      <NotFound title={title} />
    </Layout>
  ),
  status: 404,
})

export default action

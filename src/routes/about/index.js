/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Layout from 'components/Layout'
import Page from 'components/Page'
import about from './about.md'

const action = () => ({
  title: about.title,
  chunks: ['about'],
  component: (
    <Layout>
      <Page {...about} />
    </Layout>
  ),
})

export default action

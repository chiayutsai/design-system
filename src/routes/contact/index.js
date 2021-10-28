/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Layout from 'components/Layout'
import Contact from './components/Contact'

const title = 'Contact Us'

const action = () => ({
  title,
  chunks: ['contact'],
  component: (
    <Layout>
      <Contact title={title} />
    </Layout>
  ),
})

export default action

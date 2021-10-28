/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import ErrorPage from './components/ErrorPage'

const action = ({ query }) => ({
  title: 'Error 错误',
  chunks: ['error'],
  component: <ErrorPage query={query} />,
})

export default action

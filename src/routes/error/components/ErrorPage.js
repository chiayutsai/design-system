/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles'
import PropTypes from 'prop-types'
import { SYSTEM_ERROR } from 'constants/error'
import styles from './ErrorPage.scss'

export const ErrorPageWithoutStyle = ({ error, query }) => {
  if (__DEV__ && error) {
    return (
      <>
        <h1>{error.name}</h1>
        <pre>{error.stack}</pre>
      </>
    )
  }

  let errorCode = query?.code || SYSTEM_ERROR
  if (errorCode === 'undefined') {
    errorCode = SYSTEM_ERROR
  }

  return (
    <>
      <h1>Error 错误</h1>
      <p>系统错误，请稍后再试。[{errorCode}]</p>
      <p>System error, please try again later.[{errorCode}]</p>
    </>
  )
}

ErrorPageWithoutStyle.propTypes = {
  query: PropTypes.shape({
    code: PropTypes.string,
  }),
  error: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
  }),
}

ErrorPageWithoutStyle.defaultProps = {
  query: {},
  error: null,
}

const ErrorPage = props => {
  useStyles(styles)
  return ErrorPageWithoutStyle(props)
}

export default ErrorPage

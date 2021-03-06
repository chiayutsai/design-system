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
import styles from './Contact.scss'

const Contact = ({ title }) => {
  useStyles(styles)
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>...</p>
      </div>
    </div>
  )
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Contact

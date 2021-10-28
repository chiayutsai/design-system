/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import classnames from 'classnames'
import useStyles from 'isomorphic-style-loader/useStyles'
import Link from '../Link'
import styles from './Navigation.scss'

const Navigation = () => {
  useStyles(styles)
  return (
    <div className={styles.root} role="navigation">
      <Link className={styles.link} to="/about">
        About
      </Link>
      <Link className={styles.link} to="/contact">
        Contact
      </Link>
      <span className={styles.spacer}> | </span>
      <Link className={styles.link} to="/login">
        Log in
      </Link>
      <span className={styles.spacer}>or</span>
      <Link
        className={classnames(styles.link, styles.highlight)}
        to="/register">
        Sign up
      </Link>
    </div>
  )
}

export default Navigation

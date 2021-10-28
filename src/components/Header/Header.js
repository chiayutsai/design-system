/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles'
import Link from '../Link'
import Navigation from '../Navigation'
import logoUrl from './assets/logo-small.png'
import logoUrl2x from './assets/logo-small@2x.png'
import styles from './Header.scss'

const Header = () => {
  useStyles(styles)
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Navigation />
        <Link className={styles.brand} to="/">
          <img
            src={logoUrl}
            srcSet={`${logoUrl2x} 2x`}
            width="38"
            height="38"
            alt="React"
          />
          <span className={styles['brand-txt']}>Your Company</span>
        </Link>
        <div className={styles.banner}>
          <h1 className={styles['banner-title']}>React</h1>
          <p className={styles['banner-desc']}>Complex web apps made easy</p>
        </div>
      </div>
    </div>
  )
}

export default Header

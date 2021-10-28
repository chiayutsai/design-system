/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles'
import { useDispatch } from 'react-redux'
import { setModal } from 'actions/modal'
import { PRIVACY } from 'constants/modal'
import Link from '../Link'
import styles from './Footer.scss'

const Footer = () => {
  useStyles(styles)

  const dispatch = useDispatch()
  const onPrivacyClick = () => dispatch(setModal({ name: PRIVACY }))

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <span className={styles.text}>© Your Company</span>
        <span className={styles.spacer}>·</span>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <span className={styles.spacer}>·</span>
        <Link className={styles.link} to="/admin">
          Admin
        </Link>
        <span className={styles.spacer}>·</span>
        <span
          role="presentation"
          className={styles.link}
          onClick={onPrivacyClick}>
          Privacy
        </span>
        <span className={styles.spacer}>·</span>
        <Link className={styles.link} to="/not-found">
          Not Found
        </Link>
      </div>
    </div>
  )
}

export default Footer

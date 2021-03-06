/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './Feedback.scss'

const Feedback = () => {
  useStyles(styles)
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://gitter.im/kriasoft/react-starter-kit">
          Ask a question
        </a>
        <span className={styles.spacer}>|</span>
        <a
          className={styles.link}
          href="https://github.com/kriasoft/react-starter-kit/issues/new">
          Report an issue
        </a>
      </div>
    </div>
  )
}

export default Feedback

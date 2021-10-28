/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles'
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { appReadySelector, loadingSelector } from 'selectors'
import { messagesSelector } from 'selectors/modal'
import ErrorBoundary from '../ErrorBoundary'
import Feedback from '../Feedback'
import Footer from '../Footer'
import Header from '../Header'
import LoadingModal from '../LoadingModal'
import MessageModal from '../MessageModal'
import ModalList from '../ModalList'
import styles from './Layout.scss'
import LoadingLayout from './LoadingLayout'

const Layout = ({ children }) => {
  useStyles(styles, normalizeCss)

  const appReady = useSelector(appReadySelector)
  const loading = useSelector(loadingSelector)
  const messages = useSelector(messagesSelector)

  return (
    <ErrorBoundary>
      {!appReady && <LoadingLayout />}
      {appReady && (
        <>
          <Header />
          {children}
          <Feedback />
          <Footer />
          <ModalList />
          {messages.reverse().map(error => (
            <MessageModal key={error.id} {...error} />
          ))}
          {loading && <LoadingModal />}
        </>
      )}
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

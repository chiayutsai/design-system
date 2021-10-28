import withStyles from 'isomorphic-style-loader/withStyles'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { Translation } from 'react-i18next'
import { SYSTEM_ERROR } from 'constants/error'
import styles from './ErrorBoundary.scss'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
    // TODO: Log error to server
    console.error(error, info)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    return (
      <Translation>
        {t => (
          <>
            {hasError ? (
              <div className={styles.error}>
                <div>
                  {t('lbl_SysErrorMsg')}[{SYSTEM_ERROR}]
                </div>
              </div>
            ) : (
              children
            )}
          </>
        )}
      </Translation>
    )
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(ErrorBoundary)

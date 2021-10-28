/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['cancel', 'confirm'] }] */
import classnames from 'classnames'
import useStyles from 'isomorphic-style-loader/useStyles'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import styles from './Button.scss'

/**
 * Primary UI component for user interaction
 */
const buttonStatus = buttonStatusType => {
  const status = ['default', 'cancel', 'confirm']
  const resultStatus = status.includes(buttonStatusType)
  if (resultStatus) {
    return buttonStatusType
  }
  return 'default'
}

buttonStatus.propTypes = {
  buttonStatusType: PropTypes.string,
}

export const Button = ({ buttonStatusStyle, label }) => {
  useStyles(styles)
  const { t } = useTranslation()

  return (
    <button
      type="button"
      className={classnames(
        styles.buttons,
        styles[buttonStatus(buttonStatusStyle)],
      )}>
      {t(label)}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  buttonStatusStyle: PropTypes.oneOf(['default', 'cancel', 'confirm']),
}

Button.defaultProps = {
  buttonStatusStyle: 'default',
}

export default Button

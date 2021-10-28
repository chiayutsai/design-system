/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['error',
'info', 'message', 'notice', 'confirm', 'cancel'] }] */
import classnames from 'classnames'
import useStyles from 'isomorphic-style-loader/useStyles'
import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { dismissSystemMessage } from 'actions/message'
import { BUTTON_CONTENT_MAP } from 'constants/buttonType'
import ModalWrapper from '../ModalWrapper'
import { ReactComponent as IconNoticeSvg } from './assets/icon-notice.svg'
import styles from './MessageModal.scss'

const MessageModal = ({
  id,
  type,
  code,
  buttons,
  messageText,
  messageContent,
  shouldCloseOnOverlayClick,
}) => {
  useStyles(styles)
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const onClose = useCallback(() => {
    dispatch(dismissSystemMessage({ id }))
  }, [dispatch, id])

  const handleButtonClick = useCallback(
    ({ currentTarget: el }) => {
      const index = [...el.parentElement.children].indexOf(el)
      const { onClick } = buttons[index]
      if (onClick) {
        onClick(onClose, index)
      } else {
        onClose()
      }
    },
    [buttons, onClose],
  )

  return (
    <ModalWrapper
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onClose={onClose}>
      <div className={styles.container}>
        <IconNoticeSvg className={classnames(styles.icon, styles[type])} />
        <div className={styles['message-content']}>
          {messageContent ? t(messageContent) : messageText}
          {!!code && `[${code}]`}
        </div>
        <div className={styles['button-group']}>
          {buttons?.map(({ label, content }) => (
            <div
              key={`button-${label}`}
              className={classnames(styles.button, styles[label.toLowerCase()])}
              role="presentation"
              onClick={handleButtonClick}>
              {t(content || BUTTON_CONTENT_MAP[label])}
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  )
}

MessageModal.propTypes = {
  id: PropTypes.number.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  messageContent: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  messageText: PropTypes.string,
  shouldCloseOnOverlayClick: PropTypes.bool,
}
MessageModal.defaultProps = {
  code: 0,
  buttons: [],
  shouldCloseOnOverlayClick: false,
  messageContent: '',
  messageText: '',
}

export default MessageModal

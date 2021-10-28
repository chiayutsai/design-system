import classnames from 'classnames'
import useStyles from 'isomorphic-style-loader/useStyles'
import PropTypes from 'prop-types'
import ModalWrapper from '../ModalWrapper'
import Preloader from '../Preloader'
import styles from './LoadingModal.scss'

const LoadingModal = ({ className }) => {
  useStyles(styles)

  return (
    <ModalWrapper
      disableBodyScroll
      className={classnames(styles.root, className)}>
      <Preloader />
    </ModalWrapper>
  )
}

LoadingModal.propTypes = {
  className: PropTypes.string,
}
LoadingModal.defaultProps = {
  className: '',
}

export default LoadingModal

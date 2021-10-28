import classnames from 'classnames'
import useStyles from 'isomorphic-style-loader/useStyles'
import PropTypes from 'prop-types'
import styles from './Preloader.scss'

const Preloader = ({ className, isMini }) => {
  useStyles(styles)
  return (
    <div
      className={classnames(styles.preloader, className, {
        [styles['preloader-mini']]: isMini,
      })}>
      <div className={styles.preloader_spiner}>
        <div className={styles.preloader_circles}>
          <div className={styles['preloader_circle-1']} />
          <div className={styles['preloader_circle-2']} />
        </div>
      </div>
    </div>
  )
}

Preloader.propTypes = { className: PropTypes.string, isMini: PropTypes.bool }
Preloader.defaultProps = { className: '', isMini: false }

export default Preloader

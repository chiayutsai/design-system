import useStyles from 'isomorphic-style-loader/useStyles'
import Preloader from 'components/Preloader'
import styles from './LoadingLayout.scss'

const LoadingLayout = () => {
  useStyles(styles)

  return (
    <div className={styles.root}>
      <Preloader />
    </div>
  )
}

export default LoadingLayout

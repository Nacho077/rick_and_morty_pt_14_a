import logo from '../../assets/logo_rym.svg'
import styles from './logo.modules.css'

const Logo = ({height}) => {
  return (
      <img height={height ||'100px'} className={styles.logo} src={logo} alt="Rick and Morty logo" />
  )
}

// <p className={styles.creator}>by andresfrei-PT14a</p>

export default Logo
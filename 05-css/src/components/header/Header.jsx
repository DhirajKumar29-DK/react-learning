import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.head}>
      <h1 className={styles.name}>This Is  Dhiraj Yadav</h1>
      <button className={styles.btn}>login</button>
    </div>
  )
}

export default Header

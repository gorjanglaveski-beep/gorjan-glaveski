import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>
        GG<span className={styles.logoAccent}>.</span>
      </span>
      <ul className={styles.navLinks}>
        <li>
          <a href="#about" className={styles.navLink}>About</a>
        </li>
        <li>
          <a href="#cv" className={styles.navLink}>CV</a>
        </li>
        <li>
          <a href="#portfolio" className={styles.navLink}>Portfolio</a>
        </li>
        <li>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

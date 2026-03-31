import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>© 2025 Gorjan Glaveski. All rights reserved.</span>
        <span>Digital Designer · UI/UX</span>
      </div>
    </footer>
  )
}

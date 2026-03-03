import Link from 'next/link'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Oops! Page not found</p>
      <Link href="/" className={styles.link}>
        Go home
      </Link>
    </div>
  )
}

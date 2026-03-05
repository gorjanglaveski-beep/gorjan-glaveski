"use client"

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.css'

export default function Navigation() {
  const pathname = usePathname()
  const isProject = pathname?.startsWith('/project/')

  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          GG<span className={styles.logoAccent}>.</span>
        </Link>
      </span>

      {/* Right side: full nav on main pages, single back arrow on project pages */}
      {isProject ? (
        <div className={styles.projectBack}>
          <Link href="/#portfolio" className={styles.backLink} aria-label="Back to portfolio">
            <ArrowLeft size={18} />
              <span className={styles.backText}>Back to Portfolio</span>
          </Link>
        </div>
      ) : (
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
      )}
    </nav>
  )
}

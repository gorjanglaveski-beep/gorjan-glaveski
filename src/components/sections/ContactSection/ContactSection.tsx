import { Linkedin, Mail, Phone } from 'lucide-react'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.heading}>
            CONTACT
            <br />
            <span className={styles.headingAccent}>ME ON</span>
          </h2>

          <div className={styles.contactList}>
            <a
              href="https://www.linkedin.com/in/gorjan-glaveski-969b091b1/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
              aria-label="LinkedIn Profile"
            >
              <div className={styles.iconBox}>
                <Linkedin size={20} />
              </div>
              <span className={styles.contactLabel}>LinkedIn</span>
            </a>

            <a href="mailto:gorjanglaveski@gmail.com" className={styles.contactItem}>
              <div className={styles.iconBox}>
                <Mail size={20} />
              </div>
              <span className={styles.contactLabelMono}>gorjanglaveski@gmail.com</span>
            </a>

            <a href="tel:+38975211822" className={styles.contactItem}>
              <div className={styles.iconBox}>
                <Phone size={20} />
              </div>
              <span className={styles.contactLabelMono}>+389 75 211 822</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import gorjanImg from '@/assets/gorjan.png'
import styles from './HeroSection.module.css'

/** Content variables */
const heroSection = {
  available: "Available for work",
  firstName: "Gorjan",
  lastName: "Glaveski",
  role: "Graphic & UI/UX Designer",
  tagLine: "Design that looks simple.",
  tagLineAccent: "Works powerfully.",
  ctaPrimary:  "View Portfolio",
  ctaOutline: "Download CV",
  scroll: "Scroll",
  fileUrl: "/cv/cv-gorjan-glaveski.pdf",
  fileName: "Gorjan_Glaveski_CV.pdf"
}
/** End content variables */

export default function HeroSection() {
  return (
    <section id="about" className={styles.hero}>
      {/* Subtle grid overlay */}
      <div className={styles.gridOverlay} />

      {/* Orange glow blob */}
      <div className={styles.orangeGlow} />

      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Text side */}
          <div className={styles.textSide}>
            <p className={styles.available}>
              {heroSection.available}
            </p>
            <h1 className={styles.name}>
              {heroSection.firstName}
              <br />
              <span className={styles.nameAccent}>
                {heroSection.lastName}
              </span>
            </h1>
            <h4 className={styles.role}>
                {heroSection.role}
            </h4>
            <p className={styles.tagline}>
              {heroSection.tagLine}
              <br />
              <span className={styles.taglineAccent}>
                {heroSection.tagLineAccent}
              </span>
            </p>
            <div className={styles.ctaGroup}>
              <a href="#portfolio" className={styles.ctaPrimary}>
                {heroSection.ctaPrimary}
              </a>
              <a href={heroSection.fileUrl} download={heroSection.fileName} className={styles.ctaOutline}>
                {heroSection.ctaOutline}
              </a>
            </div>
          </div>

          {/* Photo side */}
          <div className={styles.photoSide}>
            <div className={styles.photoFrame}>
              <div className={styles.photoFrameBorder} />
              <div className={styles.photoFrameAccent} />
              <div className={styles.photoWrapper}>
                <Image
                  src={gorjanImg}
                  alt="Gorjan Glaveski"
                  fill
                  sizes="(max-width: 768px) 16rem, 20rem"
                  className={styles.photo}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>
          {heroSection.scroll}
        </span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

import Image from 'next/image'
import gorjanImg from '@/assets/gorjan.png'
import styles from './HeroSection.module.css'

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
            <p className={styles.available}>Available for work</p>
            <h1 className={styles.name}>
              Gorjan
              <br />
              <span className={styles.nameAccent}>Glaveski</span>
            </h1>
            <h3 className={styles.role}>Digital Designer &nbsp;|&nbsp; UI/UX Designer</h3>
            <p className={styles.tagline}>
              Design that looks simple.
              <br />
              <span className={styles.taglineAccent}>Works powerfully.</span>
            </p>
            <div className={styles.ctaGroup}>
              <a href="#portfolio" className={styles.ctaPrimary}>
                View Portfolio
              </a>
              <a href="#contact" className={styles.ctaOutline}>
                Contact Me
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
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

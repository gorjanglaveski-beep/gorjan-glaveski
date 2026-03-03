import Link from 'next/link'
import Image from 'next/image'
import { getAllProjects } from '@/lib/getProjects'
import styles from './PortfolioSection.module.css'

export default function PortfolioSection() {
  const projects = getAllProjects()

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Work</span>
          <h2 className={styles.title}>Selected Projects</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className={styles.item}
              aria-label={project.title}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.overlay}>
                <span className={styles.overlayCategory}>{project.category}</span>
                <h3 className={styles.overlayTitle}>{project.title}</h3>
                <span className={styles.overlayLink}>View project →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

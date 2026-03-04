import styles from "./CVSection.module.css";

const workExperience = [
  {
    company: "Rhino Entertainment",
    role: "Senior Digital Designer",
    type: "Full Time",
    period: "01.09.2022 — Present",
    description: `Lead visual design for slot and casino products, created high-fidelity UI, motion assets, and brand campaigns. Collaborated with product and engineering to ship pixel-perfect designs and improve conversion metrics.`,
  },
  {
    company: "Galeksia",
    role: "Graphic Designer",
    type: "Full Time",
    period: "02.02.2022 — 02.08.2022",
    description: `Designed marketing materials, logos, and UI assets for web projects. Focused on illustrations, print layouts and client-facing presentations.`,
  },
  {
    company: "Freelance",
    role: "Graphic Designer",
    type: "Self-employed",
    period: "Ongoing",
    description: `Worked with small businesses and startups on brand identity, web graphics, and product mockups. Delivered end-to-end design from concept to final assets.`,
  },
  {
    company: "Monday",
    role: "Graphic Designer",
    type: "Contractor",
    period: "01.02.2020 — 01.04.2020",
    description: `Short-term engagement producing marketing banners, landing page visuals and campaign assets while coordinating with the marketing team.`,
  },
];

const sections = [
  {
    sectionNumber: "01",
    sectionTitle: "Profile",
    profileText: `
      Experienced Graphic & UI/UX Designer with a background in the
      iGaming industry. Specialized in building high-impact visual
      identities and intuitive digital experiences that increase
      engagement and performance. Skilled in modern and AI-driven
      design tools.
    `
  },
  {
    sectionNumber: "02",
    sectionTitle: "Work Experience",
  },
  {
    sectionNumber: "03",
    sectionTitle: "Education",
    eduItems: [
      {
        eduTitle:"Google UX Design Professional Certificate",
        eduDate: "Sep 27, 2024",
        eduDesc: `
          Completed a 7-course program covering the full UX design
          process: user research, wireframing, prototyping, and usability
          testing.
        `
      },
      {
        eduTitle:"Brainster — Graphic Design Academyoogle UX Design Professional Certificate",
        eduDate: "October 2020 — May 2021",
        eduDesc: (<>
          Part of the Dream Team · January Student of the Month
          <br />
          Winner of the projects {"Buchen Kozjak"} Vidi
          Vaka — redesign of existing logos.
        </>)
      },
      {
        eduTitle:`University "St. Kliment Ohridski&" — Bitola`,
        eduSubtitle: "Faculty of Information and Communication Technologies, Macedonia",
        eduDate: "October 2011 — May 2017",
        eduDesc: "Bachelor of Information Systems Management"
      }
    ]
  }
]

export default function CVSection() {
  
  /** Content variables */

  /** End content variables */

  return (
    <section id="cv" className={styles.section}>
      <div className={styles.container}>
        {/* ─── Profile ─── */}
        <div className={styles.block}>
          <span className={styles.sectionNumber}>{sections[0].sectionNumber}</span>
          <h3 className={styles.sectionTitle}>{sections[0].sectionTitle}</h3>
          <p className={styles.profileText}>
            {sections[0].profileText}
          </p>
        </div>

        {/* ─── Work Experience ─── */}
        <div className={styles.block}>
          <span className={styles.sectionNumber}>{sections[1].sectionNumber}</span>
          <h3 className={styles.sectionTitle}>{sections[1].sectionTitle}</h3>
          <div className={styles.experienceList}>
            {workExperience.map((item, i) => (
              <div key={i} className={styles.experienceItem}>
                <div>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.jobMeta}>
                    {item.role} · {item.type}
                  </p>
                  {item.description && (
                    <p className={styles.experienceDesc}>{item.description}</p>
                  )}
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Education ─── */}
        <div className={styles.block}>
          <span className={styles.sectionNumber}>{sections[2].sectionNumber}</span>
          <h3 className={styles.sectionTitle}>{sections[2].sectionTitle}</h3>
          <div className={styles.educationList}>
            <div className={styles.eduItem}>
              <p className={styles.eduTitle}>
                {sections[2].eduItems[0].eduTitle}
              </p>
              <p className={styles.eduDate}>{sections[2].eduItems[0].eduDate}</p>
              <p className={styles.eduDesc}>
                {sections[2].eduItems[0].eduDesc}
              </p>
            </div>
            <div className={styles.eduItem}>
              <p className={styles.eduTitle}>
                {sections[2].eduItems[1].eduTitle}
              </p>
              <p className={styles.eduDate}>{sections[2].eduItems[1].eduDate}</p>
              <p className={styles.eduDesc}>
                {sections[2].eduItems[1].eduDesc}
              </p>
            </div>
            <div className={styles.eduItem}>
              <p className={styles.eduTitle}>
                {sections[2].eduItems[2].eduTitle}
              </p>
              <p className={styles.eduSubtitle}>
                {sections[2].eduItems[2].eduSubtitle}
              </p>
              <p className={styles.eduDate}>{sections[2].eduItems[2].eduDate}</p>
              <p className={styles.eduDesc}>
               {sections[2].eduItems[2].eduDesc}
              </p>
            </div>
          </div>
        </div>

        {/* ─── Skills ─── */}
        <div className={styles.skillsBlock}>
          <span className={styles.sectionNumber}>04</span>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.skillsGrid}>
            {/* Photoshop — official Simple Icons path (rounded rect + letter cutouts) */}
            <div className={styles.skillBadge}>
              <img className="icon" src="/icons/Photoshop-1.svg" width="36" height="36" alt="figma-icon"></img>
              <span className={styles.skillLabel}>Photoshop</span>
            </div>

            {/* Illustrator — official Simple Icons path */}
            <div className={styles.skillBadge}>
              <img className="icon" src="/icons/Illustrator-2.svg" width="36" height="36" alt="figma-icon"></img>
              <span className={styles.skillLabel}>Illustrator</span>
            </div>

            {/* After Effects — official Simple Icons path */}
            <div className={styles.skillBadge}>
              <img className="icon" src="/icons/After-Effects-3.svg" width="36" height="36" alt="figma-icon"></img>
              <span className={styles.skillLabel}>After Effects</span>
            </div>

            {/* Figma */}
            <div className={styles.skillBadge}>
              <img className="icon" src="/icons/Figma-4.svg" width="36" height="36" alt="figma-icon"></img>
              <span className={styles.skillLabel}>Figma</span>
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
}

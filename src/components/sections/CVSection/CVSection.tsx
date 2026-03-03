import styles from "./CVSection.module.css";

const workExperience = [
  {
    company: "Rhino Entertainment",
    role: "Senior Digital Designer",
    type: "Full Time",
    period: "01.09.2022 — Present",
  },
  {
    company: "Galeksia",
    role: "Graphic Designer",
    type: "Full Time",
    period: "02.02.2022 — 02.08.2022",
  },
  {
    company: "Freelance",
    role: "Graphic Designer",
    type: "Self-employed",
    period: "Ongoing",
  },
  {
    company: "Monday",
    role: "Graphic Designer",
    type: "Contractor",
    period: "01.02.2020 — 01.04.2020",
  },
];

export default function CVSection() {
  return (
    <section id="cv" className={styles.section}>
      <div className={styles.container}>
        {/* ─── Profile ─── */}
        <div className={styles.block}>
          <span className={styles.sectionNumber}>01</span>
          <h3 className={styles.sectionTitle}>Profile</h3>
          <p className={styles.profileText}>
            Senior Graphic Designer with advanced knowledge of UI/UX design and
            experience in the iGaming industry, focused on creating visual
            solutions and user interfaces that drive engagement and results.
            Proficient in modern and AI-powered design tools.
          </p>
        </div>

        {/* ─── Work Experience ─── */}
        <div className={styles.block}>
          <span className={styles.sectionNumber}>02</span>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          <div className={styles.experienceList}>
            {workExperience.map((item, i) => (
              <div key={i} className={styles.experienceItem}>
                <div>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.jobMeta}>
                    {item.role} · {item.type}
                  </p>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Education ─── */}
        <div className={styles.block}>
          <span className={styles.sectionNumber}>03</span>
          <h3 className={styles.sectionTitle}>Education</h3>
          <div className={styles.educationList}>
            <div className={styles.eduItem}>
              <p className={styles.eduTitle}>
                Google UX Design Professional Certificate
              </p>
              <p className={styles.eduDate}>Sep 27, 2024</p>
              <p className={styles.eduDesc}>
                Completed a 7-course program covering the full UX design
                process: user research, wireframing, prototyping, and usability
                testing.
              </p>
            </div>
            <div className={styles.eduItem}>
              <p className={styles.eduTitle}>
                Brainster — Graphic Design Academy
              </p>
              <p className={styles.eduDate}>October 2020 — May 2021</p>
              <p className={styles.eduDesc}>
                Part of the Dream Team · January Student of the Month
                <br />
                Winner of the projects &ldquo;Buchen Kozjak&rdquo; &amp; Vidi
                Vaka — redesign of existing logos.
              </p>
            </div>
            <div className={styles.eduItem}>
              <p className={styles.eduTitle}>
                University &quot;St. Kliment Ohridski&quot; — Bitola
              </p>
              <p className={styles.eduSubtitle}>
                Faculty of Information and Communication Technologies, Macedonia
              </p>
              <p className={styles.eduDate}>October 2011 — May 2017</p>
              <p className={styles.eduDesc}>
                Bachelor of Information Systems Management
              </p>
            </div>
          </div>
        </div>

        {/* ─── Skills ─── */}
        <div className={styles.skillsBlock}>
          <span className={styles.sectionNumber}>04</span>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.skillsGrid}>
            {/* Figma */}
            <div className={styles.skillBadge}>
              <svg
                width="24"
                height=""
                viewBox="0 0 400 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 500C0 444.772 44.772 400 100 400H200V500C200 555.228 155.228 600 100 600C44.772 600 0 555.228 0 500Z"
                  fill="#24CB71"
                />
                <path
                  d="M200 0V200H300C355.228 200 400 155.228 400 100C400 44.772 355.228 0 300 0H200Z"
                  fill="#FF7237"
                />
                <path
                  d="M299.167 400C354.395 400 399.167 355.228 399.167 300C399.167 244.772 354.395 200 299.167 200C243.939 200 199.167 244.772 199.167 300C199.167 355.228 243.939 400 299.167 400Z"
                  fill="#00B6FF"
                />
                <path
                  d="M0 100C0 155.228 44.772 200 100 200H200V0H100C44.772 0 0 44.772 0 100Z"
                  fill="#FF3737"
                />
                <path
                  d="M0 300C0 355.228 44.772 400 100 400H200V200H100C44.772 200 0 244.772 0 300Z"
                  fill="#874FFF"
                />
              </svg>

              <span className={styles.skillLabel}>Figma</span>
            </div>

            {/* Photoshop — official Simple Icons path (rounded rect + letter cutouts) */}
            <div className={styles.skillBadge}>
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Adobe Photoshop</title>
                <path
                  fillRule="evenodd"
                  fill="#31A8FF"
                  d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"
                />
              </svg>
              <span className={styles.skillLabel}>Photoshop</span>
            </div>

            {/* After Effects — official Simple Icons path */}
            <div className={styles.skillBadge}>
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Adobe After Effects</title>
                <path
                  fillRule="evenodd"
                  fill="#9999FF"
                  d="M8.54 10.73c-.1-.31-.19-.61-.29-.92s-.19-.6-.27-.89c-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.13.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.72-.09-.27-.18-.56-.27-.86zm8.58-.29c-.55-.03-1.07.26-1.33.76-.12.23-.19.47-.22.72h2.109c.26 0 .45 0 .57-.01.08-.01.16-.03.23-.08v-.1c0-.13-.021-.25-.061-.37-.178-.56-.708-.94-1.298-.92zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.04 16.511h-2.09c-.07.01-.14-.041-.16-.11l-.82-2.4H5.92l-.76 2.36c-.02.09-.1.15-.19.14H3.09c-.11 0-.14-.06-.11-.18L6.2 7.39c.03-.1.06-.19.1-.31.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.07 0 .12.03.13.08l3.65 10.25c.03.11.001.161-.1.161zm7.851-3.991c-.021.189-.031.33-.041.42-.01.07-.069.13-.14.13-.06 0-.17.01-.33.021-.159.02-.35.029-.579.029-.23 0-.471-.04-.73-.04h-3.17c.039.31.14.62.31.89.181.271.431.48.729.601.4.17.841.26 1.281.25.35-.011.699-.04 1.039-.11.311-.039.61-.119.891-.23.05-.039.08-.02.08.08v1.531c0 .039-.01.08-.021.119-.021.03-.04.051-.069.07-.32.14-.65.24-1 .3-.471.09-.94.13-1.42.12-.761 0-1.4-.12-1.92-.35-.49-.211-.921-.541-1.261-.95-.319-.39-.55-.83-.69-1.31-.14-.471-.209-.961-.209-1.461 0-.539.08-1.07.25-1.59.16-.5.41-.96.75-1.37.33-.4.739-.72 1.209-.95.471-.23 1.03-.31 1.67-.31.531-.01 1.06.09 1.55.31.41.18.77.45 1.05.8.26.34.47.72.601 1.14.129.4.189.81.189 1.22 0 .24-.01.45-.019.64z"
                />
              </svg>
              <span className={styles.skillLabel}>After Effects</span>
            </div>

            {/* Illustrator — official Simple Icons path */}
            <div className={styles.skillBadge}>
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Adobe Illustrator</title>
                <path
                  fillRule="evenodd"
                  fill="#FF9A00"
                  d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z"
                />
              </svg>
              <span className={styles.skillLabel}>Illustrator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react"
import styles from "./banner.module.less"

export default function Banner({ title, description }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <p className={styles.description} style={{ whiteSpace: "pre-line" }}>
            {description}
          </p>

          <div className="buttons">
            <a href="https://github.com/mattjhodges" target="_blank" className="buttonLink">
              <span>GitHub</span>
            </a>
            <a href="mailto:matthewjohnhodges@gmail.com" className="buttonLink">
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/matthew-hodges-7a2988129/" target="_blank" className="buttonLink">
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

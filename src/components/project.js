import React from "react"
import styles from "./project.module.less"

export default function Project({ image, title, description, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img className={styles.image} src={image.file.url} alt="project" />
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description.description}</p>
      </div>
      <div className="buttons center">
        <a href={link} className="buttonLink">
          <span className={styles.button}>Go to site</span>
        </a>
      </div>
    </div>
  )
}

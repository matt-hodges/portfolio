import React from "react"
import { Row, Col } from "antd"
import Project from "./project"
import styles from "./projects.module.less"

export default function Projects({ title, projects = [] }) {
  const getCards = () => {
    const children = projects.map(card => (
      <Col className={styles.cardWrapper} key={card.node.title} md={12} xs={24}>
        <Project {...card.node} />
      </Col>
    ))
    return children
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.lefttop} />
      <div className={styles.content}>
        <div key="content">
          <p key="title" className={styles.title}>
            {title}
          </p>
          <div key="block" className={styles.cardsContainer}>
            <Row key="cards" className={styles.cards}>
              {getCards()}
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

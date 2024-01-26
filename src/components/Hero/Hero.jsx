import React from "react"

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shreyansh Sawalkar</h1>
        <p className={styles.description}>
          A passionate Programmer, Developer and Problem Solver
        </p>
        <a href="mailto:sawalkar336@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <img className={styles.heroimg} src="/assets/background.png" alt="" />
      <div className={styles.backgroundlayer}></div>
      <div className={styles.herotitle}>
        <span>Chez vous,</span>
        <span>partout et ailleurs</span>
      </div>
    </header>
  )
}

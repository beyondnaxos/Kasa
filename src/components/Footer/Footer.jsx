import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerlogo} src="/assets/WHITELOGO.svg" alt="" />
      <p className={styles.footerdesc}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer

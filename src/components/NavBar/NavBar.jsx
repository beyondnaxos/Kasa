import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img src="/assets/LOGO.svg" className={styles.logo}></img>
      <ul className={styles.navlinks}>
        <li className={styles.navlink}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={styles.navlink}>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  )
}

import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as aboutList from '../../data/about.json'
import styles from './About.module.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

export default function About() {
  return (
    <div className={styles.aboutcontainer}>
      <header className={`${styles.hero} ${styles.aboutheader}`}>
        <img
          className={`${styles.heroimg} ${styles.aboutimage}`}
          src={
            window.innerWidth > 768
              ? '/assets/about.png'
              : '/assets/smallabout.png'
          }
          alt=""
        />
      </header>
      {aboutList.default.map((data) => (
        <DropdownMenu about={true} title={data.title} datas={data.description} key={uuidv4()} />
      ))}
    </div>
  )
}

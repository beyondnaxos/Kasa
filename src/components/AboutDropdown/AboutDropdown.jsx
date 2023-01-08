import React, { useState } from 'react'
import styles from './AboutDropdown.module.css'

export default function AboutDropdown(props) {
  const [open, setOpen] = useState(false)

  const title = props.datas.title
  const description = props.datas.description

  return (
    <div className={`${styles.dropdownmenu} ${styles.aboutdropmenu}`}>
      <div className={styles.dropdownmenutitle} onClick={() => setOpen(!open)}>
        {title}
        <button className={styles.dropButton}>
          {!open ? (
            <img
              className={`${styles.arrow} ${styles.up}`}
              src="/assets/arrowLeft.png"
            />
          ) : (
            <img
              className={`${styles.arrow} ${styles.down}`}
              src="/assets/arrowLeft.png"
            />
          )}
        </button>
      </div>
      {!open ? null : (
        <div className={styles.dropdownmenucontent}>
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}

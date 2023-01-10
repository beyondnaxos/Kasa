import React, { useState } from 'react'
import styles from './DropdownMenu.module.css'

export default function DropdownMenu(props) {
  const [open, setOpen] = useState(false)

  const title = props.title
  const datas = props.datas

  

  return (
    <div className={`${styles.dropdownmenu} ${props.about ? styles.aboutdropmenu :  '' } `}>
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
          {Array.isArray(datas) ? (
            datas.map((data) => <p key={data}>{data}</p>)
          ) : (
            <p>{datas}</p>
          )}
        </div>
      )}
    </div>
  )
}

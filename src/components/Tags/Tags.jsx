import React from 'react'
import styles from './Tags.module.css'


const Tags = (props) => {

  const tagsList = props.tagsList

  return (
    <div className={styles.tags}>
      {tagsList.map((tag) => (
        <div className={styles.tagcontainer} key={tag}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
    
  )
}

export default Tags
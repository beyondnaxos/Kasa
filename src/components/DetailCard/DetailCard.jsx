import React from 'react'
import { Link } from 'react-router-dom'
import styles from './DetailCard.module.css'

function DetailCard(props) {
  const data = props.data

  return (
    <>
      <Link to={'/detail/' + data.id}>
        <article className={styles.detailcard}>
          <img className={styles.detailcardimg} src={data.cover} alt="" />
          <div className={styles.shadowlayer}></div>
          <p className={styles.detailcardtitle}>{data.title}</p>
        </article>
      </Link>
    </>
  )
}
export default DetailCard

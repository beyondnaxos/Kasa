import React from 'react'
import Tags from '../Tags/Tags'
import { v4 as uuidv4 } from 'uuid'
import styles from './DetailInfo.module.css'

export default function DetailInfo(props) {
  const datas = props.datas
  const rating = datas.rating

  const starFill = <img src="/assets/starFill.png" alt="" />
  const starEmpty = <img src="/assets/starEmpty.png" alt="" />

  const stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(starFill)
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(starEmpty)
  }

  return (
    <section className={styles.maininfos}>
      <div className={styles.titlelocationtags}>
        <h2 className={styles.maininfostitle}>{datas.title}</h2>
        <p className={styles.maininfoslocation}>{datas.location}</p>
        <div className={styles.tagscontainer}>
          <Tags tagsList={datas.tags} />
          {datas.tags.map((tag) => {
            console.log(tag)
          })}
        </div>
      </div>

      <div className={styles.namepprating}>
        <div className={styles.namepp}>
          <p className={styles.hostname}>{datas.host.name}</p>
          <img className={styles.hostpp} src={datas.host.picture} alt="" />
        </div>

        <div className={styles.rating}>
          {stars.map((star) => (
            <div className={styles.star} key={uuidv4()}>
              {star}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

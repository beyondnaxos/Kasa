import React from 'react'
import * as data from '../../data/data.json'
import DetailCard from '../DetailCard/DetailCard'
import styles from './Details.module.css'

const Details = () => (
  <div className={styles.details}>
    {data.default.map((data) => (
      <DetailCard data={data} key={data.id} />
    ))}
  </div>
)

export default Details

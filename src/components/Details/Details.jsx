import React from 'react'
import * as data from '../../data/data.json'
import DetailCard from '../DetailCard/DetailCard'

const Details = () => (
  <div className="details">
    {data.default.map((data) => (
      <DetailCard data={data} key={data.id} />
    ))}
  </div>
)

export default Details

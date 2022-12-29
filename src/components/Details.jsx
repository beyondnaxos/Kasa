import React, { useState } from 'react'
import * as data from '../data/data.json'
import DetailCard from './DetailCard'

export default function Details() {
    
  const [datas, setDatas] = useState(data.default)

  console.log(datas)

  return (
    <div className="details">
      {datas.map((data) => {
        return <DetailCard data={data} key={data.id}/>
      })}
    </div>
  )
}

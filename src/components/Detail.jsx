import React from 'react'
import Slider from './Slider'

import DetailInfos from './DetailInfo'
import { useParams } from 'react-router-dom'
import * as data from '../data/data.json'

export default function Detail() {
  const { id } = useParams()
  const datas = data.default.find((data) => data.id === id)

  return (
    <>
      <Slider datas={datas} />
      <DetailInfos datas={datas}/>

     


    </>
  )
}

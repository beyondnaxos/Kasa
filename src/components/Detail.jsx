import React from 'react'
import Slider from './Slider'
import DropdownMenu from './DropdownMenu'
import DetailInfos from './DetailInfo'
import { useParams } from 'react-router-dom'
import * as data from '../data/data.json'
import {v4 as uuidv4} from 'uuid'

export default function Detail() {
  // window.scrollTo(0, 0)
  const { id } = useParams()
  const datas = data.default.find((data) => data.id === id)

  return (
    <>
      <Slider datas={datas} />
      <DetailInfos datas={datas}/>
      <div className="dropdown-container">
      <DropdownMenu key={uuidv4()} title='Description' datas={datas.description}/>
      <DropdownMenu key={uuidv4()} title='Équipement' datas={datas.equipments}/>
      </div>
    </>
  )
}

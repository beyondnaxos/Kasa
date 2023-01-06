import React from 'react'
import Slider from '../Slider/Slider'
import Error from '../Error/Error'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import DetailInfos from '../DetailInfo/DetailInfo'
import { Link, useParams } from 'react-router-dom'
import * as data from '../../data/data.json'
import { v4 as uuidv4 } from 'uuid'
import styles from './Detail.module.css'

export default function Detail() {
  // window.scrollTo(0, 0)
  const { id } = useParams()
  const datas = data.default.find((data) => data.id === id)

  if (datas === undefined) {
    return <Error />
  } else {
    return (
      <>
        <Slider datas={datas} />
        <DetailInfos datas={datas} />
        <div className={styles.dropdowncontainer}>
          <DropdownMenu
            key={uuidv4()}
            title="Description"
            datas={datas.description}
          />
          <DropdownMenu
            key={uuidv4()}
            title="Équipement"
            datas={datas.equipments}
          />
        </div>
      </>
    )
  }
}

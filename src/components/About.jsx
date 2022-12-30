import React from 'react'
import * as aboutList from '../data/about.json'
import {v4 as uuidv4} from 'uuid'
import AboutDropdown from './AboutDropdown'

export default function About()  {

  const list = aboutList.default
  console.log(list)
  
  return (
      <div className='about-container'>
      { list.map((data) => {
        <AboutDropdown datas={data} key={uuidv4()} />
      })}
      </div>
  )
}

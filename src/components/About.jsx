import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import AboutDropdown from './AboutDropdown'
import * as aboutList from '../data/about.json'

export default function About() {

  return (
    <div className="about-container">
      <header className="hero about-header">
        <img className="hero-img about-image" src={ window.innerWidth > 768 ? "/assets/about.png" : "/assets/smallabout.png" } alt="" />
      </header>
      {aboutList.default.map((data) => (
        <AboutDropdown datas={data} key={uuidv4()} />
      ))}
    </div>
  )
}

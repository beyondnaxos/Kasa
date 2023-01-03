import React from 'react'
import Tags from './Tags'
import { v4 as uuidv4 } from 'uuid'

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
    <section className="main-infos">
      <div className="title-location-tags">
        <h2 className="main-infos-title">{datas.title}</h2>
        <p className="main-infos-location">{datas.location}</p>
        <div className="tags-container">
          <Tags tagsList={datas.tags} />
          {datas.tags.map((tag) => {
            console.log(tag)
          })}
        </div>
      </div>

      <div className="name-pp-rating">
        <div className="name-pp">
          <p className="host-name">{datas.host.name}</p>
          <img className="host-pp" src={datas.host.picture} alt="" />
        </div>

        <div className="rating">
          {stars.map((star) => (
            <div className="star" key={uuidv4()}>
              {star}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

function DetailCard(props) {
  const data = props.data

  return (
    <>
      <Link to={'/detail/' + data.id}>
        <article className="detail-card">
          <img className="detail-card-img" src={data.cover} alt="" />
          <div className="shadow-layer"></div>
          <p className="detail-card-title">{data.title}</p>
        </article>
      </Link>
    </>
  )
}
export default DetailCard

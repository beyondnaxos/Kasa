import React from 'react'

function DetailCard(props) {
  const data = props.data

  return (
    <>
      <a className='detail-card-link' href="">
        <article className="detail-card">
          <img className="detail-card-img" src={data.pictures[0]} alt="" />
          <div className="shadow-layer"></div>
          <p className='detail-card-title'>{data.title}</p>
        </article>
      </a>
    </>
  )
}
export default DetailCard

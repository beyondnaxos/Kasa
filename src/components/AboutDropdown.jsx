import React, { useState } from 'react'

export default function AboutDropdown  (props) {
  const [open, setOpen] = useState(false)

  const title = props.datas.title
  const description = props.datas.description

  console.log(aboutList)

  return (
    <div className="dropdown-menu ">
      <div className="dropdown-menu-title ">
        {title}
        <button className="dropButton" onClick={() => setOpen(!open)}>
          {open ? (
            <img className="arrow up" src="/assets/arrowLeft.png" />
          ) : (
            <img className="arrow down" src="/assets/arrowLeft.png" />
          )}
        </button>
      </div>
      {open ? null : (
        <div className="dropdown-menu-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}


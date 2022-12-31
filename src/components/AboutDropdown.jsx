import React, { useState } from 'react'

export default function AboutDropdown  (props) {
  const [open, setOpen] = useState(false)

  const title = props.datas.title
  const description = props.datas.description



  return (
    <div className="dropdown-menu about-drop-menu ">
      <div className="dropdown-menu-title " onClick={() => setOpen(!open)}>
        {title}
        <button className="dropButton" >
          {!open ? (
            <img className="arrow up" src="/assets/arrowLeft.png" />
          ) : (
            <img className="arrow down" src="/assets/arrowLeft.png" />
          )}
        </button>
      </div>
      {!open ? null : (
        <div className="dropdown-menu-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}


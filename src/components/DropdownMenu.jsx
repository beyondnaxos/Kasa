import React, { useState } from 'react'

export const DropdownMenu = (props) => {
  // open close dropdown menu
  const [open, setOpen] = useState(false)

  const title = props.title
  const datas = props.datas

  return (
    // if datas is an array, map it else display it
    <div className="dropdown-menu">
      <div className="dropdown-menu-title">
        {title}
        <button className='dropButton' onClick={() => setOpen(!open)}>{open ? <img className='arrow up' src='/assets/arrowLeft.png'/> : <img className='arrow down' src='/assets/arrowLeft.png'/> }</button>
      </div>
      {open ? null : (
        <div className="dropdown-menu-content">
          {Array.isArray(datas) ? (
            datas.map((data) => <p key={data}>{data}</p>)
          ) : (
            <p>{datas}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu

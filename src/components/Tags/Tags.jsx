import React from 'react'

const Tags = (props) => {

  const tagsList = props.tagsList

  return (
    <div className='tags'>
      {tagsList.map((tag) => (
        <div className="tag-container" key={tag}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
    
  )
}

export default Tags
import React, { useState } from 'react'

export const Slider = (props) => {
  const [index, setIndex] = useState(0)

  const datas = props.datas

  const images = datas.pictures

  const handleLeftArrow = () => {
    setIndex(index - 1 < 0 ? images.length - 1 : index - 1)
  }

  const handleRightArrow = () => {
    setIndex(index + 1 > images.length - 1 ? 0 : index + 1)
  }

  return (
    <section className="slider-container">
      <img className="slider-img" src={images[index]} alt="" />

      {images.length <= 1 ? null : (
        <>
          <div className="slider-arrows">
            <div className="slider-arrow-left" onClick={handleLeftArrow}>
              <img src="/assets/arrowLeft.png" alt="" />
            </div>
            <div className="slider-arrow-right" onClick={handleRightArrow}>
              <img src="/assets/arrowRight.png" alt="" />
            </div>
          </div>
          <span className="counter">
            {index + 1}/{images.length}
          </span>
        </>
      )}
    </section>
  )
}

export default Slider

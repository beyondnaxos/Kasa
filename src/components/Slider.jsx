import React from 'react'

export const Slider = (props) => {
  const datas = props.datas

  const images = datas.pictures

  const handleLeftArrow = () => {
    console.log('left arrow clicked')
  }

  const handleRightArrow = () => {
    console.log('right arrow clicked')
  }

  return (

      <section className="slider-container">
        <img className="slider-img" src={images[0]} alt="" />

        <div className="slider-arrows">
          <div className="slider-arrow-left" onClick={handleLeftArrow}>
            <img src="/assets/arrowLeft.png" alt="" />
          </div>
          <div className="slider-arrow-right" onClick={handleRightArrow}>
            <img src="/assets/arrowRight.png" alt="" />
          </div>
        </div>
      </section>

  )
}

export default Slider

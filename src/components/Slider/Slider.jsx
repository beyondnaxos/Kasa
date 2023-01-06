import React, { useState } from 'react'
import styles from './Slider.module.css'

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
    <section className={styles.slidercontainer}>
      <img className={styles.sliderimg} src={images[index]} alt="" />

      {images.length <= 1 ? null : (
        <>
          <div className={styles.sliderarrows}>
            <div className={styles.sliderarrowleft} onClick={handleLeftArrow}>
              <img src="/assets/arrowLeft.png" alt="" />
            </div>
            <div className={styles.sliderarrowright} onClick={handleRightArrow}>
              <img src="/assets/arrowRight.png" alt="" />
            </div>
          </div>
          <span className={styles.counter}>
            {index + 1}/{images.length}
          </span>
        </>
      )}
    </section>
  )
}

export default Slider

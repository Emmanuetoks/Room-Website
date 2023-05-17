import { useState } from "react"
import { useSideText } from "../hooks/myhooks"

const MainContent = () => {
  const [position, setPosition] = useState(0)
  const { slide1, slide2, slide3 } = useSideText()
  const slideData = [slide1, slide2, slide3]

  const slideBack = () => {
    console.log(position);
    if (position != 0) {
      setPosition(prevValue => prevValue - 1)
    } else {
      setPosition(slideData.length - 1)
    }
  }

  const slideFoward = () => {
    if (position != slideData.length - 1) {
      setPosition(prevValue => prevValue + 1)
    }else {
      setPosition (0)
    }
  }

  return (
    <div className='main__content grid'>
      <picture>
        <source srcSet={slideData[position].mobileImg} media="(max-width: 500px)" />
        <img className="hero-image" src={slideData[position].desktopImg} />
      </picture>
      <div className='main__side-text grid center-items bg-white pos-rel'>
        <article>
          <h1 className="fw-500 clr-black">{slideData[position].heading}</h1>
          <p className="fw-200 text-accent-100" style={{ 'marginBlock': '2rem' }}>{slideData[position].paragraphText}</p>
          <a className="fw-300 clr-black flex shop-now uppercase" style={{ 'letterSpacing': '10px', 'cursor': 'pointer', 'alignItems': 'center', '--gap': '1rem' }}>shop now
            <span>
              <img src={'gg'} />
            </span>
          </a>
        </article>
        <div className='slider-bar flex pos-abs bg-black' style={{ '--gap': 'rem' }}>

          <button onClick={slideBack} className='slide-btn bg-black btn-left'>
            <span className='sr-only'>btn right</span>
          </button>

          <button onClick={slideFoward} className='slide-btn bg-black btn-right'>
            <span className='sr-only'>btn left</span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default MainContent
import { useState } from "react"
import { useSideText } from "../hooks/myhooks"

const MainContent = () => {
  const [position, setPosition] = useState(0)
  const { slide1, slide2, slide3 } = useSideText()

  return (
    <div className='main__content grid'>
      <picture>
        <source srcSet={'hello'} media="(max-width: 500px)" />
        <img className="hero-image" src={slide1.desktopImg} />
      </picture>
      <div className='main__side-text grid center-items bg-white pos-rel'>
        <article>
          <h1 className="fw-500 clr-black">{'hello world'}</h1>
          <p className="fw-200 text-accent-100" style={{ 'marginBlock': '2rem' }}>{'come on'}</p>
          <a className="fw-300 clr-black flex shop-now uppercase" style={{ 'letterSpacing': '10px', 'cursor': 'pointer', 'alignItems': 'center', '--gap': '1rem' }}>shop now
            <span>
              <img src={'gg'} />
            </span>
          </a>
        </article>
        <div className='slider-bar flex pos-abs bg-black' style={{ '--gap': 'rem' }}>

          <a className='slide-link'>
            <button className='slide-btn bg-black btn-left'>
              <span className='sr-only'>btn right</span>
            </button>
          </a>

          <a className='slide-link'>
            <button className='slide-btn bg-black btn-right'>
              <span className='sr-only'>btn left</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MainContent
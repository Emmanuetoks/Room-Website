
const MainContent = ({ children, mobileImg, desktopImg }) => {
  return (
    <div className='main__content grid'>
      <picture>
        <source srcSet={mobileImg} media="(max-width: 500px)" />
        <img className="hero-image" src={desktopImg} />
      </picture>
      {children}
    </div>
  )
}

export default MainContent
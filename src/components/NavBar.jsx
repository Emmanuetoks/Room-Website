import Logo from '../../public/assets/images/logo.svg'

const NavBar = () => {
  const toggleNavMenu = (e) => {
      if (e.target.classList.contains('nav-btn-clicked')) {
        e.target.classList.remove('nav-btn-clicked')
      } else {
        e.target.classList.add('nav-btn-clicked')
      }
      const navMenuClassHide = 'navbar__menu--hide'
      const navMenu = document.getElementById('navMenu')
      if (navMenu.classList.contains(navMenuClassHide)) {
        navMenu.classList.remove(navMenuClassHide)
      } else {
        navMenu.classList.add(navMenuClassHide)
      }
  }
  return (
    <nav className="navbar flex" style={{ '--gap': '3rem' }}>
      <button onClick={toggleNavMenu} className='navbar-btn'>
        <span className='sr-only'>Navigation button</span>
      </button>
      <div className="navbar__logo">
        <img src={Logo} />
      </div>
      <ul id='navMenu' className="navbar__menu fs-100 flex lowercase navbar__menu--hide fw-200 clr-white" style={{ '--gap': '2rem' }}>
        <li className="navbar__link">Home</li>
        <li className="navbar__link">Shop</li>
        <li className="navbar__link">About</li>
        <li className="navbar__link">Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar
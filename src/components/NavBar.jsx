import Logo from '../../public/assets/images/logo.svg'

const NavBar = () => {
  return (
    <nav className="navbar flex" style={{'--gap': '3rem'}}>
        <div className="navbar__logo">
          <img src={Logo}/>
        </div>

        <ul className="navbar__menu fs-100 flex" style={{'--gap': '2rem'}}>
          <li className="navbar__link">Home</li>
          <li className="navbar__link">shop</li>
          <li className="navbar__link">about</li>
          <li className="navbar__link">contact</li>
        </ul>
    </nav>
  )
}

export default NavBar
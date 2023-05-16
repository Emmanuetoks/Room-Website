import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import footerImageDark from '../../public/assets/images/image-about-dark.jpg'

import footerImageLight from '../../public/assets/images/image-about-light.jpg'

const RootLayout = () => {
    return (
        <main className="main grid container pos-rel">
            <header className="main__header pos-abs">
                <NavBar />
            </header>
            <Outlet/>
            <footer className="main__footer grid">
                <img src={footerImageDark}/>
                <div className="main__about-text grid center-items">
                    <h3 className="uppercase">about our furniture</h3>
                </div>
                <img src={footerImageLight}/>
            </footer>
        </main>
    )
}

export default RootLayout
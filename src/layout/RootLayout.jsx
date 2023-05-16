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
            <Outlet />
            <footer className="main__footer grid bg-white">
                <img src={footerImageDark} />
                <div className="main__about-text grid center-items">
                    <article>
                        <h3 style={{'letterSpacing': '5px'}} className="uppercase fw-400">about our furniture</h3>
                        <p style={{'marginBlockStart': '1rem'}} className="fw-200 text-accent-100">
                            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the gurniture poeces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space
                        </p>
                    </article>
                </div>
                <img src={footerImageLight} />
            </footer>
        </main>
    )
}

export default RootLayout
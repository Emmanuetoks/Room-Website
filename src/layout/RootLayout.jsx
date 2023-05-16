import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const RootLayout = () => {
    return (
        <main className="main">
            <header className="main__header pos-abs">
                <NavBar />
            </header>
            <Outlet/>
            <footer className="main__footer">
                <img/>
                <div>
                    <h3 className="uppercase">about our furniture</h3>
                </div>
            </footer>
        </main>
    )
}

export default RootLayout
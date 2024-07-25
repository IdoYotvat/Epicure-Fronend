import { useState } from "react"
import { useIsMobile } from "../assets/customHooks/useIsMobile"
import { data } from "../data/data"
import HamburgerMenu from "./HamburgerMenu"

const AppHeader = () => {
    const isNarrowLayout = useIsMobile(600)
    const [isShowHamburger, setIsShowHamburger] = useState(false)
    

    const toggleHamburger = () => {
        setIsShowHamburger(prevIsShow => !prevIsShow);
        
    }

    return (
        <div className="header-container flex align-center">
            <button onClick={toggleHamburger} className="open-burger">
                <img className="hamburger" src={data.header.hamburger.src} alt="hamburger-menu" />
            </button>
            
            {isNarrowLayout && <HamburgerMenu isShowHamburger={isShowHamburger}  setIsShowHamburger={setIsShowHamburger} />}
            
            <div className="left-nav-bar-container flex">
                <img className="logo" src={data.header.logo.src} alt="logo" />
                <div className="left-nav-bar flex align-center">
                    <h1 className="main-title">EPICURE</h1>
                    {data.header.hamburger.links.routes.map((route =>
                        <h2 key={route} className="secondary-title">{route}</h2>
                    ))}
                </div>
            </div>
            <div className="nav-bar-container flex-align-center">
                <nav className="nav-bar flex">
                    <img src="src/assets/img/search.svg" alt="search" />
                    <img src="src/assets/img/person.svg" alt="person" />
                    <img src="src/assets/img/shoppingBag.svg" alt="shopping-bag" />
                </nav>

            </div>
        </div>

    )
}

export default AppHeader

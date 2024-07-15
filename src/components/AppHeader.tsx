import { useIsMobile } from "../assets/customHooks/useIsMobile"
import { data } from "../services/data"

const AppHeader = () => {
    const isMobile = useIsMobile()

    return (
        <div className="header-container flex align-center">
            {isMobile && <img src={data.header.hamburger.src} alt="hamburger-menu" />}
            <div className="flex">
                <img className="logo" src={data.header.logo.src} alt="logo" />
                {!isMobile &&
                    <div className="left-nav-bar flex align-center">
                        <h1 className="main-title">EPICURE</h1>
                        <h2 className="secondary-title">Restaurants</h2>
                        <h2 className="secondary-title">Chefs </h2>
                    </div>
                }
            </div>
            <div className="flex-align-center">
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

import { data } from "../data/data"

interface HamburgerProps {
    isShowHamburger: boolean
    setIsShowHamburger: React.Dispatch<React.SetStateAction<boolean>>
    
}

const HamburgerMenu = ({ isShowHamburger ,setIsShowHamburger }: HamburgerProps) => {
    return (
        <div className={`hamburger-container flex column ${isShowHamburger ? 'open' : 'closed'}`}>
            <button onClick={() => setIsShowHamburger(prev => !prev)} className="close-hamburger"><img src={data.header.hamburger.closeSrc} alt="close-hamburger" /></button>
            <div className="main-routes">
                {
                    data.header.hamburger.links.routes.map((route, index) => (
                        <h2 className="main-routes-title" key={index}>{route}</h2>
                    ))
                }
            </div>
            <div className="secondary-routes">
                {
                    data.header.hamburger.links.info.map((route, index) => (
                        <h2 className="secondary-routes-title" key={index}>{route}</h2>
                    ))
                }
            </div>
        </div>
    )
}

export default HamburgerMenu

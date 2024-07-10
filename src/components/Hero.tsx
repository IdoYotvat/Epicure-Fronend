import { data } from "../services/data"

const Hero = () => {
    return (
        <div className="hero-container flex">
            <img className="hero-img" src={data.hero.image.src} alt="dishes" />
            <div className="main-title-search-container flex column">
                <div className="title-input">
                    <h1 className="hero-main-title">{data.hero.inputSection.title}</h1>
                    <form className="input-form" >
                        <img src={data.hero.inputSection.inputImg.src} alt="" />
                        <label htmlFor="search">
                            <input type="text" placeholder={data.hero.inputSection.inputPlaceHolder.title} />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero

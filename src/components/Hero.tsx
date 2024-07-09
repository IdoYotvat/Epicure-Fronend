import { data } from "../services/data"

const Hero = () => {
    return (
        <div className="hero-container">
            <img className="hero-img" src={data.hero.image.src} alt="dishes" />
        </div>
    )
}

export default Hero

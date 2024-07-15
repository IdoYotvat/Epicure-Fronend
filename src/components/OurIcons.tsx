import { data } from "../services/data"

const OurIcons = () => {
    return (
        <div className="our-icons-container">
            <h1 className="icons-meaning">THE MEANING OF OUR ICONS:</h1>
            <div className="icons">
                {data.iconSection.icons.map((icon, index) => 
                    <div className="icon-type-image" key={index}>
                        <img src={icon.img} alt="" />
                        <h2>{icon.type}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OurIcons

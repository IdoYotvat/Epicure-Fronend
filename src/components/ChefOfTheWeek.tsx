import { data } from "../services/data"

const ChefOfTheWeek = () => {
    return (
        <div className="chef-of-the-week-section">
            <h1 className="chef-of-the-week-title">CHEF OF THE WEEK:</h1>
            <div className="secondary-info flex column align-center">
                <section className="chef-image">
                    <img src={data.chefOfTheWeek.chef.img} alt="" />
                    <div className="chef-name">
                        <span className="chef-name-span">
                            {data.chefOfTheWeek.chef.name}
                        </span>
                    </div>
                </section>
                <section className="chef-info">
                    {data.chefOfTheWeek.info.text}
                </section>
            </div>
        </div>
    )
}

export default ChefOfTheWeek

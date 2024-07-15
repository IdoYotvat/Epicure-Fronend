import { useIsMobile } from "../assets/customHooks/useIsMobile"
import { data } from "../data/data"
import Card from "./Card"
import SwiperContainer from "./SwiperContainer"

const ChefOfTheWeek = () => {

    const isSwiperContainer = useIsMobile(600)

    return (
        <div className="chef-of-the-week-container flex">
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

            {isSwiperContainer && <SwiperContainer slidesPerView={1.3}
                spaceBetween={24}
                mainTitle={`${data.chefOfTheWeek.chef.name.split(' ')[0]}'s ${data.chefOfTheWeek.chefOfTheWeekRestaurants.title}`}
                cards={data.chefOfTheWeek.chefOfTheWeekRestaurants.cards}
            />}
            {!isSwiperContainer &&
                <div className="static-swiper-container flex column">
                    <h1 className="static-title">{data.chefOfTheWeek.chef.name.split(' ')[0]}'s {data.chefOfTheWeek.chefOfTheWeekRestaurants.title}:</h1>
                    <div className="static-cards flex">
                        {
                            data.chefOfTheWeek.chefOfTheWeekRestaurants.cards.map((card, index) => (
                                <div className="static-card" key={index}>
                                    <Card card={card}>
                                        {null}
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
        </div>
    )
}

export default ChefOfTheWeek

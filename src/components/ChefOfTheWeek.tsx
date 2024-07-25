import { useEffect, useState } from "react"
import { useIsMobile } from "../assets/customHooks/useIsMobile"
import { chefOfTheWeekImg, data } from "../data/data"
import Card from "./Card"
import SwiperContainer from "./SwiperContainer"
import * as chefService from '../services/chef.service'
import { Chef } from "../data/types"

interface TransformedRestaurant {
    title: string;
    img: string;
    type: string;
}

const ChefOfTheWeek = () => {
    const [chefOfTheWeek, setChefOfTheWeek] = useState<Chef | null>(null)
    const [chefRestaurants, setChefRestaurants] = useState<TransformedRestaurant[] | []>([])
    const isSwiperContainer = useIsMobile(600)

    useEffect(() => {
        if (!chefOfTheWeek) loadChefOfTheWeek()
    }, [])

    const loadChefOfTheWeek = async () => {
        try {
            const chef = await chefService.getChefOfTheWeek();

            const restaurants: TransformedRestaurant[] = chef.restaurants?.map((restaurant) => ({
                title: restaurant.name,
                img: restaurant.image,
                type: 'chef-of-the-week'
            })) || []
            setChefOfTheWeek(chef)
            setChefRestaurants(restaurants)
        } catch (err) {
            console.log('chef of the week => could not get COTW ', err);
        }
    }


    if (!chefOfTheWeek) return <div> loading...</div>
    if(!chefRestaurants) return <div>loading...</div>
    return (
        <div className="chef-of-the-week-section">
            <h1 className="chef-of-the-week-title">CHEF OF THE WEEK:</h1>
            <div className="chef-of-the-week-info">
                <div className="secondary-info flex column align-center">
                    <section className="chef-image">
                        <img src={chefOfTheWeekImg[chefOfTheWeek.name]} alt="" />
                        <div className="chef-name">
                            <span className="chef-name-span">
                                {chefOfTheWeek.name}
                            </span>
                        </div>
                    </section>
                    <section className="chef-info">
                        {chefOfTheWeek.bio}
                    </section>
                </div>

                {isSwiperContainer && <SwiperContainer type="chef-of-the-week" slidesPerView={1.3}
                    spaceBetween={24}
                    mainTitle={`${chefOfTheWeek.name.split(' ')[0]}'s ${data.chefOfTheWeek.chefOfTheWeekRestaurants.title}`}
                    cards={chefRestaurants}
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

import { Fade, Flip, Slide } from "react-awesome-reveal"
import AboutUs from "../components/AboutUs"
import AppHeader from "../components/AppHeader"
import ChefOfTheWeek from "../components/ChefOfTheWeek"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import OurIcons from "../components/OurIcons"
import SwiperContainer from "../components/SwiperContainer"
import { data, resImgs } from "../data/data"
import { useEffect, useState } from "react"
import { CardType, MappedRestaurant, Restaurant } from "../data/types"
import * as restaurantService from "../services/restaurant.service"

const HomePage = () => {
  const [popularRestaurants, setPopularRestaurants] = useState<CardType[]>([])

  useEffect(() => {
    if (!popularRestaurants || !popularRestaurants.length) {
      loadPopularRestaurants()
    }

  }, [])

  const loadPopularRestaurants = async () => {
    try {
      const restaurants: Restaurant[] = await restaurantService.getPopularRestaurants()

      const mappedRestaurants: CardType[] = restaurants.map((restaurant) => ({
        title: restaurant.name,
        img: resImgs[restaurant.name],
        type: 'popularRes',
        content: {
          type:'popularRes',
          chef: restaurant.chef.name || 'Anonymus Chef',
          rating: restaurant.rating,
        },
      }))

      setPopularRestaurants(mappedRestaurants)
    } catch (err) {
      console.log('homepage => could not get restaurants', err)
    }
  }
  if (!popularRestaurants || !popularRestaurants.length) return <div>loading...</div>
  if (popularRestaurants.length) {
    // console.log(popularRestaurants)
  }

  return (
    <div>
      <AppHeader />
      <Fade triggerOnce duration={2500}>
        <Hero />
      </Fade>
      <Slide triggerOnce duration={2000} >
        <SwiperContainer slidesPerView={1.3}
          spaceBetween={24}
          mainTitle={data.popularRestaurants.mainTitle}
          // cards={data.popularRestaurants.cards}
          cards={popularRestaurants}
        /></Slide>
      <Slide triggerOnce duration={2000} direction="right">
        {/* <SwiperContainer slidesPerView={1.3}
          spaceBetween={24}
          mainTitle={data.signatureDishes.MainTitle}
          cards={data.signatureDishes.cards}
        /> */}
      </Slide>
      <Flip triggerOnce direction="horizontal">
        <OurIcons />
      </Flip>
      <ChefOfTheWeek />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default HomePage




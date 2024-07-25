import { Fade, Flip, Slide } from "react-awesome-reveal"
import AboutUs from "../components/AboutUs"
import AppHeader from "../components/AppHeader"
import ChefOfTheWeek from "../components/ChefOfTheWeek"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import OurIcons from "../components/OurIcons"
import SwiperContainer from "../components/SwiperContainer"
import { data, dishImgs, iconImgs, resImgs } from "../data/data"
import { useEffect, useState } from "react"
import { CardType, Dish, Restaurant } from "../data/types"
import * as restaurantService from "../services/restaurant.service"
import * as dishService from '../services/dish.service'
import * as utilService from '../services/util.service'

const HomePage = () => {
  const [popularRestaurants, setPopularRestaurants] = useState<CardType[]>([])
  const [signatureDishes, setSignatureDishes] = useState<CardType[]>([])


  useEffect(() => {
    const fetchPopularRestaurants = async () => {
      try {
        const popRes = await utilService.loadPopularRestaurants()
        if (popRes) {
          setPopularRestaurants(popRes)
        }
      } catch (err) {
        console.error('Failed to load popular restaurants:', err)
      }
    }
    const fetchSignatureDishes = async () => {
      try {
        const dishes = await utilService.loadSignatureDishes()
        if (dishes) {
          setSignatureDishes(dishes)
        }
      } catch (err) {
        console.error('Failed to load signature dishes:', err)
      }
    }
    fetchPopularRestaurants()
    fetchSignatureDishes()
  }, [])

  if (!popularRestaurants || !popularRestaurants.length) return <div>loading...</div>
  if (!signatureDishes || !signatureDishes.length) return <div>loading...</div> 
  
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
          cards={popularRestaurants}
        /></Slide>
      <Slide triggerOnce duration={2000} direction="right">
        <SwiperContainer slidesPerView={1.3}
          spaceBetween={24}
          mainTitle={data.signatureDishes.MainTitle}
          cards={signatureDishes}
        />
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




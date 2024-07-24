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

const HomePage = () => {
  const [popularRestaurants, setPopularRestaurants] = useState<CardType[]>([])
  const [signatureDishes, getSignatureDishes] = useState<CardType[]>([])


  useEffect(() => {
    if (!popularRestaurants || !popularRestaurants.length) {
      loadPopularRestaurants()
    }
    if (!signatureDishes || !signatureDishes.length) {
      loadSignatureDishes()
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
          type: 'popularRes',
          chef: restaurant.chef?.name || 'Anonymus Chef',
          rating: restaurant.rating,
        },
      }))

      setPopularRestaurants(mappedRestaurants)
    } catch (err) {
      console.log('homepage => could not get restaurants', err)
    }
  }

  const loadSignatureDishes = async () => {
    try {
      const dishes: Dish[] = await dishService.getSignatureDishes()
      
      const mappedDishes: CardType[] = dishes.map((dish) => ({
        title: dish.title,
        img: dishImgs[dish.title] || '',
        type: 'signatureDish',
        content: {
            type: 'signatureDish',
            icons: (dish.icons || []).map(icon => ({
                type: icon.toString(), 
                img: iconImgs[icon.toString()] || '' 
            })),
            ingredients: dish.ingredients,
            price: dish.price
        }
      }))
      getSignatureDishes(mappedDishes)
    } catch (err) {
      console.log('homepage => could not get signature dishes', err)

    }
  }


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




import AboutUs from "../components/AboutUs"
import AppHeader from "../components/AppHeader"
import ChefOfTheWeek from "../components/ChefOfTheWeek"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import OurIcons from "../components/OurIcons"
import SwiperContainer from "../components/SwiperContainer"
import { data } from "../services/data"

const HomePage = () => {

  
  return (
    <div>
      <AppHeader />
      <Hero />
      <SwiperContainer slidesPerView={1.3}
      spaceBetween={24}
      mainTitle={data.popularRestaurants.mainTitle} 
      cards={data.popularRestaurants.cards}
      />
      <SwiperContainer slidesPerView={1.3}
      spaceBetween={24}
      mainTitle={data.signatureDishes.MainTitle}
      cards={data.signatureDishes.cards}
      />
      <OurIcons/>
      <ChefOfTheWeek/>
      {/* <SwiperContainer slidesPerView={1.3}
      spaceBetween={24}
      mainTitle={`${data.chefOfTheWeek.chef.name.split(' ')[0]}'s ${data.chefOfTheWeek.chefOfTheWeekRestaurants.title}`}
      cards={data.chefOfTheWeek.chefOfTheWeekRestaurants.cards}
      
      /> */}
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default HomePage




import { Fade, Flip, Slide } from "react-awesome-reveal"
import AboutUs from "../components/AboutUs"
import AppHeader from "../components/AppHeader"
import ChefOfTheWeek from "../components/ChefOfTheWeek"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import OurIcons from "../components/OurIcons"
import SwiperContainer from "../components/SwiperContainer"
import { data } from "../data/data"

const HomePage = () => {


  return (
    <div>
      <AppHeader />
      <Fade duration={2500}>
      <Hero />
      </Fade>
      <Slide duration={2000} >
      <SwiperContainer slidesPerView={1.3}
        spaceBetween={24}
        mainTitle={data.popularRestaurants.mainTitle}
        cards={data.popularRestaurants.cards}
      /></Slide>
      <Slide duration={2000} direction="right">
      <SwiperContainer slidesPerView={1.3}
        spaceBetween={24}
        mainTitle={data.signatureDishes.MainTitle}
        cards={data.signatureDishes.cards}
        />
        </Slide>
      <Flip direction="horizontal">
      <OurIcons />
      </Flip>
      <ChefOfTheWeek />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default HomePage




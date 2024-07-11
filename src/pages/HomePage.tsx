import AppHeader from "../components/AppHeader"
// import Card from "../components/Card"
import Hero from "../components/Hero"
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
      {/* <SwiperContainer 
      cards={data.popularRestaurants.cards}
      /> */}
    </div>
  )
}

export default HomePage




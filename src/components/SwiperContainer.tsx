import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Card from "./Card";
import PopularResContent from "./PopularResContent";
import SignatureDishContent from "./SignatureDishContent";

const contentComponents: { [key: string]: React.ComponentType<any> } = {
    popularRes: PopularResContent,
    signatureDish: SignatureDishContent,

}

interface SwiperProps {
    cards: {
        title: string;
        img: string;
        content: {
            type: string
            chef?: string;
            rating?: number;
            icons?: IconProps[]
            ingredients?: string[]
            price?: number
        }
    }[]
    spaceBetween: number
    slidesPerView: number
    mainTitle: string
}

export interface IconProps {
    type: string
    img: string
}


const SwiperContainer = ({ cards, spaceBetween, slidesPerView, mainTitle }: SwiperProps) => {

    return (
        <div className="swiper-container">
            <h2 className="main-swiper-title">{mainTitle}:</h2>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={spaceBetween}// props
                slidesPerView={slidesPerView}// props
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {cards.map((card, index) => {
                    const ContentComponent = contentComponents[card.content.type]
                    return (
                        <SwiperSlide key={index}>
                            <Card card={card}>
                                {ContentComponent && <ContentComponent content={card.content} />}
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* <div className="all-res-container">
                <a className="all-restaurants-link" href="#">All Restaurants</a>
                <img src="src/assets/img/arrows.svg" alt="arrows" />
            </div> */}
        </div>
    )
}

export default SwiperContainer

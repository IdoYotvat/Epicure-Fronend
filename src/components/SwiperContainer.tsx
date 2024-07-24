import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Card from "./Card";
import PopularResContent from "./PopularResContent";
import SignatureDishContent from "./SignatureDishContent";
import { useIsMobile } from '../assets/customHooks/useIsMobile';
import { CardType } from '../data/types';

const contentComponents: { [key: string]: React.ComponentType<any> } = {
    popularRes: PopularResContent,
    signatureDish: SignatureDishContent,

}

interface SwiperProps {
    cards: CardType[]
    spaceBetween: number
    slidesPerView: number
    mainTitle: string
    type?: string
}

const SwiperContainer = ({ cards, spaceBetween, slidesPerView, mainTitle, type }: SwiperProps) => {

    const isLinkHidden = useIsMobile(600)
    const dynClass = type ? `swiper-${type}` : ''

    return (
        <div className={`swiper-container ${dynClass}`}>
            <h2 className="main-swiper-title">{mainTitle}:</h2>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {cards.map((card, index) => {
                    const ContentComponent = card.content?.type ? contentComponents[card.content.type] : null;
                    return (
                        <SwiperSlide key={index}>
                            <Card card={card}>
                                {ContentComponent ? <ContentComponent content={card.content} /> : null}
                            </Card>
                        </SwiperSlide>
                    )
                })}
                {isLinkHidden && <div className="all-res-container">
                    <a className="all-restaurants-link" href="#">All Restaurants</a>
                    <img src="src/assets/img/arrows.svg" alt="arrows" />
                </div>}
                {cards[0].content?.type === 'popularRes' && !isLinkHidden && <div className="all-res-container">
                    <a className="all-restaurants-link" href="#">All Restaurants</a>
                    <img src="src/assets/img/arrows.svg" alt="arrows" />
                </div>}
            </Swiper>
        </div>
    )
}

export default SwiperContainer

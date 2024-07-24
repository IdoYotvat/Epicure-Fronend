import hamburgerImg from '../assets/img/hamburger.svg';
import logoImg from '../assets/img/about-logo-1.svg';
import searchImg from '../assets/img/search.svg';
import personImg from '../assets/img/person.svg';
import shoppingBag from '../assets/img/shoppingBag.svg';
import heroImg from '../assets/img/hero-picture.png';
import claroImg from '../assets/img/claro.png';
import luminaImg from '../assets/img/Lumina.png';
import tigerLillyImg from '../assets/img/tiger-lily.png';
import kiMaoImg from '../assets/img/kiMao.png';
import garbanzoImg from '../assets/img/garbanzo.png';
import smokedPizzaImg from '../assets/img/smokedPizza.png';
import spicyImg from '../assets/img/spicy.svg';
import vegetarianImg from '../assets/img/vegeterian.svg';
import veganImg from '../assets/img/vegan.svg';
import yossiImg from '../assets/img/yossi.png';
import onzaImg from '../assets/img/onza.png';
import kitchenMarketImg from '../assets/img/kithcenMarket.png';
import mashyaImg from '../assets/img/mashya.png';
import aboutUsLogo from '../assets/img/about-logo-2.svg';
import googlePlayImg from '../assets/img/googlePlay.svg';
import appStoreImg from '../assets/img/appStore.svg';
import closeHamburgerSrc from '../assets/img/closeburger.svg'

export const iconImgs =
{
    spicy: spicyImg,
    vegan: veganImg,
    vegetarian: vegetarianImg
}
export const resImgs:{[key:string]:string} =
{
    "Claro": claroImg,
    "Tiger Lilly": tigerLillyImg,
    "Lumina": luminaImg
}


export const data = {
    header: {
        hamburger: {
            src: hamburgerImg,
            closeSrc: closeHamburgerSrc,
            links: {
                routes: ['Restaurants', 'Chefs',],
                info: ['Contact Us', 'Term of Use', 'Privacy Policy']
            }
        },
        logo: { src: logoImg },
        MainTitle: 'EPICURE',
        navBar: {
            images: [
                { search: { src: searchImg } },
                { person: { src: personImg } },
                { shoppingBag: { src: shoppingBag } }
            ]
        },
    },
    hero: {
        image: { src: heroImg },
        inputSection: {
            title: 'Epicure works with the top chef restaurant in Tel Aviv',
            inputImg: { src: searchImg },
            inputPlaceHolder: {
                title: 'Search for restaurant cuisine, chef'
            }
        }
    },
    popularRestaurants: {
        mainTitle: 'POPULAR RESTAURANT IN EPICURE',
        cards: [
            {
                title: 'Claro', img: claroImg, type: 'popularRestaurants',
                content: { type: 'popularRes', chef: 'Ran Shmueli', rating: 4 }
            },
            {
                title: 'Lumina', img: luminaImg, type: 'popularRestaurants', content: { type: 'popularRes', chef: 'Meir Adoni', rating: 3 }
            },
            {
                title: 'Tiger Lilly', img: tigerLillyImg, type: 'popularRestaurants', content: { type: 'popularRes', chef: 'Yanir Green', rating: 4 }
            }
        ],
        link: {
            title: 'All Restaurants'
        }
    },
    signatureDishes: {
        MainTitle: 'SIGNATURE DISH OF',
        cards: [
            {
                title: 'Pad Ki Mao',
                img: kiMaoImg,
                type: 'signatureDishes',
                content: {
                    type: 'signatureDish',
                    icons: [
                        {
                            type: 'spicy',
                            img: spicyImg
                        }
                    ],
                    ingredients: ['shrimps', 'glass noodles', 'kemiri nuts', 'shallots', 'lemon grass', 'magic chilli brown coconut'],
                    price: 88

                }
            },
            {
                title: 'Garbanzo Frito', img: garbanzoImg, type: 'signatureDishes', content: {
                    type: 'signatureDish',
                    icons: [
                        {

                            type: 'vegiterian',
                            img: vegetarianImg

                        }],
                    ingredients: ['polenta fingers', 'veal cheek', 'magic chilli', 'cured lemon cream', 'yellow laska'],
                    price: 98

                }
            },
            {
                title: 'Smoked Pizza', img: smokedPizzaImg, type: 'signatureDishes', content: {
                    type: 'signatureDish',
                    icons: [{
                        type: 'vegan',
                        img: veganImg
                    }],
                    ingredients: ['basil dough', 'chashew "butter"', 'demi-glace', 'bison & radish'],
                    price: 65
                }
            }
        ],
        link: {
            title: 'All Restaurants'
        }
    },
    iconSection: {
        mainTitle: 'the meaning of our icons',
        icons: [
            { type: 'spicy', img: spicyImg },
            { type: 'vegiterian', img: vegetarianImg },
            { type: 'vegan', img: veganImg },
        ]
    },
    chefOfTheWeek: {
        chef: {
            img: yossiImg,
            name: 'Yossi Shitrit'
        },
        info: {
            text: 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit\'s creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.'
        },
        chefOfTheWeekRestaurants: {
            title: 'restaurants',
            type: 'chefOfTheWeek',
            cards: [
                { title: 'onza', img: onzaImg, type: 'chefOfTheWeek', content: {} },
                { title: 'kitchen market', type: 'chefOfTheWeek', img: kitchenMarketImg, content: {} },
                { title: 'mashya', img: mashyaImg, type: 'chefOfTheWeek', content: {} },
            ],
            link: {
                title: 'All Restaurants'
            }
        }
    },
    aboutUs: {
        logo: { img: aboutUsLogo },
        stores: [
            { store: 'google', img: googlePlayImg },
            { store: 'apple', img: appStoreImg }
        ],
        title: 'about us',
        content: {
            paragraps: [
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.' },
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.' }
            ]
        }
    },
    footer: {
        content: {
            links: [
                { title: 'contact us' },
                { title: 'term of use' },
                { title: 'privacy policy' },
            ]
        }
    }
}
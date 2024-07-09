import hamburgerMenu from 'src/assets/img/hamburger.svg'
import logoImg from 'src/assets/img/about-logo@3x 1.svg'
import searchImg from 'src/assets/img/search.svg'
import personImg from 'src/assets/img/person.svg'
import shoppingBag from 'src/assets/img/shoppingBag.svg'
import heroImg from 'src/assets/img/hero-picture 1.png'
import claroImg from 'src/assets/img/claro.png'
import luminaImg from 'src/assets/img/Lumina.png'
import tigerLillyImg from 'src/assets/img/tiger-lily.png'
import kiMaoImg from 'src/assets/img/kiMao.png'
import garbanzoImg from 'src/assets/img/garbanzo.png'
import smokedPizzaImg from 'src/assets/img/smokedPizza.png'
import spicyImg from 'src/assets/img/spicy.svg'
import vegiterianImg from 'src/assets/img/vegeterian.svg'
import veganImg from 'src/assets/img/vegan.svg'
import yossiImg from 'src/assets/img/yossi.png'
import onzaImg from 'src/assets/img/onza.png'
import kitchenMarketImg from 'src/assets/img/kithcenMarket.png'
import mashyaImg from 'src/assets/img/mashya.png'
import aboutUsLogo from 'src/assets/img/about-logo-2.svg'
import googlePlayImg from 'src/assets/img/googlePlay.svg'
import appStoreImg from 'src/assets/img/appStore.svg'

export const data = {
    header: {
        hamburger: {
            src: hamburgerMenu,
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
            title: 'Epicure works with the best chef restaurant in Town',
            inputImg: { src: searchImg },
            inputPlaceHolder: {
                title: 'Search for restaurants,cuisine,chefs'
            }
        }
    },
    popularRestaurants: {
        mainTitle: 'POPULAR RESTAURANT IN EPICURE',
        cards: [
            {
                title: 'Claro', img: claroImg, content: { chef: 'Ran Shmueli', rating: 4 }
            },
            {
                title: 'Lumina', img: luminaImg, content: { chef: 'Meir Adoni', rating: 3 }
            },
            {
                title: 'Tiger Lilly', img: tigerLillyImg, content: { chef: 'Yanir Green', rating: 4 }
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
                content: {
                    icons: [
                        {
                            spicy: {
                                src: spicyImg
                            }

                        }
                    ],
                    ingredients: ['shrimps', 'glass noodles', 'kemiri nuts', 'shallots', 'lemon grass', 'magic chilli brown coconut'],
                    price: 88

                }
            },
            {
                title: 'Garbanzo Frito', img: garbanzoImg, content: {
                    icons: [{ spicy: { src: spicyImg } }],
                    ingredients: ['polenta fingers', 'veal cheek', 'magic chilli', 'cured lemon cream', 'yellow laska'],
                    price: 98

                }
            },
            {
                title: 'Smoked Pizza', img: smokedPizzaImg, content: {
                    icons: [{ vegan: { src: veganImg } }],
                    ingredients: ['basil dough', 'chashew "butter"', 'demi-glace', 'bison & radish'],
                    price: 65
                }
            }
        ],
        link: {
            title: 'All Restaurants'
        }
    },
    icons: {
        mainTitle: 'the meaning of our icons',
        images: [
            { spicy: { src: spicyImg, title: 'spicy' } },
            { vegiterian: { src: vegiterianImg, title: 'vegiterian' } },
            { vegan: { src: veganImg, title: 'vegan' } }
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
            cards: [
                { title: 'onza', img: onzaImg, content: {} },
                { title: 'kitchen market', img: kitchenMarketImg, content: {} },
                { title: 'mashya', img: mashyaImg, content: {} },
            ],
            link: {
                title: 'All Restaurants'
            }
        }
    },
    aboutUs: {
        logo: { img: aboutUsLogo },
        stores: {
            google: { img: googlePlayImg },
            apple: { img: appStoreImg }
        },
        title: 'about us',
        content: {
            paragraps: [
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.' },
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.' }
            ]
        }
    },
    footer:{
        content:{
            links:[
                {title:'contact us'},
                {title:'term of use'},
                {title:'privacy policy'},
            ]
        }
    }




}
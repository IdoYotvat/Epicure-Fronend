import { dishImgs, iconImgs, resImgs } from "../data/data"
import { CardType, Dish, Restaurant } from "../data/types"
import * as restaurantService from './restaurant.service'
import * as dishService from './dish.service'

export const loadPopularRestaurants = async () => {
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

        return mappedRestaurants
    } catch (err) {
        console.log('homepage => could not get restaurants', err)
        return []
    }
}

export const loadSignatureDishes = async () => {
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
        return mappedDishes
    } catch (err) {
        console.log('homepage => could not get signature dishes', err)
        return []
    }
}
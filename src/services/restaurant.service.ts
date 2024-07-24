import { Restaurant } from "../data/types"
import { httpService } from "./http.service"


export const getPopularRestaurants = async (): Promise<Restaurant[]> => {
    return httpService.get('restaurant/popular')
}
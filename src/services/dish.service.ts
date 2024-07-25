import { Dish } from "../data/types"
import { httpService } from "./http.service"

export const getSignatureDishes = async (): Promise<Dish[]> => {
    return httpService.get('dish/signature')
}

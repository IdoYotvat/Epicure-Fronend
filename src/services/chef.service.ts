import { Chef } from "../data/types"
import { httpService } from "./http.service"

export const getChefOfTheWeek = async ():Promise<Chef> => {
        return httpService.get('/chef/chefoftheweek')
}

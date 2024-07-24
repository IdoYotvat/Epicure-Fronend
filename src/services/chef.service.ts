import { httpService } from "./http.service"

export const getChefOfTheWeek = async () => {
    try {
        return httpService.get('/chef/chefoftheweek')
    } catch (err) {
        console.log('chef service => could not fetch chef of the week',err)
    }
}

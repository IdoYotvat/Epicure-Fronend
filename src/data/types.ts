export type CardType = {
    title: string;
    img: string;
    type?: string
    content?: Content
}

export type IconProps = {
    type: string
    img: string
}

export type Content = {
    type?: string
    chef?: string;
    rating?: number;
    icons?: IconProps[]
    ingredients?: string[]
    price?: number
}

export enum EiconMeaning {
    SPICY = "spicy",
    VEGAN = "vegan",
    VEGETERIAN = "vegeterian"
}

export type Dish = {
    title: string
    image?: string
    ingredients: string[]
    price: number
    restaurant: string
    icons: EiconMeaning[] | null
    isActive: boolean
}


export type Restaurant = {
    name: string
    chef: Chef
    image: string
    rating: number
    dishes: string[]
    signatureDish?: string
    isPopular?: boolean
}

export type Chef = {
    name: string
    bio: string
    image?: string
    restaurants?: string[]
    isChefOfTheWeek: boolean
}

export type MappedRestaurant = {
    card: {
      title: string;
      img: string;
      type: string;
      content: {
        chef: string;
        rating: number;
      }
    }
  }
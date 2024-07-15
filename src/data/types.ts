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
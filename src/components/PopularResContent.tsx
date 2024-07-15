
interface ContentProps {
  content: {
    type?: string,
    chef: string,
    rating: number
  }
}

const PopularResContent = ({ content }: ContentProps) => {

  return (
    <div className="popular-restaurant-content">
      <span className="chef-title">{content.chef}</span>
      <img className="rating" src={`src/assets/img/rating${content.rating}.svg`} alt="" />
    </div>
  )
}

export default PopularResContent

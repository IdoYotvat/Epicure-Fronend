import { IconProps } from "../data/types/types"

interface ContentProps {
  content: {
    type?: string,
    icons: IconProps[]
    ingredients?: string[]
    price?: number
  }
}

const SignatureDishContent = ({ content }: ContentProps) => {
  return (
    <div className="signature-dish-content">
      <div className="ingredients-icons">
        <div className="ingredients">
          {content.ingredients?.map((ingredient, index) => (
            <span key={ingredient}>{ingredient}
              {index < (content.ingredients?.length || 0) - 1 ? ', ' : ''} </span>
          ))}
        </div>
        {content.icons.map((icon) => (
          <img className="icon" src={icon.img} key={icon.type} />
        ))}
      </div>
      <div className="price-container">
        <img className="price-tag-currency" src="src/assets/img/NIS.svg" alt="New Israeli Shekels" />
        <span className="price-tag-amount">{content.price}</span>
      </div>
    </div>
  )
}

export default SignatureDishContent

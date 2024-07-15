
interface CardProps {
    card: {
        title: string;
        img: string;
        content: any
    }
    children: React.ReactNode

}

const Card = ({ card, children }: CardProps) => {
    return (
        <div className="card-container">
            <img className="card-img" src={card.img} alt="" />
            <div className="card-content-group">
                <h2 className="card-main-title">{card.title}</h2>
                <div className="card-dynamic-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card

import { data } from "../services/data"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer ">
                <ul className="links-list clean-list flex">
                    {
                        data.footer.content.links.map((link, index) => (
                            <li className="link" key={index}>{link.title}</li>
                        ))
                    }
                </ul>

            </div>

        </div>
    )
}

export default Footer

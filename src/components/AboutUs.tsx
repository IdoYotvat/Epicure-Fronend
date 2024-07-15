import { data } from "../data/data"

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <section className="content">
                <div>
                    <img className="logo-img" src={data.aboutUs.logo.img} alt="logo" />
                </div>
                <section className="stores-about">

                    <div className="stores">

                        {
                            data.aboutUs.stores.map(store => (
                                <img className="store-img" key={store.store} src={store.img} alt={`${store.store} store`} />
                            ))
                        }
                    </div>
                    <section className="about-info">
                        <h1 className="title">ABOUT US:</h1>
                        {
                            data.aboutUs.content.paragraps.map((content, index) => (
                                <p key={index} className="about-detailed-info">
                                    {content.text}
                                </p>
                            ))
                        }
                    </section>
                </section>
            </section>
        </div>
    )
}

export default AboutUs

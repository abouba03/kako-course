
import Image from "next/image"; 
import hero from "../../public/assets/hero.png"
import Link from "next/link";

export default function HomePage() {
    return(
        <>
            <div className="grid-halves h-screen-navbar">
                <div className="bg-teal border-right">                          {/* C'est la partie gauche de HOME PAGE*/}
                    <div className="column-padding">
                        <div className="tablet-centered">
                            <div className="content-grid home-hero">
                                <h1>
                                    The most <br/> epic products
                                </h1>
                                <p className="section-subtitle">
                                    All the most epic things on the internet, all in one place
                                </p>
                                 <Link href="/product" className="large-button">
                                    <div className="large-button-text">
                                        Explore Products
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-salmon a">
                    <div className="column-padding centred">
                        <div className="callout-wrap">
                            <Image src={hero} >

                            </Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
 
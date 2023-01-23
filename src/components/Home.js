import AboutUs from "./AboutUs";
import Banner from "./Banner";
import { useState } from 'react';
import Press from "./Press";
import Products from "./Products";
import Contact from "./ContactUs";
import Footer from "./Footer";

const Home = () => {
    const [isPending, setisPending] = useState(true);

    setTimeout(() => {
        setisPending(false)
    }, 2000)
    return (
        <>
            {
                isPending &&
                <div className="preloader">
                    <img src={require('../images/logo.png')} alt="" />
                    <div className="dot-dot-dot flex">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            }
            {
                !isPending &&
                <>
                    <Banner />
                    <AboutUs id="AboutUs"/>
                    <Products id="Product"/>
                    <Press id="Press"/>
                    <Contact id="ContactUs"/>
                    <Footer/>
                </>
            }
        </>
    );
}

export default Home;

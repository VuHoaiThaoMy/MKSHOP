import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import chanel1Img from "assets/users/images/categories/chanel1.png";

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            {/*Categories Begin*/}
            <div className="container container__categories_slider">
                <Carousel responsive={responsive} className="categories_slider">
                    <div className="categories_slider_item">
                        style={{ backgroundImage: `url(${chanel1Img})` }} Item1
                    </div>
                </Carousel>
            </div >
            {/*Catogories End*/}
        </>
    );
};

export default memo(HomePage);
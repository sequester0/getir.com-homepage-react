import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";

function Campaigns() {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        setBanners(Banners);
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className="container py-8 mx-auto px-36">
            <h3 className="mb-2 text-sm font-semibold text-gray-800">Kampanyalar</h3>
            <Slider className="-mx-2" {...settings}>
                {
                    banners.length && banners.map((banner, index) => (
                        <div key={banner.id} className="px-2">
                            <img className="rounded-lg" src={banner.image} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Campaigns;

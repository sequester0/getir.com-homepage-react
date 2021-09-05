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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
              },
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
            }
        ]
    };

    return (
        <div className="container mx-auto md:pt-8">
            <h3 className="hidden mb-2 text-sm font-semibold text-gray-800 md:block">Kampanyalar</h3>
            <Slider className="md:-mx-2" {...settings}>
                {
                    banners.length && banners.map((banner, index) => (
                        <div key={banner.id} className="block md:px-2">
                            <img className="md:rounded-lg" src={banner.image} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Campaigns;

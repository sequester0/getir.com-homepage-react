import { useState } from "react";
import { FaFacebook } from 'react-icons/fa';
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';

function HeroSection() {

    const [selected, setSelected] = useState('TR');

    const phones = {
        US: '+1',
        DE: '+49',
        TR: '+90',
        IT: '+39',
        IN: '+91'
    }

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 select-none">
            <Slider {...settings}>
                <div>
                  <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt=""/>
                </div>
                <div>
                  <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" alt=""/>
                </div>
                <div>
                  <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" alt=""/>
                </div>
                <div>
                  <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt=""/>
                </div>
            </Slider>
            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div>
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
                    <h3 className="mt-9  text-4xl font-semibold text-white">
                        Dakikalar içinde <br /> kapınızda
                    </h3>
                </div>
                <div className="w-[400px] rounded-lg bg-register-color p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-5">Giriş yap veya kayıt ol</h4>
                    <div className="grid gap-y-3">
                        <div className="flex gap-x-[10px]">
                            <div className="w-[109px]">
                                <ReactFlagsSelect
                                    countries={Object.keys(phones)}
                                    customLabels={phones}
                                    onSelect={code => setSelected(code)}
                                    selected={selected}
                                    className="flag-select"
                                />
                            </div>
                            <label className="flex-1 relative block">
                                <input required className="h-14 px-4 border-2 border-gray-300 w-full rounded hover:border-primary-brand-color focus:border-primary-brand-color transition-colors outline-none text-sm font-light pt-2 peer" />
                                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-xs peer-focus:text-primary-brand-color peer-valid:h-6 peer-valid:text-xs peer-valid:text-primary-brand-color">Telefon Numarası</span>
                            </label>
                        </div>
                        <button className="bg-brand-yellow text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color h-12 flex items-center justify-center rounded-lg w-full shadow-md text-sm font-semibold transition-colors">
                            Telefon numarası ile devam et
                        </button>
                        <hr className="h-[1px] bg-gray-50 my-2" />
                        <button className="px-3 bg-facebook-button text-facebook hover:text-register-color hover:bg-facebook h-12 flex items-center rounded-lg w-full shadow-md text-sm font-semibold transition-colors">
                            <FaFacebook size={25} />
                            <span className="mx-auto">Facebook ile devam et</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;

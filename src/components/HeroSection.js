import { useState } from "react";
import { FaFacebook } from 'react-icons/fa';
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';
import { useWindowWidth } from '@react-hook/window-size';

function HeroSection() {

    const [selected, setSelected] = useState('TR');

    const windowWidth = useWindowWidth();

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
        <div className="relative h-auto select-none md:h-500 before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            {
                windowWidth >= 768 && 
                    <Slider {...settings}>
                        <div>
                          <img className="object-cover w-full h-500" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt=""/>
                        </div>
                        <div>
                          <img className="object-cover w-full h-500" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" alt=""/>
                        </div>
                        <div>
                          <img className="object-cover w-full h-500" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" alt=""/>
                        </div>
                        <div>
                          <img className="object-cover w-full h-500" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt=""/>
                        </div>
                    </Slider>
            }
            <div className="relative top-0 left-0 z-20 flex items-center justify-between h-full translate-x-0 md:container md:-translate-x-1/2 md:absolute md:left-1/2">
                <div className="hidden md:block">
                    <img height="180px" width="180px" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
                    <h3 className="text-4xl font-semibold tracking-tighter text-white mt-9">
                        Dakikalar i??inde <br /> kap??n??zda
                    </h3>
                </div>
                <div className="w-full md:w-[400px] md:rounded-lg bg-register-color p-6 shadow-md">
                    <h4 className="mb-5 font-semibold text-center text-primary-brand-color">Giri?? yap veya kay??t ol</h4>
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
                            <label className="relative flex-1 block">
                                <input required className="w-full px-4 pt-2 text-sm font-light transition-colors border-2 border-gray-300 rounded outline-none h-14 hover:border-primary-brand-color focus:border-primary-brand-color peer" />
                                <span className="absolute top-0 left-0 flex items-center h-full px-4 text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-xs peer-focus:text-primary-brand-color peer-valid:h-6 peer-valid:text-xs peer-valid:text-primary-brand-color">Telefon Numaras??</span>
                            </label>
                        </div>
                        <button className="flex items-center justify-center w-full h-12 text-sm font-semibold transition-colors rounded-lg shadow-md bg-brand-yellow text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color">
                            Telefon numaras?? ile devam et
                        </button>
                        <hr className="h-[1px] bg-gray-50 my-2" />
                        <button className="flex items-center w-full h-12 px-3 text-sm font-semibold transition-colors rounded-lg shadow-md bg-facebook-button text-facebook hover:text-register-color hover:bg-facebook">
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

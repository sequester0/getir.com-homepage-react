function MobileApp() {
    return (
        <div className="flex flex-col items-center justify-between text-white md:rounded-lg md:flex-row bg-primary-brand-color bg-mobile-app">
            <div className="flex flex-col p-10 text-center gap-y-3 md:text-left">
                <h3 className="text-2xl font-bold tracking-tighter">Getir'i indirin!</h3>
                <p className="mt-3 text-xs font-semibold md:text-base">
						İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.
				</p>
                <nav className="flex flex-wrap justify-center gap-2 mt-5 md:flex-nowrap">
                    <a href="http://localhost:3000" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                    </a>
                    <a href="http://localhost:3000" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                    </a>
                    <a href="http://localhost:3000" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                    </a>
                </nav>
            </div>
            <picture className="pt-8 md:self-end">
                <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
            </picture>
        </div>
    )
}

export default MobileApp;

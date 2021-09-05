import Menu from 'components/ui/Menu';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

function Footer() {

    const menuData = [
        {
            title: 'Getir\'i keşfedin',
            items: [
                {
                    title: 'Hakkımızda'
                },
                {
                    title: 'Kariyer'
                },
                {
                    title: 'İletişim'
                },
                {
                    title: 'COVID-19 Duyuru'
                },
                {
                    title: 'Sosyal Sorumluluk Projeleri'
                }
            ]
        },
        {
            title: 'Yardıma mı ihtiyacınız var?',
            items: [
                {
                    title: 'Sıkça Sorulan Sorular'
                },
                {
                    title: 'Kişisel Verilerin Korunması'
                },
                {
                    title: 'Gizlilik Politikası'
                },
                {
                    title: 'Kullanım Koşulları'
                },
                {
                    title: 'Çerez Politikası'
                }
            ]
        },
        {
            title: 'İş Ortağımız Olun',
            items: [
                {
                    title: 'Bayimiz Olun'
                },
                {
                    title: 'Deponuzu Kiralayın'
                },
                {
                    title: 'GetirYemek Restoranı Olun'
                },
                {
                    title: 'GetirÇarşı İşletmesi Olun'
                }
            ]
        }
    ]

    return (
        <div className="mt-16 bg-white shadow-inner">
            <div className="container px-4 mx-auto md:px-0">
                <div className="grid pt-5 md:pt-10 md:grid-cols-2 lg:grid-cols-4 gap-y-6">
                    <section>
                        <h6 className="text-lg text-primary-brand-color">Getir'i indirin!</h6>
                        <nav className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-1">
                            <a href="http://localhost:3000" className="transition-all duration-150 transform hover:scale-105">
                                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                            </a>
                            <a href="http://localhost:3000" className="transition-all transform hover:scale-105">
                                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                            </a>
                            <a href="http://localhost:3000" className="transition-all transform hover:scale-105">
                                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                            </a>
                        </nav>
                    </section>
                    {menuData.map((menu, index) => <Menu key={index} {...menu}/>)}
                </div>
                <div className="flex flex-col items-center justify-between py-6 mt-6 border-t border-gray-100 md:flex-row">
                    <div className="flex text-xs text-gray-700 gap-x-2">
                        &copy; 2021 Getir
                        <span>•</span>
                        <a href="http://localhost:3000" className="text-primary-brand-color hover:underline">Bilgi Toplumu Hizmetleri</a>
                    </div>
                    <nav className="flex gap-x-3">
                        <a href="http://localhost:3000" className="flex items-center justify-center w-8 h-8 transition-colors rounded-lg text-cards-txt hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10">
                            <FaFacebook size={21} />
                        </a>
                        <a href="http://localhost:3000" className="flex items-center justify-center w-8 h-8 transition-colors rounded-lg text-cards-txt hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10">
                            <FaTwitter size={21} />
                        </a>
                        <a href="http://localhost:3000" className="flex items-center justify-center w-8 h-8 transition-colors rounded-lg text-cards-txt hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10">
                            <FaInstagram size={21} />
                        </a>
                        <a href="http://localhost:3000" className="flex items-center h-8 px-2 text-sm transition-colors border border-gray-100 rounded-lg text-cards-txt gap-x-2 hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 hover:border-transparent">
                            <FiGlobe size={18} />
                            Türkçe (TR)
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer;

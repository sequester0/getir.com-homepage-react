import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Campaigns from 'components/Campaigns';
import Favourites from 'components/Favourites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <div className="h-[941px] overflow-y-scroll scrollbar scrollbar-thumb-primary-brand-color hover:scrollbar-thumb-secondary-brand-color transition-colors duration-1000 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thin">
        <Header />
        <HeroSection />
        <Categories />
        <Campaigns />
        <div className="container grid mx-auto px-36 gap-y-6">
          <Favourites />
          <MobileApp />
          <Cards />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

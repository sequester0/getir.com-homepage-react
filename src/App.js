import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Campaigns from 'components/Campaigns';
import Favourites from 'components/Favourites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import { useWindowWidth } from '@react-hook/window-size';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Header />
      { windowWidth <= 768 && <Campaigns /> }
      <HeroSection />
      <Categories />
      { windowWidth > 768 && <Campaigns /> }
      <div className="container grid pt-8 mx-auto gap-y-6">
        <Favourites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';
import AOS from 'aos';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Main from './assets/components/Main';
import Burger from './assets/components/Burger';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Burger isOpen={isOpen} onClick={handleBurgerOpen} />
      <Header onClickBurger={handleBurgerOpen} />
      <Main />
      <Footer />
    </>
  );
};

export default App;

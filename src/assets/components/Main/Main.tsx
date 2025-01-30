import AboutUs from '../AboutUs';
import Brands from '../Brands';
import Features from '../Features';
import Reviews from '../Reviews';
import Started from '../Started';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Started />
      <Features />
      <AboutUs />
      <Reviews />
      <Brands />
    </main>
  );
};

export default Main;

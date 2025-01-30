import AboutUs from '../AboutUs';
import Brands from '../Brands';
import Features from '../Features';
import Projects from '../Projects';
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
      <Projects />
    </main>
  );
};

export default Main;

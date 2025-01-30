import AboutUs from '../AboutUs';
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
    </main>
  );
};

export default Main;

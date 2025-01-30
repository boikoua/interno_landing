import AboutUs from '../AboutUs';
import Blogs from '../Blogs';
import Brands from '../Brands';
import Features from '../Features';
import Projects from '../Projects';
import Reviews from '../Reviews';
import Started from '../Started';
import Statistic from '../Statistic';
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
      <Statistic />
      <Blogs />
    </main>
  );
};

export default Main;

import Features from '../Features';
import Started from '../Started';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Started />
      <Features />
    </main>
  );
};

export default Main;

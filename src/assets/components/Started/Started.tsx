import BigButton from '../BigButton';
import Title from '../Title';
import styles from './Started.module.scss';
import arrowIcon from './../../img/icon/arrow-gold.svg';

const Started = () => {
  return (
    <section
      className={styles.started}
      style={{ backgroundImage: 'url(./img/started-bg.jpg)' }}
    >
      <div className="container">
        <div className={styles.wrapper}>
          <Title
            tag="h1"
            text="Let's Create Your Dream Interior"
            className={styles.title}
          />

          <p className={styles.text}>
            The world needs innovators and problem solvers who turn challenges
            into greater opportunities.
          </p>

          <BigButton
            text="Get Started"
            className={styles.btn}
            icon={arrowIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default Started;

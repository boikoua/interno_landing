import Button from '../Button';
import Title from '../Title';
import styles from './AboutUs.module.scss';
import arrowIcon from './../../img/icon/arrow-gold.svg';
import phoneIcon from './../../img/icon/phone.svg';

const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Title
              tag="h2"
              className={styles.title}
              text="We Tackle The Most Challenging Designs"
            />

            <p className={styles.text}>
              The world needs innovators and problem solvers who turn challenges
              into greater opportunities. We have an insatiable curiosity about
              transformative trends challenging the status.
            </p>

            <div className={styles.call}>
              <div className={styles.icon}>
                <img src={phoneIcon} alt="Phone icon" />
              </div>

              <a className={styles.tel} href="tel:+012345678">
                <span className={styles.number}>012345678</span>
                <span>Call Us Anytime</span>
              </a>
            </div>

            <Button
              className={styles.btn}
              text="Get Free Estimate"
              icon={arrowIcon}
            />
          </div>

          <div
            className={styles.img}
            style={{ backgroundImage: 'url(./img/about-us-bg.jpg)' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

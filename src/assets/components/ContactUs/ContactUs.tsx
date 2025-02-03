import Button from '../Button';
import Title from '../Title';
import styles from './ContactUs.module.scss';
import arrowIcon from './../../img/icon/arrow-dark.svg';

const ContactUs = () => {
  return (
    <div className="container">
      <section id="contact" className={styles.contact}>
        <Title
          tag="h2"
          className={styles.title}
          text="Wanna join the interno?"
        />

        <p className={styles.text}>Contact Us & Get a Free Consultation</p>

        <Button
          text="Connect With us"
          className={styles.btn}
          icon={arrowIcon}
        />
      </section>
    </div>
  );
};

export default ContactUs;

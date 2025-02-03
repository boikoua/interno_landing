import styles from './BackButton.module.scss';
import arrowIcon from './../../img/icon/arrow-up.png';

const BackButton = () => {
  return (
    <a
      className={styles.arrow}
      style={{ backgroundImage: `url(${arrowIcon})` }}
      href="#"
    ></a>
  );
};

export default BackButton;

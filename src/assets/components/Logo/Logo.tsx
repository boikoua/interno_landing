import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <a className={styles.logo} href="#">
      <img src="/img/logo.png" alt="Logo" />
    </a>
  );
};

export default Logo;

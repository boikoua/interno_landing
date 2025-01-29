import { mainCategories } from '../../api/mainCategories';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const showCategories = mainCategories.map((item) => (
    <li key={item.id}>
      <a className={styles.link} href="#">
        {item.category}
      </a>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <ul>{showCategories}</ul>
    </nav>
  );
};

export default Navigation;

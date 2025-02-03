import { mainCategories } from '../../api/mainCategories';
import styles from './Burger.module.scss';
import closeIcon from './../../img/icon/close.svg';
import cn from 'classnames';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const Burger: React.FC<Props> = ({ isOpen, onClick }) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick();
  };

  const showCategories = mainCategories.map((item) => (
    <li key={item.id}>
      <a className={styles.link} href="#" onClick={handleLinkClick}>
        {item.category}
      </a>
    </li>
  ));

  return (
    <nav className={cn(styles.burger, { [styles.none]: !isOpen })}>
      <img
        className={styles.close}
        src={closeIcon}
        alt="Close"
        onClick={onClick}
      />

      <ul>{showCategories}</ul>
    </nav>
  );
};

export default Burger;

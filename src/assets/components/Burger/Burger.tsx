import { mainCategories } from '../../api/mainCategories';
import styles from './Burger.module.scss';
import closeIcon from './../../img/icon/close.svg';
import cn from 'classnames';
import { useEffect } from 'react';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const Burger: React.FC<Props> = ({ isOpen, onClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClick();
  };

  const showCategories = mainCategories.map((item) => (
    <li key={item.id}>
      <a
        className={styles.link}
        href={`#${item.link}`}
        onClick={handleLinkClick}
      >
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

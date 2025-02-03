import Logo from '../Logo';
import Navigation from '../Navigation';
import styles from './Header.module.scss';
import burgerIcon from './../../img/icon/burger.svg';
import React from 'react';

type Props = {
  onClickBurger: () => void;
};

const Header: React.FC<Props> = ({ onClickBurger }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />

          <Navigation />

          <button className={styles.burger} onClick={onClickBurger}>
            <img src={burgerIcon} alt="Burger Menu" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

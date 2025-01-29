import React from 'react';
import styles from './Button.module.scss';

type Prop = {
  text: string;
  icon: string;
  className: string;
};

const Button: React.FC<Prop> = ({ text, icon, className }) => {
  return (
    <button className={`${styles.btn} ${className}`}>
      <span>{text}</span> <img src={icon} alt="Icon" />
    </button>
  );
};

export default Button;

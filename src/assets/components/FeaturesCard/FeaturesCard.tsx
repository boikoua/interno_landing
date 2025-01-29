import Title from '../Title';
import styles from './FeaturesCard.module.scss';
import arrowIcon from './../../img/icon/arrow-view.svg';
import React from 'react';

type Props = {
  title: string;
  content: string;
};

const FeaturesCard: React.FC<Props> = ({ title, content }) => {
  return (
    <article className={styles.card}>
      <Title tag="h3" text={title} className={styles.title} />

      <p className={styles.content}>{content}</p>

      <a href="#" className={styles.btn}>
        <span>View More</span> <img src={arrowIcon} alt="Arrow" />
      </a>
    </article>
  );
};

export default FeaturesCard;

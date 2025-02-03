import React from 'react';
import { IReviewsData } from '../../types/IReviewsData';
import Title from '../Title';
import styles from './ReviewsCard.module.scss';

type Props = {
  review: IReviewsData;
};

const ReviewsCard: React.FC<Props> = ({ review }) => {
  const { photo, name, city, country, text } = review;

  return (
    <article className={styles.card} data-aos="zoom-in">
      <div className={styles.top}>
        <img className={styles.photo} src={photo} alt={name} />

        <div className={styles.info}>
          <Title tag="h3" className={styles.name} text={name} />

          <span className={styles.location}>{`${city}, ${country}`}</span>
        </div>
      </div>

      <p className={styles.text}>{text}</p>
    </article>
  );
};

export default ReviewsCard;

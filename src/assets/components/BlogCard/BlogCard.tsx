import Title from '../Title';
import styles from './BlogCard.module.scss';
import arrowIcon from './../../img/icon/arrow.svg';
import { IBlog } from '../../types/IBlog';
import React from 'react';

type Props = {
  blog: IBlog;
};

const BlogCard: React.FC<Props> = ({ blog }) => {
  const { title, img, date, month, year, category } = blog;

  return (
    <article className={styles.card} data-aos="flip-right">
      <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>
        <span className={styles.category}>{category}</span>
      </div>

      <Title tag="h3" className={styles.title} text={title} />

      <div className={styles.bottom}>
        <span className={styles.date}>{`${month} ${date}, ${year}`}</span>

        <button className={styles.btn}>
          <img src={arrowIcon} alt="Arrow" />
        </button>
      </div>
    </article>
  );
};

export default BlogCard;

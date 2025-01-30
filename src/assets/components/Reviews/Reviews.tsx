import { reviewsData } from '../../api/reviewsData';
import ReviewsCard from '../ReviewsCard';
import Title from '../Title';
import styles from './Reviews.module.scss';

const Reviews = () => {
  const showReviews = reviewsData.map((item) => (
    <ReviewsCard key={item.id} review={item} />
  ));

  return (
    <div className="container">
      <section className={styles.reviews}>
        <Title
          tag="h2"
          className={styles.title}
          text="What the People Thinks About Interno"
        />
        <div className={styles.wrapper}>{showReviews}</div>
      </section>
    </div>
  );
};

export default Reviews;

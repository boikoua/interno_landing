import { featuresCards } from '../../api/featuresCards';
import FeaturesCard from '../FeaturesCard';
import styles from './Features.module.scss';

const Features = () => {
  const showCards = featuresCards.map((item) => (
    <FeaturesCard key={item.id} title={item.title} content={item.content} />
  ));

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.wrapper}>{showCards}</div>
      </div>
    </section>
  );
};

export default Features;

import Title from '../Title';
import styles from './Statistic.module.scss';

const Statistic = () => {
  return (
    <section className={styles.statistic} data-aos="fade-up">
      <div className="container">
        <div className={styles.wrapper}>
          <article>
            <Title tag="h3" className={styles.num} text="12" />
            <p className={styles.text}>Years Of Experiance</p>
          </article>
          <div className={styles.divider}></div>
          <article>
            <Title tag="h3" className={styles.num} text="5к" />
            <p className={styles.text}>Success Project</p>
          </article>
          <div className={styles.divider}></div>
          <article>
            <Title tag="h3" className={styles.num} text="1к" />
            <p className={styles.text}>Active Project</p>
          </article>
          <div className={styles.divider}></div>
          <article>
            <Title tag="h3" className={styles.num} text="4к" />
            <p className={styles.text}>Happy Customers</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Statistic;

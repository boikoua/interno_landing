import { brandsData } from '../../api/brandsData';
import styles from './Brands.module.scss';

const Brands = () => {
  const showBrands = brandsData.map((item) => (
    <img src={item.logo} alt={item.name} key={item.id} />
  ));

  return (
    <section className={styles.brands} data-aos="fade-right">
      <div className="container">
        <div className={styles.wrapper}>{showBrands}</div>
      </div>
    </section>
  );
};

export default Brands;

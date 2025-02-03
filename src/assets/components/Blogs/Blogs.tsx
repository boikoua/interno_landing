import { blogsData } from '../../api/blogsData';
import BlogCard from '../BlogCard';
import Title from '../Title';
import styles from './Blogs.module.scss';

const Blogs = () => {
  const showBlogs = blogsData.map((item) => (
    <BlogCard key={item.id} blog={item} />
  ));

  return (
    <section id="pages" className={styles.blogs}>
      <div className="container">
        <div className={styles.top}>
          <Title tag="h2" className={styles.title} text="Recent Blogs" />

          <p className={styles.text}>
            Get updates about our latest trends and techniques used in interior
            design project works.
          </p>
        </div>

        <div className={styles.bottom}>{showBlogs}</div>
      </div>
    </section>
  );
};

export default Blogs;

import styles from './Author.module.scss';
import githubIcon from './../../img/icon/github.svg';

const Author = () => {
  return (
    <section className={styles.author}>
      <a href="https://github.com/boikoua" target="_blank">
        <img src={githubIcon} alt="GitHub" />
        <span>Dmitry Boiko</span>
      </a>
    </section>
  );
};

export default Author;

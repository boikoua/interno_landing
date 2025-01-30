import Title from '../Title';
import styles from './ProjectsCard.module.scss';
import arrowIcon from './../../img/icon/arrow.svg';
import { IProject } from '../../types/IProject';

type Props = {
  project: IProject;
};

const ProjectsCard: React.FC<Props> = ({ project }) => {
  const { img, title, genre } = project;

  return (
    <article className={styles.card}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className={styles.info}>
        <div>
          <Title tag="h3" className={styles.title} text={title} />
          <span className={styles.genre}>{genre}</span>
        </div>

        <button className={styles.btn}>
          <img src={arrowIcon} alt="Arrow" />
        </button>
      </div>
    </article>
  );
};

export default ProjectsCard;

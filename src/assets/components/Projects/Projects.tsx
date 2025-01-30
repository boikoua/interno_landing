import { projectsData } from '../../api/projectsData';
import ProjectsCard from '../ProjectsCard';
import Title from '../Title';
import styles from './Projects.module.scss';

const Projects = () => {
  const showProjects = projectsData.map((item) => (
    <ProjectsCard key={item.id} project={item} />
  ));

  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.top}>
          <Title tag="h2" className={styles.title} text="Recent Projects" />

          <p className={styles.text}>
            With tools to make every part of your process more human and a
            support team excited to help you, getting started with us never been
            easier.
          </p>
        </div>

        <div className={styles.bottom}>{showProjects}</div>
      </div>
    </section>
  );
};

export default Projects;

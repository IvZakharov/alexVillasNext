import styles from "./ProjectsGrid.module.scss";

const ProjectsGrid = ({ title, projectsArr }) => {
  return (
    <section className={styles.projectsGrid}>
      <div className={"container xl:px-32"}>
        <h2 className={"h2"}>{title}</h2>
        <div className={styles.projectsGrid}></div>
      </div>
    </section>
  );
};

export default ProjectsGrid;

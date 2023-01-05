import styles from "./ProjectsCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const ProjectsCard = ({ title, projectsType, projectsArr }) => {
  return (
    <section className={styles.projectsGrid}>
      <div className={"container xl:px-32"}>
        <h2 className={"h2"}>{title}</h2>
        <div className={"grid"}></div>
      </div>
    </section>
  );
};

export default ProjectsCard;

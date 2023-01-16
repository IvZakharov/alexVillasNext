import styles from "./Project.module.scss";
import React from "react";
import ProjectCard from "./Card";
import Link from "next/link";

const ProjectsGrid = ({ title, projects, link, linkLabel }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section>
      <div className={"container"}>
        <h2 className={"h2 whitespace-pre-line mb-7 lg:mb-12"}>{title}</h2>
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5`}
        >
          {projects &&
            projects.slice(0, 3).map((obj, idx) => (
              <div
                className={`${
                  idx === 0 ? "md:col-span-2 lg:row-span-2" : "md:col-span-1"
                }`}
              >
                <ProjectCard
                  title={obj.title}
                  onSale={obj.onSale}
                  imageUrl={obj.thumbnail}
                  location={obj.location}
                  properties={idx === 0 ? obj.complexProperties : null}
                  large={idx === 0 ? true : false}
                  key={obj.id}
                />
              </div>
            ))}
        </div>

        {isOpen && (
          <div
            className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"}
          >
            {projects &&
              projects
                .slice(3)
                .map((obj) => (
                  <ProjectCard
                    title={obj.title}
                    onSale={obj.onSale}
                    imageUrl={obj.thumbnail}
                    location={obj.location}
                    properties={null}
                    large={false}
                    key={obj.id}
                  />
                ))}
          </div>
        )}

        <div className={"pt-10 flex justify-end"}>
          <Link href={link} className={styles.link}>
            <span>{linkLabel}</span>
            <i>
              <svg
                width="51"
                height="7"
                viewBox="0 0 51 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.0025 3.75L45.0025 0.863249V6.63675L50.0025 3.75ZM0 4.25H45.5025V3.25H0V4.25Z"
                  fill="#FF9900"
                />
              </svg>
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;

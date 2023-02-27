import styles from "./Project.module.scss";
import React from "react";
import ProjectCard from "./Card";
import {useWindowSize} from "../../utils/useWindowSize";

const ProjectsGrid = ({ title, projects, linkLabel, description, locale }) => {
  const size = useWindowSize();
  const [isOpen, setIsOpen] = React.useState(false);
  const [bodyHeight, setBodyHeight] = React.useState();
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (bodyRef.current) {
      setBodyHeight(bodyRef.current.scrollHeight);
    }
  }, [bodyHeight]);

  const getSize = () => {
    if (isOpen) {
      return bodyHeight;
    } else {
      if (size.width >= 1024) {
        return 540;
      } else if (size.width >= 768) {
        return 600;
      } else {
        return 760;
      }
    }
  };

  return (
    <section className={"overflow-x-hidden"}>
      <div className={"container"}>
        <div className={"mb-7 lg:mb-12 md:flex items-end"}>
          <h2
            className={"h2 whitespace-pre-line mb-5 md:mb-0 md:mr-14 xl:mr-20"}
          >
            {title}
          </h2>
          <p className={"text textSmall max-w-sm"}>{description}</p>
        </div>

        <div
          className={styles.gridWrap}
          style={{ maxHeight: getSize() }}
          ref={bodyRef}
        >
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5 mb-5`}
          >
            {projects &&
              projects.map((obj, idx) => (
                <div
                  key={obj.id}
                  className={`${
                    idx === 0 ? "md:col-span-2 lg:row-span-2" : "md:col-span-1"
                  }`}
                >
                  <ProjectCard
                    title={obj.attributes.title}
                    status={obj.attributes.status}
                    image={obj.attributes?.thumbnail}
                    location={obj.attributes.location}
                    properties={idx === 0 ? obj.attributes?.propertyList : null}
                    large={idx === 0}
                    key={obj.id}
                    slug={obj.attributes.slug}
                    locale={locale}
                  />
                </div>
              ))}
          </div>
        </div>

        {projects.length > 3 && (
          <div className={"pt-10 md:pl-0 flex justify-start md:justify-end"}>
            {!isOpen && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.link}
              >
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
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;



import styles from "./Management.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ManagementGrid = ({
  title,
  description,
  projects,
  linkLabel,
  link,
  full,
}) => {
  return (
    <section className={`${styles.grid}`}>
      <div className={"container"}>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-7 lg:mb-12 "
          }
        >
          <h2 className={"h2 whitespace-pre-line"}>{title}</h2>
          <p className={"text textSmall md:mt-auto"}>{description}</p>
        </div>

        {projects && (
          <div
            className={"grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7 lg:mb-12"}
          >
            {full
              ? projects.map((project) => (
                  <div className={styles.card} key={project.id}>
                    {project.link && (
                      <Link href={project.link} >
                        <Image
                          alt={"Project name"}
                          src={project.imageUrl}
                          quality={80}
                          fill
                          priority
                          sizes="(max-width: 576px) 100vw,
                (max-width: 984px) 50vw,
                33vw"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </Link>
                    )}
                    {!project.link && (
                      <Image
                        alt={"Project name"}
                        src={project.imageUrl}
                        quality={80}
                        fill
                        priority
                        sizes="(max-width: 576px) 100vw,
              (max-width: 984px) 50vw,
              33vw"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    )}
                    
                  </div>
                ))
              : projects.slice(0, 3).map((project) => (
                  <div className={styles.card} key={project.id}>
                    <Image
                      alt={"Project name"}
                      src={project.imageUrl}
                      quality={80}
                      fill
                      priority
                      sizes="(max-width: 576px) 100vw,
              (max-width: 984px) 50vw,
              33vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
          </div>
        )}

        <div className={"flex justify-end"}>
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

export default ManagementGrid;

import styles from "./Grid.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const RenovationGrid = ({ imageBefore, imageAfter }) => {
  return (
    <section className={`${styles.grid}`}>
      <div className={"container"}>
        <h2 className={"h2 mb-7 lg:mb-12"}>
          INVESTMENTS
          <br />
          IN RENOVATION
        </h2>

        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"}>
          <div className={styles.imageBefore}>
            <Image
              alt={"Project name"}
              src={imageBefore}
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
            <span className={styles.label}>Before</span>
          </div>

          <div className={styles.imageAfter}>
            <Image
              alt={"Project name"}
              src={imageAfter}
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
            <span className={styles.label}>After</span>
          </div>

          <div
            className={
              "flex justify-end sm:col-span-2 lg:col-span-1 lg:items-end "
            }
          >
            <Link href={"#"} className={styles.link}>
              <span>MORE RENOVATED PROPERTIES</span>
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
      </div>
    </section>
  );
};

export default RenovationGrid;

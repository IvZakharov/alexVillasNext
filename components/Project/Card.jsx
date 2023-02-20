import styles from "./Project.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  status,
  title,
  location,
  image,
  properties,
  large,
  slug,
  locale,
}) => {
  return (
    <article className={`${styles.card} ${large ? styles.cardLarge : ""}`}>
      {status === "onSale" && (
        <Link href={`projects/${slug}`} className={"w-full h-full"}>
          <div className={styles.info}>
            <div
              className={`flex items-center justify-between flex-wrap mb-16 gap-4 ${
                large ? "md:block md:w-1/2" : ""
              }`}
            >
              <h2
                className={`${styles.title} h2 ${
                  large ? styles.titleLarge : ""
                }`}
              >
                {large ? `Alex \n Villas \n ${title}` : title}
              </h2>
              <p className={styles.location}>
                <i>
                  <svg
                    width="17"
                    height="19"
                    viewBox="0 0 17 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.28599 10.6744C9.62726 10.6744 10.7146 9.62802 10.7146 8.3373C10.7146 7.04658 9.62726 6.00024 8.28599 6.00024C6.94473 6.00024 5.85742 7.04658 5.85742 8.3373C5.85742 9.62802 6.94473 10.6744 8.28599 10.6744Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.4376 13.4126L9.57346 17.1678C9.23193 17.4993 8.76892 17.6856 8.28617 17.6856C7.80342 17.6856 7.34041 17.4993 6.99888 17.1678L3.13381 13.4126C2.11492 12.4224 1.42106 11.1609 1.13997 9.78746C0.858878 8.41406 1.00318 6.99049 1.55463 5.69679C2.10608 4.40308 3.03991 3.29733 4.23803 2.51937C5.43615 1.74141 6.84475 1.32617 8.28571 1.32617C9.72668 1.32617 11.1353 1.74141 12.3334 2.51937C13.5315 3.29733 14.4653 4.40308 15.0168 5.69679C15.5682 6.99049 15.7125 8.41406 15.4315 9.78746C15.1504 11.1609 14.4565 12.4224 13.4376 13.4126V13.4126Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span>{location}</span>
              </p>
            </div>

            <div>
              {properties && (
                <ul className={styles.properties}>
                  {properties.map((obj, idx) => (
                    <li key={idx} className={"text lg:whitespace-nowrap"}>
                      {obj.title}
                      <span> x {obj.count}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className={styles.link}>
                <span>Подробнее о {title}</span>
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
              </div>
            </div>
          </div>
        </Link>
      )}

      {status === "comingSoon" && (
        <div className={styles.info}>
          <div
            className={`flex items-center justify-between flex-wrap mb-16 gap-4 ${
              large ? "md:block md:w-1/2" : ""
            }`}
          >
            <h2
              className={`${styles.title} h2 ${large ? styles.titleLarge : ""}`}
            >
              {large ? `Alex \n Villas \n ${title}` : title}
            </h2>
            <p className={styles.location}>
              <span>{"coming soon"}</span>
            </p>
          </div>
        </div>
      )}

      {status === "soldOut" && (
        <Link
          href={`projects/${slug}`}
          className={"w-full h-full flex items-center justify-center"}
        >
          <div className={styles.soldOut}>
            <p>
              {locale == "en" ? (
                <span>SOLD OUT</span>
              ) : (
                <span>ВСЁ ПРОДАНО</span>
              )}
            </p>
          </div>
        </Link>
      )}

      <div className={styles.bgImage}>
        <Image
          alt={`Alex villas ${title}`}
          src={image.data.attributes.url}
          quality={80}
          fill
          blurDataURL={image.data.attributes.placeholder}
          placeholder={"blur"}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </article>
  );
};

export default ProjectCard;

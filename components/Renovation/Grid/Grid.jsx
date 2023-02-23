import styles from "./Grid.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Video from "../../YoutubeSection/Video";

const RenovationGrid = ({
  locale,
  title,
  description,
  imageBefore,
  imageAfter,
  linkLabel,
  link,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
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

        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5"}>
          <Video
            videoUrl={"https://www.youtube.com/watch?v=Qi5ktHOvQAw"}
            isActive={activeSlideIndex === 3}
          />
          {/*<div className={styles.imageBefore}>*/}
          {/*  {imageBefore && (*/}
          {/*    <Image*/}
          {/*      alt={"Project name"}*/}
          {/*      src={imageBefore.data.attributes.url}*/}
          {/*      quality={80}*/}
          {/*      fill*/}
          {/*      blurDataURL={imageBefore.data.attributes.placeholder}*/}
          {/*      placeholder={"blur"}*/}
          {/*      sizes="(max-width: 576px) 100vw,*/}
          {/*    (max-width: 984px) 50vw,*/}
          {/*    33vw"*/}
          {/*      style={{*/}
          {/*        objectFit: "cover",*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  )}*/}
          
          {/*  <span className={`${styles.label} h2`}>*/}
          {/*    {" "}*/}
          {/*    {locale === "en" ? "before" : "до"}{" "}*/}
          {/*  </span>*/}
          {/*</div>*/}
          
          {/*<div className={styles.imageAfter}>*/}
          {/*  {imageAfter && (*/}
          {/*    <Image*/}
          {/*      alt={"Project name"}*/}
          {/*      src={imageAfter.data.attributes.url}*/}
          {/*      quality={80}*/}
          {/*      fill*/}
          {/*      blurDataURL={imageAfter.data.attributes.placeholder}*/}
          {/*      placeholder={"blur"}*/}
          {/*      sizes="(max-width: 576px) 100vw,*/}
          {/*    (max-width: 984px) 50vw,*/}
          {/*    33vw"*/}
          {/*      style={{*/}
          {/*        objectFit: "cover",*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  )}*/}
          {/*  <span className={`${styles.label} h2`}>*/}
          {/*    {" "}*/}
          {/*    {locale === "en" ? "after" : "После"}{" "}*/}
          {/*  </span>*/}
          {/*</div>*/}

          <div
            className={
              "flex justify-end sm:col-span-2 lg:col-span-1 lg:items-end"
            }
          >
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
      </div>
    </section>
  );
};

export default RenovationGrid;

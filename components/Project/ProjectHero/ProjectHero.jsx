import styles from "./ProjectHero.module.scss";
import Image from "next/image";
import FormContactHero from "../../FormContactHero/FormContactHero";
import HeroMenu from "../../HeroMenu/HeroMenu";
import Link from "next/link";

const ProjectHero = ({
  h1first,
  h1second,
  properties,
  startingPrice,
  location,
  form,
  backgroundImage,
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        {backgroundImage && (
          <Image
            alt={"ALEX VILLAS"}
            src={backgroundImage.data.attributes.url}
            blurDataURL={backgroundImage.data.attributes.placeholder}
            placeholder={"blur"}
            quality={80}
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        )}
      </div>
      <div className="container flex flex-col justify-between h-full sm:p-0">
        <div className={`${styles.h1Block} mx-auto lg:mx-0 lg:ml-36 xl:ml-48`}>
          {location && (
            <div className={styles.dot}>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99937 11.3106C9.34064 11.3106 10.4279 10.1104 10.4279 8.62995C10.4279 7.14949 9.34064 5.94934 7.99937 5.94934C6.65811 5.94934 5.5708 7.14949 5.5708 8.62995C5.5708 10.1104 6.65811 11.3106 7.99937 11.3106Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.1515 14.4513L9.28733 18.7585C8.9458 19.1388 8.48279 19.3524 8.00004 19.3524C7.51728 19.3524 7.05427 19.1388 6.71274 18.7585L2.84767 14.4513C1.82879 13.3156 1.13493 11.8686 0.853836 10.2933C0.572746 8.71797 0.717049 7.08513 1.2685 5.60124C1.81995 4.11736 2.75378 2.84906 3.9519 1.95673C5.15002 1.06441 6.55862 0.588135 7.99958 0.588135C9.44054 0.588135 10.8491 1.06441 12.0473 1.95673C13.2454 2.84906 14.1792 4.11736 14.7307 5.60124C15.2821 7.08513 15.4264 8.71797 15.1453 10.2933C14.8642 11.8686 14.1704 13.3156 13.1515 14.4513V14.4513Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={styles.address}>{location}</div>
            </div>
          )}
          <h1 className={`${styles.h1} h1`}>
            <span className={styles.white}>{h1first}</span>
            <span className={styles.yellow}>{h1second}</span>
          </h1>
          {location && (
            <div className={`${styles.subLable}`}>{startingPrice}</div>
          )}
          <div className={styles.FormText}>
            {form && (
              <FormContactHero
                hrefLabel={
                  form == ""
                    ? "ПОЛУЧИТЕ КАТАЛОГ ОБЪЕКТОВ \nИ ФИНАНСОВУЮ МОДЕЛЬ"
                    : form
                }
                arrow
              />
            )}

            {properties && (
              <ul className={styles.properties}>
                {properties.map((obj, idx) => (
                  <li key={idx} className={"text mb-1 lg:whitespace-nowrap"}>
                    {obj.title}
                    <span> x {obj.count}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className={"hidden md:block"}>
          <HeroMenu />
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;

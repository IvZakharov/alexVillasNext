import styles from "./FinanceModeling.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const ProjectFinanceModeling = ({ villas }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);

  const handleTabClick = (event) => {
    const item = event.currentTarget.tabIndex;
    setActiveTab(item);
  };

  return (
    <section className={styles.financeModeling}>
      <div className={"container"}>
        {villas && (
          <div className={styles.tabs}>
            <Swiper
              navigation={{
                prevEl: arrowPrev.current,
                nextEl: arrowNext.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = arrowPrev.current;
                swiper.params.navigation.nextEl = arrowNext.current;
              }}
              slidesPerView={1}
              modules={[Navigation]}
              className={styles.swiper}
              loop={false}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
            >
              {villas.map((villa, idx) => (
                <SwiperSlide key={villa.id} className={styles.slide}>
                  <div
                    key={villa.id}
                    className={`${styles.tabItem} ${
                      idx === activeTab ? styles.active : ""
                    }`}
                    tabIndex={idx}
                    onClick={(event) => handleTabClick(event)}
                  >
                    <p className={styles.price}>230 000 $</p>
                    <p className={styles.name}>{villa.villaTitle}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              disabled={activeTab === 0}
              onClick={() => setActiveTab(activeTab - 1)}
              className={`${styles.arrowPrev} iconButton`}
              ref={arrowPrev}
            >
              <svg
                width="17"
                height="30"
                viewBox="0 0 17 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7998 1.28571L1.39981 15L15.7998 28.7143"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              disabled={activeTab === villas.length - 1}
              onClick={() => setActiveTab(activeTab + 1)}
              className={`${styles.arrowNext} iconButton`}
              ref={arrowNext}
            >
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_129_18)">
                  <path
                    d="M1.5 18.5714L10.5 9.99998L1.5 1.42856"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_129_18">
                    <rect
                      width="20"
                      height="12"
                      fill="white"
                      transform="translate(0 20) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        )}

        <div className={"grid grid-cols-1 md:grid-cols-2"}>
          <div className={styles.table}>
            <h3 className={styles.title}>title</h3>

            <div className={""}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFinanceModeling;

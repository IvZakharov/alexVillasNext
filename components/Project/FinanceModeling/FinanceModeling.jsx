import styles from "./FinanceModeling.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useRouter } from "next/router";

const ProjectFinanceModeling = ({ villas }) => {
  const router = useRouter();
  const { locale } = router;
  const [activeTab, setActiveTab] = React.useState(0);
  const [swiper, setSwiper] = React.useState(null);
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);

  const handleChangeSlide = () => {
    setActiveTab(swiper.activeIndex);
  };

  const handleTabClick = (event) => {
    const item = event.currentTarget.tabIndex;
    setActiveTab(item);
  };

  return (
    <section className={styles.financeModeling}>
      <div className={"container"}>
        <div className={"mb-7 lg:mb-12"}>
          <h2 className={"h2"}>{locale === 'ru' ? "ФИНАНСОВАЯ МОДЕЛЬ" : "FINANCIAL MODEL"}</h2>
        </div>
        {villas && (
          <>
            <div className={styles.tabs}>
              <Swiper
                onSwiper={setSwiper}
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
                onSlideChange={handleChangeSlide}
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
                      <p className={styles.name}>{villa.villaTitle}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className={styles.buttonWrapPrev}>
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
              </div>

              <div className={styles.buttonWrapNext}>
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
            </div>

            {villas.map((villa, idx) =>
              idx === activeTab ? (
                <div
                  key={villa.id}
                  className={`${styles.tabContent} grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16`}
                >
                  <div>
                    <div className={"flex justify-between items-end"}>
                      <h3 className={styles.title}>
                        {locale === 'ru' ?
                          <>
                            Доходность с <br />
                            <span>посуточной аренды</span>
                          </> :
                          <>
                            Daily<br />
                            <span>rental plan</span>
                          </>
                        }
                        
                      </h3>
                      <p className={styles.title}>{locale === 'ru' ? "Сумма" : "Sum"}</p>
                      <p className={styles.title}>ROI</p>
                    </div>

                    <div className={styles.table}>
                      {villa.dailyRevenueTable &&
                        villa.dailyRevenueTable.map((row, idx) => (
                          <div key={idx} className={styles.row}>
                            <p className={`${styles.rowTitle}`}>{row.title}</p>
                            <p className={styles.rowRevenue}>{row.revenue}</p>
                            <p className={styles.rowRoi}>{row.roi}</p>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div>
                    <div className={"flex justify-between items-end"}>
                      <h3 className={styles.title}>
                        {locale === 'ru' ?
                          <>
                            Доходность с <br />
                            <span>помесячной аренды</span>
                          </>:
                          <>
                            Monthly<br />
                            <span>rental plan</span>
                          </>
                        }
                        
                      </h3>
                      <p className={styles.title}>{locale === 'ru' ? "Сумма" : "Sum"}</p>
                      <p className={styles.title}>ROI</p>
                    </div>

                    <div className={styles.table}>
                      {villa.dailyRevenueTable &&
                        villa.dailyRevenueTable.map((row, idx) => (
                          <div key={idx} className={styles.row}>
                            <p className={`${styles.rowTitle} textSmall`}>
                              {row.title}
                            </p>
                            <p className={styles.rowRevenue}>{row.revenue}</p>
                            <p className={styles.rowRoi}>{row.roi}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectFinanceModeling;

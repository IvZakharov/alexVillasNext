import React from "react";
import styles from "./Principles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";

import parse from "html-react-parser";
import Image from "next/image";

import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";

const Principles = ({ title, principles }) => {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);

  return (
    <section>
      <div className={"grid grid-cols-1 lg:grid-cols-3 container "}>
        <div className={"mb-12 lg:mb-0 xl:py-10"}>
          <h2 className={`h2 ${styles.title}`}>{parse(title)}</h2>
        </div>

        {principles && (
          <div className={"relative lg:col-span-2"}>
            <Swiper
              navigation={{
                prevEl: arrowPrev.current,
                nextEl: arrowNext.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = arrowPrev.current;
                swiper.params.navigation.nextEl = arrowNext.current;
              }}
              modules={[EffectFade, Navigation]}
              onSlideChange={(swiperCore) => {
                const { activeIndex } = swiperCore;
                setActiveSlideIndex(activeIndex);
              }}
              slidesPerView={1}
              effect={"fade"}
              className={styles.slider}
            >
              {principles.map((obj) => (
                <SwiperSlide key={obj.id}>
                  <div className={styles.content}>
                    <div className={`${styles.image} md:w-1/2`}>
                      <Image
                        alt="video placeholder"
                        src={obj.image.data.attributes?.url}
                        quality={80}
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      className={
                        "p-4 pb-6 md:px-6 md:py-8 xl:px-8 xl:py-10 md:w-1/2"
                      }
                    >
                      <h3 className={styles.slideTitle}>{obj.title}</h3>
                      <p className={`${styles.description} text`}>
                        {obj.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className={styles.nav}>
                <button className={styles.arrowPrev} ref={arrowPrev}>
                  <svg
                    width="20"
                    height="6"
                    viewBox="0 0 20 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3L15 0.113249V5.88675L20 3ZM0 3.5L15.5 3.5V2.5L0 2.5L0 3.5Z"
                      fill="white"
                    />
                  </svg>
                </button>

                <span>
                  {activeSlideIndex + 1}/{principles.length}
                </span>

                <button className={styles.arrowNext} ref={arrowNext}>
                  <svg
                    width="20"
                    height="6"
                    viewBox="0 0 20 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3L15 0.113249V5.88675L20 3ZM0 3.5L15.5 3.5V2.5L0 2.5L0 3.5Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Principles;

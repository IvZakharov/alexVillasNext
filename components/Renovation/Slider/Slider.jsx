import styles from "./Slider.module.scss";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const RenovationSlider = ({ images }) => {
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);

  return (
    <section className={styles.renovationSlider}>
      <Swiper
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = arrowPrev.current;
          swiper.params.navigation.nextEl = arrowNext.current;
        }}
        navigation={{
          prevEl: arrowPrev.current,
          nextEl: arrowNext.current,
        }}
        centeredSlides={true}
        pagination={true}
        slidesPerView={"auto"}
        spaceBetween={10}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: "auto",
            spaceBetween: 24,
          },
        }}
        modules={[Navigation, Pagination]}
        className={"renovationSwiper"}
      >
        {images &&
          images.map((obj) => (
            <SwiperSlide key={obj.id}>
              <div className={styles.image}>
                <Image
                  alt="Renovation Image"
                  src={obj.imageUrl}
                  quality={80}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}

        <button ref={arrowPrev} className={styles.arrowPrev}>
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
        <button ref={arrowNext} className={styles.arrowNext}>
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
      </Swiper>
    </section>
  );
};

export default RenovationSlider;

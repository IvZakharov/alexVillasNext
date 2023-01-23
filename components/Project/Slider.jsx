import styles from "./Project.module.scss";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProjectSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);

  return (
    <section className={styles.projectSlider}>
      <Swiper
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = arrowPrev.current;
          swiper.params.navigation.nextEl = arrowNext.current;
        }}
        navigation={{
          prevEl: arrowPrev.current,
          nextEl: arrowNext.current,
        }}
        thumbs={{ swiper: thumbsSwiper }}
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
        modules={[Navigation, Thumbs]}
        className={"projectSwiper"}
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

      <div className={styles.thumbs}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          className="projectThumbsSwiper"
        >
          {images &&
            images.map((obj) => (
              <SwiperSlide key={obj.id}>
                <div className={styles.thumb}>
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
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSlider;

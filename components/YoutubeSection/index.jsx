import styles from "./Youtube.module.scss";
import React from "react";
import Link from "next/link";
import Video from "./Video";
import Thumb from "./Thumb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";

const Index = ({ youtubeLinks }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  return (
    <section className={styles.youtube}>
      <div className={"container grid grid-cols-1 md:grid-cols-2 gap-8"}>
        <div className={"md:flex md:flex-col"}>
          <h2 className={`h2 mb-8 xl:mb-16`}>
            <span>SUBSCRIBE</span>
            <br />
            TO OUR
            <br />
            YOUTUBE
            <br />
            CHANNEL
          </h2>

          <ul className={styles.list}>
            <li className={styles.item}>
              <i className={styles.icon}>
                <svg
                  width="32"
                  height="22"
                  viewBox="0 0 32 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.16699 11.1965L11.3337 20.3631L29.667 2.02979"
                    stroke="#FF9900"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <p className={styles.text}>
                Weekly top quality videos about real estate in Bali
              </p>
            </li>

            <li className={styles.item}>
              <i className={styles.icon}>
                <svg
                  width="32"
                  height="22"
                  viewBox="0 0 32 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.16699 11.1965L11.3337 20.3631L29.667 2.02979"
                    stroke="#FF9900"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <p className={styles.text}>
                Actionable content from the main market players
              </p>
            </li>
          </ul>

          <Link href={""} className={styles.link}>
            <span>STAY UP TO DATE</span>
            <i>
              <svg
                width="73"
                height="7"
                viewBox="0 0 73 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73 3.19629L68 0.309538V6.08304L73 3.19629ZM0 3.69629H68.5V2.69629H0V3.69629Z"
                  fill="#FF9900"
                />
              </svg>
            </i>
          </Link>
        </div>

        <div>
          <Swiper
            spaceBetween={20}
            effect={"fade"}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs]}
            onSlideChange={(swiperCore) => {
              const { activeIndex } = swiperCore;
              setActiveSlideIndex(activeIndex);
            }}
          >
            {youtubeLinks.map((link, idx) => (
              <SwiperSlide>
                <Video
                  key={idx}
                  videoUrl={link}
                  isActive={activeSlideIndex === idx}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            effect={"fade"}
            slidesPerView={3}
            watchSlidesProgress={true}
            modules={[Thumbs]}
          >
            {youtubeLinks.map((link, idx) => (
              <SwiperSlide>
                <Thumb key={idx} videoUrl={link} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Index;

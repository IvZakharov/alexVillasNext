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

const Index = ({ youtubeLinks, locale }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  {console.log(youtubeLinks)}
  return (
    <section className={styles.youtube + " " + styles.renovation}>
      <div className={"container"}>
          <div className={""}>
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
              {youtubeLinks &&
                youtubeLinks.map((obj, idx) => (
                  <SwiperSlide key={idx}>
                    <Video
                      videoUrl={obj.youtubeUrl}
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
              {youtubeLinks &&
                youtubeLinks.map((obj, idx) => (
                  <SwiperSlide key={idx}>
                    <Thumb videoUrl={obj.youtubeUrl} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
      </div>
    </section>
  );
};

export default Index;

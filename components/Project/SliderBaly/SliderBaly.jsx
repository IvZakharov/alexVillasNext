import React, { useRef, useState } from "react";
import styles from "./SliderBaly.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderBaly = () => {
  return (
    <section className={styles.SliderBaly}>
      <div className="container">
        <h2 className="h2">BALI</h2>
        <p>Бали - это <span>райское место</span> для жизни и отдыха, с богатой культурой и природными красотами.</p>
  
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide><img src={'https://static.tildacdn.com/tild3430-6166-4465-b261-363737336264/majid-azim-v-IkDVi9E.jpg'} /></SwiperSlide>
          <SwiperSlide><img src={'https://static.tildacdn.com/tild3937-3462-4137-b231-626264353539/denis-arslanbekov-Pn.jpg'} /></SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderBaly;
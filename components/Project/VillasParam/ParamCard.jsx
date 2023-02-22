import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './VillasParam.module.scss'

const ParamCard = ({Param, index}) => {
  return (
    <div className={styles.ParamCard} key={index}>
      <div className={styles.lable}>Основные параметры</div>
      <div className={styles.title}>{Param.title}</div>
      <div className={styles.Content}>
        <div className={styles.paramBlock}>
          {Param.parameters && Param.parameters.map((obj, i)=>(
            <div className={styles.param} key={i}>
              <div className={styles.value}>{obj.value}</div>
              <div className={styles.lableParam}>{obj.title}</div>
            </div>
          ))}
        </div>
        <div className={styles.Slider}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={styles.mySwiper}
          >
            {Param.gallery?.data && Param.gallery.data.map((obj, i)=>(
              <SwiperSlide key={i}><img src={obj.attributes?.url} /></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ParamCard;
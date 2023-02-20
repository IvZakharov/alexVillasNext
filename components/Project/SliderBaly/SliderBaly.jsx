import React from "react";
import styles from "./SliderBaly.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const SliderBaly = ({ images }) => {
  return (
    <section className={styles.SliderBaly}>
      <div className="container">
        <div className="md:grid md:grid-cols-3 mb-7 lg:mb-12">
          <h2 className="h2 mb-4 md:mb-0">BALI</h2>
          <p className={"text"}>
            это <span>райское место</span> для жизни и отдыха, с богатой
            культурой и природными красотами.
          </p>
        </div>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={styles.mySwiper}
        >
          {images &&
            images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles.image}>
                  <Image
                    alt={"Bali image"}
                    src={image.attributes.url}
                    quality={80}
                    fill
                    blurDataURL={image.attributes.placeholder}
                    placeholder={"blur"}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
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

export default SliderBaly;

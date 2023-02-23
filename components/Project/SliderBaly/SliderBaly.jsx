import React from "react";
import styles from "./SliderBaly.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useRouter } from "next/router";
import parse from "html-react-parser";

const SliderBaly = ({ images }) => {
  const router = useRouter();
  const { locale } = router;
  
  return (
    <section className={styles.SliderBaly}>
      <div className="container">
        <div className="mb-7 lg:mb-12 md:flex items-end">
          <h2 className="h2 whitespace-pre-line mb-5 md:mb-0 md:mr-14 xl:mr-20">BALI</h2>
          <p className={"text textSmall max-w-sm"}>
            {locale === 'ru'?
              parse("это <span>райское место</span> для жизни и отдыха, с богатой культурой и природными красотами.")
              : parse("Bali is <span>a wonderful place </span> to feel comfortable and safe 365 days a year")
            }
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

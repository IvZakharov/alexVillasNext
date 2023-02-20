import styles from "./Team.module.scss";
import React from "react";

import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Team = ({ teamArr }) => {
  const [cardHover, setCardHover] = React.useState(false);
  const [gridSize, setGridSize] = React.useState();
  const gridRef = React.useRef(null);

  const handleMouseEnter = (event) => {
    setCardHover(true);
  };

  const handleMouseLeave = () => {
    setCardHover(false);
  };

  return (
    <section className={styles.team}>
      <div
        className={
          "container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8 md:mb-12"
        }
      >
        <div>
          <h2 className={`h2 mb-8 md:mb-0`}>
            <span>Мы - </span> <br /> ALEX <br /> VILLAS!
          </h2>
        </div>

        <div>
          <p className={"text textSmall mb-5"}>
            Команда - наш самый большой актив. <br />
            Мы собрали лучших экспертов с многолетним <br />
            опытом работы в своих областях.
          </p>
          <p className={"text textSmall mb-5"}>
            ALEX VILLAS - это молодое поколение <br /> космополитов, разделяющих{" "}
            <br /> одни и те же ценности.
          </p>
        </div>
      </div>

      <div className={"container lg:hidden relative"}>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView={"auto"}
          className={"teamSwiper"}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
          }}
        >
          {teamArr &&
            teamArr.map((obj, idx) => (
              <SwiperSlide key={idx}>
                <Card
                  name={obj.name}
                  position={obj.position}
                  image={obj.image}
                  description={obj.description}
                  instagramLink={obj.instagramUrl}
                  linkedinLink={obj.linkedinUrl}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className={"container hidden lg:flex lg:flex-wrap relative"}>
        {teamArr &&
          teamArr.map((obj, idx) => (
            <div className={styles.cardWrapper} key={idx}>
              <Card
                name={obj.name}
                position={obj.position}
                image={obj.image}
                description={obj.description}
                instagramLink={obj.instagramUrl}
                linkedinLink={obj.linkedinUrl}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Team;

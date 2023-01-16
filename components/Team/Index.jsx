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
  const [gridSize, setGridSize] = React.useState({ width: 0, height: 0 });
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
            <span>We are</span> <br /> ALEX <br /> VILLAS!
          </h2>
        </div>

        <div>
          <p className={"text mb-5"}>
            It always takes a group of passionate professionals{" "}
            <span>to make confident bets.</span>
          </p>
        </div>
      </div>

      <div className={"container lg:hidden relative"}>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView={1}
          className={"teamSwiper"}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
          }}
        >
          {teamArr &&
            teamArr.map((obj) => (
              <SwiperSlide key={obj.id}>
                <Card
                  name={obj.name}
                  position={obj.position}
                  imageUrl={obj.imageUrl}
                  description={obj.description}
                  instagramLink={obj.instagramLink}
                  linkedinLink={obj.linkedinLink}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className={"container hidden lg:flex lg:flex-wrap relative"}>
        {teamArr &&
          teamArr.map((obj) => (
            <div className={styles.cardWrapper}>
              <Card
                name={obj.name}
                position={obj.position}
                imageUrl={obj.imageUrl}
                description={obj.description}
                instagramLink={obj.instagramLink}
                linkedinLink={obj.linkedinLink}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Team;

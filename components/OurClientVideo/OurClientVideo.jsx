import React, { useState } from "react";
import styles from "./OurClientVideo.module.scss";
import Modal from "../Modal/Modal";
import Thumb from "../YoutubeSection/Thumb";

const OurClientVideo = ({locale}) => {
  const [activeModal, setActiveModal] = useState(false);
 
  const closeModal = () => {
    setActiveModal(false);
  };
  return (
    <section className="container">
      <div className={styles.OurClient}>
        <h2 className={`h2 mb-8 ${styles.h2}`}>
          {locale === 'ru' ? (
            <>
              Отзывы наших <span>Клиентов:</span>
            </>
          ) : (
            <>
              HERE’S WHAT  <span> OUR CLIENTS  SAY:</span>
            </>
          )}
        </h2>
        <div
          className={`${styles.video} mb-8`}
          onClick={() => {
            setActiveModal(true);
          }}
        >
          <div className={`${styles.OutLine} mx-auto`}>
            <div className={`${styles.play} flex justify-center items-center`}>
              <svg
                width="75"
                height="93"
                viewBox="0 0 75 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16895 1.42896V91.5708L73.5874 46.4999L1.16895 1.42896Z"
                  stroke="#FF9900"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={styles.thumb}>
                <Thumb videoUrl={"https://www.youtube.com/embed/UIU1Xc0jDiE"} />
              </div>
            </div>

          </div>
        </div>
        <div className={styles.text}>
          <p className="text mb-4">
            {locale === 'ru' ? (
              <>
                “Выбрать один из отзывов <span> from 4 to 6 years.</span>”
              </>
            ) : (
              <>
                “In simple words, your payback period is expected to be <span> from 4 to 6 years.</span>”
              </>
            )}
          </p>
          <span className={styles.name}>
            {locale === 'ru' ? (
            <>
              THEODORE PATTERSON
            </>
          ) : (
            <>
              THEODORE PATTERSON
            </>
          )}
          </span>
        </div>
      </div>
      <Modal active={activeModal} closeModal={closeModal} />
    </section>
  );
};

export default OurClientVideo;

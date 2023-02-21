import React, { useState } from "react";
import styles from "./OurClientVideo.module.scss";
import Modal from "../Modal/Modal";
import Thumb from "../YoutubeSection/Thumb";
import VideoModal from "../Modal/VideoModal/VideoModal";
import parse from "html-react-parser";

const OurClientVideo = ({ locale, authorName, authorQuote, youtubeUrl }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="container">
      <div className={styles.OurClient}>
        <h2 className={`h2 mb-8 ${styles.h2}`}>
          {locale === "ru" ? (
            <>
              Отзывы наших <span>Клиентов:</span>
            </>
          ) : (
            <>
              HERE’S WHAT <span> OUR CLIENTS SAY:</span>
            </>
          )}
        </h2>
        <div
          className={`${styles.video} mb-8`}
          onClick={() => {
            setModalIsOpen(true);
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
          <p className="text mb-4">{parse(authorQuote)}</p>
          <span className={styles.name}>{parse(authorName)}</span>
        </div>
      </div>

      <VideoModal
        active={modalIsOpen}
        closeModal={closeModal}
        videoUrl={youtubeUrl}
      />
    </section>
  );
};

export default OurClientVideo;

import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ active, closeModal }) => {
  return (
    <div
      className={active ? styles.Modal__active : styles.Modal}
      onClick={closeModal}
    >
      <div
        className={
          active
            ? styles.Modal__content + " " + styles.active
            : styles.Modal__content
        }
        onClick={(e) => e.stopPropagation(e)}
      >
        <div className={styles.sizes}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UIU1Xc0jDiE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;

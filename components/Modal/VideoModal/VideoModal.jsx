import React from "react";
import styles from "./VideoModal.module.scss";
import { youtubeParser } from "../../../utils/youtubeParser";

const VideoModal = ({ active, closeModal, videoUrl }) => {
  return (
    <>
      {active ? (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.overlay}></div>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.video}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeParser(videoUrl)}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default VideoModal;

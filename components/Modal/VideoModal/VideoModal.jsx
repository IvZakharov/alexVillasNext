import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./VideoModal.module.scss";
import { youtubeParser } from "../../../utils/youtubeParser";

const VideoModal = ({ active, closeModal, videoUrl }) => {
  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          className={styles.modal}
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.overlay}></div>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <motion.div
              className={styles.video}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ scale: 0 }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeParser(videoUrl)}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default VideoModal;

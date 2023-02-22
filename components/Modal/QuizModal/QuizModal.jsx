import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./QuizModal.module.scss";
import { youtubeParser } from "../../../utils/youtubeParser";
import Quiz from "../../Project/Quiz/Quiz";

const QuizModal = ({ active, closeModal }) => {
  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          className={styles.modal}
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.overlay}></div>

          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeModal}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.4 24L0 21.6L9.6 12L0 2.4L2.4 0L12 9.6L21.6 0L24 2.4L14.4 12L24 21.6L21.6 24L12 14.4L2.4 24Z"
                  fill="#FF9900"
                />
              </svg>
            </button>
            <Quiz />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default QuizModal;

import styles from "./Youtube.module.scss";
import React from "react";
import Image from "next/image";
import { youtubeParser } from "../../utils/youtubeParser";

const Thumb = ({ videoUrl }) => {
  return (
    <div className={styles.thumb}>
      <Image
        alt={"Alex Villas Youtube placeholder"}
        src={`https://img.youtube.com/vi/${youtubeParser(videoUrl)}/0.jpg`}
        quality={80}
        fill
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Thumb;

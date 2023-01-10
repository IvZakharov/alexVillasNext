import styles from "./Youtube.module.scss";
import React from "react";
import Image from "next/image";

const Video = ({ videoUrl }) => {
  const [videoIsHidden, setVideoIsHidden] = React.useState(true);

  function youtubeParser(url) {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  return (
    <article className={styles.video}>
      {videoIsHidden ? (
        <div
          className={styles.placeholder}
          onClick={() => setVideoIsHidden(!videoIsHidden)}
        >
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

          <button className={styles.playButton}>
            <svg
              width="36"
              height="40"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.18262 1.21436V38.9565L34.7609 20.0854L1.18262 1.21436Z"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className={styles.player}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeParser(
              videoUrl
            )}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </article>
  );
};

export default Video;

import styles from "./Youtube.module.scss";
import React from "react";
import Image from "next/image";
import { youtubeParser } from "../../utils/youtubeParser";
import YouTube from "react-youtube";
let youtubeElem;

const Video = ({ videoUrl, isActive, NoActive }) => {
  const [videoIsHidden, setVideoIsHidden] = React.useState(true);

  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      autoplay: 1,
    },
  };

  const onPlayerReady = (event) => {
    youtubeElem = event;
  };

  React.useEffect(() => {
    if (youtubeElem) {
      !isActive && youtubeElem.target.pauseVideo();
    }
  }, [isActive]);

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
        <YouTube
          videoId={youtubeParser(videoUrl)}
          opts={opts}
          className={styles.player}
          onReady={onPlayerReady}
        />
      )}
    </article>
  );
};

export default Video;

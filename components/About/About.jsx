import styles from "./About.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import VideoModal from "../Modal/VideoModal/VideoModal";
import { useWindowSize } from "../../utils/useWindowSize";
import { useRouter } from "next/router";

const About = ({ description, links, videoUrl, image }) => {
  const size = useWindowSize();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [bodyHeight, setBodyHeight] = React.useState();
  const bodyRef = React.useRef(null);
  const router = useRouter();
  const { locale } = router;

  React.useEffect(() => {
    if (bodyRef.current) {
      setBodyHeight(bodyRef.current.scrollHeight);
    }
  }, [bodyHeight]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  const getSize = () => {
    if (open) {
      return bodyHeight;
    } else {
      if (size.width >= 640) {
        return bodyHeight;
      } else {
        return 260;
      }
    }
  };

  return (
    <section className={styles.about}>
      <div className={"container"}>
        <div className={"xl:pt-32 xl:pb-32"}>
          <div className={"xl:translate-x-32 mb-5 md:mb-8"}>
            <h2 className="h2"> {locale==='ru' ? "О нас" : "ABOUT US"} </h2>
          </div>
          
          <div className={`${styles.videoPlaceholder}`}>
            {image && (
              <Image
                alt="video placeholder"
                src={image.data.attributes.url}
                quality={80}
                blurDataURL={image.data.attributes.placeholder}
                placeholder={"blur"}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            )}

            {/*<button className={styles.playBtn} >*/}
            {/*  <Image src={playSvg} alt={"playSvg"} />*/}
            {/*</button>*/}

            <button className={styles.playButton} onClick={openModal}>
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

          <div
            className={
              "grid md:grid-cols-2 xl:grid-cols-3 relative z-10 transform: xl:translate-x-32"
            }
          >
            <div>
              <p className={"text mb-5 md:mb-8 whitespace-pre-line"}>
                {description}
              </p>
            </div>
          </div>
          <div
            className={
              "grid grid-cols-1 xl:grid-cols-12 relative z-10 transform: xl:translate-x-32"
            }
          >
            <nav
              className={`${styles.nav} xl:col-span-4`}
              ref={bodyRef}
              style={{ maxHeight: getSize() }}
            >
              <ul className={"grid grid-cols-1 sm:grid-cols-2 gap-2.5"}>
                {links &&
                  links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.link}>{link.label}</Link>
                    </li>
                  ))}
              </ul>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className={`${styles.link} flex items-center`}
            >
              {locale === "en" ? "SHOW MORE" : "Показать больше"}
              <i>
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0245 3.5L6.02448 0.613249V6.38675L11.0245 3.5ZM0.974609 4H6.52448V3H0.974609V4Z"
                    fill="#FF9900"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>

      <VideoModal
        active={modalIsOpen}
        closeModal={closeModal}
        videoUrl={videoUrl}
      />
    </section>
  );
};

export default About;

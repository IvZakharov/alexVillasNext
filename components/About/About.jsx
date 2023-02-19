import styles from "./About.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import playSvg from "./img/play.svg";
import VideoModal from "../Modal/VideoModal/VideoModal";

const About = ({ description, links, videoUrl, image }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <section className={styles.about}>
      <div className={"container"}>
        <div className={"xl:pt-32 xl:pb-32"}>
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

            <button className={styles.playBtn} onClick={openModal}>
              <Image src={playSvg} alt={"playSvg"} />
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
            <nav className={`${styles.nav} xl:col-span-4`}>
              <ul className={"grid grid-cols-1 sm:grid-cols-2 gap-2.5"}>
                {links &&
                  links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.link}>{link.label}</Link>
                    </li>
                  ))}
              </ul>
            </nav>
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

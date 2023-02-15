import styles from "./About.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import playSvg from "./img/play.svg";
import VideoModal from "../Modal/VideoModal/VideoModal";
import { aboutData } from "../../data/AboutData";

const About = ({ru}) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  
  const closeModal = () => {
    setModalIsOpen(false)
  }
  
  const openModal = () => {
    setModalIsOpen(true)
  }

  let links;
  let text;
  if(ru){
    links = aboutData[0].link
    text = aboutData[0].text
  }else{
    links = aboutData[1].link
    text = aboutData[1].text
  }

  return (
    <section className={styles.about}>
      <div className={"container xl:pl-32 xl:pt-32 xl:pb-32"}>
        <div className={`${styles.videoPlaceholder} mb-10 md:mb-0`}>
          <Image
            alt="video placeholder"
            src={"/images/about/placeholder.jpg"}
            quality={80}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <button className={styles.playBtn} onClick={openModal}>
            <Image src={playSvg} alt={"playSvg"} />
          </button>
        </div>

        <div className={"grid md:grid-cols-2 xl:grid-cols-3 relative z-10 "}>
          <div className={""}>
            {text && text.map((obj, i) => (
              <p className={"text ruText mb-5 md:mb-8"} key={i}>
                {obj}
              </p>
            ))}
          </div>
        </div>
        <div className={"grid grid-cols-1 xl:grid-cols-2 relative z-10"}>
          <nav className={styles.nav}>
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
      
      <VideoModal active={modalIsOpen} closeModal={closeModal} videoUrl={'https://www.youtube.com/watch?v=eR3m3iYuZD8'} />
    </section>
  );
};

export default About;

import styles from "./About.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import playSvg from "./img/play.svg";
import VideoModal from "../Modal/VideoModal/VideoModal";

const About = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  
  const closeModal = () => {
    setModalIsOpen(false)
  }
  
  const openModal = () => {
    setModalIsOpen(true)
  }
  
  const links = [
    {
      label: "VILLA RENTALS",
      link: "#",
    },
    {
      label: "VILLA SALES",
      link: "#",
    },
    {
      label: "VILLA CONSTRUCTION",
      link: "#",
    },
    {
      label: "VILLA RENOVATION",
      link: "#",
    },
    {
      label: "PROPERTY MANAGEMENT",
      link: "#",
    },
    {
      label: "DESIGN & ARCHITECTURE",
      link: "#",
    },
    {
      label: "LAND ACQUISITION",
      link: "#",
    },
    {
      label: "LEGAL SERVICES",
      link: "#",
    },
  ];
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
            <p className={"text textSmall mb-5 md:mb-8"}>
              Alex Villas is the industry-leading real estate company in Bali.
            </p>
            <p className={"text textSmall mb-5 md:mb-8"}>
              We build, manage and renovate properties that make our clients
              smile happy.
            </p>
            <p className={"text textSmall mb-5 md:mb-8"}>
              We are a one-stop shop that has every & each of investor’s
              potential pains fully addressed.
            </p>
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

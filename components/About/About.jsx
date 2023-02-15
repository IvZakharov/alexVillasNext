import styles from "./About.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import playSvg from "./img/play.svg";
import VideoModal from "../Modal/VideoModal/VideoModal";

const About = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

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

  const linksRu = [
    {
      label: "СТРОИТЕЛЬСТВО",
      link: "#",
    },
    {
      label: "ПРОДАЖА",
      link: "#",
    },
    {
      label: "УПРАВЛЕНИЕ",
      link: "#",
    },
    {
      label: "РЕНОВАЦИЯ",
      link: "#",
    },
    {
      label: "АРЕНДА",
      link: "#",
    },
    {
      label: "ДИЗАЙН И АРХИТЕКТУРА",
      link: "#",
    },
    {
      label: "ПОКУПКА ЗЕМЛИ",
      link: "#",
    },
    {
      label: "ЮРИДИЧЕСКИЕ УСЛУГИ",
      link: "#",
    },
  ];
  return (
    <section className={styles.about}>
      <div className={"container xl:pl-32 xl:pt-32 xl:pb-32"}>
        <div className={`${styles.videoPlaceholder}`}>
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
            <p className={"text  mb-5 md:mb-8"}>
              ALEX VILLAS - это группа компаний на рынке недвижимости Бали.
            </p>
            <p className={"text mb-5 md:mb-8"}>
              8 лет опыта, 3500 отзывов на AirBNB, 78 инвесторов и 176 объектов
              в работе.
            </p>
          </div>
        </div>
        <div className={"grid grid-cols-1 xl:grid-cols-3 relative z-10"}>
          <nav className={styles.nav}>
            <ul className={"grid grid-cols-1 sm:grid-cols-2 gap-2.5"}>
              {linksRu &&
                linksRu.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>

      <VideoModal
        active={modalIsOpen}
        closeModal={closeModal}
        videoUrl={"https://www.youtube.com/watch?v=eR3m3iYuZD8"}
      />
    </section>
  );
};

export default About;

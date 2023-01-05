import styles from "./Hero.module.scss";
import Image from "next/image";
import FormContactHero from "../FormContactHero/FormContactHero";
import HeroMenu from "../HeroMenu/HeroMenu";
import { Oswald } from "@next/font/google";

const oswald = Oswald({ subsets: ["latin", "cyrillic"] });

const Hero = ({ h1first, h1second, text, subLable }) => {
  const heroArr = [
    {
      lable: "CONSTRUCTION",
      link: "#",
    },
    {
      lable: "AGENCY",
      link: "#",
    },
    {
      lable: "MANAGEMENT",
      link: "#",
    },
    {
      lable: "RENOVATION",
      link: "#",
    },
  ];
  return (
    <section className={`container p-0`}>
      <div className={styles.hero}>
        <div className={styles.background}>
          <Image
            alt="ALEX VILLAS"
            src={"/images/hero.png"}
            quality={80}
            width={1440}
            height={780}
            style={{
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        </div>
        <div className={`${styles.h1Block} mx-auto`}>
          <h1 className={`${styles.h1} ${oswald.className}`}>
            {h1first}
            <br />
            <span>{h1second}</span>
          </h1>
          <FormContactHero hrefLabel={"PICK YOUR INVESTMENT TYPE"} />
          {text !== null ? (
            <div className={styles.textBlock}>
              {" "}
              <div className={styles.text}>{text}</div>
            </div>
          ) : (
            ""
          )}
          {subLable !== null ? (
            <div className={styles.subLable}>{subLable}</div>
          ) : (
            ""
          )}
        </div>
        <HeroMenu menuArr={heroArr} />
      </div>
    </section>
  );
};

export default Hero;

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
    <section className="container">
      <div className={styles.hero}>
        <div className={`${styles.h1Block} mx-auto`}>
          <h1 className={`${styles.h1} ${oswald.className}`}>
            {h1first}
            <br />
            <span className={oswald.className}>{h1second}</span>
          </h1>
          <div className={styles.FormText}>
            <FormContactHero hrefLabel={"PICK YOUR INVESTMENT TYPE"} />
            {text !== null ? (
                <div className={styles.textBlock}>
                  {" "}
                  <div className={styles.text}>{text}</div>
                </div>
            ) : (
                ""
            )}
          </div>
          {subLable !== null ? (
            <div className={`${styles.subLable} ${oswald.className}`}>{subLable}</div>
          ) : (
            ""
          )}
        </div>
        <div className="hidden md:block">
          <HeroMenu menuArr={heroArr} />
        </div>

      </div>
    </section>
  );
};

export default Hero;

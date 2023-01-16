import styles from "./Hero.module.scss";
import Image from "next/image";
import FormContactHero from "../FormContactHero/FormContactHero";
import HeroMenu from "../HeroMenu/HeroMenu";
import parse from "html-react-parser";

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
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          alt="ALEX VILLAS"
          src={"/images/hero.png"}
          quality={80}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: 0.5,
          }}
        />
      </div>
      <div className="container">
        <div className={`${styles.h1Block} mx-auto`}>
          <h1 className={`${styles.h1} h1`}>
            {h1first}
            <br />
            <span>{h1second}</span>
          </h1>
          <div className={styles.FormText}>
            <FormContactHero hrefLabel={"PICK YOUR INVESTMENT TYPE"} />
            {text && (
              <div className={styles.textBlock}>
                {" "}
                <div className={`${styles.text} text`}>{parse(text)}</div>
              </div>
            )}
          </div>
          {subLable && <div className={`${styles.subLable}`}>{subLable}</div>}
        </div>
        <div className={"hidden md:block"}>
          <HeroMenu menuArr={heroArr} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

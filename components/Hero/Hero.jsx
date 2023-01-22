import styles from "./Hero.module.scss";
import Image from "next/image";
import FormContactHero from "../FormContactHero/FormContactHero";
import HeroMenu from "../HeroMenu/HeroMenu";
import parse from "html-react-parser";

const Hero = ({ h1first, h1second, text, subLable, dot }) => {
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
          {dot && (
            <div className={styles.dot}>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99937 11.3106C9.34064 11.3106 10.4279 10.1104 10.4279 8.62995C10.4279 7.14949 9.34064 5.94934 7.99937 5.94934C6.65811 5.94934 5.5708 7.14949 5.5708 8.62995C5.5708 10.1104 6.65811 11.3106 7.99937 11.3106Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.1515 14.4513L9.28733 18.7585C8.9458 19.1388 8.48279 19.3524 8.00004 19.3524C7.51728 19.3524 7.05427 19.1388 6.71274 18.7585L2.84767 14.4513C1.82879 13.3156 1.13493 11.8686 0.853836 10.2933C0.572746 8.71797 0.717049 7.08513 1.2685 5.60124C1.81995 4.11736 2.75378 2.84906 3.9519 1.95673C5.15002 1.06441 6.55862 0.588135 7.99958 0.588135C9.44054 0.588135 10.8491 1.06441 12.0473 1.95673C13.2454 2.84906 14.1792 4.11736 14.7307 5.60124C15.2821 7.08513 15.4264 8.71797 15.1453 10.2933C14.8642 11.8686 14.1704 13.3156 13.1515 14.4513V14.4513Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div className={styles.address}>{parse(dot)}</div>
            </div>
          )}
        </div>
        <div className={"hidden md:block"}>
          <HeroMenu />
        </div>
      </div>
    </section>
  );
};

export default Hero;

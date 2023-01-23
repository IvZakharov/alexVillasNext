import React from "react";
import styles from "./AlexVillas.module.scss"
import Image from "next/image";
import parse from "html-react-parser";

const AlexVillas = ({textBlock1, textBlock2, textBlock3}) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.background} mx-auto mb-4 lg:mb-14`}>
          <Image src={'/images/alexvillas/alexvillas.png'}
                 quality={80}
                 priority
                 fill
                 sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 10vw,
              33vw"
                 style={{
                   objectFit: "cale-down",
                 }}
          />
        </div>
        <div className={`flex md:justify-between ${styles.textBlocks}`}>
          <div className={`${styles.text}`}>
            {textBlock1 &&
              <p className="text mb-10">{parse(textBlock1)}</p>
            }
            {textBlock2 &&
              <p className="text mb-10">{parse(textBlock2)}</p>
            }
          </div>
          {textBlock3 &&
            <div className={`${styles.blockThree} md:flex md:items-end`}>
              <p className="text mb-10">{parse(textBlock3)}</p>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default AlexVillas;
import React from "react";
import styles from "./AlexVillas.module.scss"
import Image from "next/image";

import md from "markdown-it";
import parse from "html-react-parser";

const AlexVillas = ({firstText, secondText, logo}) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.background} mx-auto mb-4 lg:mb-14`}>
          <Image src={ logo ? logo : '/images/alexvillas/alexvillas.png'}
                 quality={80}
                 priority
                 fill
                 alt={"Alex Villas"}
                 sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 80vw,
             50vw"
                 style={{
                   objectFit: "contain",
                 }}
          />
        </div>
        <div className={`flex md:justify-between ${styles.textBlocks}`}>
          <div className={`${styles.text}`} >
            <div className={"text"}  dangerouslySetInnerHTML={{ __html: md().render(firstText) }}></div>
          </div>
          {secondText &&
            <div className={`${styles.blockThree} md:flex md:items-end`}>
              <div className={`text ${styles.second}`}>{parse(secondText)}</div>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default AlexVillas;
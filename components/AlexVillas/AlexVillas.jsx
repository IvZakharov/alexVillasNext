import React from "react";
import styles from "./AlexVillas.module.scss"
import Image from "next/image";
import parse from "html-react-parser";
import PatternHouse from "../PatternHouse/PatternHouse";
import ContactAlex from "../ContactsAlex/ContactAlex";

const Houses = [
  {
    title: '10',
    bedroom: '1-BEDROOM',
    housformat: 'TOWNHOUSES',
  },
  {
    title: '2',
    bedroom: '1-BEDROOM' ,
    housformat: 'SMART VILLAS',
  },
  {
    title: '3',
    bedroom: '2-BEDROOM',
    housformat: 'SMART VILLAS',
  },
  {
    title: '1',
    bedroom: '3-BEDROOM',
    housformat: 'SMART VILLAS',
  },
]

const AlexVillas = ({textBlock1, textBlock2, textBlock3}) => {
  return (
    <section className={styles.section}>
      <div className="container pt-12 xl:px-32">
        <div className={`${styles.background}  mx-auto mb-14`}>
          <Image src={'/images/alexvillas/alexvillas.png'}
                 quality={80}
                 priority
                 height={600}
                 width={700}
                 style={{
                   objectFit: "cover",
                 }}
          />
        </div>
        <div className="flex md:justify-between">
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
      <ContactAlex />
      {/*<PatternHouse Houses={Houses}/>*/}
    </section>
  );
};

export default AlexVillas;
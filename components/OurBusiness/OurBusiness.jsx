import React from "react";
import styles from "./OurBusiness.module.scss";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

const OurBusiness = ({ locale, stats }) => {
  return (
    <section className="container ">
      <div className={styles.OurBusiness}>
        <div className={styles.rowOne}>
          <h2 className={`${styles.text} h1`}>
            {locale === "en" ? (
              <>
                why <br />
                <span>ALEX</span> <br />
                <span>VILLAS?</span>
              </>
            ) : (
              <>
                почему <br />
                <span>ALEX</span> <br />
                <span>VILLAS?</span>
              </>
            )}
          </h2>
          <div className={styles.stats}>
            <p className={`${styles.textGroup} text`}>
              {locale === "en" ? (
                <>
                
                </>
              ) : (
                <>
                  Alex Villas Group это <br /> инвестиционная компания <br /> с
                  8-летним опытом.
                </>
              )}
            </p>
            <div className={styles.Numbers}>
              {stats &&
                stats.attributes?.items.map((obj, idx) => (
                  <div className={styles.LineUp} key={idx}>
                    <div className={styles.BigNum}>{obj.value}</div>
                    <p className={styles.subTitle}>{obj.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.logosBlock}>
          {stats.attributes?.partners && stats.attributes?.partners.map((obj, idx) =>(
            <div className={styles.logos} key={idx}>
              <Link href={obj.url} target={'_blank'} rel={'noreferrer'}>
                <Image src={obj.image.data.attributes?.url}
                       width={obj.image.data.attributes?.width}
                       height={obj.image.data.attributes?.height}
                />
              </Link>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default OurBusiness;

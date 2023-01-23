import React from "react";
import styles from "./PatternHouse.module.scss"
import Link from "next/link";
import parse from "html-react-parser";

const PatternHouse = ({Houses}) => {
  return (
    <section className="container">
      <div className={`${styles.PatternHouse} container md:flex md:justify-between lg:px-24`}>
        <div className={styles.about}>
          {Houses && Houses.map((obj, i) => (
              <div className={styles.block} key={i}>
                <div className={styles.BigNum}>
                  {obj.title}
                </div>
                <div className={styles.bedroom}>
                  {obj.bedroom}
                </div>
                <div className={styles.houseformat}>
                  {obj.housformat}
                </div>
              </div>
          )) }
  
        </div>
        <div className={styles.second}>
          <div className={styles.download}>
            <Link href={'#'}>
              Download PDF
            </Link>
          </div>
          <div className={styles.contact}>
            <Link href={'#'}>
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatternHouse;
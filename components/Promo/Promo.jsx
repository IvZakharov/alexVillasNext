import React from "react";
import styles from "./Promo.module.scss";
import Link from "next/link";
import Button from "../../ui/Button/Button";
import parse from "html-react-parser";

const Promo = ({ Data, width, links, color }) => {
  return (
    <section className="container">
      <div
        className={`${styles.PatternHouse} container p-0 md:flex md:justify-between`}
      >
        <div className={styles.about  + ' ' + (width ? styles.width : "")}>
          {Data &&
            Data.map((obj, i) => (
              <div className={styles.block} key={i}>
                <div className={`${styles.bigTitle} ${color && (styles.white)} h2`}>{parse(obj.title)}</div>
                <div className={`${styles.lable} text`}>{obj.lable}</div>
              </div>
            ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Promo;

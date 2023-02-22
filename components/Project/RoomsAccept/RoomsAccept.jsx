import React from "react";
import styles from "./RoomsAccept.module.scss";
import Link from "next/link";
import Button from "../../../ui/Button/Button";
import parse from "html-react-parser";

const RoomsAccept = ({ Data }) => {
  return (
    <section className="container">
      <div
        className={`${styles.PatternHouse} container p-0 md:flex md:justify-center`}
      >
        <div className={styles.about}>
          {Data &&
            Data.map((obj, i) => (
              <div className={styles.block} key={i}>
                <div className={`${styles.bigTitle} h2`}>{parse(obj.title)}</div>
                <div className={`${styles.lable} text`}>{parse(obj.label)}</div>
              </div>
            ))}
        </div>
        
      </div>
    </section>
  );
};

export default RoomsAccept;

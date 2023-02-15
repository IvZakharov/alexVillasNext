import React from "react";
import styles from "./ComplexPlash.module.scss"
import parse from "html-react-parser";

const ComplexPlash = ({items}) => {
  return (
    <div className="container flex justify-center relative">
      <div className={styles.ComplexPlash}>
        {items && items.map((obj, i)=>(
          <div className={styles.Items} key={i}>
            <span>{parse(obj.lable)}</span>
            <span className={styles.bot}>{obj.sublable}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplexPlash;
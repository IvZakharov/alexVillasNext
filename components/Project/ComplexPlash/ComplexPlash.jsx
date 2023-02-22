import React from "react";
import styles from "./ComplexPlash.module.scss"
import parse from "html-react-parser";

const ComplexPlash = ({items}) => {
  return (
    <div className="container flex justify-center relative">
      <div className={styles.ComplexPlash}>
        {items && items.map((obj, i)=>(
          //console.log(obj)
          <div className={styles.Items} key={i}>
            <span>{parse(obj.description)}</span>
            <span className={styles.bot}>{obj.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplexPlash;
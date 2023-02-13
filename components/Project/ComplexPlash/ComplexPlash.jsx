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
        {/*<div className={styles.Items}>*/}
        {/* <span> Средняя окупаемость:</span>*/}
        {/*  <span className={styles.bot}>5-6 лет</span>*/}
        {/*</div>*/}
        {/*<div className={styles.Items}>*/}
        {/* <span> Инвестиции от</span>*/}
        {/*  <span className={styles.bot}>175.000$ - 445.000$</span>*/}
        {/*</div>*/}
        {/*<div className={styles.Items}>*/}
        {/*  <span>Топ локация <b>Чангу,</b></span>*/}
        {/*  <span className={styles.bot}>5 минут до океана</span>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default ComplexPlash;
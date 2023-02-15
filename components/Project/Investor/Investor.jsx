import React from "react";
import styles from "./Investor.module.scss"
import { invest } from "../../../data/invest";
import Image from "next/image";

const Investor = () => {
  return (
    <section className={styles.Investor}>
      <div className="container">
        <div className="flex justify-between">
          <div className={styles.textBlock}>
            <div className={styles.title}>
              <h2 className={"h2"}>Что получает <span>инвестор</span>?</h2>
            </div>
            <div className="flex flex-wrap justify-between">
              {invest && invest.map((obj, i)=>(
                <div className={`${styles.text}`}>
                  <div className={`${styles.lable} h2`}>{obj.lable}</div>
                  <div className={`${styles.span} text`}>{obj.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageBlock}>
            <div className={styles.img}>
              <Image src={"/images/projects/enthusiastic-salesma.png"} sizes={'100vw'} fill={"cover"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investor;
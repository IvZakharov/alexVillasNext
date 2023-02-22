import React from "react";
import styles from "./Investor.module.scss"
import { invest } from "../../../data/invest";
import Image from "next/image";
import parse from "html-react-parser";

const Investor = ({invest}) => {
  {console.log(invest)}
  return (
    <section className={styles.Investor}>
      <div className="container">
        <div className="flex justify-between">
          <div className={styles.textBlock}>
            <div className={styles.title}>
              <h2 className={"h2"}>{parse(invest.Title)}</h2>
            </div>
            <div className="flex flex-wrap justify-between">
              {invest.Items && invest.Items.map((obj, i)=>(
                <div className={`${styles.text}`} key={i}>
                  <div className={`${styles.lable}`}>{parse(obj.description)}</div>
                  <div className={`${styles.span} text`}>{obj.Text}</div>
                </div>
              ))}
            </div>
          </div>
          {/*<div className={styles.imageBlock}>*/}
          {/*  <div className={styles.img}>*/}
          {/*    <Image src={"/images/projects/enthusiastic-salesma.png"} sizes={'100vw'} fill={"cover"}/>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default Investor;
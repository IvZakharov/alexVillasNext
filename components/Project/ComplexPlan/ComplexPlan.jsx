import React from "react";
import styles from "./ComplexPlan.module.scss"
import Image from "next/image";

const ComplexPlan = () => {
  return (
    <section className={styles.ComplexPlan}>
      <div className="container">
        <h2 className="h2">План Комплекса</h2>
        <p className={`${styles.AfterH2} text`}><span>Alex Complex</span> 5 в самой топовой<br /> локации Чангу, 900 м до океана</p>
        <div className={styles.PlanBlock}>
          <div className={styles.PlanImg}>
            <Image src={'/images/projects/photo.png'} fill={'cover'} />
          </div>
          <div className="container flex justify-center relative">
            <div className={styles.AcceptToBye}>
              <div className={styles.BlockAccept}>
                <p className={"text"}>К покупке доступны:</p>
                <ul className={"text"}>
                  <li>1 трехспальная смарт-вилла</li>
                  <li>2 односпальные смарт-виллы</li>
                  <li>10<br /> таунхаусов</li>
                  <li>13<br /> апартаментов</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.buttonBlock}>
            <a href={"#"} className={`${styles.Button} text`}>
              Забронировать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplexPlan;
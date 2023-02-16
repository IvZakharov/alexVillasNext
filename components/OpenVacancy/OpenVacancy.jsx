import React from "react";
import styles from "./OpenVacancy.module.scss"
import Link from "next/link";

const OpenVacancy = () => {
  return (
    <section className={styles.OpenVacancy}>
      <div className="container">
        <div className={styles.title}>
          <h2 className={"h2"}> Открытые<br />Вакансии</h2>
        </div>
        <div className={styles.subLable}>
          SALES DEPARTMENT
        </div>
        <div className={styles.vacancy}>
          <div className={styles.vacan}>
            <div className={`${styles.lable} text`}>
              Диспозл-менеджер
            </div>
            <div className={`${styles.link} text textSmall`}>
              <Link href={"https://forms.gle/cfqPvMMo2vdWkEWU7"}>Заполнить форму</Link>
            </div>
          </div>
          <div className={styles.vacan}>
            <div className={`${styles.lable} text`}>
              Руководитель отдела продаж
            </div>
            <div className={`${styles.link} text textSmall`}>
              <Link href={"https://forms.gle/LgqpJk2rLVpuqSHu9"}>Заполнить форму </Link>
            </div>
          </div>
          <div className={styles.vacan}>
            <div className={`${styles.lable} text`}>
              Личный асситстент
            </div>
            <div className={`${styles.link} text textSmall`}>
              <Link href={"https://forms.gle/LgqpJk2rLVpuqSHu9"}>Заполнить форму </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenVacancy;
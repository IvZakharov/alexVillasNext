import React from "react";
import styles from "./VillasParam.module.scss"
import ParamCard from "./ParamCard";
import { ParamVillas } from "../../../data/ParamVillas";
import Link from "next/link";
import { useRouter } from "next/router";


const VillasParam = ({Villas}) => {
  const router = useRouter();
  const { locale } = router;
  //console.log(Villas)
  return (
    <section className={styles.VillasParam}>
      <div className="container">
        <h2 className={"h2"}>{ locale === 'ru' ? <><span>Информация</span> о виллах</> : <>ABOUT <span>VILLAS</span></>}</h2>
        <div className={`${styles.lable} uppercase`}>{locale ==='ru' ? "Основные параметры" : "Specifications"}</div>
        {Villas && Villas.map((obj) =>(
          <ParamCard Param={obj} index={obj.id} />
          ))}
        <div className={styles.buttonBlock}>
          <Link href={'#form'} className={`button text`}>
            {locale === 'ru' ? "Получить расчёт возврата инвестиций" : "Get ROI CALCULATION" }
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VillasParam;
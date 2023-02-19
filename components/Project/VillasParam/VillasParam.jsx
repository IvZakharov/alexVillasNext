import React from "react";
import styles from "./VillasParam.module.scss"
import ParamCard from "./ParamCard";
import { ParamVillas } from "../../../data/ParamVillas";
import Link from "next/link";


const VillasParam = ({Villas}) => {
  //console.log(Villas)
  return (
    <section className={styles.VillasParam}>
      <div className="container">
        <h2 className={"h2"}><span>Информация</span> о виллах</h2>
        {Villas && Villas.map((obj) =>(
          <ParamCard Param={obj} index={obj.id} />
          ))}
        <div className={styles.buttonBlock}>
          <Link href={'#'} className={`${styles.Button} text`}>
            Получить расчет возврата инвестиций
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VillasParam;
import React from "react";
import styles from "./VillasParam.module.scss"
import ParamCard from "./ParamCard";
import { ParamVillas } from "../../../data/ParamVillas";


const VillasParam = () => {
  return (
    <section className={styles.VillasParam}>
      <div className="container">
        <h2 className={"h2"}><span>Информация</span> о виллах</h2>
        {ParamVillas && ParamVillas.map((obj, i) =>(
          <ParamCard Param={obj} index={i} />
          ))}
        
      </div>
    </section>
  );
};

export default VillasParam;
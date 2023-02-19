import React from "react";
import styles from "./ComplexPlan.module.scss"
import Image from "next/image";
import Promo from "../../Promo/Promo";

const ComplexPlan = () => {
  return (
    <section className={styles.ComplexPlan}>
      <div className="container">
        <div className="md:grid md:grid-cols-2 mb-7 lg:mb-12">
          <h2 className="h2 mb-4 md:mb-0">План Комплекса</h2>
          <p className={`text`}><span>Alex Complex</span> 5 в самой топовой<br /> локации Чангу, 900 м до океана</p>
        </div>
        <div className={styles.PlanBlock}>
          <div className={styles.PlanImg}>
            <Image src={'/images/projects/photo.png'} fill={'cover'} />
          </div>
          <div className="container flex justify-center relative">
            <div className={styles.AcceptToBye}>
              <div className={styles.BlockAccept}>
                <h3 className={"h2 white mb-4 md:mb-0"} >{"К покупке \nдоступны:"}</h3>
                <Promo
                  color
                  Data = {[
                    {
                      title: '1',
                      lable: "трехспальная \nсмарт-вилла",
                    },
                    {
                      title: '2',
                      lable: "односпальные \nсмарт-виллы",
                    },
                    {
                      title: "10",
                      lable: "таунхаусов",
                    },
                    {
                      title: "13",
                      lable: "апартаментов",
                    },
                  ]}
                  width
                />
                
                {/*<ul className={"text"}>*/}
                {/*  <li>{"1 трехспальная \nсмарт-вилла"}</li>*/}
                {/*  <li>{"2 односпальные \nсмарт-виллы"}</li>*/}
                {/*  <li>{"10 \nтаунхаусов"}</li>*/}
                {/*  <li>{"13 \nапартаментов"}</li>*/}
                {/*</ul>*/}
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
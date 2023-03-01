import React from "react";
import styles from "./ComplexPlan.module.scss"
import Image from "next/image";
import Promo from "../../Promo/Promo";
import parse from "html-react-parser";
import RoomsAccept from "../RoomsAccept/RoomsAccept";
import { useRouter } from "next/router";

const ComplexPlan = ({ComplexPlan}) => {
  const router = useRouter();
  const { locale } = router;
  
  return (
    <section className={styles.ComplexPlan}>
      <div className="container">
        <div className="mb-7 lg:mb-12 md:flex items-end">
          <h2 className="h2 whitespace-pre-line mb-5 md:mb-0 md:mr-14 xl:mr-20">{ComplexPlan.Title}</h2>
          <p className={`text textSmall max-w-sm`}>{parse(ComplexPlan.description)}</p>
        </div>
        <div className={styles.PlanBlock}>
          <div className={styles.PlanImg}>
            <Image src={ComplexPlan.Plan.data.attributes?.url} fill={'cover'} />
          </div>
          
          <div className="container p-0 flex justify-center relative">
            <div className={styles.AcceptToBye}>
              <div className={styles.BlockAccept}>
                <h3 className={"h2 white mb-4 md:mb-0"} >{locale === 'ru' ? "К покупке доступны:" : "Available now:"}</h3>
                {ComplexPlan?.RoomsComplex && (
                  <RoomsAccept Data={ComplexPlan.RoomsComplex} />
                  )}
              </div>
            </div>
          </div>
          <div className={styles.buttonBlock}>
            <a href={"#form"} className={` button text`}>
              {locale === 'ru'? "Забронировать" : "BOOK YOUR PROPERTY"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplexPlan;
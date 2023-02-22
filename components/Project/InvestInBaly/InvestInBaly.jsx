import React from "react";
import styles from "./InvestInBaly.module.scss";
import Image from "next/image";
import parse from "html-react-parser";
import Promo from "../../Promo/Promo";
import { useRouter } from "next/router";

const dataRu = {
  title:"<span>10 причин</span> \nинвестировать в Бали",
  blockFirst:"<b>За 10 лет поток </b> туристов вырос",
  out: "272%",
  outLabel: "внешний",
  in: "346%",
  inLabel: "ВНУТРЕННИЙ",
  schemeTitle:"<b>Недвижимость на Бали</b> - постоянно растущий в цене <b>ликвидный актив</b>. Актив для людей, которые желают:",
  threeBlock: [
    "безопасно <b>диверсифицировать капитал</b>",
    "несколько месяцев в году <b>жить на острове</b>",
    "получать <b>пассивный доход в $</b>, сдавая недвижимость в аренду",
  ],
}

const dataEn = {
  title:"<span>10 REASONS</span> \nTO INVEST IN BALI",
  blockFirst:"Tourist flow has grown over the past 10 years",
  out: "272%",
  outLabel: "foreigners",
  in: "346%",
  inLabel: "natives",
  schemeTitle:"<b>Real estate in Bali</b> is a fast-increasing <b>liquid asset</b>.<br /> For investors who want to",
  threeBlock: [
    "<b>diversify their capital</b> safely",
    "<b>live on the island</b> for a couple of months a year",
    "rent out their real property to create <b>passive income in $</b>",
  ],
}


const textRu = [
  "надежная диверсификация капитала",
  "постоянно растущая стоимость земли",
  "быстрая окупаемость инвестиций за счет арендного бизнеса",
  "комфортный инвестиционный климат",
  "365 дней сезонность острова",
  "высокая заполняемость острова 80-90%",
  "15-20% рост средней стоимости аренды в год",
  "низкий уровень инфляции",
  "гарантированный пассивный доход в стабильной валюте $",
]

const textEn = [
  "Solid capital diversification",
  "Ever-increasing land costs",
  "Fast return on investment due to the rental business",
  "Comfortable investment climate",
  "365 days of travel season",
  "80-90% high occupancy rate",
  "+15-20% the average annual rent increase rate",
  "Low inflation",
  "Permanent passive income in a stable currency $",
]

const InvestInBaly = ({ title, blockFirst }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <section className={styles.Invest}>
      <div className="container">
        <div className={styles.h2Titile}>
          <h2 className="h2">{locale == 'ru' ? parse(dataRu.title) : parse(dataEn.title)}</h2>
        </div>
        {/*Официальная статистика блок*/}
        <div className={styles.static}>
          <div className={styles.textBlock + " " + styles.firstBlock}>
            {locale == 'ru' ? parse(dataRu.blockFirst) : parse(dataEn.blockFirst)}
          </div>
          <div className={styles.vertLine}></div>
          <div className={styles.about}>
            <div className={styles.block}>
              <div className={`${styles.bigTitle} h2`}>{locale == 'ru' ? parse(dataRu.out) : parse(dataEn.out)}</div>
              <div className={`${styles.lable} text`}>{locale == 'ru' ? parse(dataRu.outLabel) : parse(dataEn.outLabel)}</div>
            </div>
            <div className={styles.vertLine}></div>
            <div className={styles.block}>
              <div className={`${styles.bigTitle} h2`}>{locale == 'ru' ? parse(dataRu.in) : parse(dataEn.in)}</div>
              <div className={`${styles.lable} text`}>{locale == 'ru' ? parse(dataRu.inLabel) : parse(dataEn.inLabel)}</div>
            </div>
          </div>
        </div>
        <div className={styles.offstatic}>
          {locale == 'ru' ? "Официальная статистика от правительства Индонезии" : "Official statistics from the Indonesian government"}
        </div>
        {/*Блок с галочками*/}
        <div className={styles.BlockCheks}>
          <div className={styles.lineFirst}></div>
          <div className={styles.lineSecond}></div>
          <div className={styles.lineThird}></div>
          {locale == 'ru' ? textRu.map((obj, i)=>(
            <div className={styles.Block} key={i}>
              <div className={styles.Image}>
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="39" cy="39" r="39" fill="#FF9900" />
                  <path
                    d="M27 39L35 47L51 31"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={"text"}>{obj}</div>
            </div>
          )): textEn.map((obj, i)=>(
            <div className={styles.Block} key={i}>
              <div className={styles.Image}>
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="39" cy="39" r="39" fill="#FF9900" />
                  <path
                    d="M27 39L35 47L51 31"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={"text"}>{obj}</div>
            </div>
          ))
          }
        </div>
        {/* Блок недвижемости на бали */}
        <div className={styles.Scheme}>
          <div className={styles.NedWig}>
            <p className={"text"}>
              {locale === 'ru' ? parse(dataRu.schemeTitle) : parse(dataEn.schemeTitle)}
            </p>
          </div>
          <div className={styles.arrowWing}>
            <svg
              width="24"
              height="50"
              viewBox="0 0 24 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9393 96.0607C11.5251 96.6464 12.4749 96.6464 13.0607 96.0607L22.6066 86.5147C23.1924 85.9289 23.1924 84.9792 22.6066 84.3934C22.0208 83.8076 21.0711 83.8076 20.4853 84.3934L12 92.8787L3.51472 84.3934C2.92893 83.8076 1.97918 83.8076 1.3934 84.3934C0.807612 84.9792 0.807612 85.9289 1.3934 86.5147L10.9393 96.0607ZM10.5 0L10.5 95H13.5L13.5 0L10.5 0Z"
                fill="#FF9900"
              />
            </svg>
          </div>
          <div className={styles.ThreeBlocks}>
            {locale === 'ru' ? dataRu.threeBlock.map((obj, i)=>(
              <div className={styles.block} key={i}>
                {parse(obj)}
              </div>
            )) : dataEn.threeBlock.map((obj, i)=>(
              <div className={styles.block} key={i}>
                {parse(obj)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestInBaly;

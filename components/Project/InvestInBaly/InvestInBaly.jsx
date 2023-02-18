import React from "react";
import styles from "./InvestInBaly.module.scss"
import Image from "next/image";
import parse from "html-react-parser";

const InvestInBaly = ({
  title,
  blockFirst,
}) => {
  return (
    <section className={styles.Invest}>
      <div className="container">
        <div className={styles.h2Titile}>
          <h2 className="h2">{parse(title)}</h2>
        </div>
        {/*Круг со стрелкой*/}
        <div className={styles.background}>
          <div className={styles.arrowBot}>
            <svg width="24" height="80" viewBox="0 0 24 97" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9393 96.0607C11.5251 96.6464 12.4749 96.6464 13.0607 96.0607L22.6066 86.5147C23.1924 85.9289 23.1924 84.9792 22.6066 84.3934C22.0208 83.8076 21.0711 83.8076 20.4853 84.3934L12 92.8787L3.51472 84.3934C2.92893 83.8076 1.97918 83.8076 1.3934 84.3934C0.807612 84.9792 0.807612 85.9289 1.3934 86.5147L10.9393 96.0607ZM10.5 0L10.5 95H13.5L13.5 0L10.5 0Z" fill="#FF9900"/>
            </svg>
          </div>
        </div>
        {/*Официальная статистика блок*/}
        <div className={styles.static}>
          <div className={styles.textBlock+" "+styles.firstBlock}>
            {parse(blockFirst)}
            {/*<span className={styles.bolder}>За 10 лет поток </span> туристов вырос*/}
            
          </div>
          <div className={styles.vertLine}></div>
          <div className={styles.bloks}>
            <div className={styles.textBlock}>
              <span className={styles.bigNum}>272%</span> внешний
            </div>
            <div className={styles.textBlock}>
              <span className={styles.bigNum}>346%</span> внутренний
            </div>
          </div>
        </div>
        <div className={styles.offstatic}>Официальная статистика от правительства Индонезии</div>
        {/*Блок с галочками*/}
        <div className={styles.BlockCheks}>
          <div className={styles.lineFirst}></div>
          <div className={styles.lineSecond}></div>
          <div className={styles.lineThird}></div>
          <div className={styles.Block}>
            <div className={styles.Image}>
              <Image
                alt={'check'}
                src={'/images/icons/img1.png'}
                quality={80}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.Lable}>надежная диверсификация капитала</div>
          </div>
          <div className={styles.Block}>
            <div className={styles.Image}>
              <Image
                alt={'check'}
                src={'/images/icons/img1.png'}
                quality={80}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.Lable}>постоянно растущая стоимость земли</div>
          </div>
          <div className={styles.Block}>
            <div className={styles.Image}>
              <Image
                alt={'check'}
                src={'/images/icons/img1.png'}
                quality={80}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.Lable}>быстрая окупаемость инвестиций за счет арендного бизнеса</div>
          </div>
          <div className={styles.Block}>
            <div className={styles.Image}>
              <Image
                alt={'check'}
                src={'/images/icons/img1.png'}
                quality={80}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.Lable}>комфортный инвестиционный клима</div>
          </div>
          <div className={styles.Block}>
            <div className={styles.Image}>
              <Image
                alt={'check'}
                src={'/images/icons/img1.png'}
                quality={80}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.Lable}>365 дней сезонность острова</div>
          </div>
          <div className={styles.Block}>
            <div className={styles.Image}>
              <Image
                alt={'check'}
                src={'/images/icons/img1.png'}
                quality={80}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.Lable}>высокая заполняемость острова 80-90%</div>
          </div>
          <div className={styles.Block}>
            <div className={styles.Image}>
              <Image
                alt={'check'}
                src={'/images/icons/img1.png'}
                quality={80}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.Lable}>15-20% рост средней стоимости аренды в год</div>
          </div>
          <div className={styles.Block}>
            <div className={styles.Image}>
              <Image
                alt={'check'}
                src={'/images/icons/img1.png'}
                quality={80}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.Lable}>низкий уровень инфляции</div>
          </div>
          <div className={styles.Block}>
            <div className={styles.Image}>
              <Image
                alt={'check'}
                src={'/images/icons/img1.png'}
                quality={80}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.Lable}>гарантированный пассивный доход в стабильной валюте $</div>
          </div>
        </div>
        {/* Блок недвижемости на бали */}
        <div className={styles.Scheme}>
          <div className={styles.NedWig}>
            <p className={"text"}><b>Недвижимость на Бали</b> - постоянно растущий в цене <b>ликвидный актив</b>. Актив для людей, которые желают:</p>
          </div>
          <div className={styles.arrowWing}>
            <svg width="24" height="50" viewBox="0 0 24 97" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9393 96.0607C11.5251 96.6464 12.4749 96.6464 13.0607 96.0607L22.6066 86.5147C23.1924 85.9289 23.1924 84.9792 22.6066 84.3934C22.0208 83.8076 21.0711 83.8076 20.4853 84.3934L12 92.8787L3.51472 84.3934C2.92893 83.8076 1.97918 83.8076 1.3934 84.3934C0.807612 84.9792 0.807612 85.9289 1.3934 86.5147L10.9393 96.0607ZM10.5 0L10.5 95H13.5L13.5 0L10.5 0Z" fill="#FF9900"/>
            </svg>
          </div>
          <div className={styles.ThreeBlocks}>
            <div className={styles.block}>
              безопасно <b>диверсифицировать капитал</b>
            </div>
            <div className={styles.block}>
              несколько месяцев в году <b>жить на острове</b>
            </div>
            <div className={styles.block}>
              получать <b>пассивный доход в $</b>, сдавая недвижимость в аренду
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestInBaly;
import styles from "./Steps.module.scss";
import React from "react";
import Image from "next/image";

const RenovationSteps = ({ imageBefore, imageAfter }) => {
  return (
    <section className={styles.steps}>
      <div className={"container"}>
        <h2 className={"h2 mb-8 md:mb-12"}>
          <span>HOW WE DO IT</span>
        </h2>

        <div className={"grid md:grid-cols-6 xl:grid-cols-12"}>
          <div className={`${styles.stairsIcon} xl:col-span-4`}>
            <Image
              src={"/images/icons/steps.svg"}
              alt={"steps svg icon"}
              width={70}
              height={70}
            />
          </div>

          <div className={'md:col-span-5 xl:col-span-6'}>
            <p className={"text mb-9 md:pr-48 xl:pr-12"}>
              <span>Alex Villas Renovation </span> уделяет внимание
              деталям арендного бизнеса клиента,
              чтобы извлечь выгоду из каждого шага.
            </p>
            <div className={"grid grid-cols-2 md:grid-cols-4"}>
              <div className={"mb-4 mb-8"}>
                <i className={"block mb-5"}>
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7.13205L6.33333 13.0912L17 1.17285"
                      stroke="#FF9900"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <h4 className={"text-white uppercase textSmall"}>
                  ДОЛГОСРОЧНЫЕ<br />ПРЕИМУЩЕСТВА
                </h4>
              </div>
              <div className={"mb-8"}>
                <i className={"block mb-5"}>
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7.13205L6.33333 13.0912L17 1.17285"
                      stroke="#FF9900"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <h4 className={"text-white uppercase textSmall"}>
                  ОСТОРОЖНЫЙ <br />РАСХОД БЮДЖЕТА
                </h4>
              </div>

              <div className={"mb-8"}>
                <i className={"block mb-5"}>
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7.13205L6.33333 13.0912L17 1.17285"
                      stroke="#FF9900"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <h4 className={"text-white uppercase textSmall"}>
                  ВЫСОКИЕ <br />СУТОЧНЫЕ СТАВКИ
                </h4>
              </div>
              <div className={"mb-8"}>
                <i className={"block mb-5"}>
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7.13205L6.33333 13.0912L17 1.17285"
                      stroke="#FF9900"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <h4 className={"text-white uppercase textSmall"}>
                  ВЫСОКАЯ <br />ЗАПОЛНЯЕМОСТЬ
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.step}>
          <span className={styles.count}>1</span>
          <h3 className={styles.title}>ПОИСК ОБЪЕКТА</h3>
          <p className={styles.text}>
            В Alex Villas Renovation разработан собственный подход к
            сверх-эффективному поиску объектов, учитывающий будущую
            реновацию и управление.
          </p>
          <ul className={styles.servicesList}>
            <li>АНАЛИЗ КОНКУРЕНТОВ</li>
            <li>ТЕХНИЧЕСКИЙ АНАЛИЗ</li>
            <li>ФИНАНСОВОЕ МОДЕЛИРОВАНИЕ</li>
          </ul>
        </div>

        <div className={styles.step}>
          <span className={styles.count}>2</span>
          <h3 className={styles.title}>РЕНОВАЦИЯ</h3>
          <p className={styles.text}>
            В Alex Villas Renovation, мы тщательно отбираем только те
            улучшения, которые дадут максимальную ценность для аренды
            без перерасхода бюджета.
          </p>
          <div className={"grid sm:grid-cols-2 xl:pr-52"}>
            <div className={styles.imageBefore}>
              <Image
                alt={"Project name"}
                src={imageBefore}
                quality={80}
                fill
                priority
                sizes="(max-width: 576px) 100vw,
              (max-width: 984px) 50vw,
              33vw"
                style={{
                  objectFit: "cover",
                }}
              />
              <span className={styles.label}>Before</span>
            </div>

            <div className={styles.imageAfter}>
              <Image
                alt={"Project name"}
                src={imageAfter}
                quality={80}
                fill
                priority
                sizes="(max-width: 576px) 100vw,
              (max-width: 984px) 50vw,
              33vw"
                style={{
                  objectFit: "cover",
                }}
              />
              <span className={styles.label}>After</span>
            </div>
          </div>
        </div>

        <div className={styles.step}>
          <span className={styles.count}>3</span>
          <h3 className={styles.title}>УПРАВЛЕНИЕ ОБЪЕКТОМ</h3>
          <p className={styles.text}>
            Сложно найти арендаторов по повышенным ставкам без грамотно
            выстроенного менеджмента. Мы - те самые эксперты, которые
            сделают разницу.
          </p>
          <ul className={styles.servicesList}>
            <li>
              {" "}
              <span>ЗАМЕТНОСТЬ ОБЪЕКТА НА РЫНКЕ</span>{" "}
            </li>
            <li>
              {" "}
              <span>ПОВЫШЕННЫЕ АРЕНДНЫЕ СТАВКИ</span>{" "}
            </li>
            <li>
              {" "}
              <span>ВЫСОКИЙ ROI ДЛЯ КЛИЕНТОВ</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RenovationSteps;

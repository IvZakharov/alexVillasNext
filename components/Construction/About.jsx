import styles from "./Construction.module.scss";
import React from "react";

const ConstructionAbout = () => {
  return (
    <section>
      <div className={"container"}>
        <div className={"grid md:grid-cols-3 gap-10"}>
          <h2 className={"h2"}>
            <span>Мы запустили</span> <br /> собственное <br /> производство
          </h2>

          <div className={"md:col-span-2"}>
            <p className={"text mb-10 md:mb-16"}>
              Alex Villas объявляет о запуске собственного<br />
              <span>производства!</span>
            </p>

            <div className={"flex flex-wrap gap-8 md:gap-12 mb-8"}>
              <div>
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
                <h4 className={"text-white uppercase text-xl"}>
                  Экономическая <br /> ЭФФЕКТИВНОСТЬ
                </h4>
              </div>

              <div>
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
                <h4 className={"text-white uppercase text-xl"}>
                  УНИКАЛЬНЫЕ <br />
                  ИНТЕРЬЕРЫ
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
                <h4 className={"text-white uppercase text-xl"}>
                  Высокая <br />
                  Долговечность
                </h4>
              </div>
            </div>

            <ul className={styles.list}>
              <li>ПРОИЗВОДСТВО БЕТОНА</li>
              <li>ПРОИЗВОДСТВО МЕБЕЛИ</li>
              <li>ПРОИЗВОДСТВО СТЕКЛА</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionAbout;

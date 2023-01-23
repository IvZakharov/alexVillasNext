import styles from "./Construction.module.scss";
import React from "react";

const ConstructionAbout = () => {
  return (
    <section>
      <div className={"container"}>
        <div className={"grid gap-10"}>
          <h2 className={"h2"}>
            <span>WE STARTED</span> <br /> OUR OWN <br /> PRODUCTION
          </h2>

          <div>
            <p className={"text mb-10 md:mb-16"}>
              Alex Villas announces the start of its own{" "}
              <span>production facilities!</span>
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
                  HIGHER COST <br /> EFFICIENCY
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
                  UNIQUE <br />
                  INTERIORS
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
                  BETTER <br />
                  DURABILITY
                </h4>
              </div>
            </div>

            <ul className={styles.list}>
              <li>COMPETITIVE ANALYSIS</li>
              <li>TECHNICAL ANALYSIS</li>
              <li>FINANCIAL MODELLING</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionAbout;

import styles from "./InvestExample.module.scss";
import React from "react";
import parse from "html-react-parser";

const InvestExample = ({ title }) => {
  return (
    <section>
      <div className={"container"}>
        <div className={"grid md:grid-cols-2 xl:grid-cols-3 xl:pl-24 xl:pr-48"}>
          <h2 className={"h2 whitespace-pre-line mb-10"}>{parse(title)}</h2>

          <div className={"md:col-span-2"}>
            <p className={"text mb-5"}>
              The safest way to diversify your capital
              <br />
              with <span>10-22% yearly passive income.</span>
            </p>
            <p className={"text mb-10"}>
              In simple words, your payback period
              <br />
              is expected to be <span>from 4 to 6 years.</span>
            </p>
            <div className={styles.investDemo}>
              <div className={"grid md:grid-cols-2 gap-8 md:gap-0"}>
                <div className={styles.item}>
                  <h3 className={styles.title}>TOWNHOUSES</h3>
                  <div className={"flex mb-2.5"}>
                    <span className={"text-xs w-32 text-white"}>
                      Investments:
                    </span>
                    <span className={"text-xs font-normal text-primary"}>
                      $ 150 000
                    </span>
                  </div>
                  <div className={"flex"}>
                    <span className={"text-xs w-32 text-white"}>
                      Monthly income:
                    </span>
                    <span className={"text-xs font-normal text-primary"}>
                      $ 6000 to $ 9000
                    </span>
                  </div>
                </div>

                <div className={styles.item}>
                  <h3 className={styles.title}>VILLAS</h3>
                  <div className={"flex mb-2.5"}>
                    <span className={"text-xs w-32 text-white"}>
                      Investments:
                    </span>
                    <span
                      className={
                        "text-xs font-normal text-primary whitespace-nowrap"
                      }
                    >
                      $ 350 000
                    </span>
                  </div>
                  <div className={"flex"}>
                    <span className={"text-xs w-32 text-white"}>
                      Monthly income:
                    </span>
                    <span
                      className={
                        "text-xs font-normal text-primary whitespace-nowrap"
                      }
                    >
                      $ 15 000 to $ 33 000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestExample;

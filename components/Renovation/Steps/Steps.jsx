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
              <span>Alex Villas Renovation </span>focuses on every detail of
              client’s rental business aiming to extract extra value out of each
              step.
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
                <h4 className={"text-white uppercase text-xl"}>
                  Long-term <br />
                  benefits
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
                  Budget-wise <br />
                  renovation
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
                  increased <br />
                  daily rates
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
                  HIGHER <br />
                  OCCUPANCY
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.step}>
          <span className={styles.count}>1</span>
          <h3 className={styles.title}>VILLA ACQUISITION</h3>
          <p className={styles.text}>
            Alex Villas Renovation has developed a specific framework for
            ultra-efficient villa scouting with future management and rental
            experiences in mind.
          </p>
          <ul className={styles.servicesList}>
            <li>COMPETITIVE ANALYSIS</li>
            <li>TECHNICAL ANALYSIS</li>
            <li>FINANCIAL MODELLING</li>
          </ul>
        </div>

        <div className={styles.step}>
          <span className={styles.count}>2</span>
          <h3 className={styles.title}>RENOVATION</h3>
          <p className={styles.text}>
            At Alex Villas Renovation, we thoroughly pick only the most
            value-providing enhancements to increase market value of property
            without breaking the bank.
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
          <h3 className={styles.title}>PROPERTY MANAGEMENT</h3>
          <p className={styles.text}>
            Owners can’t get new customers for higher daily rates without proper
            management. Our team has the highest expertise in putting more money
            on client’s table.
          </p>
          <ul className={styles.servicesList}>
            <li>
              {" "}
              <span>COMPETITIVE ANALYSIS</span>{" "}
            </li>
            <li>
              {" "}
              <span>TECHNICAL ANALYSIS</span>{" "}
            </li>
            <li>
              {" "}
              <span>FINANCIAL MODELLING</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RenovationSteps;

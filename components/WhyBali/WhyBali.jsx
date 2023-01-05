import styles from "./WhyBali.module.scss";

const WhyBali = () => {
  return (
    <section className={styles.whyBali}>
      <div className={"container"}>
        <div className={"grid-cols-1 md:grid-cols-2 gap-5"}>
          <div className={"max-w-2xl"}>
            <h2 className={styles.title}>
              WHY <br /> <span>BALI?</span>
            </h2>
          </div>

          <div className={"grid-cols-1 md:grid-cols-2"}>
            <div className={styles.advantagesItem}>
              <h3>
                REAL ESTATE <span>SUPER-HOTSPOT</span>{" "}
              </h3>
              <p>
                With the return of tourist arrivals the market{" "}
                <span>went crazy. Check the report!</span>
              </p>
            </div>

            <div className={styles.advantagesItem}>
              <h3>
                YOUNG & <span>GROWING ECONOMY</span>
              </h3>
              <p>
                Indonesia enjoys the influx of foreign investments and{" "}
                <span>unseen yearly GDP growth.</span>
              </p>
            </div>

            <div className={styles.advantagesItem}>
              <h3>
                ANNUAL RETURNS AT <span>10-22%</span>{" "}
              </h3>
              <p>
                Just compare it to the current normal{" "}
                <span>5-6% in developed markets!</span>
              </p>
            </div>

            <div className={styles.advantagesItem}>
              <h3>
                CRYPTO-FRIENDLY <span>REGULATIONS</span>{" "}
              </h3>
              <p>
                No tricks to put your cryptocurrency to work any longer!{" "}
                <span>100% legal and easy</span> .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBali;

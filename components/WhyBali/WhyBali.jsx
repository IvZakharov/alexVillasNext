import styles from "./WhyBali.module.scss";
import Image from "next/image";
import mapSvg from "./img/map.svg";
import React from "react";
import Link from "next/link";
import trueSvg from "./img/true.svg";
import falseSvg from "./img/false.svg";
import { hotspots } from "../../data/hotspots";
import { hotspotsRu } from "../../data/hotspotsRu";

const WhyBali = () => {
  return (
    <section className={styles.whyBali}>
      <div className={"container"}>
        <div className={"grid grid-cols-1 lg:grid-cols-3 mb-10 xl:mb-10"}>
          <div
            className={
              "flex justify-between gap-10 w-full mb-8 lg:block lg:gap-0 md:mb-10 lg:mb-0"
            }
          >
            <h2 className={"h1"}>
              Почему <br /> <span>бали?</span>
            </h2>
            <div className={"lg:hidden"}>
              <Image
                alt={"alex villas team"}
                src={mapSvg}
                sizes="(max-width: 768px) 50vw,
                  (max-width: 1200px) 50vw,
                  77vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>

          <div
            className={
              "grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:col-span-2 lg:gap-6"
            }
          >
            <div className={styles.advantagesItem}>
              <h3 className={"mb-4"}>
                ГОРЯЧАЯ ТОЧКА <span>ИНВЕСТИЦИЙ</span>
              </h3>
              <p className={"text textSmall"}>
                Рынок недвижимости сошёл с ума с возвращением туризма.<span> </span>
                <span>
                  <Link href={"#"}>Читать отчёт</Link>
                </span>
              </p>
            </div>

            <div className={styles.advantagesItem}>
              <h3 className={"mb-4"}>
                МОЛОДАЯ И РАСТУЩАЯ <span>ЭКОНОМИКА</span>
              </h3>
              <p className={"text textSmall"}>
                Индонезия сегодня ассоциируется с притоком зарубежных инвестиций
                и<span> </span>
                <span>
                  <Link href={"#"}> небывалым ростом ВВП.</Link>
                </span>
              </p>
            </div>

            <div className={styles.advantagesItem}>
              <h3 className={"mb-4"}>
                ДОХОДНОСТЬ <span>10-22%</span>
              </h3>
              <p className={"text textSmall"}>
                Просто сравните это
                <span> стипичными 5-6% на рынках развитых стран!</span>
              </p>
            </div>

            <div className={styles.advantagesItem}>
              <h3 className={"mb-4"}>
                ЛЕГАЛЬНОСТЬ <span>КРИПТОВАЛЮТ</span>
              </h3>
              <p className={"text textSmall"}>
                Больше никаких трюков, чтобы заставить вашу крипту работать!
                <span> 100% легально и просто.</span>
              </p>
            </div>
          </div>
        </div>

        <div className={"grid grid-cols-1 lg:grid-cols-3"}>
          <div className={"hidden lg:block lg:pr-12 xl:pr-28"}>
            <Image
              alt={"alex villas team"}
              src={mapSvg}
              sizes="(max-width: 768px) 50vw,
                  (max-width: 1200px) 50vw,
                  77vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <div className={"lg:col-span-2"}>
            <h3 className={"mb-7"}>
              СРАВНЕНИЕ С ДРУГИМИ <br /> <span>ПОПУЛЯРНЫМИ РЕГИОНАМИ:</span>
            </h3>

            <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
              {hotspotsRu &&
                hotspotsRu.map((hotspot, idx) => (
                  <div className={styles.hotspot} key={hotspot.id}>
                    <div className={"flex gap-2 md:gap-4 items-center mb-4"}>
                      <Image
                        src={hotspot.flagUrl}
                        width={24}
                        height={24}
                        alt={"flag bali"}
                      />
                      <h4 className={styles.title}>{hotspot.location}</h4>
                    </div>

                    <ul className={styles.list}>
                      {hotspot.advantages &&
                        hotspot.advantages.map((item, idx) => (
                          <li key={idx}>
                            <Image
                              src={item.isCheck ? trueSvg : falseSvg}
                              alt={"svg icon"}
                            />
                            <span
                              className={`text textSmall ${
                                !item.isCheck ? "opacity-50" : ""
                              }`}
                            >
                              {item.title}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBali;

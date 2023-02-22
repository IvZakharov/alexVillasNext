import styles from "./WhyBali.module.scss";
import Image from "next/image";
import mapSvg from "./img/map.svg";
import React from "react";
import Link from "next/link";
import trueSvg from "./img/true.svg";
import falseSvg from "./img/false.svg";

import md from "markdown-it";

const WhyBali = ({ locale, advantages, hotspots }) => {
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
              {locale === "en" ? (
                <>
                  Why <br /> <span>bali?</span>
                </>
              ) : (
                <>
                  Почему <br /> <span>бали?</span>
                </>
              )}
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
              "grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:col-span-2 lg:gap-6 xl:pt-5"
            }
          >
            {advantages &&
              advantages.map((obj) => (
                <div
                  key={obj.id}
                  className={`${styles.advantagesItem} text textSmall`}
                  dangerouslySetInnerHTML={{ __html: md().render(obj.content) }}
                ></div>
              ))}
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
              {locale === "en" ? (
                <>
                  COMPARISON WITH OTHER <br />{" "}
                  <span>REAL ESTATE HOTSPOTS:</span>
                </>
              ) : (
                <>
                  СРАВНЕНИЕ С ДРУГИМИ <br /> <span>ПОПУЛЯРНЫМИ РЕГИОНАМИ:</span>
                </>
              )}
            </h3>

            <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
              {hotspots &&
                hotspots.map((hotspot, idx) => (
                  <div className={styles.hotspot} key={hotspot.id}>
                    <div className={"flex gap-2 md:gap-4 items-center mb-4"}>
                      <Image
                        src={hotspot.flag.data.attributes.url}
                        width={24}
                        height={24}
                        alt={"flag bali"}
                      />
                      <h4 className={styles.title}>{hotspot.countryName}</h4>
                    </div>

                    <ul className={styles.list}>
                      {hotspot.listItem &&
                        hotspot.listItem.map((item, idx) => (
                          <li key={idx}>
                            <Image
                              src={item.good ? trueSvg : falseSvg}
                              alt={"svg icon"}
                            />
                            <span
                              className={`text textSmall ${
                                !item.good ? "opacity-50" : ""
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

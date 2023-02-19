import styles from "./LegendSidebar.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LegendSidebar = ({
  object,
  objects,
  activeObjectIndex,
  prevObject,
  nextObject,
  isActive,
  closeLegend,
}) => {
  return (
    <aside className={`${styles.sidebar} ${isActive && styles.active}`}>
      {objects &&
        objects.map(
          (object, idx) =>
            idx === activeObjectIndex && (
              <div key={object.id} className={styles.content}>
                <button className={styles.closeButton} onClick={closeLegend}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 9.58356L1.91644 0L0 1.91644L9.58356 11.5L0 21.0836L1.91644 23L11.5 13.4164L21.0836 23L23 21.0836L13.4164 11.5L23 1.91644L21.0836 0L11.5 9.58356Z"
                      fill="#FF9900"
                    />
                  </svg>
                </button>

                <div className={styles.image}>
                  {object.image?.data?.attributes?.url && (
                    <Image
                      alt={"Alex Villas Youtube placeholder"}
                      src={object.image?.data?.attributes?.url}
                      quality={80}
                      fill
                      blurDataURL={object.image?.data?.attributes?.placeholder}
                      placeholder={"blur"}
                      sizes="(max-width: 768px) 50vw,
                                 (max-width: 1200px) 25vw,
                                 25vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>

                <div className={"flex items-center justify-between gap-1 mb-9"}>
                  <button
                    onClick={prevObject}
                    className={`iconButton -translate-x-1`}
                  >
                    <i className={"mr-1"}>
                      <svg
                        width="15"
                        height="25"
                        viewBox="0 0 17 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.7998 1.28571L1.39981 15L15.7998 28.7143"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                  </button>
                  <h3 className={styles.title}>{object.title}</h3>
                  <button
                    onClick={nextObject}
                    className={`iconButton rotate-180 translate-x-1`}
                  >
                    <i className={"mr-1"}>
                      <svg
                        width="15"
                        height="25"
                        viewBox="0 0 17 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.7998 1.28571L1.39981 15L15.7998 28.7143"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                  </button>
                </div>

                <p className={"text textSmall mb-7 md:mb-12"}>
                  {object.description}
                </p>

                {object.type === "complex" && (
                  <ul className={"mb-7 xl:mb-20"}>
                    {object.propertyList &&
                      object.propertyList.map((obj, idx) => (
                        <li key={idx} className={"text mb-1"}>
                          {obj.title}
                          <span> x {obj.count}</span>
                        </li>
                      ))}
                  </ul>
                )}

                {object.type === "complex" && (
                  <Link href={"#form"} className={"linkWithArrow mt-auto"}>
                    <span className={"mr-7"}>ЗАБРОНИРОВАТЬ ПРОСМОТР</span>
                    <i>
                      <svg
                        width="28"
                        height="7"
                        viewBox="0 0 28 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.0096 3.5L22.0096 0.613249V6.38675L27.0096 3.5ZM0.990356 4H22.5096V3H0.990356V4Z"
                          fill="#FF9900"
                        />
                      </svg>
                    </i>
                  </Link>
                )}
              </div>
            )
        )}
    </aside>
  );
};

export default LegendSidebar;

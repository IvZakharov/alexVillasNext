import styles from "./Community.module.scss";
import React from "react";
import Image from "next/image";

import Link from "next/link";

const Community = ({ imageUrl }) => {
  return (
    <section className={styles.community}>
      <div
        className={
          "container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"
        }
      >
        <div className={"md:flex md:flex-col"}>
          <h2 className={`h2 mb-8`}>
            <span>ПОДДЕРЖКА </span> <br /> СООБЩЕСТВА
          </h2>

          <p className={"text mb-4 md:mt-auto"}>
            Мы твёрдо убедены, что каждая компания должна помогать
            <span> развитию локального сообщества.</span>
          </p>

          <p className={"text mb-4"}>
            Также, мы верим, что добрые дела рождают добрые дела. companies{" "}
          </p>

          <p className={"text mb-4 md:mb-9"}>
            Хотите присоединиться? Оставьте заявку, и мы расскажем как это можно
            сделать.
          </p>

          <Link href={"#"} className={styles.link}>
            <span>ОСТАВИТЬ ЗАЯВКУ НА УЧАСТИЕ</span>
            <i>
              <svg
                width="73"
                height="7"
                viewBox="0 0 73 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73 3.19629L68 0.309538V6.08304L73 3.19629ZM0 3.69629H68.5V2.69629H0V3.69629Z"
                  fill="#FF9900"
                />
              </svg>
            </i>
          </Link>
        </div>
        <div className={"xl:col-span-2"}>
          {imageUrl && (
            <Image
              alt={"alex villas team"}
              src={imageUrl}
              quality={80}
              width={1000}
              height={500}
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  77vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Community;

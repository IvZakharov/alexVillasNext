import styles from "./Cta.module.scss";
import React from "react";
import Image from "next/image";
import { Oswald } from "@next/font/google";
import Form from "../Form/Form";

const oswald = Oswald({ subsets: ["latin", "cyrillic"] });

const Cta = ({ title, description, imageUrl, label, fields }) => {
  return (
    <div className={styles.projectCta} id={"form"}>
      {imageUrl && (
        <div className={styles.image}>
          <Image
            alt={title}
            src={imageUrl}
            quality={80}
            fill
            priority
            sizes="50vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <div className={"container"}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>

        {label && (
          <div className={`${styles.label} ${oswald.className}`}>
            <p>{label}</p>
          </div>
        )}

        <Form />
      </div>
    </div>
  );
};

export default Cta;

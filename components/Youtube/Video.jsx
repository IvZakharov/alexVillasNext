import styles from "./Cta.module.scss";
import React from "react";
import Image from "next/image";
import { Oswald } from "@next/font/google";
import Form from "../Form/Form";
import parse from "html-react-parser";

const oswald = Oswald({ subsets: ["latin", "cyrillic"] });

const Index = ({
  title,
  description,
  imageUrl,
  label,
  fields,
  submitButtonText,
}) => {
  return (
    <section className={styles.cta} id={"form"}>
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

      <div
        className={
          "container md:grid md:grid-cols-1 md:grid-cols-2 md:gap-10 xl:gap-40 relative"
        }
      >
        <div className={"md:col-end-3 md:col-span-1"}>
          <div className={styles.content}>
            <h2 className={`${styles.title} ${oswald.className}`}>
              {parse(title)}
            </h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
          {label && (
            <div className={`${styles.label} ${oswald.className}`}>
              <p>{label}</p>
            </div>
          )}
          <Form fields={fields} submitButtonText={submitButtonText} />
        </div>
      </div>
    </section>
  );
};

export default Index;

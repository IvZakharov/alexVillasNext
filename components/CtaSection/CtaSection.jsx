import styles from "./CtaSection.module.scss";
import React from "react";
import Image from "next/image";

import Form from "../Form/Form";
import parse from "html-react-parser";

const CtaSection = ({
  title,
  description,
  image,
  label,
  fields,
  submitButtonText,
  gradient,
}) => {
  //images/cta/bg.jpg
  return (
    <section
      className={`${styles.cta} ${gradient ? styles.gradient : ""}`}
      id={"form"}
    >
      {image && (
        <div className={styles.image}>
          <Image
            alt={title}
            src={image.data.attributes.url}
            quality={80}
            blurDataURL={image.data.attributes.placeholder}
            placeholder={"blur"}
            fill
            sizes="50vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <div
        className={
          "container md:grid md:grid-cols-2 md:gap-10 xl:gap-40 relative"
        }
      >
        <div className={"md:col-end-3 md:col-span-1"}>
          <div className={styles.content}>
            <h2 className={`${styles.title} h2`}>{parse(title)}</h2>
            {description && (
              <p className={`${styles.description} text`}>{description}</p>
            )}
          </div>
          {label && (
            <div className={`${styles.label}`}>
              <p>{label}</p>
            </div>
          )}
          <Form fields={fields} submitButtonText={submitButtonText} />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

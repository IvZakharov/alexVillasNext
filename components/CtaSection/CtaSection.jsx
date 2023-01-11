import styles from "./CtaSection.module.scss";
import React from "react";
import Image from "next/image";

import Form from "../Form/Form";
import parse from "html-react-parser";

const CtaSection = ({
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
          "container md:grid md:grid-cols-2 md:gap-10 xl:gap-40 relative"
        }
      >
        <div className={"md:col-end-3 md:col-span-1"}>
          <div className={styles.content}>
            <h2 className={`${styles.title}`}>{parse(title)}</h2>
            {description && <p className={styles.description}>{description}</p>}
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

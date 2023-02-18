import styles from "./Faq.module.scss";
import React from "react";
import Accordion from "../../../ui/Accordion/Accordion";

const Faq = ({ array }) => {
  return (
    <section className={styles.faq}>
      <div className={"container"}>
        <div className={"mb-8 lg:mb-12"}>
          <h2 className={"h1"}>FAQ</h2>
        </div>

        <div>
          <Accordion data={array} />
        </div>
      </div>
    </section>
  );
};

export default Faq;

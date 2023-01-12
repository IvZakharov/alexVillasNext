import React from "react";
import styles from './WhatsApp.module.scss'
import Link from "next/link";


const WhatsApp = ({text}) => {
  return (
    <section className={styles.WhatsApp}>
      <div className="container xl:pl-32 flex flex-col md:flex-row items-center justify-between">
        <div className={styles.text}>
          {text}
        </div>
        <Link href={'#'} className={styles.link}>
          <span className="text"> PROCEED TO WHATSAPP</span>
          <svg width="30" height="6" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 3L25 0.113249V5.88675L30 3ZM0 3.5L25.5 3.5V2.5L0 2.5L0 3.5Z" fill="white"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default WhatsApp;
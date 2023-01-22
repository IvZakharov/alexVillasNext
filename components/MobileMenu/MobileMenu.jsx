import styles from "./MobileMenu.module.scss";
import HeroMenu from "../HeroMenu/HeroMenu";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { menutop } from "../../data/menutop";

const MobileMenu = ({ OnClickClose }) => {
  return (
    <div className={`pt-6 ${styles.mobileMenu}`}>
      <div className="container flex flex-col md:items-center md:justify-between md:flex-row">
        <div className={`${styles.logo}`}>
          <Link href={"/"} onClick={() => OnClickClose(false)}>
            <Image
              src={"/images/logo.png"}
              quality={100}
              width={202}
              height={67}
              alt={"logo"}
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={`${styles.menu} flex flex-col md:flex-row`}>
            {menutop &&
              menutop.map((obj, i) => (
                <li key={i}>
                  <Link href={obj.link} className={`${styles.links} `}>
                    {obj.lable}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className="md:hidden flex flex-col justify-center items-center">
          <HeroMenu />
        </div>
        <Link href={"#"} className={`${styles.contact}`}>
          Contact Us
        </Link>
        <button
          onClick={() => OnClickClose(false)}
          className={`block md:hidden ${styles.menuBtn}`}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;

import styles from "./MobileMenu.module.scss";
import HeroMenu from "../HeroMenu/HeroMenu";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { menutopru } from "../../data/menutopru";

const MobileMenu = ({ OnClickClose, logo }) => {
  return (
    <div className={`pt-6 ${styles.mobileMenu}`}>
      <div className="container flex flex-col md:items-center md:justify-between md:flex-row overflow-y-scroll">
        <div className={`${styles.logo}`}>
          <Link href={"/"} onClick={() => OnClickClose(false)}>
            <Image
              src={logo ? logo :"/images/logo.png"}
              quality={100}
              width={202}
              height={67}
              alt={"logo"}
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={`${styles.menu} flex flex-col md:flex-row`}>
            {menutopru &&
              menutopru.map((obj, i) => (
                <li key={i}>
                  <Link href={obj.link} className={`${styles.links} `}>
                    {obj.lable}
                  </Link>
                  {obj.subMenu && (
                    <ul className={styles.subMenu}>
                      {obj.subMenu.map((sublink, i)=>(
                        <li key={i}>
                          <Link href={sublink.link} className={styles.linkSub} >
                            {sublink.lable}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        {/*<div className="md:hidden flex flex-col justify-center items-center">*/}
        {/*  <HeroMenu />*/}
        {/*</div>*/}
        <Link href={"/contacts"} className={`${styles.contact}`}>
          Напишите Нам
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

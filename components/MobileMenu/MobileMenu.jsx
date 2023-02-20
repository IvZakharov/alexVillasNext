import styles from "./MobileMenu.module.scss";
import HeroMenu from "../HeroMenu/HeroMenu";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { menutopru } from "../../data/menutopru";

const MobileMenu = ({ OnClickClose, logo, menu, contact }) => {
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
            {menu &&
              menu.map((obj, i) => (
                <li className={styles.liLink} key={i}>
                  <Link href={obj.slug} className={`${styles.links}`}>
                    {obj.label}
                  </Link>
                  {obj.subLinks && (
                    <ul className={styles.subMenu}>
                      {obj.subLinks.map((sublink, i)=>(
                        <li className={styles.subLi} key={i}>
                          <Link href={sublink.slug} className={styles.linkSub} >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        {contact && (
    
          <Link href={contact[0].slug} className={`${styles.contact} hidden md:block`}>
            {contact[0].label}
          </Link>
        )}
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

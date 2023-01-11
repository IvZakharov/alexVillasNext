import React from "react";
import styles from "./Headermenu.module.scss";
import Image from "next/image";
import Link from "next/link";

const HeaderMenu = ({ menuarr }) => {
  return (
    <div className={`container pt-6 `}>
      <div className="flex flex-col mb:items-center mb:justify-between md:flex-row">
        <div className={`${styles.logo}`}>
          <Image
            src={"/images/logo.png"}
            quality={100}
            width={202}
            height={67}
            alt={"logo"}
          />
        </div>
        <nav className={`${styles.nav} hidden md:block`}>
          <ul className={`${styles.menu} flex flex-col md:flex-row`}>
            {menuarr &&
              menuarr.map((obj, i) => (
                <li key={i}>
                  <Link href={obj.link} className={`${styles.links}`}>
                    {obj.lable}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <Link href={"#"} className={`${styles.contact} hidden md:block`}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HeaderMenu;

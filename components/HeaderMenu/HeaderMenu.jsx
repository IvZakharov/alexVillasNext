import React, { useEffect } from "react";
import styles from "./Headermenu.module.scss";
import Image from "next/image";
import Link from "next/link";
import { menutop } from "../../data/menutop";
import { menutopru } from "../../data/menutopru";

const HeaderMenu = ({logo, menu, contact}) => {
  console.log(contact)
  return (
    <div className={`container pt-6`}>
      <div className="flex flex-col md:items-center md:justify-between md:flex-row">
        <div className={`${styles.logo}`}>
          <Link href={'/'}>
            <Image
              src={logo ? logo :"/images/logo.png"}
              quality={100}
              width={202}
              height={67}
              alt={"logo"}
            />
          </Link>
        </div>
        <nav className={`${styles.nav} hidden md:block `}>
          <ul className={`${styles.menu} flex flex-col md:flex-row `}>
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
        
      </div>
    </div>
  );
};

export default HeaderMenu;

import React, { useEffect } from "react";
import styles from "./Headermenu.module.scss";
import Image from "next/image";
import Link from "next/link";
import { menutop } from "../../data/menutop";
import { menutopru } from "../../data/menutopru";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const HeaderMenu = ({ logo, menu, contact, menuProject, locale }) => {
  return (
    <div className={`container pt-6`}>
      <div className="flex flex-col md:items-center md:justify-between md:flex-row">
        <div className={`${styles.logo}`}>
          <Link href={"/"}>
            <Image
              src={logo ? logo : "/images/logo.png"}
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
                  {obj.subLinks.length != 0 && (
                    <ul className={styles.subMenu}>
                      {obj.subLinks.map((sublink, i) => (
                        <li className={styles.subLi} key={i}>
                          <Link href={sublink.slug} className={styles.linkSub}>
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {obj.project && (
                    <ul className={styles.subMenu}>
                      {menuProject && menuProject.map((sales, r)=>(
                        <>
                          <li className={styles.nolink} key={r}>
                            {sales.status === "onSale"
                              ? locale === "en"
                                ? "On sale"
                                : "?? ??????????????"
                              : locale === "en"
                                ? "Sold out"
                                : "??????????????????????"}
                          </li>
                          {sales.links && sales.links.sort((a,b) => (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0)).map((sale, i)=>(
                            <li className={styles.subLi} key={i}>
                              <Link href={"/projects/"+sale.slug} className={styles.linkSub}>
                                {sale.title}</Link>
                                </li>
                              ))}
                          </>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        <div className={"flex justify-end md:block md:mr-5"}>
          <LocaleSwitcher />
        </div>
        {contact && (
          <Link
            href={contact[0].slug}
            className={`${styles.contact} hidden md:block`}
          >
            {contact[0].label}
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;

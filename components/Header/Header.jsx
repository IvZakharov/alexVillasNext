import styles from "./Header.module.scss";
import Image from "next/image";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = ({onClickMenu, openedMenu}) => {
  const heroArr = [
    {
      lable: "CONSTRUCTION",
      link: "/123123/",
    },
    {
      lable: "AGENCY",
      link: "#",
    },
    {
      lable: "MANAGEMENT",
      link: "#",
    },
    {
      lable: "RENOVATION",
      link: "#",
    },
  ];

  const menuArr = [
    {
      link: "#",
      lable: "Companies",
    },
    {
      link: "#",
      lable: "Projects",
    },
    {
      link: "#",
      lable: "Journal",
    },
  ]
  return(
  <header className={`${styles.header}`}>
    <div className={styles.background}>
      <Image
          alt="ALEX VILLAS"
          src={"/images/hero.png"}
          quality={80}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: 0.5,
          }}
      />
    </div>
    <HeaderMenu menuarr={menuArr}  heroArr={heroArr}/>
    {openedMenu && <MobileMenu menuarr={menuArr} heroArr={heroArr} OnClickClose={(bool) => onClickMenu(bool)} />}
    <button onClick={() => onClickMenu(true)} className={`block md:hidden ${styles.menuBtn}`}>
      <span></span>
      <span></span>
    </button>

  </header>
  );
};

export default Header;

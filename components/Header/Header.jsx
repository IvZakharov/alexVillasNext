import styles from "./Header.module.scss";
import Image from "next/image";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const Header = ({ onClickMenu, logo, menu, contact, project, locale }) => {
  return (
    <header className={`${styles.header}`}>
      <HeaderMenu
        logo={logo}
        menu={menu}
        contact={contact}
        menuProject={project}
        locale={locale}
      />
      <button
        onClick={() => onClickMenu(true)}
        className={`block md:hidden ${styles.menuBtn}`}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;

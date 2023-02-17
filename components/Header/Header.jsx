import styles from "./Header.module.scss";
import Image from "next/image";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Header = ({ onClickMenu, logo }) => {
  return (
    <header className={`${styles.header}`}>
      <HeaderMenu logo={logo} />
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

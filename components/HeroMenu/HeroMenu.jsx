import styles from "./HeroMenu.module.scss";
import Link from "next/link";

const HeroMenu = ({ menuArr }) => {
  return (
    <div className={styles.HeroMenu}>
      <ul>
        {menuArr &&
          menuArr.map((obj, i) => (
            <li key={i}>
              <Link href={obj.link} className={`${styles.links}`}>
                {obj.lable}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HeroMenu;

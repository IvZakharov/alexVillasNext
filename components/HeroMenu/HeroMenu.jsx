import styles from "./HeroMenu.module.scss";
import Link from "next/link";
import { menuhero } from '../../data/menuhero'

const HeroMenu = () => {
  return (
    <div className={styles.HeroMenu}>
      <ul>
        {menuhero &&
          menuhero.map((obj, i) => (
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

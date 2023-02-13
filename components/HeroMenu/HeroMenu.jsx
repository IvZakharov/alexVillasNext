import styles from "./HeroMenu.module.scss";
import Link from "next/link";
import { menuhero } from '../../data/menuheroru'
const lang = 'ru';

const HeroMenu = () => {
  return (
    <div className={styles.HeroMenu}>
      <ul>
        {menuhero &&
          menuhero.map((obj, i) => (
            <li key={i} className={lang === 'ru' ? styles.liRu : ""}>
              <Link href={obj.link} className={lang === 'ru' ? styles.linksRu : styles.links}>
                {obj.lable}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HeroMenu;

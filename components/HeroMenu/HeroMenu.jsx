import styles from "./HeroMenu.module.scss";
import Link from "next/link";

const HeroMenu = ({menu}) => {
  return (
    <div className={styles.HeroMenu}>
      <ul>
        {menu &&
          menu.map((obj) => (
            <li key={obj.id} className={styles.liRu}>
              {/*<Link href={obj.slug} className={lang === 'ru' ? styles.linksRu : styles.links}>*/}
              <Link href={obj.slug} className={styles.linksRu}>
                {obj.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HeroMenu;

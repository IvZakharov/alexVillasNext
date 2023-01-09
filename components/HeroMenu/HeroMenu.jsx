import styles from './HeroMenu.module.scss'
import Link from "next/link";
import { Oswald } from "@next/font/google";

const oswald = Oswald({ subsets: ["latin", "cyrillic"] });

const HeroMenu = ({menuArr}) => {
    return (
        <div className={styles.HeroMenu}>
            <ul>
            {menuArr && menuArr.map((obj, i)=>(
                 <li key={i}>
                     <Link href={obj.link} className={`${styles.links} ${oswald.className}`}>
                         {obj.lable}
                     </Link>
                 </li>
            ))}
            </ul>
        </div>
    );
};

export default HeroMenu;
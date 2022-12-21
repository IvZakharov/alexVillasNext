import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return(
  <header className={`${styles.header}`}>
    <div className="container px-3 pt-6">
      <div className="columns-5 flex items-center">
        <div className={`${styles.logo}`}>
          <Image
              src={'/images/logo.png'}
              quality={80}
              width={266}
              height={133}
              alt={'logo'}
          />
        </div>
        <Link href={'#'} className={`${styles.links} ml-36`}>
          Companies
        </Link>
        <Link href={'#'} className={`${styles.links} ml-33`}>
          Projects
        </Link>
        <Link href={'#'} className={`${styles.links} ml-33`}>
          Journal
        </Link>
        <Link href={'#'} className={`${styles.contact} ml-60`}>
          Contact Us
        </Link>
      </div>
    </div>


  </header>
  );
};

export default Header;

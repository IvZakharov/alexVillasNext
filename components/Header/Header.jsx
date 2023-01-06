import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "../../ui/Button/Button";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className="container px-3 pt-6">
        <div className="flex items-center">
          <div className={`${styles.logo}`}>
            <Image
              src={"/images/logo.png"}
              quality={80}
              width={266}
              height={133}
              alt={"logo"}
            />
          </div>
          <nav>
            <ul className={"flex items-center gap-8"}>
              <li>
                {" "}
                <Link href={"#"} className={`${styles.links} ml-36`}>
                  Companies
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"#"} className={`${styles.links} ml-36`}>
                  Companies
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"#"} className={`${styles.links} ml-36`}>
                  Companies
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${styles.links} ml-36`}>
                  <Button>Contact us</Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

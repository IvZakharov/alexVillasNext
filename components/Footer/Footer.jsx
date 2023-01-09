import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
      <footer className={`${styles.footer} container`}>
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between">
              <div className={styles.icons}>
                      <Image
                          src={'/images/logo.png'}
                          alt={'logo'}
                          width={266}
                          height={133}
                      />
                  <div className={styles.social}>
                      <Image
                          src={'/images/linkedIn.svg'}
                          alt={'LinkedIN'}
                          width={44}
                          height={44}
                      />
                      <Image
                          src={'/images/instagram.svg'}
                          alt={'instagram'}
                          width={44}
                          height={44}
                      />
                  </div>
              </div>
              <div className={styles.footerNav}>
                  <div className={styles.menu}>
                      <ul>
                          <li>
                              <Link href={'#'}>
                                  Companies
                              </Link>
                          </li>
                          <li>
                              <Link href={'#'}>
                                  Project
                              </Link>
                          </li>
                          <li>
                              <Link href={'#'}>
                                  Journal
                              </Link>
                          </li>
                      </ul>
                  </div>
                  <div className={styles.address}>
                      <p>
                          ALEX VILLAS PROPERTY Jl. Raya Semat, Tibubeneng, Kec.
                          Kuta Utara, Kabupaten Badung, Bali
                      </p>
                  </div>
                  <div className={styles.contacts}>
                      <Link href={'mailto:alexvillasmarketing@gmail.com'} className={styles.email}>
                          alexvillasmarketing@gmail.com
                      </Link>
                      <Link href={'tel:+62 821 4759 2387'} className={styles.phone}>
                          +62 821 4759 2387
                      </Link>
                  </div>
              </div>
          </div>


          <div className={styles.underFooter}>
              <div className={styles.privace}>
                  <Link href={'#'}>
                      Privacy policy
                  </Link>
              </div>
              <div className={styles.copyright}>
                  PT ALEX VILLAS©2022
              </div>
          </div>
      </footer>
  );
};

export default Footer;

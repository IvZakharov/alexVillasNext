import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({logo}) => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between py-24">
        <div className={styles.icons}>
          <Image
            src={logo ? logo : "/images/logo.png"}
            alt={"logo"}
            width={266}
            height={133}
          />
          <div className={styles.social}>
            <Link href={'https://instagram.com/av.renovationbali?igshid=YmMyMTA2M2Y='}>
    
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.332 1.33398H8.66536C4.61528 1.33398 1.33203 4.61723 1.33203 8.66732V23.334C1.33203 27.3841 4.61528 30.6673 8.66536 30.6673H23.332C27.3821 30.6673 30.6654 27.3841 30.6654 23.334V8.66732C30.6654 4.61723 27.3821 1.33398 23.332 1.33398Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 21.5C19.0376 21.5 21.5 19.0376 21.5 16C21.5 12.9624 19.0376 10.5 16 10.5C12.9624 10.5 10.5 12.9624 10.5 16C10.5 19.0376 12.9624 21.5 16 21.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24.25 7.75V7.751" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
  
            </Link>
            <Link href={'#'}>
    
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.0007 1.33203H5.00065C2.97561 1.33203 1.33398 2.97365 1.33398 4.9987V26.9987C1.33398 29.0237 2.97561 30.6654 5.00065 30.6654H27.0007C29.0257 30.6654 30.6673 29.0237 30.6673 26.9987V4.9987C30.6673 2.97365 29.0257 1.33203 27.0007 1.33203Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.66602 14.168V23.3346" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.66602 8.66797V8.6863" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 23.3346V14.168" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.3333 23.3346V17.8346C23.3333 16.8622 22.947 15.9295 22.2594 15.2419C21.5718 14.5543 20.6391 14.168 19.6667 14.168C18.6942 14.168 17.7616 14.5543 17.0739 15.2419C16.3863 15.9295 16 16.8622 16 17.8346" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
  
            </Link>
            <Link href={'https://www.youtube.com/channel/UCnNWmXP2MnEUhorjTy0tz7Q/featured'}>
    
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 1H8.33333C4.28325 1 1 4.28325 1 8.33333V23C1 27.0501 4.28325 30.3333 8.33333 30.3333H23C27.0501 30.3333 30.3333 27.0501 30.3333 23V8.33333C30.3333 4.28325 27.0501 1 23 1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 10L21.1667 15.5L12 21V10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
  
            </Link>
          </div>
        </div>
        <div className={styles.footerNav}>
          <div className={styles.menu}>
            <ul>
              <li>
                <Link href={"/#o-nas"}>О нас</Link>
              </li>
              <li>
                <Link href={"/vacancy"}>Вакансии</Link>
              </li>
            </ul>
          </div>
          <div className={styles.BlockAdCont}>
            <div className={styles.address}>
              <p>
                ALEX VILLAS PROPERTY Jl. Raya Semat, Tibubeneng, Kec. Kuta Utara,
                Kabupaten Badung, Bali
              </p>
            </div>
            <div className={styles.contacts}>
              <Link
                href={"mailto:alexvillasmarketing@gmail.com"}
                className={styles.email}
              >
                alexvillasmarketing@gmail.com
              </Link>
              <Link href={"tel:+62 821 4759 2387"} className={styles.phone}>
                +62 821 4759 2387
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "./LocaleSwitcher.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef();

  // Click Component outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !event.composedPath().includes(dropdownRef.current)
      ) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );

  return (
    <div className={styles.switcher}>
      <button
        className={"flex gap-1 items-center"}
        onClick={() => setIsOpen(!isOpen)}
        ref={dropdownRef}
      >
      

        <span className={"text textSmall uppercase cursor-pointer"}>
          {activeLocale}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.84062 5.95438C2.05158 5.74348 2.33768 5.625 2.63599 5.625C2.9343 5.625 3.2204 5.74348 3.43137 5.95438L9.00012 11.5231L14.5689 5.95438C14.781 5.74946 15.0652 5.63606 15.3602 5.63863C15.6552 5.64119 15.9373 5.7595 16.1459 5.96809C16.3545 6.17667 16.4728 6.45884 16.4754 6.75381C16.4779 7.04878 16.3645 7.33296 16.1596 7.54513L9.79549 13.9093C9.58452 14.1202 9.29842 14.2386 9.00012 14.2386C8.70181 14.2386 8.41571 14.1202 8.20474 13.9093L1.84062 7.54513C1.62971 7.33417 1.51123 7.04807 1.51123 6.74976C1.51123 6.45145 1.62971 6.16535 1.84062 5.95438V5.95438Z"
            fill="#FF9900"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className={styles.list}>
          {otherLocales.map((locale) => {
            const { pathname, query, asPath } = router;
            return (
              <li key={locale} onClick={() => setIsOpen(false)}>
                <Link
                  href={{ pathname, query }}
                  as={asPath}
                  locale={locale}
                  legacyBehavior
                >
                  <div className={"flex items-center gap-1 cursor-pointer"}>
                    <span className={"text textSmall uppercase"}>
                      {" "}
                      {locale}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

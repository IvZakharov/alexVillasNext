import React from "react";
import styles from "./OpenVacancy.module.scss"
import Link from "next/link";
import { useRouter } from "next/router";

const OpenVacancy = ({jobs}) => {
  const router = useRouter();
  const { locale } = router;
  
  return (
    <section className={styles.OpenVacancy}>
      <div className="container">
        <div className={styles.title}>
          <h2 className={"h2"}> {locale==='ru' ? <>Открытые<br />Вакансии</> : <>OPEN<br /> POSITIONS</> }</h2>
        </div>
        {jobs.attributes?.department && jobs.attributes.department.map((dep, i)=>(
          <div key={i}>
            <div className={styles.subLable}>
              {dep.Departament}
            </div>
            <div className={styles.vacancy}>
              {dep?.position && dep.position.map((pos, i)=>(
                <div className={styles.vacan}>
                  <div className={`${styles.lable} text`}>
                    {pos.title}
                  </div>
                  <div className={`${styles.link} text textSmall`}>
                    <Link href={pos.link}>{locale==='ru' ? "Заполнить форму": "FILL THE FORM"}
                      <i>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.0245 3.5L6.02448 0.613249V6.38675L11.0245 3.5ZM0.974609 4H6.52448V3H0.974609V4Z" fill="#FF9900"/>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenVacancy;
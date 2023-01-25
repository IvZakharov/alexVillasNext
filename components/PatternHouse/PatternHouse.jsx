import React from "react";
import styles from "./PatternHouse.module.scss";
import Link from "next/link";
import Button from "../../ui/Button/Button";

const PatternHouse = ({ Houses, links }) => {
  return (
    <section className="container">
      <div
        className={`${styles.PatternHouse} container md:flex md:justify-between xl:px-24`}
      >
        <div className={styles.about}>
          {Houses &&
            Houses.map((obj, i) => (
              <div className={styles.block} key={i}>
                <div className={styles.BigNum}>{obj.title}</div>
                <div className={styles.bedroom}>{obj.bedroom}</div>
                <div className={styles.houseformat}>{obj.housformat}</div>
              </div>
            ))}
        </div>
        <div className={styles.second}>
        {links && links.map((obj, i)=>(
            <div key={i} className={obj.name == 'download' ? styles.download : obj.name == 'contact'?  styles.contact : styles.button}>
              { obj.name != 'button' ? <Link href={obj.link}>{obj.lable}</Link> : <Button color={'#FF9900'}  children={obj.lable} /> }
            </div>
        ))}
        </div>
        
      </div>
    </section>
  );
};

export default PatternHouse;

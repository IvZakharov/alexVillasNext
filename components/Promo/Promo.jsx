import React from "react";
import styles from "./Promo.module.scss";
import Link from "next/link";
import Button from "../../ui/Button/Button";
import parse from "html-react-parser";

const Promo = ({ Data, width, links }) => {
  return (
    <section className="container">
      <div
        className={`${styles.PatternHouse} container p-0 md:flex md:justify-between`}
      >
        <div className={styles.about  + ' ' + (width ? styles.width : "")}>
          {Data &&
            Data.map((obj, i) => (
              <div className={styles.block} key={i}>
                <div className={`${styles.bigTitle} h2`}>{parse(obj.title)}</div>
                <div className={`${styles.lable} text`}>{obj.lable}</div>
              </div>
            ))}
        </div>
        { links &&
          <div className={styles.second}>
            {links && links.map((obj, i)=>(
              <div key={i} className={obj.name == 'download' ? styles.download : obj.name == 'contact'?  styles.contact : styles.button}>
                { obj.name != 'button' ? <Link href={obj.link}>{obj.lable}</Link> : <Button color={'#FF9900'}  children={obj.lable} /> }
              </div>
            ))}
          </div>
          
        }
        
        
      </div>
    </section>
  );
};

export default Promo;

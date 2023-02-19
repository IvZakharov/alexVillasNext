import React from "react";
import styles from "./Infrastruct.module.scss"
import Image from "next/image";

const Infrastruct = ({data}) => {
  return (
    <section className={styles.Infrastruct}>
      <div className="container">
        <h2 className={'h2'}>
          Инфраструктура в <span>5 минутной <br /> доступности</span> от комплекса
        </h2>
      </div>
      <div className={styles.BlockImg}>
        {data && data.map((obj, i)=>(
            <div className={styles.img} key={i}>
              <Image src={obj} quality={100}
                     width={280}
                     height={180}
                     sizes="100vw"
                     style={{
                       width: '100%',
                       height: 'auto',
                     }}
              />
            </div>
    
        ))}
      </div>
      <div className="container">
        <div className={styles.buttonBlock}>
          <div className={styles.button}>
            Читать о локации
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastruct;
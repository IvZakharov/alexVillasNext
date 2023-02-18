import React from "react";
import styles from "./About.module.scss"

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.title}>
          <h2 className="h2">О нас</h2>
        </div>
        <p className="text"><span>Компания ALEX VILLAS - лидирующая компания в строительстве коммерческой недвижимости на острове Бали</span></p>
        <p className="text">Мы имеем все нужные лицензии и обеспечиваем полный цикл строительства и управления объектами для получения максимальной прибыли. В компании работает более 150 человек.</p>
        
      </div>
    </section>
  );
};

export default About;
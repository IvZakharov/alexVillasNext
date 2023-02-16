import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import CtaSection from "../components/CtaSection/CtaSection";
import RenovationSlider from "../components/Renovation/Slider/Slider";
import WhatsApp from "../components/WhatsApp/WhatsApp";
import InvestExample from "../components/InvestExample/InvestExample";
import Table from "../components/Table/Table";
import RenovationSteps from "../components/Renovation/Steps/Steps";
import Principles from "../components/Principles/Principles";
// data
import { renovationImages } from "../data/renovationImages";
import { investModeling } from "../data/investModeling";
import { principlesArr } from "../data/principlesArr";
import AlexVillas from "../components/AlexVillas/AlexVillas";
import PatternHouse from "../components/PatternHouse/PatternHouse";
import OurClientVideo from "../components/OurClientVideo/OurClientVideo";
import React from "react";
import OurBusiness from "../components/OurBusiness/OurBusiness";
import Promo from "../components/Promo/Promo";

export default function Renovation() {
  const arr = {
    type: 'image',
    url: '/images/hero.png',
    alt: 'background image',
  }
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"mb-16 xl:mb-24"}>
        <Hero
          h1first={"РЕНОВАЦИЯ"}
          h1second={"ВИЛЛ НА БАЛИ"}
          text={
            "Инвестируйте в арендную \nнедвижимость. Цикл: 3 года.\n" +
            "Доходность: 15-30% годовых"
          }
          form
          link
          back={arr}
        />
      </div>
      <div>
        <AlexVillas
          textBlock1={
            "Реновируйте свою жилую или коммерческую недвижимость для  заметного повышения доходности или подберите идеальный объект с нами."
          }
          textBlock2={
            "В нашей команде есть весь необходимый опыт и эффективные инструменты для того чтобы <span>сделать арендную недвижимость очень эффективным бизнесом.</span>"
          }
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <Promo
          Data = {[
            {
              title: '15-30<span class="text">%</span>',
              lable: "годовая доходность",
            },
            {
              title: '3<span class="text">года</span>',
              lable: "Срок инвестиций",
            },
            {
              title: "$70К",
              lable: "МИНИМАЛЬНАЯ СУММА ВЛОЖЕНИЙ",
            },
            {
              title: "50+",
              lable: "ОТРЕСТАВРИРОВАННЫХ ВИЛЛ",
            },
            {
              title: '8 <span class="text">лет</span>',
              lable: "ОПЫТА НА РЫНКЕ БАЛИ",
            },
          ]}
          width
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <RenovationSlider images={renovationImages} />
      </div>
      <div className={"mb-16 md:mb-24"}>
        <WhatsApp text={"Повысьте заполняемость и средний чек вашего объекта"} link={"#"} />
      </div>
      <div className={"mb-16 md:mb-24"}>
        <InvestExample
          title={"<span>ПОЧЕМУ\nИМЕННО</span>\nРЕНОВАЦИЯ"}
        />
      </div>
      <div className={"container mb-16 md:mb-24 xl:pl-32 xl:pr-64"}>
        <Table tableData={investModeling} />
      </div>
      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <RenovationSteps
          imageAfter={"/images/renovation/card.jpg"}
          imageBefore={"/images/renovation/card.jpg"}
        />
      </div>
      <div className={"mb-16 md:mb-24 xl:mb-28"}>
        <Principles
          title={
            "<span>ВСЕ НАШИ\n ПРОЕКТЫ\nСЛЕДУЮТ</span> \nЭТИМ 5\nПРИНЦИПАМ"
          }
          principles={principlesArr}
        />
      </div>

      <div className={"mb-16 xl:mb-24"}>
        <OurClientVideo />
      </div>
      <div className={"mb-16 xl:mb-32"}>
        <OurBusiness
          text={"Почему \n<span>Alex</span>\n<span>Villas?</span>"}
        />
      </div>

      <CtaSection
        title={
          " FILL THE FORM BELOW \n<span>AND WILL SEND YOU</span>\n <span>THE CALCULATION PDF</span>"
        }
        description={
          "Gain up to 12% annualy or set up your fine-cut base in the heart of the most lively area in the most visited tourist destination of recent years."
        }
        imageUrl={"/images/cta/bg2.jpg"}
        submitButtonText={"send"}
        fields={[
          {
            name: "userName",
            type: "text",
            placeholder: "Your name:",
            required: true,
          },
          {
            name: "userTel",
            type: "tel",
            placeholder: "Phone number:",
            required: true,
          },
        ]}
      />
    </MainLayout>
  );
}

import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import CtaSection from "../components/CtaSection/CtaSection";
import WhatsApp from "../components/WhatsApp/WhatsApp";
import Principles from "../components/Principles/Principles";
import AlexVillas from "../components/AlexVillas/AlexVillas";
import ProjectsGrid from "../components/Project/Grid";
// data

import { principlesArr } from "../data/principlesArr";
import { projectsOnSaleFilter } from "../utils/projectsOnSaleFilter";
import { projects } from "../data/projects";
import ConstructionAbout from "../components/Construction/About";
import PatternHouse from "../components/PatternHouse/PatternHouse";
import React from "react";
import OurClientVideo from "../components/OurClientVideo/OurClientVideo";
import OurBusiness from "../components/OurBusiness/OurBusiness";
import Promo from "../components/Promo/Promo";

export default function Construction() {
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
      logo={'/images/logos/logo_construction.png'}
    >
      <div className={"mb-16 xl:mb-24"}>
        <Hero
          h1first={"СТРОИТЕЛЬСТВО"}
          h1second={"НА БАЛИ"}
          text={
            "Мы строим современную недвижимость в лучших локациях для жизни \nи инвестиций. Срок строительства: \n1 год. Доходность: 10-30%."
          }
          form={"СВЯЗАТЬСЯ С ОТДЕЛОМ ПРОДАЖ"}
          link
          back={arr}
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <AlexVillas
          textBlock1={
            "Alex Villas - это строительная компания \nс опытом <span>8 лет на рынке Индонезии. </span> "
          }
          textBlock2={
            "В нашем послужном списке комплексы \nв топовых локациях и индивидуальные проекты с высокой заполняемостью. "
          }
          textBlock3={
            "<span>Мы ценим опыт, который получаем \nна каждом проекте, и все последующие получаются комфортнее для гостей \nи выгоднее для инвесторов. Это наш путь развития.  </span> "
          }
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <Promo
          Data = {[
            {
              title: '7',
              lable: "Комплексов \nпостроенно",
            },
            {
              title: '146',
              lable: "Общее кол-во \nЮнитов",
            },
            {
              title: "1 <span class='text'>год</span>",
              lable: "Средний срок \nстроительства ",
            },
            {
              title: "30+",
              lable: "РОЛИКОВ О СТРОЙКЕ НА  \nНАШЕМ YOUTUBE-КАНАЛЕ",
            },
            {
              title: "8 <span class='text'>лет</span>",
              lable: "ОПЫТА НА \nРЫНКЕ БАЛИ",
            },
          ]}
          width
        />
      </div>
      <div className={"mb-10 xl:mb-16"}>
        <ProjectsGrid
          projects={projectsOnSaleFilter(projects, true)}
          title={"ПРОЕКТЫ\nВ ПРОДАЖЕ"}
          link={"#"}
          linkLabel={"БОЛЬШЕ ПРОЕКТОВ В ПРОДАЖЕ"}
        />
      </div>
      <div className={"mb-10 xl:mb-16"}>
        <ProjectsGrid
          projects={projectsOnSaleFilter(projects, false)}
          title={"ЗАВЕРШЁННЫЕ\nПРОЕКТЫ"}
          link={"#"}
          linkLabel={"БОЛЬШЕ ЗАВЕРШЁННЫХ ПРОЕКТОВ"}
        />
      </div>
      <div className={"mb-16 md:mb-24"}>
        <WhatsApp
          text={"Постройте виллу своей мечты и позвольте нам заставить ее взорвать рынок"}
          link={"#"}
          linkLabel={"Перейти в WhatsApp"}
        />
      </div>
      <div className={"mb-16 md:mb-24"}>
        <ConstructionAbout />
      </div>
      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <Principles
          title={"<span>Все что мы делаем основанно</span> \nНа этих\n5 принципах"}
          principles={principlesArr}
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <OurClientVideo />
      </div>
      <div className={"mb-16 xl:mb-32"}>
        <OurBusiness
          text={"Почему \n<span>ALEX</span>\n<span>VILLAS?</span>"}
        />
      </div>

      <CtaSection
        title={
          "СВЯЗАТЬСЯ С ОТДЕЛОМ  \n<span>ПРОДАЖ</span>"
        }
        imageUrl={"/images/cta/45_are_601.jpg"}
        description={
          "Мы строим современную недвижимость в лучших локациях для жизни и инвестиций. Срок строительства: 1 год. Доходность: 10-30%."
        }
        submitButtonText={"Отправить заявку"}
        fields={[
          {
            name: "userName",
            type: "text",
            placeholder: "Ваше имя:",
            required: true,
          },
          {
            name: "userTel",
            type: "tel",
            placeholder: "Телефон:",
            required: true,
          },
        ]}
      />
    </MainLayout>
  );
}

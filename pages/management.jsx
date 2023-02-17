import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import CtaSection from "../components/CtaSection/CtaSection";

// data
import { renovationImages } from "../data/renovationImages";
import { investModeling } from "../data/investModeling";
import { principlesArr } from "../data/principlesArr";
import AlexVillas from "../components/AlexVillas/AlexVillas";
import PatternHouse from "../components/PatternHouse/PatternHouse";
import OurClientVideo from "../components/OurClientVideo/OurClientVideo";
import React from "react";
import OurBusiness from "../components/OurBusiness/OurBusiness";
import ManagementGrid from "../components/Management/Grid";
import { menageProjects } from "../data/menageProj";
import Promo from "../components/Promo/Promo";

export default function Management() {
  const arr = {
    type: 'image',
    url: '/images/head/IMG_3581.JPG',
    alt: 'background image',
  }
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
      logo={'/images/logos/logo_management.png'}
    >
      <div className={"mb-16 xl:mb-24"}>
        <Hero
          h1first={"УПРАВЛЯЮЩАЯ"}
          h1second={"КОМПАНИЯ"}
          form={"ПОДАТЬ ЗАЯВКУ НА УПРАВЛЕНИЕ"}
          link
          back={arr}
          text={"Комплексное управление объектами недвижимости на Бали для повышения доходности и качества сервиса "}
        />
      </div>
      <div>
        <AlexVillas
          textBlock1={
            "ALEX VILLAS MANAGEMENT - это управляющая компания на Бали."
          }
          textBlock2={
            "Уже 8 лет мы помогаем владельцам объектов недвижимости зарабатывать больше при значительно меньшем вовлечении."
          }
          textBlock3={
            "<span>Мы ценим опыт, который получаем \nна каждом проекте, и все последующие получаются комфортнее для гостей \nи выгоднее для инвесторов. Это наш путь развития.</span>"
          }
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <Promo
          Data = {[
            {
              title: '42',
              lable: "виллы \nв управлении",
            },
            {
              title: '3500',
              lable: "Отзывов \nна AIRBNB",
            },
            {
              title: "80%",
              lable: "Средняя \nзагрузка ",
            },
            {
              title: "10-20%",
              lable: "Годовая \nдоходность",
            },
          ]}
         
          // links={[
          //   {
          //     name: "download",
          //     lable: "Скачать PDF",
          //     link: "#",
          //   },
          //   {
          //     name: "contact",
          //     lable: "Написать нам",
          //     link: "#",
          //   },
          // ]}
        />
      </div>
      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <ManagementGrid
          title={"ОБЪЕКТЫ \nВ УПРАВЛЕНИИ"}
          projects={menageProjects}
          link={"https://ru.airbnb.com/users/show/15136870"}
          linkLabel={"БОЛЬШЕ НАШИХ ОБЪЕКТОВ НА AIRBNB"}
          full
        />
      </div>

      <CtaSection
        title={
          "  ПЕРЕДАЙТЕ ВАШУ \nНЕДВИЖИМОСТЬ\n<span>В УПРАВЛЕНИЕ \nALEX VILLAS\nMANAGEMENT</span>"
        }
        imageUrl={"/images/cta/DSC01400.JPG"}
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
            placeholder: "Номер телефона:",
            required: true,
          },
        ]}
      />
    </MainLayout>
  );
}

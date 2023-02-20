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
import { useRouter } from "next/router";
import { fetchAPI } from "../lib/api";
import { menuFilters } from "../utils/menuFilters";

export default function Renovation({page, menu, global, social, principle}) {
  const router = useRouter();
  const { locale } = router;
  //console.log(principle)
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
      menu={menuFilters(menu.attributes?.links, 'header')}
      footer={menuFilters(menu.attributes?.links, 'footer')}
      contact={menuFilters(menu.attributes?.links, 'contact')}
      footerContent={global}
      socialFooter={social}
    >
      {page.attributes.hero && (
        <div className={"mb-16 xl:mb-0"}>
          <Hero
            h1first={page.attributes.hero.title}
            h1second={page.attributes.hero.titleBottom}
            text={page.attributes.hero.description}
            backgroundMedia={page.attributes.hero.backgroundMedia.data}
            form={page.attributes.hero.linkLabel}
            menu={menuFilters(menu.attributes?.links, 'hero')}
          />
        </div>
      )}
      <div>
        <AlexVillas
          textBlock1={
            "Реновируйте свою жилую \nили коммерческую недвижимость \nдля  заметного повышения доходности \nили подберите идеальный объект с нами."
          }
          textBlock2={
            "В нашей команде есть весь необходимый опыт и эффективные инструменты \nдля того чтобы <span>сделать арендную недвижимость очень эффективным бизнесом.</span>"
          }
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <Promo
          Data = {[
            {
              title: '15-30<span class="text">%</span>',
              lable: "годовая \nдоходность",
            },
            {
              title: '3<span class="text">года</span>',
              lable: "Срок \nинвестиций",
            },
            {
              title: "$70К",
              lable: "МИНИМАЛЬНАЯ \nСУММА ВЛОЖЕНИЙ",
            },
            {
              title: "50+",
              lable: "ОТРЕСТАВРИРОВАННЫХ \nВИЛЛ",
            },
            {
              title: '8 <span class="text">лет</span>',
              lable: "ОПЫТА НА \nРЫНКЕ БАЛИ",
            },
          ]}
          width
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <RenovationSlider images={renovationImages} />
      </div>
      <div className={"mb-16 md:mb-24"}>
        <WhatsApp text={"Повысьте заполняемость \nи средний чек вашего объекта"} linkLabel={'ПРОДОЛЖИТЬ В WHATSAPP'} link={"#"} />
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
          imageAfter={"/images/renovation/renovation 2 rc9.00_11_05_02.Still002.jpg"}
          imageBefore={"/images/renovation/renovation 2 rc9.00_11_04_12.Still001.jpg"}
        />
      </div>
      {principle && (
        <div className={"mb-16 md:mb-24 xl:mb-28"}>
          <Principles
            title={
              "<span>ВСЕ НАШИ\n ПРОЕКТЫ\nСЛЕДУЮТ</span> \nЭТИМ 5\nПРИНЦИПАМ"
            }
            principles={principle.attributes?.items}
          />
        </div>
      )}
      

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
          " ПОЛУЧИТЕ КАТАЛОГ ОБЪЕКТОВ\n<span>И ФИНАНСОВУЮ МОДЕЛЬ</span>"
        }
        imageUrl={"/images/cta/bg2.jpg"}
        submitButtonText={"Оставить заявку"}
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

export async function getStaticProps({ locale }) {
  const [pageRes, mapRes, airbnbRes, partnerRes, youtubeRes, globalRes, menuRes, socialRes, principleRes ] =
    await Promise.all([
      fetchAPI("/pages", {
        filters: {
          slug: "renovation",
        },
        populate: "deep",
        locale: locale,
      }),
      fetchAPI("/map", { populate: "deep", locale: locale }),
      fetchAPI("/airbnb", { populate: "deep" }),
      fetchAPI("/partner", { populate: "deep" }),
      fetchAPI("/you-tube", { populate: "*" }),
      fetchAPI("/global"),
      fetchAPI("/menu", { populate: "deep", locale:locale}),
      fetchAPI("/social"),
      fetchAPI("/principle", { populate: "deep", locale:locale}),
    ]);
  
  return {
    props: {
      page: pageRes.data[0],
      map: mapRes.data,
      airbnb: airbnbRes.data,
      partner: partnerRes.data,
      youtube: youtubeRes.data,
      global: globalRes.data,
      menu: menuRes.data,
      social: socialRes.data,
      principle: principleRes.data,
    },
    revalidate: 120,
  };
}

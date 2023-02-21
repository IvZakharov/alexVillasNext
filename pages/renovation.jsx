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
import { getProjectsLinks } from "../utils/getProjectsLinks";

const ctaRu = {
  title: "ПОЛУЧИТЕ КАТАЛОГ ОБЪЕКТОВ\n<span>И ФИНАНСОВУЮ МОДЕЛЬ</span>",
  submitButtonText: "Оставить заявку",
  gradient: true,
  fields: [
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
  ],
};

const ctaEn = {
  title: "GET PROPERTIES CATALOG \n<span>AND FINANCIAL MODEL</span>",
  submitButtonText: "Submit your application",
  gradient: true,
  fields: [
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
  ],
};

export default function Renovation({
  page,
  menu,
  global,
  social,
  principle,
  whyAlex,
  investModel,
  stepsRenovation,
  projects,
}) {
  const router = useRouter();
  const { locale } = router;
  

  const Data = [
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
  ];

  const DataEn = [
    {
      title: '15-30<span class="text">%</span>',
      lable: "ANNUAL \nRETURNS",
    },
    {
      title: '3<span class="text">YEARS</span>',
      lable: "INVESTMENT \nPERIOD",
    },
    {
      title: "$70К",
      lable: "MINIMUM \nINVESTMENT",
    },
    {
      title: "50+",
      lable: "RENOVATED \nPROPERTIES",
    },
    {
      title: '8 <span class="text">YEARS</span>',
      lable: "EXPERIENCE \nIN BALI",
    },
  ];
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
      menu={menuFilters(menu.attributes?.links, "header")}
      footer={menuFilters(menu.attributes?.links, "footer")}
      contact={menuFilters(menu.attributes?.links, "contact")}
      menuProject={getProjectsLinks(projects, ["onSale", "soldOut"])}
      footerContent={global}
      socialFooter={social}
      locale={locale}
    >
      {page.attributes.hero && (
        <div className={"mb-16 xl:mb-10"}>
          <Hero
            h1first={page.attributes.hero.title}
            h1second={page.attributes.hero.titleBottom}
            text={page.attributes.hero.description}
            backgroundMedia={page.attributes.hero.backgroundMedia.data}
            form={page.attributes.hero.linkLabel}
            menu={menuFilters(menu.attributes?.links, "hero")}
          />
        </div>
      )}
      {page.attributes?.alexVillasBack && (
        <div>
          <AlexVillas
            firstText={page.attributes?.alexVillasBack.firstText}
            secondText={page.attributes?.alexVillasBack.secondText}
          />
        </div>
      )}
      {page.attributes?.alexVillasBack && (
        <div className={"mb-16 xl:mb-24"}>
          <Promo Data={locale === "en" ? DataEn : Data} width />
        </div>
      )}
      <div className={"mb-16 xl:mb-24"}>
        <RenovationSlider images={renovationImages} />
      </div>
      {page.attributes.whatsapp && (
        <div className={"mb-16 xl:mb-24"}>
          <WhatsApp
            text={ page.attributes.whatsapp?.description}
            link={global.attributes?.whatsappLink}
            linkLabel={page.attributes.whatsapp?.buttonLabel}
          />
        </div>
      )}
      <div className={"mb-16 md:mb-24"}>
        {locale === 'en' ? (
          <InvestExample title={"<span>WHY</span>\nRENOVATION"}
            firstBlock={"Sometimes it only takes minimum<br /> intervention to drastically improve the <br />performance of investment property."}
            secondBlock={"We know how to find perfect villas, make an <br />budget-efficient renovations and rent it out for <br />higher gains."}
          />
        ): (
          <InvestExample title={"<span>ПОЧЕМУ\nИМЕННО</span>\nРЕНОВАЦИЯ"}
           firstBlock={"Иногда требуется лишь минимальное<br /> вмешательство, " +
             "чтобы радикально <br />улучшить отдачу для инвестора."}
             secondBlock={"Мы умеем находить такие объекты, <br />проводить " +
               "точечную реновацию <br />и в дальнейшем выгодно их сдавать."}
          />
        )}
        
      </div>
      {investModel && (
        <div className={"container mb-16 md:mb-24 xl:pl-32 xl:pr-64"}>
          <Table tableData={investModel.attributes?.item} />
        </div>
      )}
      {stepsRenovation && (
        <div className={"mb-16 md:mb-24 xl:mb-36"}>
          <RenovationSteps
            data={stepsRenovation}
              imageAfter={page.attributes.renovation.imageAfter ?
                (page.attributes.renovation.imageAfter.data.attributes.url) :
                ("/images/renovation/renovation 2 rc9.00_11_05_02.Still002.jpg")
              }
              imageBefore={page.attributes.renovation.imageBefore ?
                (page.attributes.renovation.imageBefore.data.attributes.url):
                ("/images/renovation/renovation 2 rc9.00_11_04_12.Still001.jpg")
              
            }
            
            locale={locale}
          />
        </div>
      )}

      {principle && (
        <div className={"mb-16 md:mb-24 xl:mb-28"}>
          <Principles
            title={
              locale === "ru"
                ? "<span>ВСЕ НАШИ\n ПРОЕКТЫ\nСЛЕДУЮТ</span> \nЭТИМ 5\nПРИНЦИПАМ"
                : "<span>EVERYTHING\n WE RENOVATE \nFOLLOWS</span> \nTHESE 5 \nPRINCIPLES"
            }
            principles={principle.attributes?.items}
          />
        </div>
      )}
        <div className={"mb-16 xl:mb-24"}>
          <OurClientVideo locale={locale}  />
        </div>
      {whyAlex && (
        <div className={"mb-16 xl:mb-32"}>
          <OurBusiness locale={locale} stats={whyAlex} />
        </div>
      )}
  
      {locale == "en" ? (
        <CtaSection
          title={ctaEn.title}
          image={page.attributes.formImage}
          submitButtonText={ctaEn.submitButtonText}
          gradient={ctaEn.gradient}
          fields={ctaEn.fields}
        />
      ) : (
        <CtaSection
          title={ctaRu.title}
          image={page.attributes.formImage}
          submitButtonText={ctaRu.submitButtonText}
          gradient={ctaRu.gradient}
          fields={ctaRu.fields}
        />
      )}
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  const [pageRes, globalRes, menuRes, socialRes, principleRes, whyAlexRes, investModelRes, stepsRenovationRes, projectsRes] =
    await Promise.all([
      fetchAPI("/pages", {
        filters: {
          slug: "renovation",
        },
        populate: "deep",
        locale: locale,
      }),
      fetchAPI("/global"),
      fetchAPI("/menu", { populate: "deep", locale: locale }),
      fetchAPI("/social"),
      fetchAPI("/principle", { populate: "deep", locale: locale }),
      fetchAPI("/why-alex", { populate: "deep", locale: locale }),
      fetchAPI("/invest-model", { populate: "deep", locale: locale }),
      fetchAPI("/steps-renovation", { populate: "deep", locale: locale }),
      fetchAPI("/projects", { populate: "*", locale: locale }),
    ]);

  return {
    props: {
      page: pageRes.data[0],
      global: globalRes.data,
      menu: menuRes.data,
      social: socialRes.data,
      principle: principleRes.data,
      whyAlex: whyAlexRes.data,
      investModel: investModelRes.data,
      stepsRenovation: stepsRenovationRes.data,
      projects: projectsRes.data,
    },
    revalidate: 120,
  };
}

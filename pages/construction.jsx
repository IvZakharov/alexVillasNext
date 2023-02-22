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
import { fetchAPI } from "../lib/api";
import { menuFilters } from "../utils/menuFilters";
import { useRouter } from "next/router";
import Map from "../components/Map/Map";
import { reverseArr } from "../utils/reverseArr";
import { getProjectsLinks } from "../utils/getProjectsLinks";

const ctaRu = {
  title: "СВЯЗАТЬСЯ С ОТДЕЛОМ \n<span>ПРОДАЖ</span>",
  description:
    "Мы строим современную недвижимость в лучших локациях для жизни и инвестиций. Срок строительства: 1 год. Доходность: 10-30%.",
  submitButtonText: "ОТПРАВИТЬ",
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
  title: "GET IN TOUCH \n<span>WITH US:</span>",
  description:
    "Мы строим современную недвижимость в лучших локациях для жизни и инвестиций. Срок строительства: 1 год. Доходность: 10-30%.",
  label: "HOPE TO HEAR\nFROM YOU!",
  submitButtonText: "SEND",
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

const gridOnSaleProjectsRu = {
  title: "ПРОЕКТЫ\nВ ПРОДАЖЕ",
  description:
    "Наш фокус - на лучших локациях, хорошей инфраструктуре и передовой архитектуре. \nЭто гарантирует максимальные рейтинги, обеспечивая высокую доходность инвесторам.",
  buttonLabel: "БОЛЬШЕ ЗАВЕРШЁННЫХ ПРОЕКТОВ",
};

const gridOnSaleProjectsEn = {
  title: "PROJECTS\nON SALE",
  description:
    "We focus on prime locations, decent infrastructure and cutting edge architecture \nThis ensures high ratings in booking services, which transforms into higher gains for our investors.",
  buttonLabel: "MORE PROJECTS ON SALE",
};

const gridSoldOutProjectsRu = {
  title: "ЗАВЕРШЁННЫЕ\nПРОЕКТЫ",
  description:
    "Здесь вы можете почитать про наши кейсы, глубже понять наш подход и увидеть завершённые проекты.",
  buttonLabel: "БОЛЬШЕ ЗАВЕРШЁННЫХ ПРОЕКТОВ",
};

const gridSoldOutProjectsEn = {
  title: "FINISHED\nPROJECTS",
  description:
    "Check our case studies to get a closer look at our approach and see the projects we finished.",
  buttonLabel: "MORE PROJECTS ON SALE",
};

const mapRu = {
  title: "ОБЪЕКТЫ \nНА КАРТЕ",
  description:
    "Наши комплексы находятся в  самых посещаемых локациях Бали. Рядом \nс ними вы всегда найдёте основные достопримечательности и развлечения.",
};

const mapEn = {
  title: "PROJECTS \nON THE MAP",
  description:
    "Our complexes are located in the most visited areas in Bali. You will always have a choice of entertainment options and sights to see within 10-minute proximity.",
};

export default function Construction({
  page,
  map,
  projects,
  principle,
  whyAlex,
  global,
  menu,
  social,
  review,
}) {
  const router = useRouter();
  const { locale } = router;
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
      logo={
        page.attributes?.logo.data.attributes.url
          ? page.attributes.logo.data.attributes.url
          : "/images/logos/logo_construction.png"
      }
      menu={menuFilters(menu.attributes?.links, "header")}
      footer={menuFilters(menu.attributes?.links, "footer")}
      contact={menuFilters(menu.attributes?.links, "contact")}
      footerContent={global}
      socialFooter={social}
      menuProject={getProjectsLinks(projects, ["onSale", "soldOut"])}
      locale={locale}
    >
      {page.attributes.hero && (
        <div className={"mb-16 xl:mb-24"}>
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

      <div className={"mb-16 xl:mb-24"}>
        {page.attributes?.alexVillasBack && (
          <div>
            <AlexVillas
              firstText={page.attributes?.alexVillasBack.firstText}
              secondText={page.attributes?.alexVillasBack.secondText}
              logo={page.attributes?.logo.data.attributes.url}
            />
          </div>
        )}
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <Promo
          Data={[
            {
              title: "7",
              lable: "Комплексов \nпостроенно",
            },
            {
              title: "146",
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
      {projects && (
        <div className={"mb-10 xl:mb-16"}>
          <ProjectsGrid
            projects={projectsOnSaleFilter(projects, ["onSale", "comingSoon"])}
            title={
              locale === "en"
                ? gridOnSaleProjectsEn.title
                : gridOnSaleProjectsRu.title
            }
            description={
              locale === "en"
                ? gridOnSaleProjectsEn.description
                : gridOnSaleProjectsRu.description
            }
            linkLabel={
              locale === "en"
                ? gridOnSaleProjectsEn.buttonLabel
                : gridOnSaleProjectsRu.buttonLabel
            }
            locale={locale}
          />
        </div>
      )}

      {projects && (
        <div className={"mb-10 xl:mb-16"}>
          <ProjectsGrid
            projects={projectsOnSaleFilter(projects, ["soldOut"])}
            title={
              locale === "en"
                ? gridSoldOutProjectsEn.title
                : gridSoldOutProjectsRu.title
            }
            description={
              locale === "en"
                ? gridSoldOutProjectsEn.description
                : gridSoldOutProjectsRu.description
            }
            linkLabel={
              locale === "en"
                ? gridSoldOutProjectsEn.buttonLabel
                : gridSoldOutProjectsRu.buttonLabel
            }
            locale={locale}
          />
        </div>
      )}

      {map && (
        <div>
          <Map
            title={locale === "en" ? mapEn.title : mapRu.title}
            description={
              locale === "en" ? mapEn.description : mapRu.description
            }
            objects={reverseArr(map.attributes?.objects)}
          />
        </div>
      )}
      {page.attributes.whatsapp && (
        <div className={"mb-16 xl:mb-24"}>
          <WhatsApp
            text={page.attributes.whatsapp?.description}
            link={global.attributes?.whatsappLink}
            linkLabel={page.attributes.whatsapp?.buttonLabel}
          />
        </div>
      )}
      <div className={"mb-16 md:mb-24"}>
        <ConstructionAbout />
      </div>
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

      {review && (
        <div className={"mb-16 xl:mb-24"}>
          <OurClientVideo
            locale={locale}
            youtubeUrl={review.attributes.videoUrl}
            authorName={review.attributes.authorName}
            authorQuote={review.attributes.authorQuote}
          />
        </div>
      )}

      {whyAlex && (
        <div className={"mb-16 xl:mb-32"}>
          <OurBusiness locale={locale} stats={whyAlex} />
        </div>
      )}

      {locale === "en" ? (
        <CtaSection
          title={ctaEn.title}
          description={ctaEn.description}
          image={page.attributes.formImage}
          submitButtonText={ctaEn.submitButtonText}
          fields={ctaEn.fields}
        />
      ) : (
        <CtaSection
          title={ctaRu.title}
          description={ctaRu.description}
          image={page.attributes.formImage}
          submitButtonText={ctaRu.submitButtonText}
          fields={ctaRu.fields}
        />
      )}
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  const [
    pageRes,
    mapRes,
    projectsRes,
    principleRes,
    whyAlexRes,
    reviewRes,
    globalRes,
    menuRes,
    socialRes,
  ] = await Promise.all([
    fetchAPI("/pages", {
      filters: {
        slug: "construction",
      },
      populate: "deep",
      locale: locale,
    }),
    fetchAPI("/map", { populate: "deep", locale: locale }),
    fetchAPI("/projects", {
      populate: "*",
      locale: locale,
      sort: "updatedAt:DESC",
    }),
    fetchAPI("/principle", { populate: "deep", locale: locale }),
    fetchAPI("/why-alex", { populate: "deep", locale: locale }),
    fetchAPI("/review"),
    fetchAPI("/global"),
    fetchAPI("/menu", { populate: "deep", locale: locale }),
    fetchAPI("/social"),
  ]);

  return {
    props: {
      page: pageRes.data[0],
      map: mapRes.data,
      projects: projectsRes.data,
      principle: principleRes.data,
      whyAlex: whyAlexRes.data,
      review: reviewRes.data,
      global: globalRes.data,
      menu: menuRes.data,
      social: socialRes.data,
    },
    revalidate: 120,
  };
}

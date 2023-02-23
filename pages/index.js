import React from "react";
import { useRouter } from "next/router";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhyBali from "../components/WhyBali/WhyBali";
import ProjectsGrid from "../components/Project/Grid";
import YoutubeSection from "../components/YoutubeSection";
import Community from "../components/Community/Community";

import WhatsApp from "../components/WhatsApp/WhatsApp";
import OurBusiness from "../components/OurBusiness/OurBusiness";
import ManagementGrid from "../components/Management/Grid";
import RenovationGrid from "../components/Renovation/Grid/Grid";
import Team from "../components/Team/Team";
import { projectsOnSaleFilter } from "../utils/projectsOnSaleFilter";

import { menuFilters } from "../utils/menuFilters";

import CtaSection from "../components/CtaSection/CtaSection";

import { fetchAPI } from "../lib/api";
import { reverseArr } from "../utils/reverseArr";
import Map from "../components/Map/Map";
import { aboutLinks } from "../data/aboutLinks";
import { getProjectsLinks } from "../utils/getProjectsLinks";
import VideoModal from "../components/Modal/VideoModal/VideoModal";
import QuizModal from "../components/Modal/QuizModal/QuizModal";

const ctaRu = {
  title: "ПОЛУЧИТЕ \n<span>КОНСУЛЬТАЦИЮ</span>",
  label: "БУДЕМ\nНА СВЯЗИ!",
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
    {
      name: "userMessage",
      type: "text",
      placeholder: "Сообщение:",
      required: false,
    },
  ],
};

const ctaEn = {
  title: "GET IN TOUCH \n<span>WITH US:</span>",
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
    {
      name: "userMessage",
      type: "text",
      placeholder: "Your message:",
      required: false,
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

const renovationGridRu = {
  title: "ИНВЕСТИЦИИ\nВ РЕНОВАЦИЮ",
  description:
    "Инвестируйте от $70.000 c доходностью\n15-25% годовых. Цикл инвестиций 3 года.",
  linkLabel: "УЗНАТЬ ПОДРОБНОСТИ",
};

const renovationGridEn = {
  title: "INVESTMENTS\nIN RENOVATION",
  description:
    "Invest starting from $70.000 and gain \n15-25% yearly. Investment period is 3 years.",
  linkLabel: "MORE ON RENOVATIONS",
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

export default function Home({
  page,
  map,
  projects,
  airbnb,
  team,
  youtube,
  whyAlex,
  global,
  menu,
  social,
}) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const router = useRouter();
  const { locale } = router;

  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
      menu={menuFilters(menu.attributes?.links, "header")}
      footer={menuFilters(menu.attributes?.links, "footer")}
      contact={menuFilters(menu.attributes?.links, "contact")}
      footerContent={global}
      socialFooter={social}
      menuProject={getProjectsLinks(projects, ["onSale", "soldOut"])}
      locale={locale}
    >
      {page.attributes.hero && (
        <div className={"mb-16 xl:mb-0"}>
          <Hero
            h1first={page.attributes.hero.title}
            h1second={page.attributes.hero.titleBottom}
            text={page.attributes.hero.description}
            backgroundMedia={page.attributes.hero.backgroundMedia.data}
            link={page.attributes.hero.linkLabel}
            menu={menuFilters(menu.attributes?.links, "hero")}
            quiz
            openQuizModal={() => setModalIsOpen(true)}
          />
        </div>
      )}

      {page.attributes.about && (
        <div className={"mb-16 xl:mb-24"} id={"o-nas"}>
          <About
            description={page.attributes.about?.description}
            videoUrl={page.attributes.about.videoUrl}
            image={page.attributes.about.image}
            links={locale === "en" ? aboutLinks.en : aboutLinks.ru}
          />
        </div>
      )}

      {map && (
        <div className={"mb-16 xl:mb-24"}>
          <Map
            title={locale === "en" ? mapEn.title : mapRu.title}
            description={
              locale === "en" ? mapEn.description : mapRu.description
            }
            objects={reverseArr(map.attributes?.objects)}
          />
        </div>
      )}

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
                : gridSoldOutProjectsEn.buttonLabel
            }
            locale={locale}
          />
        </div>
      )}
      {page.attributes.renovation && (
        <div className={"mb-16 md:mb-24 xl:mb-36"}>
          <RenovationGrid
            locale={locale}
            title={
              locale === "en" ? renovationGridEn.title : renovationGridRu.title
            }
            description={
              locale === "en"
                ? renovationGridEn.description
                : renovationGridRu.description
            }
            imageAfter={page.attributes.renovation.imageAfter}
            imageBefore={page.attributes.renovation.imageBefore}
            link={"/renovation"}
            linkLabel={
              locale === "en"
                ? renovationGridEn.linkLabel
                : renovationGridRu.linkLabel
            }
          />
        </div>
      )}

      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        {airbnb && (
          <ManagementGrid
            title={
              locale === "en"
                ? "PROPERTIES\nWE MANAGE"
                : "ОБЪЕКТЫ \nВ УПРАВЛЕНИИ "
            }
            description={
              locale === "en"
                ? ""
                : "Инвестируйте от $70.000 c доходностью 15-25% годовых. Цикл инвестиций 3 года."
            }
            projects={airbnb.attributes?.objects}
            link={"/management"}
            linkLabel={
              locale === "en"
                ? "MORE MANAGED PROPERTIES"
                : "БОЛЬШЕ ОБ УПРАВЛЯЮЩЕЙ КОМПАНИИ"
            }
            full={false}
          />
        )}
      </div>

      {page.attributes.whyBali && (
        <div className={"mb-16 xl:mb-24"}>
          <WhyBali
            locale={locale}
            advantages={page.attributes.whyBali?.advantages}
            hotspots={page.attributes?.countryComparison}
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

      {whyAlex && (
        <div className={"mb-16 xl:mb-32"}>
          <OurBusiness locale={locale} stats={whyAlex} />
        </div>
      )}
      {team && (
        <div className={"mb-16 xl:mb-24"}>
          <Team teamArr={team.attributes.items} locale={locale} />
        </div>
      )}

      {page.attributes.community && (
        <div className={"mb-16 md:mb-24 xl:mb-36"}>
          <Community
            locale={locale}
            description={page.attributes.community.text}
            imageUrl={"/images/team/1/socials.jpg"}
          />
        </div>
      )}

      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        {youtube && (
          <YoutubeSection
            locale={locale}
            youtubeLinks={youtube?.attributes?.youtubeUrls}
          />
        )}
      </div>

      {locale === "en" ? (
        <CtaSection
          title={ctaEn.title}
          image={page.attributes.formImage}
          label={ctaEn.label}
          submitButtonText={ctaEn.submitButtonText}
          gradient={ctaEn.gradient}
          fields={ctaEn.fields}
        />
      ) : (
        <CtaSection
          title={ctaRu.title}
          image={page.attributes.formImage}
          label={ctaRu.label}
          submitButtonText={ctaRu.submitButtonText}
          gradient={ctaRu.gradient}
          fields={ctaRu.fields}
        />
      )}

      <QuizModal
        active={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      />
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  const [
    pageRes,
    mapRes,
    projectsRes,
    airbnbRes,
    teamRes,
    youtubeRes,
    whyAlexRes,
    globalRes,
    menuRes,
    socialRes,
  ] = await Promise.all([
    fetchAPI("/pages", {
      filters: {
        slug: "home",
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
    fetchAPI("/airbnb", { populate: "deep" }),
    fetchAPI("/team", { populate: "deep", locale: locale }),
    fetchAPI("/you-tube", { populate: "*" }),
    fetchAPI("/why-alex", { populate: "deep", locale: locale }),
    fetchAPI("/global"),
    fetchAPI("/menu", { populate: "deep", locale: locale }),
    fetchAPI("/social"),
  ]);

  return {
    props: {
      page: pageRes.data[0],
      map: mapRes.data,
      projects: projectsRes.data,
      airbnb: airbnbRes.data,
      team: teamRes.data,
      youtube: youtubeRes.data,
      whyAlex: whyAlexRes.data,
      global: globalRes.data,
      menu: menuRes.data,
      social: socialRes.data,
    },
    revalidate: 120,
  };
}

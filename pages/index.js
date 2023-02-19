import { useRouter } from "next/router";

import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhyBali from "../components/WhyBali/WhyBali";
import ProjectsGrid from "../components/Project/Grid";
import YoutubeSection from "../components/YoutubeSection";
import Community from "../components/Community/Community";
import AlexVillas from "../components/AlexVillas/AlexVillas";
import WhatsApp from "../components/WhatsApp/WhatsApp";
import OurBusiness from "../components/OurBusiness/OurBusiness";
import ManagementGrid from "../components/Management/Grid";
import RenovationGrid from "../components/Renovation/Grid/Grid";
import Team from "../components/Team/Team";
import { projectsOnSaleFilter } from "../utils/projectsOnSaleFilter";
import { menageProjects } from "../data/menageProj";
import { projects } from "../data/projects";
import CtaSection from "../components/CtaSection/CtaSection";
import teamData from "../data/teamData";
import { fetchAPI } from "../lib/api";
import { reverseArr } from "../utils/reverseArr";
import Map from "../components/Map/Map";
import { aboutLinks } from "../data/aboutLinks";

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

export default function Home({ page, map, airbnb, partner, youtube, global }) {
  const router = useRouter();
  const { locale } = router;

  console.log(page);

  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      {page.attributes.hero && (
        <div className={"mb-16 xl:mb-0"}>
          <Hero
            h1first={page.attributes.hero.title}
            h1second={page.attributes.hero.titleBottom}
            text={page.attributes.hero.description}
            backgroundMedia={page.attributes.hero.backgroundMedia.data}
          />
        </div>
      )}

      {page.attributes.about && (
        <div className={"mb-16 xl:mb-24"} id={"o-nas"}>
          <About
            description={page.attributes.about?.description}
            videoUrl={page.attributes.about.videoUrl}
            image={page.attributes.about.image}
            links={locale == "en" ? aboutLinks.en : aboutLinks.ru}
          />
        </div>
      )}

      {map && (
        <div className={"mb-16 xl:mb-24"}>
          <Map objects={reverseArr(map.attributes?.objects)} />
        </div>
      )}

      <div className={"mb-16 xl:mb-16"}>
        <ProjectsGrid
          projects={projectsOnSaleFilter(projects, true)}
          title={"ПРОЕКТЫ\nВ ПРОДАЖЕ"}
          description={
            "Наш фокус - на лучших локациях, хорошей инфраструктуре и передовой архитектуре. \nЭто гарантирует максимальные рейтинги, обеспечивая высокую доходность инвесторам."
          }
          link={"#"}
          linkLabel={"БОЛЬШЕ ПРОЕКТОВ В ПРОДАЖЕ"}
        />
      </div>

      <div className={"mb-10 xl:mb-16"}>
        <ProjectsGrid
          projects={projectsOnSaleFilter(projects, false)}
          title={"ЗАВЕРШЁННЫЕ\nПРОЕКТЫ"}
          description={
            "Наш фокус - на лучших локациях, хорошей инфраструктуре и передовой архитектуре. \nЭто гарантирует максимальные рейтинги, обеспечивая высокую доходность инвесторам."
          }
          link={"#"}
          linkLabel={"БОЛЬШЕ ЗАВЕРШЁННЫХ ПРОЕКТОВ"}
        />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <RenovationGrid
          title={"ИНВЕСТИЦИИ\nВ РЕНОВАЦИЮ"}
          description={
            "Инвестируйте от $70.000 c доходностью\n15-25% годовых. Цикл инвестиций 3 года."
          }
          imageAfter={
            "/images/renovation/renovation 2 rc9.00_11_05_02.Still002.jpg"
          }
          imageBefore={
            "/images/renovation/renovation 2 rc9.00_11_04_12.Still001.jpg"
          }
          link={"/renovation"}
          linkLabel={"УЗНАТЬ ПОДРОБНОСТИ"}
        />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        {airbnb && (
          <ManagementGrid
            title={
              locale == "en"
                ? "PROPERTIES\nWE MANAGE"
                : "ОБЪЕКТЫ \nВ УПРАВЛЕНИИ "
            }
            description={
              locale == "en"
                ? ""
                : "Инвестируйте от $70.000 c доходностью 15-25% годовых. Цикл инвестиций 3 года."
            }
            projects={airbnb.attributes?.objects}
            link={"/management"}
            linkLabel={
              locale == "en"
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
            advatages={page.attributes.whyBali?.advantages}
            hotspots={page.attributes?.countryComparison}
          />
        </div>
      )}

      <div className={"mb-16 xl:mb-24"}>
        <WhatsApp
          text={
            "Получите консультацию специалиста и набор материалов для инвестора."
          }
          link={"#"}
          linkLabel={"ПРОДОЛЖИТЬ В WHATSAPP"}
        />
      </div>

      {page.attributes.whyAlex && (
        <div className={"mb-16 xl:mb-32"}>
          <OurBusiness locale={locale} stats={page.attributes.whyAlex} />
        </div>
      )}

      <div className={"mb-16 xl:mb-24"}>
        <Team teamArr={teamData} />
      </div>

      {page.attributes.community && (
        <div className={"mb-16 md:mb-24 xl:mb-36"}>
          <Community
            locale={locale}
            description={page.attributes.community.text}
            imageUrl={"/images/team/all.jpg"}
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

      {locale == "en" ? (
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
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  const [pageRes, mapRes, airbnbRes, partnerRes, youtubeRes, globalRes] =
    await Promise.all([
      fetchAPI("/pages", {
        filters: {
          slug: "home",
        },
        populate: "deep",
        locale: locale,
      }),
      fetchAPI("/map", { populate: "deep", locale: locale }),
      fetchAPI("/airbnb", { populate: "deep" }),
      fetchAPI("/partner", { populate: "deep" }),
      fetchAPI("/you-tube", { populate: "*" }),
      fetchAPI("/global"),
    ]);

  return {
    props: {
      page: pageRes.data[0],
      map: mapRes.data,
      airbnb: airbnbRes.data,
      partner: partnerRes.data,
      youtube: youtubeRes.data,
      global: globalRes.data,
    },
    revalidate: 120,
  };
}

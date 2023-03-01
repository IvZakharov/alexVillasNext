import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import CtaSection from "../components/CtaSection/CtaSection";
// data
import AlexVillas from "../components/AlexVillas/AlexVillas";
import React from "react";
import ManagementGrid from "../components/Management/Grid";
import Promo from "../components/Promo/Promo";
import { fetchAPI } from "../lib/api";
import { menuFilters } from "../utils/menuFilters";
import { useRouter } from "next/router";
import { getProjectsLinks } from "../utils/getProjectsLinks";

const Data = [
  {
    title: '15-30<span class="text weight500">%</span>',
    lable: "годовая \nдоходность",
  },
  {
    title: '3<span class="text weight500">года</span>',
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
    title: '8<span class="text weight500">лет</span>',
    lable: "ОПЫТА НА \nРЫНКЕ БАЛИ",
  },
];

const DataEn = [
  {
    title: '15-30<span class="text weight500">%</span>',
    lable: "ANNUAL \nRETURNS",
  },
  {
    title: '3<span class="text weight500">YEARS</span>',
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
    title: '8<span class="text weight500">YEARS</span>',
    lable: "EXPERIENCE \nIN BALI",
  },
];

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

export default function Management({
  page,
  airbnb,
  global,
  menu,
  social,
  projects,
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
          : "/images/logos/logo_management.png"
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
        <div className={"mb-16 xl:mb-0"}>
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
            logo={page.attributes?.logo.data.attributes.url}
          />
        </div>
      )}
      {page.attributes?.alexVillasBack && (
        <div className={"mb-16 xl:mb-24"}>
          <Promo Data={locale === "en" ? DataEn : Data} width />
        </div>
      )}
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
            link={airbnb.attributes.airbnbLink}
            linkLabel={
              locale == "en"
                ? "MORE PROPERTIES ON AIRBNB"
                : "БОЛЬШЕ НАШИХ ОБЪЕКТОВ НА AIRBNB"
            }
            full={true}
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
  const [pageRes, airbnbRes, globalRes, menuRes, socialRes, projectRes] =
    await Promise.all([
      fetchAPI("/pages", {
        filters: {
          slug: "management",
        },
        populate: "deep",
        locale: locale,
      }),
      fetchAPI("/airbnb", { populate: "deep" }),
      fetchAPI("/global"),
      fetchAPI("/menu", { populate: "deep", locale: locale }),
      fetchAPI("/social"),
      fetchAPI("/projects", { locale: locale, sort: "updatedAt:DESC" }),
    ]);

  return {
    props: {
      page: pageRes.data[0],
      airbnb: airbnbRes.data,
      global: globalRes.data,
      menu: menuRes.data,
      social: socialRes.data,
      projects: projectRes.data,
    },
    revalidate: 120,
  };
}

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import CtaSection from "../components/CtaSection/CtaSection";
import WhatsApp from "../components/WhatsApp/WhatsApp";
import AlexVillas from "../components/AlexVillas/AlexVillas";
import ContactAlex from "../components/ContactsAlex/ContactAlex";
import { fetchAPI } from "../lib/api";
import { menuFilters } from "../utils/menuFilters";
import Map from "../components/Map/Map";
import { reverseArr } from "../utils/reverseArr";
import { useRouter } from "next/router";
import { getProjectsLinks } from "../utils/getProjectsLinks";

const ctaRu = {
  title: "МЫ ВСЕГДА\n<span>НА СВЯЗИ:\n</span>",
  submitButtonText: "ОТПРАВИТЬ",
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
  submitButtonText: "SEND",
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

export default function Contacts({
  page,
  map,
  menu,
  social,
  global,
  projects,
}) {
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
        <div className={"mb-16 xl:mb-24"}>
          <Hero
            h1first={page.attributes.hero.title}
            h1second={page.attributes.hero.titleBottom}
            backgroundMedia={page.attributes.hero.backgroundMedia.data}
            form={page.attributes.hero.linkLabel}
          />
        </div>
      )}
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  const [pageRes, mapRes, globalRes, menuRes, socialRes, projectsRes] =
    await Promise.all([
      fetchAPI("/pages", {
        filters: {
          slug: "agency",
        },
        populate: "deep",
        locale: locale,
      }),
      fetchAPI("/map", { populate: "deep", locale: locale }),
      fetchAPI("/global"),
      fetchAPI("/menu", { populate: "deep", locale: locale }),
      fetchAPI("/social"),
      fetchAPI("/projects", { locale: locale, sort: "updatedAt:DESC" }),
    ]);

  return {
    props: {
      page: pageRes.data[0],
      map: mapRes.data,
      global: globalRes.data,
      menu: menuRes.data,
      social: socialRes.data,
      projects: projectsRes.data,
    },
    revalidate: 120,
  };
}

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Team from "../components/Team/Team";
import teamData from "../data/teamData";
import WhyBali from "../components/WhyBali/WhyBali";
import OurBusiness from "../components/OurBusiness/OurBusiness";
import CtaSection from "../components/CtaSection/CtaSection";
import OpenVacancy from "../components/OpenVacancy/OpenVacancy";
import { fetchAPI } from "../lib/api";
import { useRouter } from "next/router";
import { menuFilters } from "../utils/menuFilters";

const ctaRu = {
  title: "ПОЛУЧИТЕ \n<span>РАБОТУ МЕЧТЫ</span>",
  label: "УВИДИМСЯ\nВ НАШЕЙ\nКОМАНДЕ!",
  submitButtonText: "Заявка на работу",
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

export default function Vacancy({
  page,

  team,
  whyAlex,

  global,
  menu,
  social,
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
      {team && (
        <div className={"mb-16 xl:mb-24"}>
          <Team teamArr={team.attributes.items} />
        </div>
      )}
      {whyAlex && (
        <div className={"mb-16 xl:mb-32"}>
          <OurBusiness locale={locale} stats={whyAlex} />
        </div>
      )}
      <div className={"mb-16 xl:mb-32"}>
        <OpenVacancy />
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
  const [pageRes, teamRes, whyAlexRes, globalRes, menuRes, socialRes] =
    await Promise.all([
      fetchAPI("/pages", {
        filters: {
          slug: "vacancy",
        },
        populate: "deep",
        locale: locale,
      }),

      fetchAPI("/team", { populate: "deep", locale: locale }),
      fetchAPI("/why-alex", { populate: "deep", locale: locale }),
      fetchAPI("/global"),
      fetchAPI("/menu", { populate: "deep", locale: locale }),
      fetchAPI("/social"),
    ]);

  return {
    props: {
      page: pageRes.data[0],
      team: teamRes.data,
      whyAlex: whyAlexRes.data,
      global: globalRes.data,
      menu: menuRes.data,
      social: socialRes.data,
    },
    revalidate: 120,
  };
}

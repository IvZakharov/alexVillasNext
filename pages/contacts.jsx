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
          />
        </div>
      )}
      {page.attributes?.alexVillasBack && (
        <div className={"mb-16"}>
          <AlexVillas
            firstText={page.attributes?.alexVillasBack.firstText}
            secondText={page.attributes?.alexVillasBack.secondText}
          />
        </div>
      )}

      <div className={"mb-16"}>
        <ContactAlex socials={social} global={global} />
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
      

      {map && <Map objects={reverseArr(map.attributes?.objects)} />}

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
  const [pageRes, mapRes, globalRes, menuRes, socialRes, projectsRes] =
    await Promise.all([
      fetchAPI("/pages", {
        filters: {
          slug: "contacts",
        },
        populate: "deep",
        locale: locale,
      }),
      fetchAPI("/map", { populate: "deep", locale: locale }),
      fetchAPI("/global"),
      fetchAPI("/menu", { populate: "deep", locale: locale }),
      fetchAPI("/social"),
      fetchAPI("/projects", { locale: locale }),
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

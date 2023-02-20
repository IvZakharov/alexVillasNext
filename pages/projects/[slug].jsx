import React from "react";
import MainLayout from "../../layouts/MainLayout";

import ComplexPlash from "../../components/Project/ComplexPlash/ComplexPlash";
import InvestInBaly from "../../components/Project/InvestInBaly/InvestInBaly";
import SliderBaly from "../../components/Project/SliderBaly/SliderBaly";
import ComplexPlan from "../../components/Project/ComplexPlan/ComplexPlan";
import VillasParam from "../../components/Project/VillasParam/VillasParam";
import Investor from "../../components/Project/Investor/Investor";
import OurBusiness from "../../components/OurBusiness/OurBusiness";
import OurClientVideo from "../../components/OurClientVideo/OurClientVideo";
import { fetchAPI } from "../../lib/api";
import PropertiesGallery from "../../components/PropertiesGallery/PropertiesGallery";
import FinanceModeling from "../../components/Project/FinanceModeling/FinanceModeling";
import Quiz from "../../components/Project/Quiz/Quiz";
import Faq from "../../components/Project/Faq/Faq";
import Map from "../../components/Map/Map";
import ProjectHero from "../../components/Project/ProjectHero/ProjectHero";

import { useRouter } from "next/router";
import { reverseArr } from "../../utils/reverseArr";

const Project = ({ project, properties, map, baliGallery, global }) => {
  const router = useRouter();
  const { locale } = router;

  const complex = [
    {
      lable: "Средняя окупаемость:",
      sublable: "5-6 лет",
    },
    {
      lable: "Инвестиции от",
      sublable: "175 000$ - 445 000$",
    },
    {
      lable: "Топ локация <b>Чангу,</b>",
      sublable: "5 минут до океана",
    },
  ];

  console.log(project);
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"mb-16 md:mb-32 xl:mb-24"}>
        {/*<Hero*/}
        {/*  h1first={"ALEX VILLAS"}*/}
        {/*  h1second={"COMPLEX 6"}*/}
        {/*  text={"с доходностью от 10 до 33 годовых в $"}*/}
        {/*  backgroundMedia={project.attributes.hero.backgroundMedia.data}*/}
        {/*  dot={"BERAWA, CANGGU"}*/}
        {/*  form={"Получить персональное предложение"}*/}
        {/*  subLable={"Цены от $189.000"}*/}
        {/*  text={*/}
        {/*    "1-спальный таунхаус <span>x 10</span><br />" +*/}
        {/*    "1-спальные апартаменты <span>x 16</span><br />" +*/}
        {/*    "1-спальные смарт-виллы <span>x 5</span><br />" +*/}
        {/*    "2-спальные смарт-виллы <span>x 3</span><br />" +*/}
        {/*    "3-спальные смарт-виллы <span>x 1</span><br />"*/}
        {/*  }*/}
        {/*  link*/}
        {/*/>*/}

        <ProjectHero
          h1first={project.attributes.hero.title}
          h1second={project.attributes.hero.titleBottom}
          properties={project.attributes.propertyList}
          backgroundImage={project.attributes?.thumbnail}
          form={"Получить персональное предложение"}
          location={project.attributes.location}
          startingPrice={project.attributes.price}
        />
      </div>
      <div className={"mb-8 md:mb-16 lg:mb-10"}>
        <ComplexPlash items={complex} />
      </div>
      <div className={"mb-16 md:mb-16"}>
        <InvestInBaly
          title={"<span>10 причин</span> \nинвестировать в Бали"}
          blockFirst={"<b>За 10 лет поток </b> туристов вырос"}
        />
      </div>
      {baliGallery && (
        <div className={"mb-16"}>
          <SliderBaly images={baliGallery.attributes?.gallery?.data} />
        </div>
      )}

      <div className={"mb-16"}>
        <ComplexPlan />
      </div>
      {properties && (
        <div className={"mb-16 xl:mb-24"}>
          <PropertiesGallery
            properties={properties.attributes?.propertyGallerys}
          />
        </div>
      )}
      {project && (
        <div className={"mb-16"}>
          <VillasParam Villas={project.attributes?.villas} />
        </div>
      )}

      {map && (
        <div className={"mb-16 xl:mb-24"}>
          <Map objects={reverseArr(map.attributes?.objects)} />
        </div>
      )}
      {project && (
        <div className={"mb-16 xl:mb-32"}>
          <FinanceModeling villas={project.attributes?.financeModel} />
        </div>
      )}
      <div className={"mb-16"}>
        <Investor />
      </div>
      {project && (
        <div className={"mb-16 xl:mb-24"}>
          <Quiz />
        </div>
      )}
      <div className={"mb-16"}>
        <OurBusiness
          text={"Почему \n<span>ALEX</span>\n<span>VILLAS?</span>"}
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <OurClientVideo />
      </div>
      {project && (
        <div className={"mb-16 xl:mb-24"}>
          <Faq array={project.attributes?.faq} />
        </div>
      )}
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const projectsRes = await fetchAPI("/projects", { fields: ["slug"] });
  return {
    paths: projectsRes.data.map((project) => ({
      params: {
        slug: project.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  const [projectsRes, propertyRes, mapRes, baliGalleryRes, globalRes] =
    await Promise.all([
      fetchAPI("/projects", {
        filters: {
          slug: params.slug,
          locale: locale,
        },
        populate: "deep",
      }),
      fetchAPI("/property-gallery", { populate: "deep" }),
      fetchAPI("/map", { populate: "deep", locale: locale }),
      fetchAPI("/bali-gallery", { populate: "*" }),
      fetchAPI("/global"),
    ]);

  return {
    props: {
      project: projectsRes.data[0],
      properties: propertyRes.data,
      map: mapRes.data,
      baliGallery: baliGalleryRes.data,
      global: globalRes.data,
    },
    revalidate: 120,
  };
}

export default Project;

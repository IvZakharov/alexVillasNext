import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero/Hero";
import ComplexPlash from "../../components/Project/ComplexPlash/ComplexPlash";
import InvestInBaly from "../../components/Project/InvestInBaly/InvestInBaly";
import SliderBaly from "../../components/Project/SliderBaly/SliderBaly";
import ComplexPlan from "../../components/Project/ComplexPlan/ComplexPlan";
import VillasParam from "../../components/Project/VillasParam/VillasParam";
import Infrastruct from "../../components/Infrastruct/Infrastruct";
import { infrac } from "../../data/infrac";
import Investor from "../../components/Project/Investor/Investor";
import About from "../../components/About/About";
import OurBusiness from "../../components/OurBusiness/OurBusiness";
import OurClientVideo from "../../components/OurClientVideo/OurClientVideo";
import { fetchAPI } from "../../lib/api";
import PropertiesGallery from "../../components/PropertiesGallery/PropertiesGallery";
import FinanceModeling from "../../components/Project/FinanceModeling/FinanceModeling";
import Quiz from "../../components/Project/Quiz/Quiz";
import Faq from "../../components/Project/Faq/Faq";
import Map from "../../components/Map/Map";


const Slug = ({properties, projects, global}) => {
  
  const complex = [
    {
      lable: "Средняя окупаемость:",
      sublable: '5-6 лет',
    },
    {
      lable: "Инвестиции от",
      sublable: '175 000$ - 445 000$',
    },
    {
      lable: 'Топ локация <b>Чангу,</b>',
      sublable: '5 минут до океана',
    },
  ]
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"mb-16 md:mb-32 xl:mb-24"}>
        <Hero
          h1first={"ALEX VILLAS"}
          h1second={"COMPLEX 6"}
          text={
            "с доходностью от 10 до 33 годовых в $"
          }
          backgroundMedia={project.attributes.hero.backgroundMedia.data}
          dot={"BERAWA, CANGGU"}
          form={"Получить персональное предложение"}
          subLable={"Цены от $189.000"}
          text={
          "1-спальный таунхаус <span>x 10</span><br />"+
          "1-спальные апартаменты <span>x 16</span><br />"+
          "1-спальные смарт-виллы <span>x 5</span><br />"+
          "2-спальные смарт-виллы <span>x 3</span><br />"+
          "3-спальные смарт-виллы <span>x 1</span><br />"
          }
          link
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
      <div className={"mb-16"}>
        <SliderBaly />
      </div>
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
      {projects && (
        <div className={"mb-16"}>
          <VillasParam Villas={projects[0].attributes?.villas} />
        </div>
      )}
      
      <div className={"mb-16 xl:mb-24"}>
        <Map />
      </div>
      {projects && (
        <div className={"mb-16 xl:mb-32"}>
          <FinanceModeling villas={projects[0].attributes?.financeModel} />
        </div>
      )}
      <div className={"mb-16"}>
        <Investor />
      </div>
      {projects && (
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
      {projects && (
        <div className={"mb-16 xl:mb-24"}>
          <Faq array={projects[0].attributes?.faq} />
        </div>
      )}
      
    </MainLayout>
  );
};
export async function getStaticProps({ params }) {

  const [propertyRes, projectRes, globalRes] = await Promise.all([
    fetchAPI("/property-gallery", { populate: "deep" }),
    fetchAPI("/projects", { populate: "deep" }),
    fetchAPI("/global"),
  ]);
  
  return {
    props: {
      properties: propertyRes.data,
      projects: projectRes.data,
      global: globalRes.data,
    },
    revalidate: 120,
  };
}

export default Slug;
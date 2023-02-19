import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import PropertiesGallery from "../components/PropertiesGallery/PropertiesGallery";
import { fetchAPI } from "../lib/api";
import FinanceModeling from "../components/Project/FinanceModeling/FinanceModeling";
import Faq from "../components/Project/Faq/Faq";
import Quiz from "../components/Project/Quiz/Quiz";
import Map from "../components/Map/Map";


export default function Ivan({ properties, projects, map, global }) {
  
  console.log(map);
  
  const arr = {
    type: 'image',
    url: '/images/hero.png',
    alt: 'background image',
  }
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"mb-16 xl:mb-24"}>
        <Hero
          h1first={"GET UP TO 20% "}
          h1second={"YEARLY"}
          text={
            "High-performing \nproperty renovations \n in prime locations of Bali"
          }
          back={arr}
        />
      </div>

      {projects && (
        <div className={"mb-16 xl:mb-24"}>
          <Map />
        </div>
      )}

      {properties && (
        <div className={"mb-16 xl:mb-24"}>
          <PropertiesGallery
            properties={properties.attributes?.propertyGallerys}
          />
        </div>
      )}

      {projects && (
        <div className={"mb-16 xl:mb-32"}>
          <FinanceModeling villas={projects[0].attributes?.financeModel} />
        </div>
      )}

      {projects && (
        <div className={"mb-16 xl:mb-24"}>
          <Faq array={projects[0].attributes?.faq} />
        </div>
      )}

      {projects && (
        <div className={"mb-16 xl:mb-24"}>
          <Quiz />
        </div>
      )}
    </MainLayout>
  );
}

export async function getStaticProps() {
  const [propertyRes, projectRes, mapRes, globalRes] = await Promise.all([
    fetchAPI("/property-gallery", { populate: "deep" }),
    fetchAPI("/projects", { populate: "deep" }),
    fetchAPI("/map", { populate: "deep" }),
    fetchAPI("/global"),
  ]);

  return {
    props: {
      properties: propertyRes.data,
      projects: projectRes.data,
      map: mapRes.data,
      global: globalRes.data,
    },
    revalidate: 120,
  };
}

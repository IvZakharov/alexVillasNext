import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import PropertiesGallery from "../components/PropertiesGallery/PropertiesGallery";
import { fetchAPI } from "../lib/api";
import FinanceModeling from "../components/Project/FinanceModeling/FinanceModeling";

export default function Ivan({ properties, projects, global }) {
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

      {properties && (
        <div className={"mb-16 xl:mb-24"}>
          <PropertiesGallery
            properties={properties.attributes?.propertyGallerys}
          />
        </div>
      )}

      {projects && (
        <div className={"mb-16 xl:mb-24"}>
          <FinanceModeling villas={projects[0].attributes?.financeModel} />
        </div>
      )}
    </MainLayout>
  );
}

export async function getStaticProps() {
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

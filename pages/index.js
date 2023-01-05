import { MainLayout } from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhyBali from "../components/WhyBali/WhyBali";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";

export default function Home() {
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <Hero
        h1first={"Alex Villas"}
        h1second={"Agency"}
        text={"High-performing \nproperty agency \nin prime locations of Bali"}
        subLable={"STARTING FROM $189.000"}
      />
      <About />
      <ProjectsGrid />
      <WhyBali />
    </MainLayout>
  );
}

import { MainLayout } from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhyBali from "../components/WhyBali/WhyBali";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import Cta from "../components/Cta/Cta";

export default function Home() {
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <Hero
        h1first={"Инвестируйте"}
        h1second={"На бали"}
        text={"Invest safely in upscale \nproperties in the hottest \nlocations of Bali, Indonesia"}
        subLable={"STARTING FROM $189.000"}
      />
      <About />
      <ProjectsGrid />
      <WhyBali />
      <Cta
        title={"GET IN TOUCH \n <span>WITH US:</span>"}
        label={"HOPE TO HEAR \n FROM YOU!"}
        imageUrl={"/images/cta/bg.jpg"}
        fields={[
          {
            id: 0,
            name: "userName",
            type: "text",
            required: true,
            placeholder: "Your Name:",
          },
          {
            id: 1,
            name: "userPhone",
            type: "tel",
            required: true,
            placeholder: "Phone number:",
          },
          {
            id: 2,
            name: "userMessage",
            type: "text",
            required: false,
            placeholder: "Your message:",
          },
        ]}
        submitButtonText={"Send"}
      />
    </MainLayout>
  );
}

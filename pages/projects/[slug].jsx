import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero/Hero";
import CtaSection from "../../components/CtaSection/CtaSection";
import ProjectSlider from "../../components/Project/Slider";
import { projectImages } from "../../data/projectImages";

export default function Project() {
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
            "Invest safely in upscale \n properties in the hottest \n locations of <span>Bali, Indonesia</span>"
          }
          subLable={"STARTING FROM $189.000"}
        />
      </div>

      <div className={"mb-16 xl:mb-24"}>
        <ProjectSlider images={projectImages} />
      </div>

      <CtaSection
        title={"GET IN TOUCH \n<span>WITH US:</span>"}
        imageUrl={"/images/cta/bg.jpg"}
        label={"HOPE TO HEAR\nFROM YOU!"}
        submitButtonText={"send"}
        fields={[
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
        ]}
      />
    </MainLayout>
  );
}

import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero/Hero";
import CtaSection from "../../components/CtaSection/CtaSection";
import ProjectSlider from "../../components/Project/Slider";
import { projectImages } from "../../data/projectImages";
import AlexVillas from "../../components/AlexVillas/AlexVillas";
import PatternHouse from "../../components/PatternHouse/PatternHouse";

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

      <div>
        <AlexVillas
          textBlock1={
            "Renovate your own residential or commercial property\n" +
            "or find the perfect one with us."
          }
          textBlock2={
            "We have every piece of hands-on experience you may need to <span>make rental property a good business.</span>"
          }
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <PatternHouse
          Houses={[
            {
              title: "10",
              bedroom: "1-BEDROOM",
              housformat: "TOWNHOUSES",
            },
            {
              title: "2",
              bedroom: "1-BEDROOM",
              housformat: "SMART VILLAS",
            },
            {
              title: "3",
              bedroom: "2-BEDROOM",
              housformat: "SMART VILLAS",
            },
            {
              title: "1",
              bedroom: "3-BEDROOM",
              housformat: "SMART VILLAS",
            },
          ]}
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

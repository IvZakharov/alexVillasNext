import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero/Hero";
import CtaSection from "../../components/CtaSection/CtaSection";
import ProjectSlider from "../../components/Project/Slider";
import { projectImages } from "../../data/projectImages";
import AlexVillas from "../../components/AlexVillas/AlexVillas";
import PatternHouse from "../../components/PatternHouse/PatternHouse";
import WhatsApp from "../../components/WhatsApp/WhatsApp";
import InvestExample from "../../components/InvestExample/InvestExample";
import WhyBali from "../../components/WhyBali/WhyBali";
import Principles from "../../components/Principles/Principles";
import { principlesArr } from "../../data/principlesArr";
import OurClientVideo from "../../components/OurClientVideo/OurClientVideo";
import OurBusiness from "../../components/OurBusiness/OurBusiness";
import ConstructionAbout from "../../components/Construction/About";

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
      <div className={"mb-10"}>
        <ProjectSlider images={projectImages} />
      </div>
      <div className={"mb-16 md:mb-24"}>
        <WhatsApp
          text={"Talk to a live person and get the investor’s materials pack."}
          link={""}
          linkLabel={""}
        />
      </div>
      <div className={"mb-16 md:mb-24"}>
        <InvestExample
          title={"<span>INVEST\nIN OUR\nNEWEST</span>\nVILLA\nCOMPLEX"}
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <WhyBali />
      </div>
      <div className={"mb-16 md:mb-20"}>
        <Principles
          title={
            "<span>EVERYTHING\nWE RENOVATE\nFOLLOWS</span> \nTHESE 5\nPRINCIPLES"
          }
          principles={principlesArr}
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <OurClientVideo />
      </div>
      <div className={"mb-16 md:mb-24"}>
        <ConstructionAbout />
      </div>
      <div className={"mb-16 xl:mb-32"}>
        <OurBusiness
          text={"COMPANY \n<span>YOU CAN</span>\n<span>RELY ON</span>"}
        />
      </div>

      <CtaSection
        title={"EARLY BIRD \n<span>SPECIAL OFFER</span>"}
        imageUrl={"/images/cta/bg2.jpg"}
        description={
          "Gain up to 12% annualy or set up your fine-cut base in the heart of the most lively area in the most visited tourist destination of recent years."
        }
        label={"ONLY 3\nVILLAS\nLEFT"}
        submitButtonText={"send"}
        gradient
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
        ]}
      />
    </MainLayout>
  );
}

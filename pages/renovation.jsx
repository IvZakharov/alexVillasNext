import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import CtaSection from "../components/CtaSection/CtaSection";
import RenovationSlider from "../components/Renovation/Slider/Slider";
import WhatsApp from "../components/WhatsApp/WhatsApp";
import InvestExample from "../components/InvestExample/InvestExample";
import Table from "../components/Table/Table";
import RenovationSteps from "../components/Renovation/Steps/Steps";
import Principles from "../components/Principles/Principles";

// data

import { renovationImages } from "../data/renovationImages";
import { investModeling } from "../data/investModeling";
import { principlesArr } from "../data/principlesArr";

export default function Renovation() {
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
        <RenovationSlider images={renovationImages} />
      </div>

      <div className={"mb-16 md:mb-24"}>
        <WhatsApp text={"Gain more from your own property with higher ADR"} />
      </div>

      <div className={"mb-16 md:mb-24"}>
        <InvestExample
          title={"<span>THE MATH\nBEHIND</span>\nVILLA\nRENOVATION"}
        />
      </div>

      <div className={"container mb-16 md:mb-24 xl:pl-32 xl:pr-64"}>
        <Table tableData={investModeling} />
      </div>

      <div className={"mb-16 md:mb-24"}>
        <RenovationSteps
          imageAfter={"/images/renovation/card.jpg"}
          imageBefore={"/images/renovation/card.jpg"}
        />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <Principles
          title={
            "<span>EVERYTHING\nWE RENOVATE\nFOLLOWS</span> \nTHESE 5\nPRINCIPLES"
          }
          principles={principlesArr}
        />
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

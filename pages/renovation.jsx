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
import AlexVillas from "../components/AlexVillas/AlexVillas";
import PatternHouse from "../components/PatternHouse/PatternHouse";
import OurClientVideo from "../components/OurClientVideo/OurClientVideo";
import React from "react";
import OurBusiness from "../components/OurBusiness/OurBusiness";

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
      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <RenovationSteps
          imageAfter={"/images/renovation/card.jpg"}
          imageBefore={"/images/renovation/card.jpg"}
        />
      </div>
      <div className={"mb-16 md:mb-24 xl:mb-28"}>
        <Principles
          title={
            "<span>EVERYTHING\nWE RENOVATE\nFOLLOWS</span> \nTHESE 5\nPRINCIPLES"
          }
          principles={principlesArr}
        />
      </div>
      <div className={"mb-16 md:mb-24 xl:mb-28"}>
        <WhatsApp
          text={"Talk to a live person and get the investor’s materials pack."}
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <OurClientVideo />
      </div>
      <div className={"mb-16 xl:mb-32"}>
        <OurBusiness
          text={"COMPANY \n<span>YOU CAN</span>\n<span>RELY ON</span>"}
        />
      </div>

      <CtaSection
        title={
          " FILL THE FORM BELOW \n<span>AND WILL SEND YOU</span>\n <span>THE CALCULATION PDF</span>"
        }
        description={
          "Gain up to 12% annualy or set up your fine-cut base in the heart of the most lively area in the most visited tourist destination of recent years."
        }
        imageUrl={"/images/cta/bg2.jpg"}
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
        ]}
      />
    </MainLayout>
  );
}

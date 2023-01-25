import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import CtaSection from "../components/CtaSection/CtaSection";

// data
import { renovationImages } from "../data/renovationImages";
import { investModeling } from "../data/investModeling";
import { principlesArr } from "../data/principlesArr";
import AlexVillas from "../components/AlexVillas/AlexVillas";
import PatternHouse from "../components/PatternHouse/PatternHouse";
import OurClientVideo from "../components/OurClientVideo/OurClientVideo";
import React from "react";
import OurBusiness from "../components/OurBusiness/OurBusiness";
import ManagementGrid from "../components/Management/Grid";
import { menageProjects } from "../data/menageProjects";

export default function Management() {
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"mb-16 xl:mb-24"}>
        <Hero
          h1first={"ALEX VILLAS"}
          h1second={"MANAGEMENT "}
          text={
            "High-performing \nproperty renovations \n in prime locations of Bali"
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
      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <ManagementGrid
          projects={menageProjects}
          link={"#"}
          linkLabel={"MORE MANAGED PROPERTIES"}
          full
        />
      </div>

      <CtaSection
        title={
          "  GET YOUR PROPERTY \n<span>UNDER ALEX VILLAS</span>\n <span>MANAGEMENT</span>"
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

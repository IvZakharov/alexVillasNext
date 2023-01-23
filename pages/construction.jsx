import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import CtaSection from "../components/CtaSection/CtaSection";
import WhatsApp from "../components/WhatsApp/WhatsApp";
import Principles from "../components/Principles/Principles";
import AlexVillas from "../components/AlexVillas/AlexVillas";
import ProjectsGrid from "../components/Project/Grid";
// data

import { principlesArr } from "../data/principlesArr";
import { projectsOnSaleFilter } from "../utils/projectsOnSaleFilter";
import { projects } from "../data/projects";
import ConstructionAbout from "../components/Construction/About";
import PatternHouse from "../components/PatternHouse/PatternHouse";
import React from "react";
import OurClientVideo from "../components/OurClientVideo/OurClientVideo";
import OurBusiness from "../components/OurBusiness/OurBusiness";

export default function Construction() {
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
        <AlexVillas
          textBlock1={
            "<span>Alex Villas Complex No. 3</span> \n is already under construction."
          }
          textBlock2={
            "It is located right next door to \n the famous <span>FINNS beach club.</span>"
          }
          textBlock3={
            " <span>We added the best of our best practices to this villa complex which is a product of our successful experience in Canggu area.</span> "
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
      <div className={"mb-10 xl:mb-16"}>
        <ProjectsGrid
          projects={projectsOnSaleFilter(projects, true)}
          title={"PROJECTS\nON SALE"}
          link={"#"}
          linkLabel={"MORE PROJECTS ON SALE"}
        />
      </div>
      <div className={"mb-10 xl:mb-16"}>
        <ProjectsGrid
          projects={projectsOnSaleFilter(projects, false)}
          title={"COMPLETED\nPROJECTS"}
          link={"#"}
          linkLabel={"MORE COMPLETED PROJECTS"}
        />
      </div>
      <div className={"mb-16 md:mb-24"}>
        <WhatsApp
          text={"Build you dream villa and let us make it rock the market"}
        />
      </div>
      <div className={"mb-16 md:mb-24"}>
        <ConstructionAbout />
      </div>
      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <Principles
          title={"<span>WE STARTED</span> \nOUR OWN\nPRODUCTION"}
          principles={principlesArr}
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
          "FILL THE FORM BELOW \n<span>AND WILL SEND YOU</span>\n<span>INVESTORS PDF</span>"
        }
        imageUrl={"/images/cta/bg.jpg"}
        description={
          "Gain up to 12% annualy or set up your fine-cut base in the heart of the most lively area in the most visited tourist destination of recent years."
        }
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

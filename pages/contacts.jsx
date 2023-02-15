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
import ManagementGrid from "../components/Management/Grid";
import { menageProjects } from "../data/menageProjects";
import ContactAlex from "../components/ContactsAlex/ContactAlex";
 const arr = {
     type: 'image',
     url: '/images/head/DSC09103.JPG',
    alt: 'background image',
 }
export default function Agency() {
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"mb-16 xl:mb-24"}>
        <Hero
          h1first={"Мы всегда"}
          h1second={"на связи"}
          link
          back={arr}
        />
      </div>
      <div className={"mb-16"}>
        <AlexVillas
          textBlock1={"Alex Villas is open for your enquieries 24/7."}
        />
      </div>

      <div className={"mb-16"}>
        <ContactAlex />
      </div>

      <WhatsApp
        text={"Talk to a live person and get the investor’s materials pack."}
        link={"#"}
        linkLabel={"PROCEED TO WHATSAPP"}
      />

      <CtaSection
        title={"GET IN TOUCH \n<span>WITH US:</span>"}
        imageUrl={"/images/contact/DSC09476.JPG"}
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

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Team from "../components/Team/Team";
import teamData from "../data/teamData";
import WhyBali from "../components/WhyBali/WhyBali";
import OurBusiness from "../components/OurBusiness/OurBusiness";
import CtaSection from "../components/CtaSection/CtaSection";
import OpenVacancy from "../components/OpenVacancy/OpenVacancy";

const Vacancy = () => {
  const arr = {
    type: 'image',
    url: '/images/head/DSC01439.jpg',
    alt: 'background image',
  }
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"mb-16 xl:mb-24"}>
        <Hero
          h1first={"Хотите к нам"}
          h1second={"В команду?"}
          text={
            "Присоединяйтесь к команде профессионалов, раздвигающих границы рынка недвижимости на Бали каждый день."
          }
          form={"Устроиться на работу"}
          link
          back={arr}
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <Team teamArr={teamData} />
      </div>
      <div className={"mb-16 xl:mb-32"}>
        <OurBusiness
          text={"ПОЧЕМУ \n<span>ALEX</span>\n<span>VILLAS?</span>"}
        />
      </div>
      <div className={"mb-16 xl:mb-32"}>
        <OpenVacancy />
      </div>
      <CtaSection
        title={"ПОЛУЧИТЕ \n<span>Работу мечты</span>"}
        imageUrl={"/images/cta/DSC00003.JPG"}
        label={"Увидемся\nВ нашей команде!"}
        submitButtonText={"Заявка на работу"}
        gradient
        fields={[
          {
            name: "userName",
            type: "text",
            placeholder: "Ваше имя:",
            required: true,
          },
          {
            name: "userTel",
            type: "tel",
            placeholder: "Номер телефона:",
            required: true,
          },
        ]}
      />
    </MainLayout>
  );
};

export default Vacancy;
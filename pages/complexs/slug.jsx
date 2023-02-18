import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero/Hero";
import ComplexPlash from "../../components/Project/ComplexPlash/ComplexPlash";
import InvestInBaly from "../../components/Project/InvestInBaly/InvestInBaly";
import SliderBaly from "../../components/Project/SliderBaly/SliderBaly";
import ComplexPlan from "../../components/Project/ComplexPlan/ComplexPlan";
import VillasParam from "../../components/Project/VillasParam/VillasParam";
import Infrastruct from "../../components/Infrastruct/Infrastruct";
import { infrac } from "../../data/infrac";
import Investor from "../../components/Project/Investor/Investor";
import About from "../../components/About/About";
import OurBusiness from "../../components/OurBusiness/OurBusiness";
import OurClientVideo from "../../components/OurClientVideo/OurClientVideo";


const Slug = () => {
  const arr = {
    type: 'image',
    url: '/images/hero.png',
    alt: 'background image',
  }
  const complex = [
    {
      lable: "Средняя окупаемость:",
      sublable: '5-6 лет',
    },
    {
      lable: "Инвестиции от",
      sublable: '175.000$ - 445.000$',
    },
    {
      lable: 'Топ локация <b>Чангу,</b>',
      sublable: '5 минут до океана',
    },
  ]
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"mb-16 md:mb-32 xl:mb-24"}>
        <Hero
          h1first={"ВЫГОДНЫЕ ИНВЕСТИЦИИ В"}
          h1second={"НЕДВИЖИМОСТЬ НА БАЛИ"}
          text={
            "с доходностью от 10 до 33 годовых в $"
          }
          back={arr}
        />
      </div>
      <div className={"md:mb-16 lg:mb-10"}>
        <ComplexPlash items={complex} />
      </div>
      <div className={"mb-16 md:mb-16"}>
        <InvestInBaly
          title={"<span>10 причин</span> \nинвестировать в Бали"}
          blockFirst={"<b>За 10 лет поток </b> туристов вырос"}
        />
      </div>
      <div className={"mb-16"}>
        <SliderBaly />
      </div>
      <div className={"mb-16"}>
        <ComplexPlan />
      </div>
      <div className={"mb-16"}>
        <VillasParam />
      </div>
      <div className={"mb-16"}>
        <Infrastruct data={infrac} />
      </div>
      <div className={"mb-16"}>
        <Investor />
      </div>
      <div className={"mb-16"}>
        <OurBusiness
          text={"Почему \n<span>ALEX</span>\n<span>VILLAS?</span>"}
        />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <OurClientVideo />
      </div>
      
    </MainLayout>
  );
};

export default Slug;
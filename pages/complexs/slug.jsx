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


const Slug = () => {
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
        <Hero
          h1first={"ВЫГОДНЫЕ ИНВЕСТИЦИИ В"}
          h1second={"НЕДВИЖИМОСТЬ НА БАЛИ"}
          text={
            "с доходностью от 10 до 33 годовых в $"
          }
        />
      <ComplexPlash items={complex} />
      <div className={"mb-16"}>
        <InvestInBaly />
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
      
    </MainLayout>
  );
};

export default Slug;
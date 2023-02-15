import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhyBali from "../components/WhyBali/WhyBali";
import ProjectsGrid from "../components/Project/Grid";
import YoutubeSection from "../components/YoutubeSection";
import Community from "../components/Community/Community";

import AlexVillas from "../components/AlexVillas/AlexVillas";
import WhatsApp from "../components/WhatsApp/WhatsApp";
import OurBusiness from "../components/OurBusiness/OurBusiness";
import ManagementGrid from "../components/Management/Grid";
import RenovationGrid from "../components/Renovation/Grid/Grid";
import TeamData from "../data/teamData";
import Team from "../components/Team/Team";

import { projectsOnSaleFilter } from "../utils/projectsOnSaleFilter";

import { menageProjects } from "../data/menageProjects";
import { projects } from "../data/projects";
import CtaSection from "../components/CtaSection/CtaSection";
import teamData from "../data/teamData";
const arr = {
  type: "video",
  url: "https://chinas-lafa.ru/wp-content/uploads/2018/HeroVideo.webm",
  urlSecond:
    "https://drive.google.com/u/0/uc?id=1Kw19-kjQlh5H8q2De2Nb8FKLC16sGeyS&export=download",
};
// const arr = {
//     type: 'image',
//     url: '/images/hero.png',
//     alt: 'background image',
// }

export default function Home() {
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"mb-16 xl:mb-0"}>
        <Hero
          h1first={"НЕДВИЖИМОСТЬ"}
          h1second={"НА БАЛИ"}
          // h1first={"РЕНОВАЦИЯ"}
          // h1second={"ВИЛЛ НА БАЛИ"}
          text={"Инвестируйте от $70.000 с доходностью 10-30% годовых"}
          back={arr}
          // subLable={"STARTING FROM $189.000"}
        />
      </div>

      <div className={"mb-16 xl:mb-24"}>
        <About />
      </div>

      <div className={"mb-10 xl:mb-16"}>
        <ProjectsGrid
          projects={projectsOnSaleFilter(projects, true)}
          title={"ПРОЕКТЫ\nВ ПРОДАЖЕ"}
          description={
            "Наш фокус - на лучших локациях, хорошей инфраструктуре и передовой архитектуре. \nЭто гарантирует максимальные рейтинги, обеспечивая высокую доходность инвесторам."
          }
          link={"#"}
          linkLabel={"БОЛЬШЕ ПРОЕКТОВ В ПРОДАЖЕ"}
        />
      </div>

      <div className={"mb-10 xl:mb-16"}>
        <ProjectsGrid
          projects={projectsOnSaleFilter(projects, false)}
          title={"ЗАВЕРШЁННЫЕ\nПРОЕКТЫ"}
          description={
            "Наш фокус - на лучших локациях, хорошей инфраструктуре и передовой архитектуре. \nЭто гарантирует максимальные рейтинги, обеспечивая высокую доходность инвесторам."
          }
          link={"#"}
          linkLabel={"БОЛЬШЕ ЗАВЕРШЁННЫХ ПРОЕКТОВ"}
        />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <RenovationGrid
          title={"ИНВЕСТИЦИИ\nВ РЕНОВАЦИЮ"}
          description={
            "Инвестируйте от $70.000 c доходностью\n15-25% годовых. Цикл инвестиций 3 года."
          }
          imageBefore={"/images/renovation/card.jpg"}
          imageAfter={"/images/renovation/card.jpg"}
          link={"/renovation"}
          linkLabel={"УЗНАТЬ ПОДРОБНОСТИ"}
        />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <ManagementGrid
          title={"ОБЪЕКТЫ \nВ УПРАВЛЕНИИ "}
          description={
            "Инвестируйте от $70.000 c доходностью 15-25% годовых. Цикл инвестиций 3 года."
          }
          projects={menageProjects}
          link={"#"}
          linkLabel={"БОЛЬШЕ ОБ УПРАВЛЯЮЩЕЙ КОМПАНИИ"}
          full={false}
        />
      </div>

      <div className={"mb-16 xl:mb-24"}>
        <WhyBali />
      </div>

      <div className={"mb-16 xl:mb-24"}>
        <WhatsApp
          text={
            "Получите консультацию специалиста и набор материалов для инвестора."
          }
          link={"#"}
          linkLabel={"ПРОДОЛЖИТЬ В WHATSAPP"}
        />
      </div>

      <div className={"mb-16 xl:mb-32"}>
        <OurBusiness
          text={"ПОЧЕМУ \n<span>ALEX</span>\n<span>VILLAS?</span>"}
        />
      </div>

      <div className={"mb-16 xl:mb-24"}>
        <Team teamArr={teamData} />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <Community imageUrl={"/images/team/all.jpg"} />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <YoutubeSection
          youtubeLinks={[
            "https://youtu.be/BecSJqarWQ0",
            "https://youtu.be/cwd3pbPUx08",
            "https://www.youtube.com/watch?v=dZt-743GHlg",
            "https://www.youtube.com/watch?v=Maf7jokcsM0",
          ]}
        />
      </div>

      <CtaSection
        title={"ПОЛУЧИТЕ \n<span>КОНСУЛЬТАЦИЮ</span>"}
        imageUrl={"/images/cta/bg.jpg"}
        label={"БУДЕМ\nНА СВЯЗИ!"}
        submitButtonText={"ОТПРАВИТЬ"}
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
          {
            name: "userMessage",
            type: "text",
            placeholder: "Сообщение:",
            required: false,
          },
        ]}
      />
    </MainLayout>
  );
}

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
import Team from "../components/Team";

import { projectsOnSaleFilter } from "../utils/projectsOnSaleFilter";

import { menageProjects } from "../data/menageProjects";
import { projects } from "../data/projects";
import CtaSection from "../components/CtaSection/CtaSection";
import teamData from "../data/teamData";
import OurClientVideo from "../components/OurClientVideo/OurClientVideo";
import Dropdown from "../ui/Dropdown/Dropdown";

export default function Home() {
  
  const list = [
    {
      link: '#',
      name: "Anna Petrova",
    },
    {
      link: '#',
      name: "Pasha Oblick",
    },
    {
      link: '#',
      name: "Dasha Ivanova",
    },
    {
      link: '#',
      name: "Sergey Avramov",
    },
  ]
  
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"mb-16 xl:mb-24"}>
        <Hero
          h1first={"Инвестируйте"}
          h1second={"На бали"}
          text={
            "Invest safely in upscale properties in \nthe hottest locations of <span>Bali, Indonesia</span>"
          }
          subLable={"STARTING AT $189.000"}
          dot={"BERAWA, CANGGU"}
        />
      </div>
      
      <div className={"mb-16 xl:mb-24"}>
        <AlexVillas />
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <Dropdown lable={"Sales Manager"} list={list}/>
      </div>
      <div className={"mb-16 xl:mb-24"}>
        <OurClientVideo />
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
      
      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <RenovationGrid
          imageBefore={"/images/renovation/card.jpg"}
          imageAfter={"/images/renovation/card.jpg"}
        />
      </div>
      
      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <ManagementGrid
          projects={menageProjects}
          link={"#"}
          linkLabel={"MORE MANAGED PROPERTIES"}
          full={false}
        />
      </div>
      
      <div className={"mb-16 xl:mb-24"}>
        <WhyBali />
      </div>
      
      <div className={"mb-16 xl:mb-32"}>
        <OurBusiness text={"WHY \n<span>Alex</span>\n<span>Villas</span>"} />
      </div>
      
      <div className={"mb-16 xl:mb-24"}>
        <Team teamArr={teamData} />
      </div>
      
      <div className={"mb-16 md:mb-24 xl:mb-36"}>
        <Community imageUrl={"/images/team/all.jpg"} />
      </div>
      
      {/*<div className={"mb-16 md:mb-24 xl:mb-36"}>*/}
      {/*  <YoutubeSection*/}
      {/*    youtubeLinks={[*/}
      {/*      "https://youtu.be/BecSJqarWQ0",*/}
      {/*      "https://youtu.be/cwd3pbPUx08",*/}
      {/*      "https://www.youtube.com/watch?v=dZt-743GHlg",*/}
      {/*      "https://www.youtube.com/watch?v=Maf7jokcsM0",*/}
      {/*    ]}*/}
      {/*  />*/}
      {/*</div>*/}
      
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

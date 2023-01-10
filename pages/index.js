import { MainLayout } from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhyBali from "../components/WhyBali/WhyBali";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import CtaSection from "../components/CtaSection/CtaSection";
import YoutubeSection from "../components/YoutubeSection";
import Community from "../components/Community/Community";
import Team from "../components/Team";
import { team } from "../data/team";

export default function Home() {
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <Hero
        h1first={"Alex Villas"}
        h1second={"Agency"}
        text={"High-performing \nproperty agency \nin prime locations of Bali"}
        subLable={"STARTING FROM $189.000"}
      />
      <About />
      <ProjectsGrid />

      <WhyBali />

      <Team teamArr={team} />
      <Community imageUrl={"/images/team/all.jpg"} />
      <div className={"mb-32"}>
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
        title={"GET IN TOUCH \n <span>WITH US:</span>"}
        label={"HOPE TO HEAR \n FROM YOU!"}
        imageUrl={"/images/cta/bg.jpg"}
        fields={[
          {
            id: 0,
            name: "userName",
            type: "text",
            required: true,
            placeholder: "Your Name:",
          },
          {
            id: 1,
            name: "userPhone",
            type: "tel",
            required: true,
            placeholder: "Phone number:",
          },
          {
            id: 2,
            name: "userMessage",
            type: "text",
            required: false,
            placeholder: "Your message:",
          },
        ]}
        submitButtonText={"Send"}
      />
    </MainLayout>
  );
}

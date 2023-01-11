import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhyBali from "../components/WhyBali/WhyBali";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import YoutubeSection from "../components/YoutubeSection";
import Community from "../components/Community/Community";

export default function Home() {
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <Hero
        h1first={"Инвестируйте"}
        h1second={"На бали"}
        text={
          "Invest safely in upscale \nproperties in the hottest \nlocations of Bali, Indonesia"
        }
        subLable={"STARTING FROM $189.000"}
      />
      <About />
      <ProjectsGrid />

      <WhyBali />

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
    </MainLayout>
  );
}

import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhyBali from "../components/WhyBali/WhyBali";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import YoutubeSection from "../components/YoutubeSection";
import Community from "../components/Community/Community";
import AlexVillas from "../components/AlexVillas/AlexVillas";
import WhatsApp from "../components/WhatsApp/WhatsApp";
import OurBusiness from "../components/OurBusiness/OurBusiness";

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
          "Invest safely in upscale \nproperties in the hottest \nlocations of <span>Bali, Indonesia</span>"
        }
        subLable={"STARTING FROM $189.000"}
      />
      <AlexVillas textBlock1={"Renovate your own residential or commercial property or find the perfect one with us."}
                  textBlock2={"We have every piece of hands-on experience you may need to <span>make rental property a good business.</span>"}
                  textBlock3={"<span>We added the best of our best practices to this villa complex which is a product of our successful experience in Canggu area.</span>"}
      />
      <About />
      <ProjectsGrid />
      <WhatsApp text={'Talk to a live person and get \nthe investor’s materials pack.'}/>
      <OurBusiness  text={'WHY \n<span>Alex</span>\n<span>Villas</span>'}/>
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

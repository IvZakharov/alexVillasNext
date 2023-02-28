import Head from "next/head";
import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import { useRouter } from "next/router";

const MainLayout = ({
  children,
  metaTitle,
  meteDescription,
  metaKeywords,
  metaImage,
  logo,
  menu,
  footer,
  contact,
  footerContent,
  socialFooter,
  menuProject,
  locale
}) => {
  const [openedMenu, setOpenedMenu] = React.useState(false);
  const router = useRouter();
  useEffect(()=>{
    
    const handleRouterChange = (url, {shallow}) => {
        setOpenedMenu(false)
    }
    
    router.events.on("routeChangeComplete", handleRouterChange)
  }, [])

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={meteDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:image" content={metaImage} />
      </Head>
      <Header logo={logo} menu={menu}  contact={contact} onClickMenu={(bool)=>setOpenedMenu(bool)} project={menuProject} locale={locale}/>
      
      <div className="main">{children}</div>
      <Footer menu={footer} content={footerContent} social={socialFooter} logo={logo}/>
      {openedMenu && (
        <MobileMenu
          menu={menu}
          contact={contact}
          OnClickClose={(bool) => setOpenedMenu(bool)} logo={logo}

          project={menuProject} locale={locale}
        />
      )}
    </>
  );
};

export default MainLayout;

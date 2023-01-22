import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobileMenu from "../components/MobileMenu/MobileMenu";

const MainLayout = ({
  children,
  metaTitle,
  meteDescription,
  metaKeywords,
  metaImage,
}) => {
  const [openedMenu, setOpenedMenu] = React.useState(false);
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={meteDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:image" content={metaImage} />
      </Head>
      <Header onClickMenu={(bool)=>setOpenedMenu(bool)}  openedMenu={openedMenu}/>
      
      <div className="main">{children}</div>
      <Footer />
      {openedMenu && (
        <MobileMenu
          OnClickClose={(bool) => setOpenedMenu(bool)}
        />
      )}
    </>
  );
};

export default MainLayout;

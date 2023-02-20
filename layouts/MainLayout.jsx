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
  logo,
  menu,
  footer,
  contact
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
      <Header logo={logo} menu={menu} contact={contact} onClickMenu={(bool)=>setOpenedMenu(bool)}/>
      
      <div className="main">{children}</div>
      <Footer menu={footer} />
      {openedMenu && (
        <MobileMenu
          menu={menu}
          contact={contact}
          OnClickClose={(bool) => setOpenedMenu(bool)} logo={logo}
        />
      )}
    </>
  );
};

export default MainLayout;

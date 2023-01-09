import Head from "next/head";
import React, {useEffect, useState} from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const MainLayout = ({
  children,
  metaTitle,
  meteDescription,
  metaKeywords,
  metaImage,
}) => {
    const [openedMenu, setOpenedMenu] = useState(false);
    useEffect(()=>{
        console.log(openedMenu)
    })
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
    </>
  );
};

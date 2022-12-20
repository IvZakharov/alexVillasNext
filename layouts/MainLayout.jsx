import Head from "next/head";
import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const MainLayout = ({
  children,
  metaTitle,
  meteDescription,
  metaKeywords,
  metaImage,
}) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={meteDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:image" content={metaImage} />
      </Head>
      <Header />

      <div className="main">{children}</div>
      <Footer />
    </>
  );
};

import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "../layouts/MainLayout";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <Hero h1first={'Alex Villas'} h1second={'Agency'} text={'High-performing \nproperty agency \nin prime locations of Bali'} subLable={'STARTING FROM $189.000'}/>
      {/*<div className={"text-5xl text-amber-600"}>Контент для главной</div>*/}
    </MainLayout>
  );
}

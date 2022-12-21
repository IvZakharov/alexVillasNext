import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout
      metaTitle={"Alex Villas"}
      metaDescription={"Alex Villas"}
      metaKeywords={"alex villas"}
    >
      <div className={"text-5xl text-amber-600"}>Контент для главной</div>
    </MainLayout>
  );
}

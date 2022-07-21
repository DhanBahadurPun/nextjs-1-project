import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/hero-section/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Food</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </>
  );
}

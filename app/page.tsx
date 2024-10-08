"use client"
import CTA from "@/components/Layout/CTA";
import Features from "@/components/Layout/Features";
import HeroSection from "@/components/Layout/HeroSection";
import NewGames from "@/components/Layout/NewGames";
import PricingSection from "@/components/Layout/PricingSection";
import Testimonials from "@/components/Layout/Testimonials";
import TrendingGames from "@/components/Layout/TrendingGames";
import WhyChooseUs from "@/components/Layout/WhyChooseUs";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
      <title>Cyber Gaming Cloud</title>
      <meta name="description" content="Experience seamless gaming in the cloud." />
    </Head>

    <div className="min-h-screen flex flex-col justify-between">
      <main>
        <HeroSection />
        <NewGames/>
        <TrendingGames/>
        <WhyChooseUs/>
        <Features />
        <Testimonials/>
        <PricingSection/>
        <CTA />
      </main>
    </div>
    
  </>
  );
}

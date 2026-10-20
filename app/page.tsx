import React from "react";
import Image from "next/image";
import App_Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import AntiqueHeritageChronicle from "./components/AntiqueHeritageChronicle";
import AntiqueRoyalLegacy from "./components/AntiqueRoyalLegacy";
import { FooterSection } from "./components/footer-section";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 flex flex-col selection:bg-[#C5A059]/30 selection:text-white">
      {/* Ambient Home Page Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/virsa-team-bg.jpg"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-15 filter blur-[1px] brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-[#08080a]/85" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Antique Floating Navigation */}
        <App_Navbar />

        {/* Chapter I: Royal Antique Hero Showreel */}
        <HeroSection />

        {/* Chapter II: The Four Pillars of Virsa & Living Archives */}
        <AntiqueHeritageChronicle />

        {/* Chapter III: Antique Royal Heritage Plaque & Legacy */}
        <AntiqueRoyalLegacy />

        {/* Antique Royal Footer */}
        <FooterSection />
      </div>
    </div>
  );
}

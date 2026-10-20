import React from "react";
import App_Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import AntiqueHeritageChronicle from "./components/AntiqueHeritageChronicle";
import AntiqueRoyalLegacy from "./components/AntiqueRoyalLegacy";
import { FooterSection } from "./components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0806] text-[#EAD7B0] flex flex-col">
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
  );
}

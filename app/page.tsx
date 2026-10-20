import React from "react";
import App_Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import PhotoSliderHome from "./components/PhotoSliderHome";
import CulturalPillars from "./components/CulturalPillars";
import { Gallery4Demo } from "./components/galleryslider";
import { GlowingEffectDemo } from "./components/FactsHome";
import JoinCTA from "./components/JoinCTA";
import { FooterSection } from "./components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col">
      {/* Floating Glass Navigation */}
      <App_Navbar />

      {/* Cinematic Hero Showreel */}
      <HeroSection />

      {/* Living Moments Live Reel */}
      <PhotoSliderHome />

      {/* The Four Cultural Pillars of Virsa */}
      <CulturalPillars />

      {/* Signature Annual Celebrations */}
      <Gallery4Demo />

      {/* Heritage & Impact Bento Grid */}
      <GlowingEffectDemo />

      {/* Call To Action / Join Us */}
      <JoinCTA />

      {/* Modern Cultural Footer */}
      <FooterSection />
    </div>
  );
}

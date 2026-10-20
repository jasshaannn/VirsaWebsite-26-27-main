"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import App_Navbar from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {
  Calendar,
  Filter,
  Eye,
  Images,
  Maximize2,
  X,
  Flame,
} from "lucide-react";

interface GalleryPhoto {
  url: string;
  caption: string;
  category: "mela" | "seva" | "stage" | "tradition";
  categoryLabel: string;
}

const yearGalleries: Record<string, GalleryPhoto[]> = {
  "2025": [
    {
      url: "/mela24.jpeg",
      caption: "Virsa Mela 2025 - Grand Cultural Showcase",
      category: "mela",
      categoryLabel: "Virsa Mela",
    },
    {
      url: "/Gurupurab25.jpg",
      caption: "Gurpurab Samagam 2025 - Divine Kirtan & Seva",
      category: "seva",
      categoryLabel: "Spiritual Seva",
    },
    {
      url: "/mela5.jpeg",
      caption: "Vibrant Mela Folk Stalls & Cultural Exhibits",
      category: "mela",
      categoryLabel: "Virsa Mela",
    },
    {
      url: "/chabeel3.jpeg",
      caption: "Annual Summer Chabeel Seva 2025",
      category: "seva",
      categoryLabel: "Community Seva",
    },
    {
      url: "/retro3.jpeg",
      caption: "Retro Night - Punjabi Cinema & Folk Tribute",
      category: "stage",
      categoryLabel: "Stage & Folk",
    },
    {
      url: "/mela3.jpeg",
      caption: "Virsa Heritage Procession & Traditional Attire",
      category: "tradition",
      categoryLabel: "Tradition",
    },
    {
      url: "/gur10.jpeg",
      caption: "Gurpurab Langar Preparation & Selfless Service",
      category: "seva",
      categoryLabel: "Spiritual Seva",
    },
    {
      url: "/shaame2.jpeg",
      caption: "Sham-e-Virasat Stage Production",
      category: "stage",
      categoryLabel: "Stage & Folk",
    },
    {
      url: "/team4.jpeg",
      caption: "Performers Gathering Before Stage Entry",
      category: "tradition",
      categoryLabel: "Tradition",
    },
  ],
  "2024": [
    {
      url: "/mela8.jpeg",
      caption: "Virsa Mela 2024 - High-Energy Bhangra Faceoff",
      category: "mela",
      categoryLabel: "Virsa Mela",
    },
    {
      url: "/mela6.jpeg",
      caption: "Campus Carnival Grounds & Rural Punjabi Decor",
      category: "mela",
      categoryLabel: "Virsa Mela",
    },
    {
      url: "/chabeel.jpeg",
      caption: "Sweet Rose Chabeel Distribution Under the Sun",
      category: "seva",
      categoryLabel: "Community Seva",
    },
    {
      url: "/gur4.jpeg",
      caption: "Gurpurab 2024 - Divine Congregation & Ardas",
      category: "seva",
      categoryLabel: "Spiritual Seva",
    },
    {
      url: "/rubaru2.jpeg",
      caption: "Rubaru Cultural Talks - Guest Artists Dialogue",
      category: "stage",
      categoryLabel: "Cultural Talks",
    },
    {
      url: "/ori2.jpeg",
      caption: "Freshers Cultural Orientation & Welcome Ceremony",
      category: "tradition",
      categoryLabel: "Tradition",
    },
    {
      url: "/jaggo.jpeg",
      caption: "Jaggo Celebration - Night Folk Procession",
      category: "tradition",
      categoryLabel: "Tradition",
    },
    {
      url: "/mela7.jpeg",
      caption: "Giddha Dancers & Traditional Attire",
      category: "mela",
      categoryLabel: "Virsa Mela",
    },
  ],
  "2023": [
    {
      url: "/mela9.jpeg",
      caption: "Virsa Mela 2023 - Dhol & Boliyan Frenzy",
      category: "mela",
      categoryLabel: "Virsa Mela",
    },
    {
      url: "/shaame.jpeg",
      caption: "Sham-e-Virasat 2023 - Sufi Night in the Auditorium",
      category: "stage",
      categoryLabel: "Stage & Folk",
    },
    {
      url: "/chabeel2.jpeg",
      caption: "Chabeel Seva Across Campus Residential Hostels",
      category: "seva",
      categoryLabel: "Community Seva",
    },
    {
      url: "/gur3.jpeg",
      caption: "Gurpurab 2023 - Gurbani Recital & Langar",
      category: "seva",
      categoryLabel: "Spiritual Seva",
    },
    {
      url: "/mela23.jpeg",
      caption: "Core Team & Volunteers at the Mela Gate",
      category: "tradition",
      categoryLabel: "Tradition",
    },
    {
      url: "/team.jpeg",
      caption: "Closing Felicitation Ceremony & Society Family",
      category: "tradition",
      categoryLabel: "Tradition",
    },
    {
      url: "/mela.jpeg",
      caption: "Traditional Village Courtyard Recreation",
      category: "mela",
      categoryLabel: "Virsa Mela",
    },
  ],
  "2022": [
    {
      url: "/gur2.jpeg",
      caption: "Gurpurab 2022 - Devotional Morning Service",
      category: "seva",
      categoryLabel: "Spiritual Seva",
    },
    {
      url: "/chabeel1.jpeg",
      caption: "Summer Chabeel Drive for University Workers",
      category: "seva",
      categoryLabel: "Community Seva",
    },
    {
      url: "/mela2.jpeg",
      caption: "Folk Dance Battles & Inter-Hostel Competition",
      category: "mela",
      categoryLabel: "Virsa Mela",
    },
    {
      url: "/rubaru.jpeg",
      caption: "Virsa Rubaru - Interactive Cultural Exchange",
      category: "stage",
      categoryLabel: "Cultural Talks",
    },
    {
      url: "/retro2.jpeg",
      caption: "Retro Night Nostalgia & Folk Classics",
      category: "stage",
      categoryLabel: "Stage & Folk",
    },
    {
      url: "/team3.jpeg",
      caption: "Organizing Committee Showcase 2022",
      category: "tradition",
      categoryLabel: "Tradition",
    },
  ],
};

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      animated: true,
      dragToClose: true,
    });

    return () => {
      Fancybox.destroy();
    };
  }, [selectedYear, selectedCategory]);

  const currentYearPhotos = yearGalleries[selectedYear] || yearGalleries["2025"];

  const filteredPhotos =
    selectedCategory === "all"
      ? currentYearPhotos
      : currentYearPhotos.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col">
      <App_Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        {/* Glow backdrop */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Images className="w-3.5 h-3.5 text-amber-400" />
            <span>Living Visual Chronicles</span>
          </div>

          <h1 className="hero-title text-white tracking-tight mb-4">
            Moments Etched in <br />
            <span className="text-gradient-gold">Golden Memory.</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            A visual retrospective of Punjab&apos;s vibrant folk dances, selfless seva drives, stage theatrics, and joyous carnivals across the years.
          </p>

          {/* Year Switcher Pills */}
          <div className="flex items-center justify-center gap-2.5 p-1.5 rounded-full glass-panel-gold max-w-md mx-auto mb-6">
            {["2025", "2024", "2023", "2022"].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`flex-1 py-2 px-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-amber-400 text-black shadow-lg shadow-amber-400/30 scale-105"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Photos" },
              { id: "mela", label: "Virsa Mela" },
              { id: "seva", label: "Gurpurab & Chabeel" },
              { id: "stage", label: "Stage & Sufi" },
              { id: "tradition", label: "Tradition & Team" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-amber-500 text-black"
                    : "glass-panel text-zinc-300 hover:text-white hover:bg-white/10 border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Archive Edition: {selectedYear}
            </h2>
            <p className="text-xs text-zinc-400">
              Displaying {filteredPhotos.length} high-resolution captures
            </p>
          </div>

          <span className="text-xs text-amber-400 font-serif italic hidden sm:block">
            ਤਸਵੀਰਾਂ • ਯਾਦਾਂ ਦਾ ਸਰਮਾਇਆ
          </span>
        </div>

        {filteredPhotos.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl glass-panel border border-white/10">
            <p className="text-zinc-400 text-sm mb-4">
              No photos found in this category for {selectedYear}.
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="px-5 py-2 rounded-full bg-amber-500 text-black text-xs font-semibold uppercase tracking-wider"
            >
              Show All Photos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <a
                key={index}
                href={photo.url}
                data-fancybox="gallery"
                data-caption={photo.caption}
                className="group relative h-80 rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-amber-400/50 block transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
              >
                {/* Photo */}
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Hover Center Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <div className="p-3 rounded-full bg-amber-500/90 text-black shadow-lg shadow-amber-500/30 transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="text-sm font-medium text-white group-hover:text-amber-300 transition-colors drop-shadow">
                    {photo.caption}
                  </p>
                  <span className="text-[11px] text-zinc-400 font-light mt-0.5 block">
                    Click to view full screen
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      <FooterSection />
    </div>
  );
}

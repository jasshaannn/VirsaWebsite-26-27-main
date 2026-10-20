"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ReelItem {
  image: string;
  title: string;
  tag: string;
}

const reelItems: ReelItem[] = [
  {
    image: "/mela.jpeg",
    title: "Virsa Mela Carnival",
    tag: "Flagship Carnival",
  },
  {
    image: "/jaggo.jpeg",
    title: "Jaggo Celebration",
    tag: "Folk Tradition",
  },
  {
    image: "/team.jpeg",
    title: "Virsa Family & Core",
    tag: "Brotherhood",
  },
  {
    image: "/shaame2.jpeg",
    title: "Sham-e-Virasat",
    tag: "Cultural Night",
  },
  {
    image: "/gur3.jpeg",
    title: "Gurpurab Seva",
    tag: "Langar & Devotion",
  },
  {
    image: "/team4.jpeg",
    title: "Performers & Dhol",
    tag: "Stage Energy",
  },
  {
    image: "/mela23.jpeg",
    title: "Festival Vibes",
    tag: "Folk Arena",
  },
  {
    image: "/chabeel1.jpeg",
    title: "Chabeel Seva",
    tag: "Community Outreach",
  },
];

export default function PhotoSliderHome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-14 overflow-hidden bg-gradient-to-b from-[#08080a] via-[#0c0c10] to-[#08080a]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-serif font-semibold uppercase tracking-widest text-[#C5A059] mb-2">
            <span>◈</span>
            <span>Living Moments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
            A Glimpse into Our <span className="text-gradient-gold">Cultural Odyssey</span>
          </h2>
        </div>

        <Link
          href="/gallery"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <span>Explore All 500+ Photos</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Infinite Carousel Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />

        {mounted && (
          <div className="flex space-x-6 slideshow-container w-max py-2 px-6">
            {/* Repeat list twice for seamless loop */}
            {[...reelItems, ...reelItems].map((item, index) => (
              <div
                key={index}
                className="group relative w-72 sm:w-80 h-52 sm:h-56 rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-amber-400/50 flex-shrink-0 transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Card Tag & Title */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-end">
                  <span className="w-fit text-[10px] font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/20 backdrop-blur-md px-2 py-0.5 rounded border border-amber-500/30 mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-white drop-shadow group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

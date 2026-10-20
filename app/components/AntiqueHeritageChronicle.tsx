"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface PillarItem {
  number: string;
  punjabi: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

const pillars: PillarItem[] = [
  {
    number: "I",
    punjabi: "ਭੰਗੜਾ ਤੇ ਗਿੱਧਾ",
    title: "Folk Rhythm & Dhol",
    subtitle: "Bhangra & Giddha",
    description: "The thunderous cadence of the dhol, electrifying boliyan, and spirited harvest dances celebrating Punjabi joy.",
    image: "/team4.jpeg",
    link: "/events#virsa-mela",
  },
  {
    number: "II",
    punjabi: "ਵਿਰਸਾ ਮੇਲਾ",
    title: "Living Heritage Carnival",
    subtitle: "Virsa Mela",
    description: "Authentic Phulkari weaves, rustic charkhas, folk crafts, and the grand carnival spectacle of rural Punjab.",
    image: "/mela.jpeg",
    link: "/events#virsa-mela",
  },
  {
    number: "III",
    punjabi: "ਸੇਵਾ ਤੇ ਭਾਈਚਾਰਾ",
    title: "Selfless Community Seva",
    subtitle: "Gurpurab & Chabeel",
    description: "Rooted in Guru Nanak Dev Ji's teachings of humility — hot Langar for thousands and refreshing summer Chabeel.",
    image: "/Gurupurab25.jpg",
    link: "/events#gurpurab",
  },
  {
    number: "IV",
    punjabi: "ਸ਼ਾਮ-ਏ-ਵਿਰਾਸਤ",
    title: "Sufi Stage & Theatrics",
    subtitle: "Sham-e-Virasat",
    description: "Soulful sufi renditions, folk theatre, classical instruments, and timeless Punjabi poetic expressions.",
    image: "/shaame2.jpeg",
    link: "/events#sham-e-virasat",
  },
];

const archiveMoments = [
  { src: "/mela24.jpeg", caption: "Virsa Mela '25" },
  { src: "/jaggo.jpeg", caption: "Jaggo Celebration" },
  { src: "/chabeel1.jpeg", caption: "Chabeel Seva" },
  { src: "/team.jpeg", caption: "Virsa Family" },
  { src: "/gur3.jpeg", caption: "Gurpurab Seva" },
  { src: "/mela5.jpeg", caption: "Heritage Arena" },
  { src: "/retro3.jpeg", caption: "Retro Night" },
];

export default function AntiqueHeritageChronicle() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="relative py-12 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Section Header with Antique Flourish */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-3 text-[#C5A059] text-xs font-serif uppercase tracking-[0.2em] mb-2">
          <span>◈</span>
          <span>THE IMPERIAL VIRASAT</span>
          <span>◈</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#FFF2DC] tracking-tight mb-2">
          The Four Pillars of <span className="antique-gold-text">Virsa Culture</span>
        </h2>

        <div className="flex items-center justify-center gap-2 text-[#C5A059]/60 text-xs">
          <span>───</span>
          <span className="text-[10px]">❖</span>
          <span>───</span>
        </div>
      </div>

      {/* Compact 4-Card Antique Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {pillars.map((pillar, idx) => (
          <Link
            key={idx}
            href={pillar.link}
            className="group antique-card antique-card-hover rounded-xl p-4 flex flex-col justify-between overflow-hidden relative"
          >
            {/* Top Row: Roman Numeral & Gurmukhi Tag */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#C5A059]/20">
              <span className="font-serif font-bold text-sm text-[#C5A059] tracking-widest">
                {pillar.number}
              </span>
              <span className="font-serif text-xs text-[#E6C280] font-medium">
                {pillar.punjabi}
              </span>
            </div>

            {/* Antique Framed Image Thumbnail */}
            <div className="relative h-40 w-full rounded-lg overflow-hidden mb-3 border border-[#C5A059]/25">
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-serif font-bold text-[#FFF4E0] group-hover:text-[#D4AF37] transition-colors leading-snug mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#C5B496] font-serif leading-relaxed line-clamp-2 mb-3">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#C5A059]/15 flex items-center justify-between text-[11px] font-serif uppercase tracking-wider text-[#C5A059]">
                <span>Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Compact Living Archives Ribbon (No sprawling height) */}
      <div className="antique-card rounded-xl p-4 sm:p-5 border border-[#C5A059]/30">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#C5A059]/20">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] text-xs">◈</span>
            <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#E6C280]">
              Chronicles & Living Moments
            </span>
          </div>

          <Link
            href="/gallery"
            className="text-[11px] font-serif font-semibold text-[#D4AF37] hover:text-[#FFF] transition-colors flex items-center gap-1"
          >
            <span>View All Archives</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Compact Horizontal Reel */}
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin">
          {archiveMoments.map((item, i) => (
            <Link
              key={i}
              href="/gallery"
              className="relative w-36 sm:w-44 h-24 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 border border-[#C5A059]/20 group hover:border-[#C5A059]/60 transition-all"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="180px"
                className="object-cover filter brightness-[0.8] group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <span className="absolute bottom-1.5 left-2 right-2 text-[10px] font-serif font-medium text-[#F5E6CA] truncate">
                {item.caption}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

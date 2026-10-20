"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Images } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[78vh] sm:min-h-[84vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 isolate">
      {/* Background High-Res Society Photo with Elegant Vignette */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <Image
          src="/virsa-team-bg.jpg"
          alt="Virsa Cultural Society"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.88] contrast-[1.06] saturate-[1.05]"
        />

        {/* Deep Obsidian Black Vignette Overlays: Balanced for crystal-clear team visibility & contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/35 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-[#08080a]/90" />
        <div className="absolute inset-0 antique-texture opacity-10 pointer-events-none" />

        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Antique Royal Heritage Badge */}
        <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-1.5 rounded-full antique-pill border border-[#C5A059]/40 mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
          <span className="text-[10px] text-[#C5A059] font-serif">◈</span>
          <span className="tracking-wide text-zinc-200 font-serif text-xs sm:text-sm">
            ਵਿਰਸਾ • ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ
          </span>
          <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
          <span className="font-serif font-bold tracking-[0.26em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0D4] via-[#D4AF37] to-[#A67C37] uppercase text-[10px] sm:text-[11px]">
            THAPAR UNIVERSITY
          </span>
          <span className="text-[10px] text-[#C5A059] font-serif">◈</span>
        </div>

        {/* Antique Royal Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFF6E5] tracking-tight mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          Preserving Punjab&apos;s Living Soul, <br />
          <span className="antique-gold-text drop-shadow-[0_2px_15px_rgba(197,160,89,0.3)]">
            The Living Pride of Our Heritage.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-zinc-200 font-serif font-light leading-relaxed mb-8 text-balance drop-shadow-md">
          Carrying forward timeless folk traditions, thunderous Dhol rhythms, and selfless community seva across the generations.
        </p>

        {/* Antique CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/events"
            className="antique-button-gold px-7 py-3 rounded-full text-xs sm:text-sm font-serif uppercase tracking-wider flex items-center gap-2"
          >
            <span>Explore Celebrations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/gallery"
            className="antique-button-outline px-6 py-3 rounded-full text-xs sm:text-sm font-serif uppercase tracking-wider flex items-center gap-2"
          >
            <Images className="w-4 h-4 text-[#C5A059]" />
            <span>Living Archives</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

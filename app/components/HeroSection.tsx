"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if browser blocks autoplay
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        {mounted && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/NewVirsaVideo.mp4" type="video/mp4" />
          </video>
        )}

        {/* Cinematic Multi-layered Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/65 to-black/85" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
        <div className="absolute inset-0 punjabi-pattern opacity-20 pointer-events-none" />

        {/* Ambient Golden Glow spots */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-[400px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Cultural Top Tag Pill with Royal Thapar University styling (No sparkles) */}
        <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2 rounded-full glass-pill border border-amber-500/30 text-xs sm:text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700 shadow-[0_0_25px_rgba(245,158,11,0.18)]">
          <span className="tracking-wide text-zinc-200 font-serif">
            ਵਿਰਸਾ • ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="font-serif font-extrabold tracking-[0.26em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase text-[11px] sm:text-xs">
            THAPAR UNIVERSITY
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="hero-title text-white max-w-5xl mb-6 font-serif tracking-tight text-balance">
          Preserving Punjab&apos;s Living Spirit,{" "}
          <span className="block mt-1 text-gradient-gold drop-shadow-[0_4px_24px_rgba(245,158,11,0.3)]">
            Igniting Every Stage & Soul.
          </span>
        </h1>

        {/* Subtitle / Society Mission */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-10 text-balance">
          From the roaring dhol of <span className="text-amber-300 font-normal">Bhangra</span> and elegance of{" "}
          <span className="text-amber-300 font-normal">Giddha</span> to the serene service of{" "}
          <span className="text-amber-300 font-normal">Gurpurab</span> and grand carnivals of{" "}
          <span className="text-amber-300 font-normal">Virsa Mela</span>.
        </p>

        {/* CTA Button Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <Link
            href="/events"
            className="group flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-semibold text-sm sm:text-base tracking-wide shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Explore Signature Events</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/gallery"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 text-white font-medium text-sm sm:text-base border border-white/15 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Images className="w-4 h-4 text-amber-400" />
            <span>View Gallery</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart, Users } from "lucide-react";

export default function JoinCTA() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden glass-panel-gold border border-amber-500/30 p-8 sm:p-14 text-center">
        {/* Glow orbs inside CTA */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-orange-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Join The Virsa Family</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Carry Forward The Legacy. <br />
            <span className="text-gradient-gold">Leave Your Mark on Campus.</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            Whether you are a dancer, musician, writer, designer, logistics coordinator, or simply passionate about Punjabi traditions — Virsa is where your creativity and cultural spirit thrive.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Get in Touch With Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/core"
              className="px-7 py-3.5 rounded-full glass-panel border border-white/15 text-white hover:text-amber-300 text-sm font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>Meet The Core Team</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

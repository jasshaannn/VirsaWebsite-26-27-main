"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0A0806] text-zinc-100 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 punjabi-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-lg text-center flex flex-col items-center">
        {/* Emblem */}
        <div className="w-16 h-16 rounded-full overflow-hidden border border-amber-400/40 bg-black/60 p-2 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
          <Image
            src="/logo.png"
            alt="Virsa Logo"
            width={48}
            height={48}
            unoptimized
            className="object-contain"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full antique-pill border border-[#C5A059]/30 text-[#EAD7B0] text-xs font-serif font-semibold uppercase tracking-widest mb-4">
          <span className="text-xs text-[#C5A059]">◈</span>
          <span>ਸਫ਼ਾ ਨਹੀਂ ਲੱਭਿਆ • Error 404</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-serif font-extrabold text-gradient-gold tracking-tight mb-2">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
          The page you are looking for seems to have wandered away from the Virsa carnival grounds. Let&apos;s guide you back to our living heritage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border border-white/10 hover:border-amber-400/40 text-white hover:text-amber-300 font-semibold text-xs uppercase tracking-wider transition-all"
          >
            <span>Explore Events</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

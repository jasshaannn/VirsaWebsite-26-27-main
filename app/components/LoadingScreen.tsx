"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  duration?: number;
  fadeOutDuration?: number;
  title?: string;
  subtitle?: string;
}

export default function LoadingScreen({
  duration = 900,
  fadeOutDuration = 400,
  title = "VIRSA",
  subtitle = "Celebrating Punjab's Living Heritage...",
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
      }, fadeOutDuration);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, fadeOutDuration]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070709] transition-opacity ease-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        transitionDuration: `${fadeOutDuration}ms`,
        overflow: "hidden",
      }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 punjabi-pattern opacity-20 pointer-events-none" />

      {/* Content Card */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm">
        {/* Animated Brand Emblem */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-amber-500/30 animate-ping opacity-25" />
          <div className="absolute inset-0 rounded-full border border-amber-400/40 animate-spin" style={{ animationDuration: "8s" }} />
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-black/80 border border-amber-400 p-2 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <Image
              src="/logo.png"
              alt="Virsa Logo"
              width={64}
              height={64}
              priority
              unoptimized
              className="object-contain"
            />
          </div>
        </div>

        {/* Title & Gurmukhi */}
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-widest mb-1.5 flex items-center gap-2">
          <span>{title}</span>
          <span className="text-sm font-sans font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            ਵਿਰਸਾ
          </span>
        </h1>

        <p className="text-xs text-zinc-400 tracking-wider uppercase mb-5 font-medium">
          Thapar Cultural Society
        </p>

        {/* Sleek Golden Progress Line */}
        <div className="w-48 h-1 rounded-full bg-zinc-800 overflow-hidden mb-4 relative">
          <div className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 rounded-full animate-shimmer w-full" />
        </div>

        <p className="text-xs text-zinc-400 font-light italic">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

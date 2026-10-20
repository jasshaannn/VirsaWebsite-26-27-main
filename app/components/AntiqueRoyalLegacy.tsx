"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Award, Crown, Drum, HeartHandshake } from "lucide-react";

const medallions = [
  {
    icon: <Crown className="w-5 h-5 text-[#C5A059]" />,
    label: "PREMIER SOCIETY",
    title: "#1 Cultural Vanguard",
    desc: "Preserving authentic Punjabi heritage, folk dance, and royal varsity traditions.",
  },
  {
    icon: <Award className="w-5 h-5 text-[#C5A059]" />,
    label: "ACCOLADES",
    title: "30+ Cultural Trophies",
    desc: "Recognized across premier inter-university fests for unmatched stage energy.",
  },
  {
    icon: <Drum className="w-5 h-5 text-[#C5A059]" />,
    label: "COMMUNITY",
    title: "5,000+ Annual Gathering",
    desc: "The dhol unites thousands of students, faculty, and alumni on one royal floor.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-[#C5A059]" />,
    label: "SEVA SPIRIT",
    title: "Langar & Summer Chabeel",
    desc: "Rooted in humility, serving the university community with unconditional grace.",
  },
];

export default function AntiqueRoyalLegacy() {
  return (
    <section className="relative py-8 px-4 sm:px-6 max-w-7xl mx-auto w-full mb-10">
      <div className="antique-card rounded-2xl p-6 sm:p-8 border border-[#C5A059]/35 relative overflow-hidden">
        {/* Subtle royal background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#C5A059]/8 rounded-full blur-[100px] pointer-events-none" />

        {/* Header Proclamation */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-2 text-[#C5A059] text-xs font-serif tracking-[0.2em] uppercase mb-1">
            <span>◈</span>
            <span>ROYAL HERITAGE & LEGACY</span>
            <span>◈</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FFF2DC]">
            &ldquo;ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ&rdquo;
          </h3>
          <p className="text-xs text-[#C5B496] font-serif font-light mt-1">
            Our roots, our pride. Upholding the cultural crest of Thapar Institute.
          </p>
        </div>

        {/* 4 Compact Medallions Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#C5A059]/20 mb-6">
          {medallions.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-black/40 border border-[#C5A059]/15 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/20">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-serif font-bold tracking-widest text-[#C5A059] uppercase">
                    {item.label}
                  </span>
                </div>

                <h4 className="text-sm font-serif font-bold text-[#FFF5E6] mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#B8A78A] font-serif leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Antique Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#C5A059]/20 text-center sm:text-left">
          <span className="text-xs font-serif text-[#C5B496]">
            Interested in joining or collaborating with Virsa Society?
          </span>

          <div className="flex items-center gap-3">
            <Link
              href="/heads"
              className="antique-button-outline px-4 py-2 rounded-full text-xs font-serif uppercase tracking-wider"
            >
              Society Leadership
            </Link>
            <Link
              href="/core"
              className="antique-button-gold px-4 py-2 rounded-full text-xs font-serif uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>Core Committee</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

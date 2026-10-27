"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Crown,
  Trophy,
  Users,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Flame,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface MedallionItem {
  icon: React.ReactNode;
  stat: string;
  badge: string;
  title: string;
  highlight: string;
  desc: string;
  accentGlow: string;
}

const medallions: MedallionItem[] = [
  {
    icon: <Crown className="w-6 h-6 text-[#F3E1B9]" />,
    stat: "#1",
    badge: "PREMIER SOCIETY",
    title: "Cultural Vanguard",
    highlight: "Apex of Campus Heritage",
    desc: "Crowned as the premier cultural vanguard of Thapar University, championing authentic Punjabi folk arts and royal varsity pride.",
    accentGlow: "from-amber-500/20 to-yellow-500/5",
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#F3E1B9]" />,
    stat: "30+",
    badge: "CHAMPIONSHIPS",
    title: "Cultural Trophies",
    highlight: "State & National Arena",
    desc: "Dominating inter-university fests across India with thunderous stage energy, unbeatable Bhangra formations, and vibrant Giddha.",
    accentGlow: "from-yellow-500/20 to-amber-600/5",
  },
  {
    icon: <Flame className="w-6 h-6 text-[#F3E1B9]" />,
    stat: "5,000+",
    badge: "ANNUAL REVELERS",
    title: "Community Revelry",
    highlight: "United by the Dhol",
    desc: "The cadence of the folk drum unites thousands of students, faculty, and alumni across the globe under one celebratory canopy.",
    accentGlow: "from-amber-600/20 to-red-600/5",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-[#F3E1B9]" />,
    stat: "100%",
    badge: "SEVA & HUMILITY",
    title: "Langar & Chabeel",
    highlight: "Vand Chhako Spirit",
    desc: "Rooted in Guru Nanak Dev Ji's eternal philosophy of humility — serving hot Langar for thousands and refreshing summer Chabeel.",
    accentGlow: "from-yellow-400/20 to-amber-500/5",
  },
];

export default function AntiqueRoyalLegacy() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-12">
      {/* Outer Grand Royal Plaque */}
      <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#C5A059]/40 bg-gradient-to-b from-[#131119]/95 via-[#0A090F]/98 to-[#050507] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(197,160,89,0.12)] overflow-hidden">
        {/* Background Ambient Spotlights */}
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#D4AF37]/20 via-[#C5A059]/10 to-transparent rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 punjabi-pattern opacity-15 pointer-events-none" />

        {/* Ornate Corner Accents */}
        <div className="absolute top-3 left-3 text-[#C5A059]/60 font-serif text-sm select-none pointer-events-none">
          ◈
        </div>
        <div className="absolute top-3 right-3 text-[#C5A059]/60 font-serif text-sm select-none pointer-events-none">
          ◈
        </div>
        <div className="absolute bottom-3 left-3 text-[#C5A059]/60 font-serif text-sm select-none pointer-events-none">
          ◈
        </div>
        <div className="absolute bottom-3 right-3 text-[#C5A059]/60 font-serif text-sm select-none pointer-events-none">
          ◈
        </div>

        {/* Header Proclamation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-3xl mx-auto mb-10"
        >
          {/* Royal Heritage Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-[#C5A059]/20 to-amber-500/15 border border-[#C5A059]/40 mb-5 shadow-[0_0_25px_rgba(197,160,89,0.25)]">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] sm:text-xs font-accent uppercase tracking-[0.26em] font-bold text-[#FFF2DC]">
              ROYAL HERITAGE & LEGACY
            </span>
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          {/* Grand Gurmukhi Headline with Shimmering Gold */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight mb-3 leading-tight drop-shadow-lg">
            <span className="antique-gold-text drop-shadow-[0_4px_30px_rgba(212,175,55,0.45)]">
              &ldquo;ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ&rdquo;
            </span>
          </h2>

          {/* Luxury Ribbon Accent */}
          <div className="flex items-center justify-center gap-3 text-[#C5A059] mb-4">
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-[11px] font-accent uppercase tracking-[0.24em] font-semibold text-[#E6C280]">
              OUR ROOTS • OUR PRIDE • OUR LIVING SOUL
            </span>
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mx-auto text-balance">
            Upholding the glorious cultural crest of Thapar Institute for over two decades — celebrating the thunder of the Dhol, selfless community seva, and timeless folk arts.
          </p>
        </motion.div>

        {/* 4 Heroic Prestige Stat Cards (The Attention Seekers) */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {medallions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#181824]/90 via-[#101017]/95 to-[#08080c] border border-[#C5A059]/30 hover:border-[#D4AF37]/80 transition-all duration-300 hover:shadow-[0_20px_45px_-12px_rgba(212,175,55,0.35)] flex flex-col justify-between overflow-hidden cursor-default"
            >
              {/* Top Animated Gold Accent Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Radial Hover Spotlight */}
              <div
                className={`absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-b ${item.accentGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                {/* Top Row: Icon Crest & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D2316] via-[#1A1610] to-[#0D0B08] border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37] shadow-[0_0_20px_rgba(197,160,89,0.25)] group-hover:scale-110 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-accent font-bold tracking-[0.2em] text-[#C5A059] group-hover:text-[#FFF] uppercase bg-[#C5A059]/15 group-hover:bg-[#C5A059]/30 px-2.5 py-1 rounded-full border border-[#C5A059]/30 transition-colors">
                    {item.badge}
                  </span>
                </div>

                {/* Big Prestige Stat Callout */}
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight antique-gold-text drop-shadow-[0_2px_15px_rgba(197,160,89,0.35)]">
                    {item.stat}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#FFF5E6] mt-1 group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-300 font-sans leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Tag / Accent */}
              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-[#C5B496] group-hover:text-[#FFF4E0] transition-colors">
                <span className="font-serif italic tracking-wide">{item.highlight}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Attention-Seeking VIP Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 pt-6 border-t border-[#C5A059]/25 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#18151D]/90 via-[#1C1712]/95 to-[#131118]/90 p-5 sm:p-7 rounded-2xl border border-[#C5A059]/30 shadow-xl"
        >
          {/* Left Title & Pitch */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D2316] to-[#121110] border border-[#C5A059]/50 items-center justify-center text-[#D4AF37] shadow-[0_0_20px_rgba(197,160,89,0.3)] flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-[#FFF4E0] tracking-wide">
                Ready to Join Punjab&apos;s Proudest Cultural Legacy?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans mt-0.5">
                Explore the student visionaries leading the society or join our active working committee.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto flex-shrink-0">
            <Link
              href="/heads"
              className="min-h-[46px] px-6 py-2.5 rounded-full text-xs font-serif uppercase tracking-wider font-semibold text-[#F5E6CA] bg-[#121118]/90 border border-[#C5A059]/40 hover:border-[#D4AF37] hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              <span>Society Leadership</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </Link>

            <Link
              href="/core"
              className="antique-button-gold min-h-[46px] px-7 py-2.5 rounded-full text-xs font-serif uppercase tracking-wider font-bold text-[#08080a] flex items-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.65)] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              <span>Core Committee</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
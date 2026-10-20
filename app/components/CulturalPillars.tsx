"use client";

import React from "react";
import Link from "next/link";
import { Drum, Flame, HeartHandshake, Sparkles, Theater, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: <Drum className="w-6 h-6 text-amber-400" />,
    punjabi: "ਭੰਗੜਾ ਤੇ ਗਿੱਧਾ",
    title: "Folk Rhythm & Dance",
    subtitle: "Bhangra & Giddha",
    description:
      "The pulsating cadence of the Dhol, electrifying boliyan, and spirited twirls that celebrate triumph, harvest, and unbreakable joy.",
    badge: "High Octane",
    accent: "from-amber-500/20 to-orange-500/10",
    border: "group-hover:border-amber-400/50",
  },
  {
    icon: <Flame className="w-6 h-6 text-orange-400" />,
    punjabi: "ਵਿਰਸਾ ਮੇਲਾ",
    title: "Living Heritage Carnival",
    subtitle: "Virsa Mela",
    description:
      "Authentic Phulkari weaves, rustic charkha displays, traditional juttis, mouthwatering flavours, and the grand carnival spirit of rural Punjab.",
    badge: "Annual Carnival",
    accent: "from-orange-500/20 to-red-500/10",
    border: "group-hover:border-orange-400/50",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-emerald-400" />,
    punjabi: "ਸੇਵਾ ਤੇ ਭਾਈਚਾਰਾ",
    title: "Selfless Community Seva",
    subtitle: "Gurpurab & Chabeel",
    description:
      "Deeply anchored in humility and oneness. Serving hot Langar during Gurpurab and refreshing sweet Chabeel across the campus during blazing summers.",
    badge: "Seva Spirit",
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "group-hover:border-emerald-400/50",
  },
  {
    icon: <Theater className="w-6 h-6 text-rose-400" />,
    punjabi: "ਸ਼ਾਮ-ਏ-ਵਿਰਾਸਤ",
    title: "Artistic Eve & Theatrics",
    subtitle: "Sham-e-Virasat & Talks",
    description:
      "Soulful sufi renditions, thought-provoking theatrical plays, folk poetry, and intimate Rubaru conversations with cultural legends.",
    badge: "Stage & Soul",
    accent: "from-rose-500/20 to-amber-500/10",
    border: "group-hover:border-rose-400/50",
  },
];

export default function CulturalPillars() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Decorative Auras */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>The Four Pillars of Virsa</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-5">
          Rooted in Tradition, <br />
          <span className="text-gradient-gold">Bound by Cultural Pride.</span>
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
          Virsa is more than a cultural society — it is a living sanctuary where Punjab&apos;s timeless folk traditions, camaraderie, and selfless heritage are proudly carried forward.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`group relative p-7 rounded-2xl glass-panel border border-white/10 ${pillar.border} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between overflow-hidden`}
          >
            {/* Top gradient glow on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            <div>
              {/* Header row: Icon & Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-zinc-900/90 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  {pillar.badge}
                </span>
              </div>

              {/* Punjabi Accent Name */}
              <span className="text-xs font-medium text-amber-400/90 tracking-wide block mb-1">
                {pillar.punjabi}
              </span>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {pillar.title}
              </h3>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                {pillar.subtitle}
              </h4>

              {/* Description */}
              <p className="text-sm text-zinc-300/90 leading-relaxed">
                {pillar.description}
              </p>
            </div>

            {/* Bottom link */}
            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-amber-400 transition-colors">
              <span>Discover More</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Cultural Quote Banner */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel-gold border border-amber-500/20 text-center relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-lg sm:text-xl font-serif font-bold text-white mb-1">
              &ldquo;ਜਿੱਥੇ ਵੱਸਦਾ ਪੰਜਾਬ, ਓਥੇ ਮਹਿਕਦਾ ਵਿਰਸਾ&rdquo;
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Where Punjabis reside, our rich heritage flourishes. Join hands in keeping our culture alive.
            </p>
          </div>
          <Link
            href="/events"
            className="whitespace-nowrap px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-amber-500/20"
          >
            View Event Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}

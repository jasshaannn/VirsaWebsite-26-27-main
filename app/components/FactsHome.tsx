"use client";

import React from "react";
import { BookOpen, Music, Users, Award, Drum, MapPin, Sparkles, HeartHandshake } from "lucide-react";
import { GlowingEffect } from "@/app/components/ui/glowing-effect";
import { cn } from "@/app/lib/utils";

export function GlowingEffectDemo() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Heritage & Society Impact</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
          The Legacy We Carry, <br />
          <span className="text-gradient-gold">The Passion We Celebrate.</span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Through rhythm, devotion, and spirited celebrations, Virsa brings Punjab&apos;s essence right to the heart of Thapar Institute.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:col-span-6 xl:col-span-4"
          icon={<MapPin className="h-5 w-5 text-amber-400" />}
          badge="OUR ESSENCE"
          title="At Virsa, tradition meets vibrant talent in an unforgettable celebration of identity."
          description="VIRSA • ਵਿਰਸਾ means Punjabi Heritage. Carrying the legacy forward with unmatched zeal."
        />
        <GridItem
          area="md:col-span-6 xl:col-span-4"
          icon={<Users className="h-5 w-5 text-orange-400" />}
          badge="100+ MEMBER FAMILY"
          title="Keeping Punjab alive in every clap, twirl, beat, and boliyan."
          description="Dancers, musicians, creative minds, and organizers working in sync."
        />
        <GridItem
          area="md:col-span-12 xl:col-span-4 xl:row-span-2"
          icon={<Award className="h-5 w-5 text-amber-300" />}
          badge="#1 CULTURAL SOCIETY"
          title="Dedicated to preserving, performing, and honoring authentic Punjabi culture."
          description="Recognized across premier cultural fests and campus stages for unmatched energy, authenticity, and grand event execution."
          highlight="30+ Inter-College Trophies • 5,000+ Annual Festival Reach"
        />
        <GridItem
          area="md:col-span-6 xl:col-span-4"
          icon={<Music className="h-5 w-5 text-rose-400" />}
          badge="HERITAGE ATTIRE"
          title="From vibrant Phulkaris to handcrafted Juttis, folk elegance knows no bounds."
          description="Celebrating traditional craftsmanship and timeless Punjabi aesthetics on every festival."
        />
        <GridItem
          area="md:col-span-6 xl:col-span-4"
          icon={<Drum className="h-5 w-5 text-amber-400" />}
          badge="THE HEARTBEAT"
          title="The dhol isn't just an instrument — it is the soul that unites everyone on the floor."
          description="Spontaneous boliyan, high-energy Bhangra battles, and unity across generations."
        />
      </ul>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  highlight?: string;
}

const GridItem = ({ area, icon, badge, title, description, highlight }: GridItemProps) => {
  return (
    <li className={cn("min-h-[15rem] list-none", area)}>
      <div className="relative h-full rounded-2xl border border-white/10 p-1.5 transition-all duration-300 hover:border-amber-400/40">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-[#0e0e13]/90 backdrop-blur-md p-6 border border-white/5 shadow-xl">
          <div>
            {/* Top row with icon & badge */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="w-fit rounded-xl border border-white/10 bg-white/5 p-2.5">
                {icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400/90 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                {badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight leading-snug mb-2.5">
              {title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              {description}
            </p>
          </div>

          {highlight && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs font-semibold text-amber-300 tracking-wide">
                ✦ {highlight}
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

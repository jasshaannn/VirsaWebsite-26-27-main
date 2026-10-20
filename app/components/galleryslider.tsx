'use client';

import React from 'react';
import { Gallery4 } from './gallery4';

export default function Gallery4Demo() {
  const demoData = [
    {
      id: "virsa-mela",
      title: "Virsa Mela",
      category: "Flagship Carnival",
      date: "Spring Festival",
      description:
        "Our grand annual carnival celebrating Punjab's rural spirit — featuring electrifying Bhangra, traditional games, folk crafts, and authentic cuisine.",
      href: "/events#virsa-mela",
      image: "mela.jpeg",
    },
    {
      id: "sham-e-virasat",
      title: "Sham-e-Virasat",
      category: "Heritage Stage Night",
      date: "Autumn Eve",
      description:
        "An enchanting musical evening showcasing Punjabi sufi poetry, live folk orchestra, classical instruments, and theatrical cultural performances.",
      href: "/events#sham-e-virasat",
      image: "shaame.jpeg",
    },
    {
      id: "gurpurab",
      title: "Gurpurab",
      category: "Spiritual & Seva",
      date: "Kartik Purnima",
      description:
        "Commemorating Guru Nanak Dev Ji's birth anniversary with divine kirtan, community prayer, and large-scale Guru Ka Langar seva for the university.",
      href: "/events#gurpurab",
      image: "Gurupurab25.jpg",
    },
    {
      id: "chabeel",
      title: "Chabeel Seva",
      category: "Community Service",
      date: "Summer Outreach",
      description:
        "Honoring Guru Arjan Dev Ji through selfless distribution of cool, traditional sweet rose drinks to thousands across campus during scorching heat.",
      href: "/events#chabeel",
      image: "chabeel.jpeg",
    },
    {
      id: "rubaru",
      title: "Virsa Talks • Rubaru",
      category: "Cultural Exchange",
      date: "Year-Round",
      description:
        "Exclusive talk sessions and fireside chats hosting celebrated Punjabi writers, artists, folklorists, and thinkers to inspire the new generation.",
      href: "/events#rubaru",
      image: "rubaru.jpeg",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#08080a] via-[#0d0d12] to-[#08080a]">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Gallery4
          title="Signature Annual Celebrations"
          description="Immerse yourself in the vibrancy and spiritual warmth of our flagship celebrations that bring Punjab's soul to life."
          items={demoData}
        />
      </div>
    </section>
  );
}

export { Gallery4Demo };

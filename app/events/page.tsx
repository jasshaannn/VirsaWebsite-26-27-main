"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import App_Navbar from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Filter,
  Users,
  Flame,
  Music,
  Heart,
  Theater,
  Tag,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  punjabi: string;
  category: "mela" | "seva" | "stage" | "dialogue";
  categoryName: string;
  season: string;
  venue: string;
  estimatedCrowd: string;
  image: string;
  summary: string;
  highlights: string[];
  galleryLink: string;
}

const allEvents: EventItem[] = [
  {
    id: "virsa-mela",
    title: "Virsa Mela",
    punjabi: "ਵਿਰਸਾ ਮੇਲਾ",
    category: "mela",
    categoryName: "Cultural Carnival",
    season: "Spring Season • Feb/March",
    venue: "Main Campus Grounds, TIET",
    estimatedCrowd: "5,000+ Students & Guests",
    image: "/mela.jpeg",
    summary:
      "The magnum opus of Punjabi culture on campus. A vibrant three-day carnival bursting with electrifying Bhangra & Giddha face-offs, authentic village decor, Charkha & Phulkari craft displays, live pottery, traditional sports, and lip-smacking Punjabi delicacies from hot jalebis to makki di roti.",
    highlights: [
      "Open Bhangra & Giddha Arena",
      "Traditional Punjabi Food Stalls",
      "Phulkari & Handicraft Village Display",
      "Turban Tying & Folk Contests",
      "Live Dhol Procession",
    ],
    galleryLink: "/gallery",
  },
  {
    id: "sham-e-virasat",
    title: "Sham-e-Virasat",
    punjabi: "ਸ਼ਾਮ-ਏ-ਵਿਰਾਸਤ",
    category: "stage",
    categoryName: "Stage & Folk Night",
    season: "Autumn Eve • October/Nov",
    venue: "Central Auditorium, TIET",
    estimatedCrowd: "2,500+ Packed House",
    image: "/shaame2.jpeg",
    summary:
      "A magical theatrical and musical night celebrating the timeless performing arts of Punjab. Featuring soulful Sufi melodies, theatrical Nukkad Nataks highlighting Punjabi history, traditional Boliyan, and powerful folk instrumental symphonies with Tumbi, Algoze, and Sarangi.",
    highlights: [
      "Soulful Sufi Musical Ensemble",
      "Original Theatrical Drama & Skits",
      "Acoustic Folk Instrument Show",
      "Honoring Cultural Alumni",
      "Award Ceremonies",
    ],
    galleryLink: "/gallery",
  },
  {
    id: "gurpurab",
    title: "Gurpurab Samagam",
    punjabi: "ਗੁਰਪੁਰਬ ਸਮਾਗਮ",
    category: "seva",
    categoryName: "Spiritual & Seva",
    season: "Kartik Purnima • November",
    venue: "Gurdwara Sahib / Student Center",
    estimatedCrowd: "4,000+ Devotees Served",
    image: "/Gurupurab25.jpg",
    summary:
      "Commemorating the Prakash Purab of Guru Nanak Dev Ji with deep reverence, devotion, and selfless service. The society organizes melodious Gurbani Kirtan by student Ragis, sacred prayers for peace, and prepares extensive Guru Ka Langar served unconditionally to all.",
    highlights: [
      "Sacred Gurbani Kirtan Sessions",
      "100% Student-Prepared Langar",
      "Community Seva & Cleanliness Drive",
      "Universal Brotherhood Message",
    ],
    galleryLink: "/gallery",
  },
  {
    id: "chabeel",
    title: "Chabeel Seva",
    punjabi: "ਠੰਡੀ ਮਿੱਠੀ ਛਬੀਲ",
    category: "seva",
    categoryName: "Community Seva",
    season: "Peak Summer • May/June",
    venue: "All Campus Gates & Hostels",
    estimatedCrowd: "3,500+ Glasses Distributed",
    image: "/chabeel1.jpeg",
    summary:
      "To honor the supreme sacrifice of Guru Arjan Dev Ji, Virsa members set up cooling Chabeel stalls across the campus during intense summer temperatures, serving fresh sweetened rose milk, refreshing water, and traditional prasad to students, security personnel, and daily campus workers.",
    highlights: [
      "Traditional Rooh Afza Sweet Milk",
      "Covers All Student Hostels & Gates",
      "Warm Hospitality for Campus Staff",
      "Core Values of Humility & Giving",
    ],
    galleryLink: "/gallery",
  },
  {
    id: "rubaru",
    title: "Virsa Talks • Rubaru",
    punjabi: "ਰੂ-ਬ-ਰੂ ਸੰਵਾਦ",
    category: "dialogue",
    categoryName: "Cultural Dialogue",
    season: "Bi-Annual Sessions",
    venue: "Audi / Amphitheatre",
    estimatedCrowd: "1,200+ Attendees",
    image: "/rubaru2.jpeg",
    summary:
      "An intellectual and artistic rendezvous hosting celebrated Punjabi personalities, folk singers, poets, authors, and industry pioneers. Students get an exclusive opportunity to converse, ask questions, and learn from legends shaping modern Punjabi literature and cinema.",
    highlights: [
      "Distinguished Guest Keynotes",
      "Interactive Q&A Open Mic",
      "Folk Poetry & Storytelling",
      "Cultural Legacy Workshops",
    ],
    galleryLink: "/gallery",
  },
  {
    id: "jaggo",
    title: "Jaggo Raat",
    punjabi: "ਜਾਗੋ ਰਾਤ",
    category: "mela",
    categoryName: "Folk Carnival",
    season: "Pre-Mela Night",
    venue: "Residential Quadrangles",
    estimatedCrowd: "2,000+ Marchers",
    image: "/jaggo.jpeg",
    summary:
      "A festive night-time cultural procession heralding the arrival of Virsa Mela. Students dress in traditional Kurta-Chadar and Salwar-Kameez, carrying illuminated brass Jaggo pots on their heads while dancing to dhol rhythms across campus pathways.",
    highlights: [
      "Illuminated Traditional Jaggo Procession",
      "High-Energy Open Air Boliyan",
      "Traditional Attire Parade",
      "Dhol Beats Echoing Campus",
    ],
    galleryLink: "/gallery",
  },
  {
    id: "retro",
    title: "Retro Night",
    punjabi: "ਰੈਟਰੋ ਨਾਈਟ",
    category: "stage",
    categoryName: "Stage & Folk Night",
    season: "Winter Session",
    venue: "Open Air Theatre",
    estimatedCrowd: "1,800+ Attendees",
    image: "/retro3.jpeg",
    summary:
      "A nostalgic trip back to the golden era of Punjabi music, cinema, and vintage fashion. Celebrating classic tracks, old-school cassette memories, bell-bottoms, and the foundational voices of folk legends that laid the bedrock of our musical identity.",
    highlights: [
      "Classic Folk Musical Covers",
      "Vintage Punjabi Fashion Contest",
      "Tribute to Golden Era Maestros",
      "Retro Themed Stage Decor",
    ],
    galleryLink: "/gallery",
  },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredEvents =
    activeCategory === "all"
      ? allEvents
      : allEvents.filter((ev) => ev.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0806] text-zinc-100 flex flex-col">
      <App_Navbar />

      {/* Hero Banner Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Glow backdrop */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#C5A059]/30 text-[#EAD7B0] text-xs font-serif font-semibold uppercase tracking-widest mb-4">
            <span className="text-xs text-[#C5A059]">◈</span>
            <span>Campus Celebrations & Fests</span>
          </div>

          <h1 className="hero-title text-white tracking-tight mb-4">
            Celebrations of Spirit, <br />
            <span className="text-gradient-gold">Rhythm & Selfless Seva.</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            From thunderous folk dance carnivals to sacred langar gatherings, discover the signature festivals that define Virsa throughout the academic year.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 relative z-10">
          {[
            { id: "all", label: "All Celebrations", icon: <Filter className="w-3.5 h-3.5" /> },
            { id: "mela", label: "Cultural Melas", icon: <Flame className="w-3.5 h-3.5 text-amber-400" /> },
            { id: "stage", label: "Stage & Folk Nights", icon: <Music className="w-3.5 h-3.5 text-rose-400" /> },
            { id: "seva", label: "Spiritual & Seva", icon: <Heart className="w-3.5 h-3.5 text-emerald-400" /> },
            { id: "dialogue", label: "Cultural Talks", icon: <Theater className="w-3.5 h-3.5 text-orange-400" /> },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/30 scale-105"
                    : "glass-panel text-zinc-300 hover:text-white hover:bg-white/10 border-white/10"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured Flagship Event Spotlight: Virsa Mela */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
        <div className="relative rounded-3xl overflow-hidden glass-panel-gold border border-amber-500/30 p-6 sm:p-10 lg:p-12">
          {/* Subtle background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <Image
            src="/mela.jpeg"
            alt="Virsa Mela Flagship"
            fill
            priority
            className="object-cover object-center opacity-40 -z-0 scale-105"
          />

          <div className="relative z-20 max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-black">
                Flagship Festival of the Year
              </span>
              <span className="text-xs text-amber-300 font-serif">
                ਵਿਰਸਾ ਮੇਲਾ
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Virsa Mela: The Living Carnival of Punjab
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Experience the pulse of rural Punjab brought alive right on Thapar campus. High-octane Bhangra battles, Giddha boliyan, hand-crafted folk exhibitions, camel rides, folk games, and the warmest hospitality.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                <span className="text-xs text-zinc-400 block">Footfall</span>
                <span className="text-lg font-bold text-amber-400">5,000+ Attendees</span>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                <span className="text-xs text-zinc-400 block">Season</span>
                <span className="text-lg font-bold text-amber-400">Spring Carnival</span>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-xs text-zinc-400 block">Performances</span>
                <span className="text-lg font-bold text-amber-400">20+ Stage Acts</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-500/20"
              >
                <span>View Carnival Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#events-list"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider border border-white/15 transition-colors"
              >
                <span>Browse All Events Below</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Events Grid List */}
      <section id="events-list" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              {activeCategory === "all" ? "All Signature Events" : `Filtered: ${activeCategory.toUpperCase()}`}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Showing {filteredEvents.length} festivals & cultural initiatives
            </p>
          </div>

          <div className="text-xs text-amber-400 italic hidden sm:block">
            ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              id={event.id}
              className="group rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Event Image Banner */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-[#0e0e13]/50 to-transparent" />

                  {/* Top floating badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                      {event.categoryName}
                    </span>
                    <span className="text-xs font-serif font-bold text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                      {event.punjabi}
                    </span>
                  </div>

                  {/* Bottom Overlay Title on Image */}
                  <div className="absolute bottom-4 left-5 right-5 z-10">
                    <span className="text-xs font-medium text-amber-400 tracking-wide block mb-1">
                      {event.season}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white drop-shadow-md">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Event Details Content */}
                <div className="p-6 sm:p-7">
                  {/* Meta Strip */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mb-5 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      <span>{event.estimatedCrowd}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                    {event.summary}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 block mb-3">
                      Event Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {event.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0">
                <Link
                  href={event.galleryLink}
                  className="w-full py-3 rounded-xl glass-panel-gold border border-amber-500/30 text-amber-300 hover:text-black hover:bg-amber-400 font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Explore Festival Photos</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Annual Rhythm Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Academic Cycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
            The Annual Rhythm of Celebrations
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            How our society celebrates throughout the four seasons of university life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
                Phase 1 • Autumn
              </span>
              <h4 className="text-lg font-serif font-bold text-white mb-2">Sham-e-Virasat & Gurpurab</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Kicking off the cultural year with theatrical productions, divine kirtan, and campus-wide langar seva.
              </p>
            </div>
            <span className="text-[11px] text-zinc-500 mt-4 block">Oct - Nov</span>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
                Phase 2 • Winter
              </span>
              <h4 className="text-lg font-serif font-bold text-white mb-2">Retro Night & Talks</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Nostalgic folk music sessions, guest artist lectures, and Bhangra & Giddha bootcamp rehearsals.
              </p>
            </div>
            <span className="text-[11px] text-zinc-500 mt-4 block">Dec - Jan</span>
          </div>

          <div className="p-5 rounded-2xl glass-panel-gold border border-amber-500/30 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-amber-300 font-bold text-xs uppercase tracking-wider block mb-1">
                Phase 3 • Spring Flagship
              </span>
              <h4 className="text-lg font-serif font-bold text-white mb-2">Virsa Mela & Jaggo</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                The grandest spectacle on campus. Nighttime Jaggo procession followed by the multi-day carnival.
              </p>
            </div>
            <span className="text-[11px] text-amber-400 font-semibold mt-4 block">Feb - Mar</span>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
                Phase 4 • Summer
              </span>
              <h4 className="text-lg font-serif font-bold text-white mb-2">Chabeel Seva</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Serving cooling sweet rose drinks across university avenues in the spirit of humility and gratitude.
              </p>
            </div>
            <span className="text-[11px] text-zinc-500 mt-4 block">May - June</span>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

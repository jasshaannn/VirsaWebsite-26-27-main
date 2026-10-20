"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  Search,
  Users,
  ShieldCheck,
  Crown,
  ChevronRight,
  Filter,
  X,
} from "lucide-react";
import App_Navbar from "../components/navbar";
import { FooterSection } from "../components/footer-section";

interface HeadMember {
  name: string;
  position: string;
  department: string;
  category: string;
  imageUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}

const executiveCouncil: HeadMember[] = [
  {
    name: "Udaypratap Singh",
    position: "General Secretary",
    department: "Executive Council",
    category: "executive",
    imageUrl: "/headspic/uday.jpeg",
    instagramUrl: "https://www.instagram.com/udaypartap.singh.brar?igsh=enB0OG45cWRvNWFl",
    linkedinUrl: "https://www.linkedin.com/in/udaypartap-singh-58655934?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Jasmine Kaur",
    position: "General Secretary",
    department: "Executive Council",
    category: "executive",
    imageUrl: "/headspic/jasmine.jpg",
    instagramUrl: "https://www.instagram.com/jasmine_28kaur?igsh=e1ZqeXh0dmF0NGl5&utm_source=qr",
    linkedinUrl: "https://www.linkedin.com/in/jasmine-kaur-046887320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Meharpreet Singh",
    position: "General Secretary",
    department: "Executive Council",
    category: "executive",
    imageUrl: "/headspic/mehar.jpeg",
    instagramUrl: "https://www.instagram.com/_mehar96?igsh=NzV3OGU3OXlxN3Bu",
    linkedinUrl: "https://www.linkedin.com/in/meharpreet-singh-594109244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Harnoor Kaur",
    position: "Overall Student Coordinator",
    department: "Executive Council",
    category: "executive",
    imageUrl: "/headspic/harnoor.jpg",
    instagramUrl: "https://www.instagram.com/harnoor7024?igsh=bG9uc3d3MnBzc2Zn&utm_source=qr",
    linkedinUrl: "https://www.linkedin.com/in/harnoorkaur20042?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];

const departmentHeads: HeadMember[] = [
  // Conveners
  {
    name: "Agam Kooner",
    position: "Convener",
    department: "Conveners",
    category: "conveners",
    imageUrl: "/headspic/Agam Singh.jpeg",
    instagramUrl: "https://www.instagram.com/agam_kooner18",
  },
  {
    name: "Roopneet Cheema",
    position: "Convener",
    department: "Conveners",
    category: "conveners",
    imageUrl: "/headspic/Roopneet Cheema.jpg",
    instagramUrl: "https://www.instagram.com/cheema._.8",
    linkedinUrl: "https://www.linkedin.com/in/roopneet-cheema-614ba9302?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Sehaj Saran",
    position: "Event Coordinator & Finance Head",
    department: "Event & Finance",
    category: "operations",
    imageUrl: "/headspic/Sehajpreet Singh Saran.jpg",
    instagramUrl: "https://www.instagram.com/sehaj_.saran?igsi=MWhqOG5kYTdlZHZ0ag==",
    linkedinUrl: "https://www.linkedin.com/in/sehajpreet-singh-saran-505964386",
  },
  // Cultural
  {
    name: "Akshit Mahajan",
    position: "Cultural & Logistics Head",
    department: "Cultural & Logistics",
    category: "cultural",
    imageUrl: "/headspic/Akshit Mahajan.jpg",
    instagramUrl: "https://www.instagram.com/akshhit_mahajann?igsh=N2NvM3Q4ZDVra3Ny&utm_source=qr",
    linkedinUrl: "https://www.linkedin.com/in/akshit-mahajan-87361335b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Bismanjot Singh",
    position: "Cultural Head",
    department: "Cultural",
    category: "cultural",
    imageUrl: "/headspic/Bismanjot Singh.jpg",
  },
  {
    name: "Harsirat Kaur",
    position: "Cultural Head",
    department: "Cultural",
    category: "cultural",
  },
  {
    name: "Sharanpreet Kaur",
    position: "Cultural Head",
    department: "Cultural",
    category: "cultural",
    imageUrl: "/headspic/Sharan Preet Kaur.jpg",
  },
  // Content & Creativity
  {
    name: "Yashika Sherawat",
    position: "Content & Marketing Head",
    department: "Content & Marketing",
    category: "creative",
    imageUrl: "/headspic/Yashika.jpg",
    instagramUrl: "https://www.instagram.com/_yashika_sherawat_",
    linkedinUrl: "https://www.linkedin.com/in/yashika-722899321?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Bhavdeep Singh",
    position: "Creativity & Marketing Head",
    department: "Creativity & Marketing",
    category: "creative",
  },
  {
    name: "Furmaan Kaur",
    position: "Creativity Head",
    department: "Creativity",
    category: "creative",
    imageUrl: "/headspic/furmaan kaur.jpg",
  },
  {
    name: "Gurman Singh",
    position: "Creativity & Media Head",
    department: "Creativity & Media",
    category: "creative",
  },
  {
    name: "Manav",
    position: "Creativity Head",
    department: "Creativity",
    category: "creative",
  },
  // Design
  {
    name: "Sajneet Kaur Grewal",
    position: "Design Head",
    department: "Design",
    category: "creative",
  },
  // Discipline
  {
    name: "Abhinav Bindra",
    position: "Discipline Head",
    department: "Discipline",
    category: "operations",
    imageUrl: "/headspic/Abhinav Bindra.jpg",
    instagramUrl: "https://www.instagram.com/abhi_bindra",
    linkedinUrl: "https://www.linkedin.com/in/abhinav-bindra-55a5163b4",
  },
  {
    name: "Harden Singh",
    position: "Discipline & Gurpurab Head",
    department: "Discipline & Gurpurab",
    category: "operations",
    imageUrl: "/headspic/Harden Singh.jpg",
    instagramUrl: "https://www.instagram.com/Harden_singh_",
    linkedinUrl: "https://www.linkedin.com/in/harden-singh-778a98396",
  },
  {
    name: "Japji Kaur",
    position: "Discipline Head",
    department: "Discipline",
    category: "operations",
    imageUrl: "/headspic/Japji Kaur Bains.jpg",
    instagramUrl: "https://www.instagram.com/japji.bains22?igsh=eWVxeG1mcHJubGhj",
    linkedinUrl: "https://www.linkedin.com/in/japji-kaur-bains-a25bb1336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Rabaaz Singh",
    position: "Discipline Head",
    department: "Discipline",
    category: "operations",
    imageUrl: "/headspic/Rabaaz Singh.jpeg",
  },
  // Documentation
  {
    name: "Eaimanjot Singh",
    position: "Documentation Head",
    department: "Documentation",
    category: "operations",
    imageUrl: "/headspic/Eaimanjot Singh.jpeg",
  },
  // Gurpurab
  {
    name: "Angadjot Singh",
    position: "Gurpurab Head",
    department: "Gurpurab",
    category: "operations",
  },
  {
    name: "Ashmeen Kaur",
    position: "Gurpurab Head",
    department: "Gurpurab",
    category: "operations",
    imageUrl: "/headspic/Ashmeen Kaur.jpg",
  },
  // Hospitality
  {
    name: "Diya Mahajan",
    position: "Hospitality & Publicity Head",
    department: "Hospitality & Publicity",
    category: "operations",
    imageUrl: "/headspic/Diya Mahajan.jpg",
  },
  {
    name: "Nandini",
    position: "Hospitality Head",
    department: "Hospitality",
    category: "operations",
    imageUrl: "/headspic/Nandini Shekhar.jpg",
  },
  // Logistics
  {
    name: "Taran",
    position: "Logistics Head",
    department: "Logistics",
    category: "operations",
  },
  // Marketing & Publicity
  {
    name: "Hargunpreet Singh",
    position: "Marketing & Publicity Head",
    department: "Marketing & Publicity",
    category: "outreach",
    imageUrl: "/headspic/Hargunpreet S Sujlana.jpg",
    instagramUrl: "https://www.instagram.com/hargunpreet._?igsh=MTF3cGU2dHgzYmJyaw%3D%3D&utm_source=qr",
    linkedinUrl: "https://www.linkedin.com/in/hargunpreet-singh-sujlana-5b4793305?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  // Media
  {
    name: "Gurmanjot Singh",
    position: "Media Head",
    department: "Media",
    category: "outreach",
  },
  // Technical
  {
    name: "Paramveer Singh",
    position: "Technical Head",
    department: "Technical",
    category: "technical",
    imageUrl: "/headspic/Paramveer Singh.jpeg.PNG",
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

export default function HeadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Leadership" },
    { id: "executive", label: "Executive Council" },
    { id: "conveners", label: "Conveners" },
    { id: "cultural", label: "Cultural" },
    { id: "creative", label: "Content & Creative" },
    { id: "operations", label: "Operations & Discipline" },
    { id: "outreach", label: "Marketing & Media" },
    { id: "technical", label: "Technical" },
  ];

  const allMembersList = useMemo(() => {
    return [...executiveCouncil, ...departmentHeads];
  }, []);

  const filteredMembers = useMemo(() => {
    return allMembersList.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.department.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || member.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [allMembersList, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col">
      <App_Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        {/* Glow backdrop */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Society Leadership 2026-27</span>
          </div>

          <h1 className="hero-title text-white tracking-tight mb-4">
            The Visionaries Behind <br />
            <span className="text-gradient-gold">Virsa Cultural Society.</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Meet the dedicated leadership team guiding the society with passion, cultural pride, and operational excellence to keep Punjab&apos;s heritage soaring.
          </p>

          {/* Interactive Live Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, position or department..."
              className="w-full pl-11 pr-10 py-3 rounded-full bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 backdrop-blur-md transition-all shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                    : "glass-panel text-zinc-300 hover:text-white hover:bg-white/10 border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Council Section (Show when filtering "all" or "executive" without active search) */}
      {(selectedCategory === "all" || selectedCategory === "executive") &&
        searchQuery === "" && (
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-20">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-amber-500/20">
              <div className="w-1.5 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Executive Council
                </h2>
                <p className="text-xs text-amber-400 font-medium">
                  General Secretaries & Overall Coordinator
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {executiveCouncil.map((member, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-3xl overflow-hidden glass-panel-gold border border-amber-500/30 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/20"
                >
                  <div>
                    {/* Portrait container */}
                    <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden mb-4 bg-zinc-950 border border-white/10">
                      {member.imageUrl ? (
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-950/60 to-zinc-900">
                          <Crown className="w-12 h-12 text-amber-400/40 mb-2" />
                          <span className="text-4xl font-bold font-serif text-white/80">
                            {getInitials(member.name)}
                          </span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                      {/* Position badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-amber-400 px-3 py-1 rounded-full shadow-lg">
                          {member.position}
                        </span>
                      </div>
                    </div>

                    {/* Member details */}
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      {member.department}
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                    {member.instagramUrl && (
                      <a
                        href={member.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                        aria-label={`${member.name} Instagram`}
                      >
                        <FaInstagram size={15} />
                      </a>
                    )}
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FaLinkedin size={15} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      {/* Department Heads Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {selectedCategory === "executive"
                  ? "Executive Leadership"
                  : selectedCategory === "all"
                  ? "Department Heads"
                  : `${filterTabs.find((t) => t.id === selectedCategory)?.label}`}
              </h2>
              <p className="text-xs text-zinc-400">
                Showing {filteredMembers.length} team leaders
              </p>
            </div>
          </div>

          <span className="text-xs text-amber-400 font-serif italic hidden sm:block">
            ਲੀਡਰਸ਼ਿਪ • ਅਹੁਦੇਦਾਰ
          </span>
        </div>

        {filteredMembers.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl glass-panel border border-white/10">
            <p className="text-zinc-400 text-sm mb-4">
              No leadership members found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-5 py-2 rounded-full bg-amber-500 text-black text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredMembers.map((head, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-amber-400/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Portrait photo or Laurel crest */}
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-3.5 bg-zinc-950 border border-white/5">
                    {head.imageUrl ? (
                      <Image
                        src={head.imageUrl}
                        alt={head.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 p-4">
                        <div className="w-16 h-16 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/10 mb-2">
                          <span className="text-xl font-bold font-serif text-amber-400">
                            {getInitials(head.name)}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-500 font-mono tracking-wider">
                          VIRSA LEAD
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Department tag */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                        {head.department}
                      </span>
                    </div>
                  </div>

                  {/* Name and position */}
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-0.5">
                    {head.name}
                  </h3>
                  <p className="text-xs font-medium text-amber-400/90 leading-tight">
                    {head.position}
                  </p>
                </div>

                {/* Social Links */}
                {(head.instagramUrl || head.linkedinUrl) && (
                  <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center gap-2.5">
                    {head.instagramUrl && (
                      <a
                        href={head.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                        aria-label={`${head.name} Instagram`}
                      >
                        <FaInstagram size={13} />
                      </a>
                    )}
                    {head.linkedinUrl && (
                      <a
                        href={head.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                        aria-label={`${head.name} LinkedIn`}
                      >
                        <FaLinkedin size={13} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <FooterSection />
    </div>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Search, Users, X, Heart } from "lucide-react";
import App_Navbar from "../components/navbar";
import JoinCTA from "../components/JoinCTA";
import { FooterSection } from "../components/footer-section";

interface TeamMember {
  id: number;
  name: string;
  imageUrl: string;
  bio?: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
  };
}

const coreTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Agam Sarao",
    imageUrl: "/corepic/Agamveer Singh Kaleka.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/agam_sarao11",
      linkedin:
        "https://www.linkedin.com/in/agamveer-singh-sarao-32542835b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 2,
    name: "Agamjot Singh Dhingra",
    imageUrl: "/corepic/Agamjot Singh Dhingra.jpeg",
    socialLinks: {
      instagram:
        "https://www.instagram.com/agam_dhingra_?igsi=MThrYTloODVobWRuYQ%3D%3D&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/agamjot-singh-dhingra-3216b7293/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bkb6bEecIRr6ZcliY%2B3iBtQ%3D%3D",
    },
  },
  {
    id: 3,
    name: "Amreen Rooprai",
    imageUrl: "/corepic/Amren.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/333amreen",
      linkedin:
        "https://www.linkedin.com/in/amreen-rooprai?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 4,
    name: "Anmol Grewal",
    imageUrl: "/corepic/Anmol Singh Grewal.jpg",
    socialLinks: {
      instagram:
        "https://www.instagram.com/anmol.grwl?igsi=MWhtZzI2aGdpNjQycA%3D%3D&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/anmol-singh-grewal-689128373?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 5,
    name: "Anterpal Singh Chahal",
    imageUrl: "",
    socialLinks: {},
  },
  {
    id: 6,
    name: "Avneet Kaur",
    imageUrl: "/corepic/Avneet Kaur.jpg",
    socialLinks: {
      instagram:
        "https://www.instagram.com/avneetsidhu313?igsi=cWp0YXRzc2llZXl6",
      linkedin: "https://www.linkedin.com/in/avneet-kaur-087691425",
    },
  },
  {
    id: 7,
    name: "Bhumika Garg",
    imageUrl: "/corepic/Bhumika Garg.jpeg",
    socialLinks: {},
  },
  {
    id: 8,
    name: "Birpartap Singh Bhullar",
    imageUrl: "/corepic/Bir.jpeg",
    socialLinks: {},
  },
  {
    id: 9,
    name: "Dilnoor Singh",
    imageUrl: "/corepic/dilnoor.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/whoisdilnoor",
      linkedin:
        "https://www.linkedin.com/in/dilnoor-singh-08895b379?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 10,
    name: "Garima Narula",
    imageUrl: "/corepic/Garima Narula.jpg",
    socialLinks: {},
  },
  {
    id: 11,
    name: "Gulnaaz Kaur Dhillon",
    imageUrl: "/corepic/Gulnaaz Kaur Dhillon.jpeg",
    socialLinks: {},
  },
  {
    id: 12,
    name: "Gunraj Kaur",
    imageUrl: "/corepic/GUNRAJ_KAUR.jpg",
    socialLinks: {
      instagram: "https://www.instagram.com/gunraj.k27",
    },
  },
  {
    id: 13,
    name: "Gunraj Singh",
    imageUrl: "/corepic/Gunraj Singh.jpg",
    socialLinks: {
      instagram: "https://www.instagram.com/gunraj_07?igsi=MXd2Y29pM3V5bmN4NQ==",
      linkedin:
        "https://www.linkedin.com/in/gunraj-singh-921939287?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 14,
    name: "Gurleen Kaur",
    imageUrl: "/corepic/Gurleen.jpeg",
    socialLinks: {},
  },
  {
    id: 15,
    name: "Hartaj Singh",
    imageUrl: "/corepic/Hartaj.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/hartaj_sullar",
    },
  },
  {
    id: 16,
    name: "Hitajveer Singh Dhindsa",
    imageUrl: "/corepic/Hitajveer Singh Dhindsa.jpeg",
    socialLinks: {
      instagram:
        "https://www.instagram.com/dhindsa_hitaj?igsi=NDlmYmRjOWhveHdy",
      linkedin:
        "https://www.linkedin.com/in/hitajveer-singh-dhindsa-74a8b9384?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 17,
    name: "Jaiveer Singh Sidhu",
    imageUrl: "/corepic/jaiveer.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/jaiveersidhus",
    },
  },
  {
    id: 18,
    name: "Jashan Chauhan",
    imageUrl: "/corepic/JJASHAN.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/jasshaannn",
    },
  },
  {
    id: 19,
    name: "Jivitesh Partap Singh",
    imageUrl: "/corepic/Jivetesh.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/jivi.2202/",
      linkedin: "https://www.linkedin.com/in/jivitesh-partap-singh-05360137b",
    },
  },
  {
    id: 20,
    name: "Jobanpreet Singh Dhaliwal",
    imageUrl: "/corepic/Jobanpreet Singh.jpeg",
    socialLinks: {},
  },
  {
    id: 21,
    name: "Karmanjot Singh",
    imageUrl: "/corepic/Karmanjot.jpg",
    socialLinks: {},
  },
  {
    id: 22,
    name: "Karnaaz Kaur",
    imageUrl: "/corepic/Karnaaz Kaur.jpg",
    socialLinks: {
      instagram: "https://www.instagram.com/karnaaz_19?igsi=Ymp0MWVzN2w5ZXV4",
      linkedin:
        "https://www.linkedin.com/in/karnaaz-kaur-04255237a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 23,
    name: "Manmeet Singh Malhotra",
    imageUrl: "/corepic/m.jpg",
    socialLinks: {},
  },
  {
    id: 24,
    name: "Nishtha Uppal",
    imageUrl: "/corepic/nishta.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/thisisnishthauppal",
      linkedin: "https://www.linkedin.com/in/nishtha-uppal-46865737b",
    },
  },
  {
    id: 25,
    name: "Parminderjeet Singh",
    imageUrl: "/corepic/Parminderjeet Singh.jpg",
    socialLinks: {},
  },
  {
    id: 26,
    name: "Parneet Singh",
    imageUrl: "/corepic/Parneet.jpeg",
    socialLinks: {},
  },
  {
    id: 27,
    name: "Ramanbir Singh",
    imageUrl: "/corepic/Ramanbir.jpg",
    socialLinks: {
      instagram:
        "https://www.instagram.com/itz_rmn_gill?igsi=MXU3ampjZ2lzZnd2eg%3D%3D&utm_source=qrQ",
      linkedin:
        "https://www.linkedin.com/in/ramanbir-singh-318b23393?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 28,
    name: "Ravaljot Kaur Ahluwalia",
    imageUrl: "/corepic/Ravaljot Kaur.jpeg",
    socialLinks: {},
  },
  {
    id: 29,
    name: "Ravneet Sandhu",
    imageUrl: "/corepic/Ravneet Kaur Sandhu.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/Ravneeettt___",
    },
  },
  {
    id: 30,
    name: "Saanvi Aggarwal",
    imageUrl: "/corepic/Saanvi Aggarwal.jpg",
    socialLinks: {
      instagram: "https://www.instagram.com/aggarwal_saanvii",
      linkedin:
        "https://www.linkedin.com/in/saanvi-aggarwal-43943a37a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 31,
    name: "Sabiha Bhandohal",
    imageUrl: "/corepic/Sabiha.jpg",
    socialLinks: {},
  },
  {
    id: 32,
    name: "Sameer",
    imageUrl: "/corepic/sameer.jpeg",
    socialLinks: {
      instagram:
        "https://www.instagram.com/its_sameer1406?igsi=dnkxYTZhZmNtYW16&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/sameer-saini-41131737a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 33,
    name: "Samridh Chopra",
    imageUrl: "/corepic/Samridh Chopra.jpg",
    socialLinks: {},
  },
  {
    id: 34,
    name: "Sehajpal Singh Cheema",
    imageUrl: "/corepic/Sehajpal Singhh.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/sehajcheema.12",
    },
  },
  {
    id: 35,
    name: "Sehajpreet Singh",
    imageUrl: "/corepic/Sehajpreet Singh.jpeg",
    socialLinks: {
      instagram:
        "https://www.instagram.com/_sehaj_saini_?igsi=bzhnZTlhejQycThm&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/sehajpreet-singh-667a5833a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 36,
    name: "Shubhneet Kaur Sandhu",
    imageUrl: "/corepic/Shubhneet Kaur.jpg",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/shubhneet-kaur-ab98092b3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 37,
    name: "Simargeet Kaur",
    imageUrl: "",
    socialLinks: {},
  },
  {
    id: 38,
    name: "Suhani Nagpal",
    imageUrl: "/corepic/Suhani Nagpal.jpg",
    socialLinks: {},
  },
  {
    id: 39,
    name: "Sukhmanjot Singh Sandhu",
    imageUrl: "/corepic/Sukhmanjot Singh.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/sukhmanjxt",
    },
  },
  {
    id: 40,
    name: "Talveen Kaur",
    imageUrl: "/corepic/Talveen Kaur.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/talveen24",
    },
  },
  {
    id: 41,
    name: "Tanveer Singh",
    imageUrl: "/corepic/TAN.jpeg",
    socialLinks: {
      instagram:
        "https://www.instagram.com/tanveer.singhh_?igsi=YmdxanZrbW93cmxl",
      linkedin:
        "https://www.linkedin.com/in/tanveer-singh-06153a362?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

export default function CoreTeamPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = useMemo(() => {
    if (!searchQuery.trim()) return coreTeamMembers;
    return coreTeamMembers.filter((m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#0A0806] text-zinc-100 flex flex-col">
      <App_Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        {/* Glow backdrop */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>The Working Engine</span>
          </div>

          <h1 className="hero-title text-white tracking-tight mb-4">
            The Core Team Behind <br />
            <span className="text-gradient-gold">Every Celebration.</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            The passionate, tireless coordinators, stage runners, performers, and organizers executing the vision of Virsa Society on the ground.
          </p>

          {/* Real-time search bar */}
          <div className="relative max-w-md mx-auto mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search member by name..."
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

          <p className="text-xs text-zinc-400">
            Showing {filteredMembers.length} of {coreTeamMembers.length} active core members
          </p>
        </div>
      </section>

      {/* Core Members Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-20">
        {filteredMembers.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl glass-panel border border-white/10">
            <p className="text-zinc-400 text-sm mb-4">
              No core team member found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-5 py-2 rounded-full bg-amber-500 text-black text-xs font-semibold uppercase tracking-wider"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="group rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-amber-400/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Portrait photo or Laurel crest */}
                  <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-4 bg-zinc-950 border border-white/5">
                    {member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 p-4">
                        <div className="w-16 h-16 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/10 mb-2">
                          <span className="text-xl font-bold font-serif text-amber-400">
                            {getInitials(member.name)}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-500 font-mono tracking-wider">
                          CORE COMMITTEE
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-300 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-amber-500/20">
                        Core Member
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                    {member.name}
                  </h3>
                  <div className="w-8 h-0.5 bg-amber-400 rounded-full mb-3" />
                </div>

                {/* Social media links */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">Virsa Family</span>
                  <div className="flex items-center gap-2">
                    {member.socialLinks?.instagram && (
                      <a
                        href={member.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                        aria-label={`${member.name} Instagram`}
                      >
                        <FaInstagram size={13} />
                      </a>
                    )}
                    {member.socialLinks?.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FaLinkedin size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Join CTA Banner */}
      <JoinCTA />

      <FooterSection />
    </div>
  );
}

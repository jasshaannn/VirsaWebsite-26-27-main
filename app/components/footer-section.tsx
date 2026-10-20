"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Flame,
  Music,
  Heart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export const FooterSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative bg-[#050507] border-t border-amber-500/20 text-zinc-300 overflow-hidden"
    >
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat opacity-[0.03] pointer-events-none bg-contain" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand Info & Gurmukhi Motto */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative h-12 w-28 flex items-center">
                <Image
                  src="/logo.png"
                  alt="Virsa Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
              <div className="border-l border-amber-500/25 pl-3">
                <h3 className="font-serif text-xl font-bold text-white tracking-tight leading-tight">
                  VIRSA
                </h3>
                <span className="text-[10px] font-serif font-bold tracking-[0.24em] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent uppercase block">
                  THAPAR UNIVERSITY
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Preserving, nurturing, and elevating the rich cultural heritage and vibrant folk arts of Punjab for future generations.
            </p>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center gap-2.5">
              <span className="font-serif font-medium tracking-wide">
                &ldquo;ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ&rdquo;
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-2 font-serif">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5 text-sm">
              <Link href="/" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <span>Home</span>
              </Link>
              <Link href="/events" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <span>Signature Events</span>
              </Link>
              <Link href="/gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <span>Photo Gallery</span>
              </Link>
              <Link href="/heads" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <span>Society Leadership (Heads)</span>
              </Link>
              <Link href="/core" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <span>Core Working Committee</span>
              </Link>
            </nav>
          </div>

          {/* Col 3: Signature Festivals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-2 font-serif">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Signature Festivals
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Flame className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-white text-xs">Virsa Mela</h5>
                  <p className="text-[11px] text-zinc-400">Grand cultural carnival & folk stalls</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Music className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-white text-xs">Sham-e-Virasat</h5>
                  <p className="text-[11px] text-zinc-400">Musical theatre, Bhangra & Giddha</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-white text-xs">Gurpurab & Chabeel</h5>
                  <p className="text-[11px] text-zinc-400">Sacred kirtan, langar & summer seva</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-2 font-serif">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Contact & Campus
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-300 mb-5">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="font-serif">Thapar Institute of Engineering & Technology, Patiala, Punjab - 147004</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href="mailto:virsa@thapar.edu" className="hover:text-amber-300 transition-colors">
                  virsa@thapar.edu
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>

            <span className="text-[11px] font-serif font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent block mb-2.5">
              THAPAR UNIVERSITY
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/virsa.thapar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all"
              >
                <FaInstagram size={17} />
              </a>
              <a
                href="http://linkedin.com/company/ssa-virsa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href="https://www.facebook.com/VirsaTIET/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all"
              >
                <FaFacebook size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Virsa Punjabi Cultural Society. All rights reserved.</p>
          <div className="flex items-center gap-2 font-serif">
            <span className="text-amber-400 font-bold tracking-[0.2em]">THAPAR UNIVERSITY</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">ਸਾਡੀਆਂ ਜੜ੍ਹਾਂ, ਸਾਡਾ ਮਾਣ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

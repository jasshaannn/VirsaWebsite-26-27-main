"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Flame, Music, Heart } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export const FooterSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative bg-[#050507] border-t border-[#C5A059]/25 text-[#D4C3A3] overflow-hidden"
    >
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat opacity-[0.025] pointer-events-none bg-contain" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C5A059]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand Info & Gurmukhi Motto */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative h-10 w-28 flex items-center">
                <Image
                  src="/logo.png"
                  alt="Virsa Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
              <div className="border-l border-[#C5A059]/30 pl-2.5">
                <h3 className="font-serif text-lg font-bold text-[#FFF2DC] tracking-wide leading-tight">
                  VIRSA
                </h3>
                <span className="text-[9px] font-serif font-bold tracking-[0.24em] bg-gradient-to-r from-[#FFF0D4] via-[#D4AF37] to-[#A67C37] bg-clip-text text-transparent uppercase block">
                  THAPAR UNIVERSITY
                </span>
              </div>
            </div>

            <p className="text-xs text-[#B8A78A] font-serif leading-relaxed mb-3">
              Preserving, nurturing, and elevating the rich cultural heritage and vibrant folk arts of Punjab for future generations.
            </p>

            <div className="p-2.5 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#E6C280] text-xs font-serif italic flex items-center gap-2">
              <span>&ldquo;ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ&rdquo;</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-serif font-bold uppercase tracking-[0.18em] text-[#C5A059] mb-3 flex items-center gap-1.5">
              <span>◈</span>
              <span>Navigation</span>
            </h4>
            <nav className="flex flex-col gap-1.5 text-xs font-serif">
              <Link href="/" className="hover:text-[#FFF] transition-colors">
                Home
              </Link>
              <Link href="/events" className="hover:text-[#FFF] transition-colors">
                Signature Celebrations
              </Link>
              <Link href="/gallery" className="hover:text-[#FFF] transition-colors">
                Living Archives
              </Link>
              <Link href="/heads" className="hover:text-[#FFF] transition-colors">
                Society Leadership (Heads)
              </Link>
              <Link href="/core" className="hover:text-[#FFF] transition-colors">
                Core Working Committee
              </Link>
            </nav>
          </div>

          {/* Col 3: Signature Festivals */}
          <div>
            <h4 className="text-xs font-serif font-bold uppercase tracking-[0.18em] text-[#C5A059] mb-3 flex items-center gap-1.5">
              <span>◈</span>
              <span>Heritage Festivals</span>
            </h4>
            <div className="space-y-2 text-xs font-serif">
              <div className="flex items-start gap-2">
                <Flame className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-[#FFF2DC]">Virsa Mela</h5>
                  <p className="text-[11px] text-[#C5B496]">Spring cultural carnival & folk stalls</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Music className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-[#FFF2DC]">Sham-e-Virasat</h5>
                  <p className="text-[11px] text-[#C5B496]">Musical theatre, Bhangra & Giddha</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Heart className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-[#FFF2DC]">Gurpurab & Chabeel</h5>
                  <p className="text-[11px] text-[#C5B496]">Sacred kirtan, langar & summer seva</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Campus & Socials */}
          <div>
            <h4 className="text-xs font-serif font-bold uppercase tracking-[0.18em] text-[#C5A059] mb-3 flex items-center gap-1.5">
              <span>◈</span>
              <span>Campus & Contact</span>
            </h4>
            <div className="space-y-2 text-xs font-serif text-[#C5B496] mb-4">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                <span>Thapar Institute, Patiala, Punjab - 147004</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <a href="mailto:virsa@thapar.edu" className="hover:text-[#FFF] focus-visible:underline focus-visible:outline-none transition-colors">
                  virsa@thapar.edu
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/virsa.thapar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Virsa Instagram"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-zinc-900 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059]/20 hover:border-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] transition-all"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="http://linkedin.com/company/ssa-virsa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Virsa LinkedIn"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-zinc-900 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059]/20 hover:border-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] transition-all"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://www.facebook.com/VirsaTIET/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Virsa Facebook"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-zinc-900 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059]/20 hover:border-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] transition-all"
              >
                <FaFacebook size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-4 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#C5B496] font-serif">
          <p>© {new Date().getFullYear()} Virsa Punjabi Cultural Society. All rights reserved.</p>
          <div className="flex items-center gap-2 font-serif">
            <span className="text-[#C5A059] font-bold tracking-[0.2em]">THAPAR UNIVERSITY</span>
            <span>•</span>
            <span>ਸਾਡੀਆਂ ਜੜ੍ਹਾਂ, ਸਾਡਾ ਮਾਣ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

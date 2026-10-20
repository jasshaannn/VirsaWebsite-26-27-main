"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/", punjabi: "ਮੁੱਖ ਪੰਨਾ" },
  { name: "Events", path: "/events", punjabi: "ਸਮਾਗਮ" },
  { name: "Gallery", path: "/gallery", punjabi: "ਗੈਲਰੀ" },
  { name: "Heads", path: "/heads", punjabi: "ਅਹੁਦੇਦਾਰ" },
  { name: "Core Team", path: "/core", punjabi: "ਕੋਰ ਟੀਮ" },
];

export default function App_Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2 bg-[#08080a]/95 backdrop-blur-xl border-b border-[#C5A059]/30 shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
            : "py-3.5 bg-gradient-to-b from-[#08080a]/90 via-[#08080a]/50 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Royal Title */}
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-4 group relative select-none"
            >
              {/* Old Virsa Logo, uncropped and prominent */}
              <div className="relative h-12 sm:h-14 w-32 sm:w-40 flex items-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Virsa Logo"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-left"
                />
              </div>

              {/* Title with Royal Thapar University styling */}
              <div className="flex flex-col justify-center border-l border-[#C5A059]/30 pl-3 sm:pl-3.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#FFF4E0] group-hover:text-[#D4AF37] transition-colors leading-tight">
                  VIRSA
                </span>
                <span className="text-[10px] sm:text-[11px] font-serif font-bold tracking-[0.24em] bg-gradient-to-r from-[#FFF0D4] via-[#D4AF37] to-[#A67C37] bg-clip-text text-transparent uppercase">
                  THAPAR UNIVERSITY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1 rounded-full bg-[#18120B]/70 border border-[#C5A059]/25 backdrop-blur-md">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-serif uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "text-[#FFF] bg-[#C5A059]/25 shadow-[0_0_15px_rgba(197,160,89,0.25)] border border-[#C5A059]/40 font-bold"
                        : "text-[#D4C3A3] hover:text-[#FFF] hover:bg-white/5 font-medium"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#C5A059] rounded-full blur-[1px]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg bg-[#18120B]/80 border border-[#C5A059]/30 text-[#EAD7B0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors focus:outline-none"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed top-[66px] left-0 right-0 max-h-[calc(100vh-70px)] overflow-y-auto bg-[#08080a] border-b border-[#C5A059]/30 shadow-2xl p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2.5 border-b border-[#C5A059]/20">
              <span className="text-xs uppercase tracking-wider text-[#C5A059] font-serif font-bold">
                Navigation
              </span>
              <span className="text-xs text-[#C5B496] italic font-serif">
                ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ
              </span>
            </div>

            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg transition-all ${
                      isActive
                        ? "bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#FFF] font-bold font-serif"
                        : "text-[#D4C3A3] hover:bg-white/5 hover:text-white font-serif"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm">{item.name}</span>
                      <span className="text-[11px] text-[#A69578] font-light">
                        {item.punjabi}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        isActive ? "text-[#C5A059]" : "text-zinc-600"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between text-[#C5B496]">
              <span className="text-[11px] font-serif tracking-[0.2em] text-[#C5A059] uppercase font-bold">
                THAPAR UNIVERSITY
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/virsa.thapar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-zinc-900 border border-[#C5A059]/30 text-[#C5A059]"
                  aria-label="Instagram"
                >
                  <FaInstagram size={15} />
                </a>
                <a
                  href="http://linkedin.com/company/ssa-virsa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-zinc-900 border border-[#C5A059]/30 text-[#C5A059]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

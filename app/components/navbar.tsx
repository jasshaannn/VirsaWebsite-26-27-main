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

  // Close mobile menu on page change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 bg-[#08080a]/92 backdrop-blur-xl border-b border-amber-500/15 shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
            : "py-4 bg-gradient-to-b from-black/85 via-black/40 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Royal Title */}
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-4 group relative select-none"
            >
              {/* Old Virsa Logo, uncropped and made bigger */}
              <div className="relative h-14 sm:h-16 w-36 sm:w-44 flex items-center transition-transform duration-300 group-hover:scale-105">
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
              <div className="flex flex-col justify-center border-l border-amber-500/25 pl-3 sm:pl-3.5">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wide text-white group-hover:text-amber-300 transition-colors leading-tight">
                  VIRSA
                </span>
                <span className="text-[10px] sm:text-[11px] font-serif font-bold tracking-[0.24em] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent uppercase">
                  THAPAR UNIVERSITY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-md">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-amber-300 bg-amber-500/15 shadow-[0_0_15px_rgba(245,158,11,0.2)] border border-amber-500/30 font-semibold"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full blur-[1px]" />
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
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-200 hover:text-amber-400 hover:border-amber-500/30 transition-colors focus:outline-none"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-[74px] left-0 right-0 max-h-[calc(100vh-80px)] overflow-y-auto bg-[#0b0b0e] border-b border-amber-500/20 shadow-2xl p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs uppercase tracking-wider text-amber-400/80 font-semibold font-serif">
                Navigation
              </span>
              <span className="text-xs text-zinc-400 italic font-serif">
                ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ
              </span>
            </div>

            <nav className="flex flex-col gap-1.5">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold"
                        : "text-zinc-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-base font-medium">{item.name}</span>
                      <span className="text-xs text-zinc-500 font-light">
                        {item.punjabi}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        isActive ? "text-amber-400" : "text-zinc-600"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-zinc-400">
              <span className="text-xs font-serif tracking-[0.18em] text-amber-400 uppercase font-semibold">
                THAPAR UNIVERSITY
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/virsa.thapar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-amber-400 hover:text-amber-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={17} />
                </a>
                <a
                  href="http://linkedin.com/company/ssa-virsa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-amber-400 hover:text-amber-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

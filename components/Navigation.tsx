"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-400 ease-[var(--ease-out-expo)] ${
        scrolled
          ? "bg-white/85 backdrop-blur-md backdrop-saturate-150 border-b border-black/5 py-1.5 md:p-0 md:bg-white/95 md:shadow-md md:border md:border-white/40"
          : "bg-transparent py-2.5"
      } md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-48px)] md:max-w-[1200px] md:rounded-full`}
    >
      <div className="mx-auto px-6 md:px-8 xl:px-6 flex items-center justify-between h-[72px]">
        <a href="#" className="flex items-center shrink-0">
          <Image
            src="/nestlogo.png"
            alt="NestBridge"
            width={240}
            height={72}
            priority
            className="h-[60px] w-auto object-contain"
          />
        </a>

        <nav
          className={`${
            menuOpen
              ? "flex flex-col fixed top-[72px] inset-x-0 bottom-0 bg-white/98 backdrop-blur-lg px-8 py-16 gap-10 border-t border-black/5 animate-in slide-in-from-top-5 duration-300 ease-[var(--ease-out-expo)]"
              : "hidden md:flex gap-9 items-center"
          }`}
        >
          {["How It Works", "Features", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMenuOpen(false)}
              className={`font-accent font-medium relative group transition-all duration-200 ${
                menuOpen
                  ? "text-[28px] text-ink-black w-full text-left hover:text-bridge-green hover:translate-x-2"
                  : `text-[14px] tracking-[0.01em] ${
                      scrolled ? "text-slate hover:text-bridge-green" : "text-white/70 hover:text-white"
                    }`
              }`}
            >
              {item}
              {!menuOpen && (
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-bridge-green transition-all duration-300 ease-[var(--ease-out-expo)] group-hover:w-full" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className={`hidden md:block font-accent text-[14px] font-medium transition-colors duration-200 ${
              scrolled ? "text-slate hover:text-bridge-green" : "text-white/70 hover:text-white"
            }`}
          >
            Log in
          </a>
          <a
            href="#"
            className="hidden md:inline-flex items-center justify-center font-accent text-[13px] font-semibold px-5 py-2 rounded-full bg-bridge-green text-paper-white transition-all duration-300 tracking-[0.02em] hover:bg-forest hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(15,122,74,0.3)]"
          >
            Get Started
          </a>
          <button
            className={`flex md:hidden items-center justify-center bg-transparent border-none cursor-pointer p-1 ${
              scrolled || menuOpen ? "text-ink-black" : "text-paper-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

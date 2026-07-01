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
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-400 ease-[var(--ease-out-expo)] bg-white/95 backdrop-blur-md border-b border-black/5 py-1.5 md:p-0 md:border md:border-white/40 md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-48px)] md:max-w-[1200px] md:rounded-full ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="mx-auto px-6 md:px-8 xl:px-6 flex items-center justify-between h-[60px]">
          <a 
            href="#" 
            className="flex items-center justify-center shrink-0 h-[46px] w-[120px] rounded-full transition-all duration-300 hover:opacity-80"
          >
            <Image
              src="/nestlogo.png"
              alt="NestBridge"
              width={100}
              height={100}
              priority
              className="h-[100px] w-[100px] object-contain"
            />
          </a>

          <nav className="hidden md:flex gap-9 items-center">
            {["How It Works", "Features", "Pricing", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-accent font-medium relative group transition-all duration-200 text-[14px] tracking-[0.01em] text-slate hover:text-bridge-green"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-bridge-green transition-all duration-300 ease-[var(--ease-out-expo)] group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="/coming-soon"
              className="hidden md:block font-accent text-[14px] font-medium transition-colors duration-200 text-slate hover:text-bridge-green"
            >
              Log in
            </a>
            <a
              href="/#waitlist"
              className="hidden md:inline-flex items-center justify-center font-accent text-[13px] font-semibold px-5 py-2 rounded-full bg-bridge-green text-paper-white transition-all duration-300 tracking-[0.02em] hover:bg-forest hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(15,122,74,0.3)]"
            >
              Join Waitlist
            </a>
            <button
              className="flex md:hidden items-center justify-center bg-transparent border-none cursor-pointer p-1 text-ink-black hover:text-bridge-green transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-ink-black/20 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Side Drawer */}
      <nav
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-[360px] bg-white shadow-2xl z-[70] flex flex-col px-8 py-10 transform transition-transform duration-500 ease-[var(--ease-out-expo)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-12">
          <span className="font-heading text-xl font-medium text-ink-black">Menu</span>
          <button 
            className="flex items-center justify-center p-2 rounded-full bg-cloud text-slate hover:text-ink-black hover:bg-slate/10 transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex flex-col gap-6">
          {["How It Works", "Features", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMenuOpen(false)}
              className="font-accent font-medium text-[22px] text-ink-black border-b border-black/5 pb-4 transition-colors hover:text-bridge-green"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <a
            href="/coming-soon"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center font-accent text-[15px] font-medium py-3.5 rounded-full border border-black/10 text-ink-black hover:bg-cloud transition-colors"
          >
            Log in
          </a>
          <a
            href="/#waitlist"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center font-accent text-[15px] font-semibold py-3.5 rounded-full bg-bridge-green text-paper-white hover:bg-forest transition-colors shadow-sm"
          >
            Join Waitlist
          </a>
        </div>
      </nav>
    </>
  );
}

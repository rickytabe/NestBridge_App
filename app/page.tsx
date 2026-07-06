"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Search,
  MessageCircle,
  FileText,
  Sparkles,
  Users,
  Shield,
  Zap,
  LayoutDashboard,
  Share2,
  ChevronDown,
  Check,
  Star,
  Globe,
  Briefcase,
  Store,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import DotGrid from "../components/DotGrid";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export default function Home() {
  useRevealOnScroll();

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ShowcaseSection />
        <DifferentiatorSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <FaqSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-ink-black text-paper-white min-h-screen flex items-center overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-35 grayscale contrast-125"
        />
        <div className="absolute inset-0 opacity-70 mix-blend-screen">
          <DotGrid
            dotSize={3}
            gap={26}
            baseColor="#FFFFFF"
            activeColor="#3FE0A5"
            proximity={145}
            speedTrigger={105}
            shockRadius={240}
            shockStrength={2.2}
            resistance={0.92}
            returnDuration={1.2}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink-black" />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-6 relative z-10 pt-[140px] pb-[100px] flex flex-col items-center">
        <div className="max-w-[800px] text-center flex flex-col items-center">
          <span className="reveal-clip inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/5 font-accent text-[13px] font-medium tracking-[0.06em] uppercase text-white/80 mb-8 backdrop-blur-md">
            The Premier Founder-to-Investor Ecosystem
          </span>

          <h1 className="reveal hero-title reveal-delay-1 text-[clamp(44px,7vw,88px)] leading-[1.05] tracking-[-0.03em] font-medium mb-6">
            <span className="text-reveal-line">
              <span>Where Great Founders</span>
            </span>
            <span className="text-reveal-line">
              <span className="text-signal-mint italic pr-2 font-normal">
                Meet Global Capital.
              </span>
            </span>
          </h1>

          <p className="reveal-blur reveal-delay-2 text-[19px] md:text-[21px] text-white/60 max-w-[640px] leading-[1.6] mb-10 mx-auto">
            NestBridge seamlessly connects founders to investors. Create, fund, manage, expand, and sustain your business in one intelligent environment without relying on dozens of disconnected apps.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <a href="#how-it-works" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-bridge-green text-paper-white transition-all duration-300 ease-[var(--ease-out-expo)] border-none text-[17px] px-[36px] py-[18px] w-full sm:w-auto justify-center hover:bg-forest hover:-translate-y-[2px] hover:shadow-lg">
              Explore the Ecosystem
              <ArrowRight size={18} />
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-white/10 text-paper-white transition-all duration-300 ease-[var(--ease-out-expo)] border border-white/10 text-[17px] px-[36px] py-[18px] w-full sm:w-auto justify-center hover:bg-white/15 hover:-translate-y-[2px]">
              Start Building Free
            </a>
          </div>

          <p className="reveal reveal-delay-4 text-[14px] text-white/30 font-accent tracking-[0.02em]">
            Refine Pitches&nbsp;&nbsp;·&nbsp;&nbsp;Discover Investors
            &nbsp;&nbsp;·&nbsp;&nbsp;Raise Capital
          </p>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-bridge-green/20 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-signal-mint/15 blur-[150px] mix-blend-screen pointer-events-none" />
    </section>
  );
}

/* ───────────────────────── PROBLEM ───────────────────────── */
function ProblemSection() {
  const cards = [
    {
      icon: <FileText size={24} />,
      title: "Fragmented Workflows",
      text: "Stop jumping between emails, pitch decks, and scattered investor CRMs. Manage your entire fundraise in one place.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Misaligned Matches",
      text: "Stop wasting time pitching to investors whose thesis, ticket size, or stage requirements don't match your startup.",
    },
    {
      icon: <Users size={24} />,
      title: "Lack of Preparation",
      text: "Present the standardized, professional data that investors expect with AI-guided pitch and profile preparation.",
    },
  ];

  return (
    <section className="section bg-white py-[100px] md:py-[140px] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <DotGrid dotSize={2} gap={32} baseColor="#0B0F0D" activeColor="#0F7A4A" proximity={120} />
      </div>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-6 relative z-10">
        <p className="reveal-clip font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">The Problem</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          Stop chasing cold leads.
          <br className="hidden md:block" /> Start raising capital intelligently.
        </h2>
        <p className="reveal reveal-delay-2 text-[18px] md:text-[19px] text-slate max-w-[580px] leading-[1.7] text-center mx-auto mb-[60px] md:mb-[80px]">
          NestBridge addresses the biggest friction point in entrepreneurship: Capital Allocation. Reclaim your lost time and focus on building your business instead of endlessly hunting for funding.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1100px] mx-auto">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 2} motion-card bg-cloud border border-black/5 rounded-[20px] p-8 md:p-10 transition-transform duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-md`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-bridge-green mb-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                {c.icon}
              </div>
              <h3 className="font-heading text-[22px] text-ink-black mb-3">
                {c.title}
              </h3>
              <p className="text-[15px] text-slate leading-[1.6]">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── HOW IT WORKS ───────────────────────── */
function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Create Your Startup Profile",
      text: "Build a standardized digital profile showcasing your business model, milestones, and team to stand out.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "02",
      title: "AI-Powered Preparation",
      text: "Utilize AI-assisted tools to refine your pitch, organize financial data, and prepare for investor scrutiny.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "03",
      title: "Intelligent Matchmaking",
      text: "Get matched with investors whose investment thesis, ticket size, and portfolio interests align perfectly with you.",
      img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "04",
      title: "Secure Data Rooms",
      text: "Share pitch decks, financial forecasts, and compliance documents safely to close the round faster.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="how-it-works" className="section bg-cloud py-[100px] md:py-[140px] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <DotGrid dotSize={2} gap={32} baseColor="#0B0F0D" activeColor="#0F7A4A" proximity={120} />
      </div>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-6 relative z-10">
        <p className="reveal-clip font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">How NestBridge Works</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          The Smartest Path to Funding.
          <br className="hidden md:block" /> From pitch to closed round.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-[60px] md:mt-[80px]">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} motion-card flex flex-col bg-white border border-black/5 rounded-[24px] p-6 transition-transform duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-md`}
            >
              <div className="relative aspect-video lg:aspect-square xl:aspect-[4/3] rounded-[16px] overflow-hidden mb-6 bg-mist shadow-sm">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-ink-black font-accent font-bold text-[13px] px-3 py-1 rounded-full shadow-sm">
                  {s.num}
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-heading text-[20px] lg:text-[22px] text-ink-black mb-3 leading-[1.3]">{s.title}</h3>
                <p className="text-[15px] text-slate leading-[1.6]">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-16 md:mt-[80px]">
          <a href="#" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-bridge-green text-paper-white transition-all duration-300 ease-[var(--ease-out-expo)] border-none text-[15px] px-[28px] py-[14px] hover:bg-forest hover:-translate-y-0.5 hover:shadow-lg">
            Start Your Journey
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SHOWCASE ───────────────────────── */
function ShowcaseSection() {
  return (
    <section className="section bg-ink-black text-paper-white overflow-hidden py-[100px] md:py-[140px] relative">
      <div className="absolute inset-0 z-0 opacity-70 mix-blend-screen pointer-events-none">
        <DotGrid dotSize={2} gap={32} baseColor="#FFFFFF" activeColor="#3FE0A5" proximity={120} />
      </div>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-left">
            <p className="reveal-clip font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-signal-mint mb-5 text-left ml-0">
              Investor Matchmaking
            </p>
            <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-paper-white mb-5 md:mb-6 max-w-[720px] text-left ml-0 leading-[1.15] tracking-[-0.02em] font-medium font-heading">
              Everything you need to raise capital,
              <br />in one intelligent platform.
            </h2>
            <p className="reveal reveal-delay-2 text-[17px] text-white/55 leading-[1.7] mt-5 max-w-[500px]">
              Access AI pitch guidance, financial forecasting tools, verified investor networks, and secure data rooms in an integrated ecosystem that prepares you for funding.
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-8 md:gap-12 mt-12 pt-10 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="font-accent text-[28px] font-semibold text-paper-white">Pitch</span>
                <span className="text-[13px] text-signal-mint font-medium tracking-[0.05em] uppercase">AI-Guided</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-accent text-[28px] font-semibold text-paper-white">Match</span>
                <span className="text-[13px] text-signal-mint font-medium tracking-[0.05em] uppercase">Smart Discovery</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-accent text-[28px] font-semibold text-paper-white">Close</span>
                <span className="text-[13px] text-signal-mint font-medium tracking-[0.05em] uppercase">Secure Data Rooms</span>
              </div>
            </div>
          </div>

          <div className="reveal-scale relative">
            <div className="motion-card bg-white rounded-[16px] shadow-lg overflow-hidden border border-black/5 transform md:rotate-[2deg] transition-transform duration-700 hover:rotate-0 hover:shadow-xl">
              <div className="bg-[#F2F4F3] border-b border-black/5 px-4 py-3 flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="p-8 md:p-10 text-ink-black bg-white">
                <h3 className="font-heading text-[22px] border-b border-black/5 pb-4 mb-6 text-ink-black font-medium">Business Dashboard</h3>
                <div className="mb-6">
                  <strong className="block font-accent text-[12px] uppercase tracking-[0.08em] text-light-slate mb-1">Fundraising Status</strong>
                  <p className="text-[15px] text-slate leading-[1.5] flex items-center justify-between">
                    <span>Pre-Seed Round</span>
                    <span className="text-bridge-green font-bold">$250K / $500K</span>
                  </p>
                  <div className="w-full bg-mist h-2 rounded-full mt-2 overflow-hidden">
                    <div className="bg-bridge-green h-full w-1/2"></div>
                  </div>
                </div>
                <div className="mb-6">
                  <strong className="block font-accent text-[12px] uppercase tracking-[0.08em] text-light-slate mb-1">AI Strategy Forecast</strong>
                  <p className="text-[15px] text-slate leading-[1.5]">Revenue projected to increase 15% with international expansion into the European market.</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-mist text-slate font-accent text-[12px] font-medium px-3 py-1 rounded-full">Pitch Deck</span>
                  <span className="bg-mist text-slate font-accent text-[12px] font-medium px-3 py-1 rounded-full">Cap Table</span>
                  <span className="bg-mist text-slate font-accent text-[12px] font-medium px-3 py-1 rounded-full">Investor Chat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── DIFFERENTIATOR ───────────────────────── */
function DifferentiatorSection() {
  const rows = [
    {
      name: "LinkedIn",
      them: "Connect professionals for jobs passively",
      us: "Direct action: connect founders to capital and execute your fundraise",
    },
    {
      name: "AngelList",
      them: "Connect startups with investors",
      us: "Prepare businesses with AI guidance before the raise so you actually get funded",
    },
    {
      name: "Data Rooms",
      them: "Isolated, expensive document sharing",
      us: "Built-in secure document sharing natively connected to investor discovery",
    },
    {
      name: "Zoom & Slack",
      them: "Provide isolated communication tools",
      us: "Integrate video and messaging directly into your investor workflow",
    },
  ];

  return (
    <section className="section bg-white py-[100px] md:py-[140px] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <DotGrid dotSize={2} gap={32} baseColor="#0B0F0D" activeColor="#0F7A4A" proximity={120} />
      </div>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-6 relative z-10">
        <p className="reveal-clip font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">Why NestBridge</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          We adapt software to entrepreneurs.
          <br className="hidden md:block" /> Not the other way around.
        </h2>

        <div className="reveal reveal-delay-2 max-w-[900px] mx-auto mt-[60px] md:mt-[80px] bg-white rounded-[24px] border border-black/5 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.5fr] items-center bg-cloud border-b border-black/5 px-6 py-4">
            <div className="hidden md:block" />
              <div className="hidden md:block font-accent text-[12px] font-bold uppercase tracking-[0.08em] text-light-slate">Existing Platforms</div>
            <div className="hidden md:block font-accent text-[12px] font-bold uppercase tracking-[0.08em] text-bridge-green bg-bridge-green/10 rounded-full px-4 py-1.5 w-max">
              NestBridge's Approach
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="motion-row grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.5fr] items-center px-6 py-5 md:py-6 border-b border-black/5 last:border-b-0 gap-2 md:gap-4 transition-colors hover:bg-[#fafafa]">
              <div className="font-heading text-[18px] text-ink-black font-medium">{r.name}</div>
              <div className="text-[14px] text-slate md:text-[15px]">{r.them}</div>
              <div className="text-[14px] font-medium text-bridge-green md:text-[15px]">{r.us}</div>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-3 max-w-[700px] mx-auto text-center mt-12 text-[20px] md:text-[24px] font-heading italic text-light-slate leading-[1.5]">
          &ldquo;NestBridge combines artificial intelligence, smart matchmaking, and secure data rooms to get startups funded faster.&rdquo;
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── FEATURES ───────────────────────── */
function FeaturesSection() {
  const features = [
    {
      icon: <Users size={24} />,
      title: "Verified Investor Network",
      text: "Connect with a vetted network of angel investors, VC firms, and syndicates actively looking for opportunities.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Smart Discovery Filters",
      text: "Filter investors by thesis, check size, stage, and geography to ensure you only pitch to aligned capital.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "AI Pitch Refinement",
      text: "Improve your pitch deck and business profile with AI-driven feedback tailored to what investors want to see.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Financial Forecasting",
      text: "Generate clear, professional financial projections that withstand investor due diligence.",
    },
    {
      icon: <Store size={24} />,
      title: "Secure Data Rooms",
      text: "Host your pitch decks, cap tables, and legal documents securely, with detailed analytics on who is viewing what.",
    },
    {
      icon: <Shield size={24} />,
      title: "Compliant Frameworks",
      text: "Access legal templates, streamline due diligence, and communicate safely with strong identity verification.",
    },
  ];

  return (
    <section id="features" className="section bg-cloud py-[100px] md:py-[140px] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <DotGrid dotSize={2} gap={32} baseColor="#0B0F0D" activeColor="#0F7A4A" proximity={120} />
      </div>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-6 relative z-10">
        <p className="reveal-clip font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">Features</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          Every essential business service,
          <br className="hidden md:block" /> without leaving the platform.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12 mt-[60px] md:mt-[80px]">
          {features.map((f, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} motion-card rounded-[18px] p-4`}
            >
              <div className="w-12 h-12 rounded-full bg-bridge-green/10 flex items-center justify-center text-bridge-green mb-5">
                {f.icon}
              </div>
              <h3 className="font-accent text-[19px] font-semibold text-ink-black mb-2.5">{f.title}</h3>
              <p className="text-[15px] text-slate leading-[1.6]">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SOCIAL PROOF ───────────────────────── */
function SocialProofSection() {
  return (
    <section className="section bg-white pt-[140px] pb-0 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <DotGrid dotSize={2} gap={32} baseColor="#0B0F0D" activeColor="#0F7A4A" proximity={120} />
      </div>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-6 text-center relative z-10">
        <div className="reveal-scale relative rounded-[32px] overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center justify-center py-20 px-6 max-w-[1200px] mx-auto shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
            alt="Entrepreneurs growing businesses"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink-black/60 mix-blend-multiply" />
          <div className="relative z-10 max-w-[600px] flex flex-col items-center">
            <h2 className="font-heading text-[clamp(32px,4vw,48px)] leading-[1.15] text-paper-white mb-8 font-medium tracking-[-0.01em]">
              Join thousands of businesses
              <br />
              growing on NestBridge.
            </h2>
            <a href="#waitlist" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-bridge-green text-paper-white transition-all duration-300 ease-[var(--ease-out-expo)] border-none text-[17px] px-[36px] py-[18px] justify-center hover:bg-forest hover:-translate-y-[2px] hover:shadow-lg">
              Join the Waitlist
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PRICING ───────────────────────── */
function PricingSection() {
  return (
    <section id="pricing" className="section bg-cloud py-[100px] md:py-[140px] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <DotGrid dotSize={2} gap={32} baseColor="#0B0F0D" activeColor="#0F7A4A" proximity={120} />
      </div>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-6 relative z-10">
        <p className="reveal-clip font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">Pricing</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          One fundraising platform.
          <br className="hidden md:block" /> Replace scattered investor tools.
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-8 max-w-[900px] mx-auto mt-[60px] md:mt-[80px]">
          {/* Free */}
          <div className="reveal reveal-delay-2 motion-card flex-1 bg-white border border-black/5 rounded-[24px] p-8 md:p-10 flex flex-col relative transition-shadow duration-300 hover:shadow-md">
            <div className="mb-6 pb-6 border-b border-black/5">
              <h3 className="font-accent text-[20px] font-medium text-slate mb-2">Starter</h3>
              <div className="font-heading text-[48px] text-ink-black leading-none">
                $0<span className="text-[18px] text-light-slate font-body">/mo</span>
              </div>
            </div>
            <ul className="flex-1 list-none p-0 m-0 mb-8 flex flex-col gap-4">
              <li className="flex items-center gap-3 text-[15px] text-slate"><Check size={16} className="text-bridge-green" /> Startup Profile</li>
              <li className="flex items-center gap-3 text-[15px] text-slate"><Check size={16} className="text-bridge-green" /> Basic Investor Discovery</li>
              <li className="flex items-center gap-3 text-[15px] text-slate"><Check size={16} className="text-bridge-green" /> AI Pitch Feedback</li>
              <li className="flex items-center gap-3 text-[15px] text-slate"><Check size={16} className="text-bridge-green" /> Community Access</li>
            </ul>
            <a href="#waitlist" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-transparent border-2 border-slate/20 text-ink-black transition-all duration-300 ease-[var(--ease-out-expo)] text-[15px] px-[28px] py-[14px] justify-center hover:border-ink-black mt-auto">
              Start Free
            </a>
          </div>

          {/* Premium */}
          <div className="reveal reveal-delay-3 flex-1 flex flex-col relative mt-8 md:mt-0 md:-translate-y-4 transition-transform duration-300 hover:-translate-y-6">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-premium-gold to-[#E5C78A] text-ink-black font-accent text-[12px] font-bold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm z-20">
              <Star size={12} fill="currentColor" /> Pro Enterprise
            </div>
            <div className="motion-card flex-1 bg-ink-black text-paper-white rounded-[24px] p-8 pt-10 md:p-10 flex flex-col relative shadow-lg border border-white/10">
            <div className="mb-6 pb-6 border-b border-white/10">
              <h3 className="font-accent text-[20px] font-medium text-[#E5C78A] mb-2">Pro Fundraising</h3>
              <div className="font-heading text-[48px] text-white leading-none">
                $49<span className="text-[18px] text-white/50 font-body">/mo</span>
              </div>
            </div>
            <ul className="flex-1 list-none p-0 m-0 mb-8 flex flex-col gap-4">
              <li className="flex items-center gap-3 text-[15px] text-white/80"><Check size={16} className="text-premium-gold" /> Advanced Investor Matching</li>
              <li className="flex items-center gap-3 text-[15px] text-white/80"><Check size={16} className="text-premium-gold" /> Secure Data Rooms & Analytics</li>
              <li className="flex items-center gap-3 text-[15px] text-white/80"><Check size={16} className="text-premium-gold" /> Advanced Financial Forecasting</li>
              <li className="flex items-center gap-3 text-[15px] text-white/80"><Check size={16} className="text-premium-gold" /> Priority Discovery Placement</li>
              <li className="flex items-center gap-3 text-[15px] text-white/80"><Check size={16} className="text-premium-gold" /> Everything in Starter</li>
            </ul>
            <a href="#waitlist" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-gradient-to-r from-premium-gold to-[#E5C78A] text-ink-black transition-all duration-300 ease-[var(--ease-out-expo)] border-none text-[15px] px-[28px] py-[14px] justify-center hover:opacity-90 hover:shadow-[0_4px_20px_rgba(212,175,106,0.3)] hover:-translate-y-[1px] mt-auto">
              Upgrade to Pro
            </a>
            </div>
          </div>
        </div>

        <p className="reveal max-w-[600px] mx-auto text-center mt-12 text-[14px] text-light-slate">
          Transparent pricing. Stop paying for scattered data rooms, CRMs, and networking tools separately.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-${q.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

  return (
    <div className={`border-b border-black/5 last:border-b-0 ${open ? "" : ""}`}>
      <h3>
        <button
          className="w-full flex items-center justify-between py-5 md:py-6 text-left bg-transparent border-none cursor-pointer group"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={answerId}
        >
          <span className={`font-heading text-[18px] md:text-[20px] font-medium pr-6 transition-colors duration-200 ${open ? "text-bridge-green" : "text-ink-black group-hover:text-bridge-green"}`}>
            {q}
          </span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-slate transition-transform duration-300 ease-[var(--ease-out-expo)] ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      <div
        id={answerId}
        className={`overflow-hidden transition-all duration-400 ease-[var(--ease-out-expo)] ${open ? "max-h-[300px] opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"}`}
      >
        <p className="text-[16px] text-slate leading-[1.6] max-w-[700px] m-0">
          {a}
        </p>
      </div>
    </div>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Can I raise capital directly on NestBridge?",
      a: "Yes. NestBridge connects startups with angel investors, VC firms, and allows you to offer company shares to qualified investors through compliant mechanisms where legally permitted.",
    },
    {
      q: "Does NestBridge replace my other software?",
      a: "Our immediate goal is to replace fragmented fundraising tools. We eliminate the need to juggle separate data rooms, investor CRMs, and pitch platforms by integrating everything you need to close a round securely.",
    },
    {
      q: "How does the AI assistance work?",
      a: "NestBridge AI acts as your virtual fundraising advisor. It helps refine your pitch deck, generates financial forecasting, and analyzes your profile to suggest the best investor matches based on historical data.",
    },
    {
      q: "What is your long-term vision?",
      a: "While our current focus is exclusively on connecting founders to investors, NestBridge will eventually become a complete operating ecosystem—supporting everything from storefronts to team management.",
    },
    {
      q: "Is NestBridge suitable for early-stage startups?",
      a: "Yes, absolutely. We specifically designed our AI preparation tools to help pre-seed and seed stage founders professionalize their data and stand out when pitching to their first institutional or angel investors.",
    },
  ];

  return (
    <section id="faq" className="section bg-white py-[100px] md:py-[140px] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <DotGrid dotSize={2} gap={32} baseColor="#0B0F0D" activeColor="#0F7A4A" proximity={120} />
      </div>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-6 relative z-10">
        <p className="reveal-clip font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">FAQ</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          Frequently Asked Questions
        </h2>

        <div className="reveal reveal-delay-2 max-w-[800px] mx-auto mt-[40px] md:mt-[60px]">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── WAITLIST ───────────────────────── */
function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-ink-black text-paper-white py-[100px] md:py-[140px] border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 mix-blend-screen pointer-events-none">
        <DotGrid dotSize={2} gap={32} baseColor="#FFFFFF" activeColor="#3FE0A5" proximity={120} />
      </div>
      <div className="w-full max-w-[800px] mx-auto px-6 md:px-12 xl:px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 reveal">
          <span className="font-accent text-[13px] font-bold uppercase tracking-[0.15em] text-signal-mint">
            Coming Soon
          </span>
        </div>
        
        <h2 className="reveal reveal-delay-1 font-heading text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 font-medium">
          Step into the new business ecosystem.
        </h2>
        <p className="reveal reveal-delay-2 text-[18px] text-white/60 mb-12 max-w-[500px] mx-auto">
          We're finalizing the infrastructure for modern entrepreneurship. Join the waitlist for early access to our platform.
        </p>
        
        <form 
          action="https://formsubmit.co/rickytabe2@gmail.com" 
          method="POST" 
          className="reveal reveal-delay-3 w-full max-w-[500px] mx-auto bg-white/5 border border-white/10 p-6 md:p-8 rounded-[24px] shadow-2xl backdrop-blur-md flex flex-col gap-5 text-left"
        >
          {/* FormSubmit Config */}
          <input type="hidden" name="_subject" value="New NestBridge Waitlist Submission!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-accent text-[14px] font-medium text-white/80">Email Address <span className="text-bridge-green">*</span></label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              placeholder="founder@business.com"
              className="w-full bg-ink-black/50 border border-white/15 rounded-xl px-4 py-3.5 text-paper-white placeholder:text-white/30 focus:outline-none focus:border-bridge-green focus:ring-1 focus:ring-bridge-green transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="note" className="font-accent text-[14px] font-medium text-white/80">What are you looking for? <span className="text-white/40 font-normal">(Optional)</span></label>
            <textarea 
              name="note" 
              id="note" 
              rows={3}
              placeholder="Tell us if you're looking for capital, a co-founder, or an all-in-one business dashboard..."
              className="w-full bg-ink-black/50 border border-white/15 rounded-xl px-4 py-3.5 text-paper-white placeholder:text-white/30 focus:outline-none focus:border-bridge-green focus:ring-1 focus:ring-bridge-green transition-all resize-none"
            ></textarea>
          </div>
          
          <button type="submit" className="w-full flex items-center justify-center gap-2.5 font-accent font-semibold rounded-full bg-bridge-green text-paper-white transition-all duration-300 ease-[var(--ease-out-expo)] border-none text-[16px] px-[24px] py-[16px] hover:bg-forest hover:-translate-y-0.5 mt-2 shadow-[0_4px_16px_rgba(15,122,74,0.2)]">
            Join Waitlist
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
      
      {/* Background radial gradient */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[600px] bg-bridge-green/10 blur-[100px] md:blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
    </section>
  );
}

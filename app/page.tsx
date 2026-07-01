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
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
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
        <FinalCtaSection />
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
          className="object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink-black" />
      </div>

      <div className="container relative z-10 pt-[140px] pb-[100px] flex flex-col items-center">
        <div className="max-w-[800px] text-center flex flex-col items-center">
          <span className="reveal inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/5 font-accent text-[13px] font-medium tracking-[0.06em] uppercase text-white/80 mb-8 backdrop-blur-md">
            The on-ramp before your first pitch
          </span>

          <h1 className="reveal reveal-delay-1 text-[clamp(44px,7vw,88px)] leading-[1.05] tracking-[-0.03em] font-medium mb-6">
            Find your co-founder.
            <br />
            <span className="text-signal-mint italic pr-2 font-normal">Leave with a plan.</span>
          </h1>

          <p className="reveal reveal-delay-2 text-[19px] md:text-[21px] text-white/60 max-w-[640px] leading-[1.6] mb-10 mx-auto">
            NestBridge pairs first-time founders with the right person to build
            alongside — then turns your raw idea into a clean, shareable
            one-pager in minutes.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <a href="#" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-bridge-green text-paper-white transition-all duration-300 ease-[var(--ease-out-expo)] border-none text-[17px] px-[36px] py-[18px] w-full sm:w-auto justify-center hover:bg-forest hover:-translate-y-[2px] hover:shadow-lg">
              Find Your Co-Founder
              <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-white/10 text-paper-white transition-all duration-300 ease-[var(--ease-out-expo)] border border-white/10 text-[17px] px-[36px] py-[18px] w-full sm:w-auto justify-center hover:bg-white/15 hover:-translate-y-[2px]">
              See How It Works
            </a>
          </div>

          <p className="reveal reveal-delay-4 text-[14px] text-white/30 font-accent tracking-[0.02em]">
            Free to start&nbsp;&nbsp;·&nbsp;&nbsp;No credit card
            required&nbsp;&nbsp;·&nbsp;&nbsp;Available globally
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
      icon: <Search size={24} />,
      title: "I don't know anyone technical.",
      text: "Finding the right complementary skill set feels like a full-time search.",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "We matched, then went nowhere.",
      text: "Networking apps end at the DM. Nobody helps you build anything after.",
    },
    {
      icon: <FileText size={24} />,
      title: "I can't explain my idea cleanly.",
      text: "Turning a raw idea into something you can actually show someone takes hours.",
    },
  ];

  return (
    <section className="section bg-white py-[100px] md:py-[140px]">
      <div className="container">
        <p className="reveal font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">The Problem</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          Great ideas die alone
          <br className="hidden md:block" /> in a notes app.
        </h2>
        <p className="reveal reveal-delay-2 text-[18px] md:text-[19px] text-slate max-w-[580px] leading-[1.7] text-center mx-auto mb-[60px] md:mb-[80px]">
          You&apos;ve got the idea. What you don&apos;t have is the person to
          build it with — or a clear way to explain it once you find them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1100px] mx-auto">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 2} bg-cloud border border-black/5 rounded-[20px] p-8 md:p-10 transition-transform duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-md`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-bridge-green mb-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                {c.icon}
              </div>
              <h3 className="font-heading text-[22px] text-ink-black mb-3">
                &ldquo;{c.title}&rdquo;
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
      title: "Describe your idea",
      text: "Tell us what you're building and what kind of co-founder would make it real. No pitch deck required.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "02",
      title: "See explainable matches",
      text: "Every match shows visible reasons: complementary skills, same idea-stage, same city. No black-box scoring.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "03",
      title: "Generate your plan together",
      text: "Trigger the AI Plan Generator. It turns your conversation into a clean one-pager: problem, audience, solution, next steps.",
      img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "04",
      title: "Share what you built",
      text: "Your one-pager becomes a public Team profile you can screenshot, share, and pin to your applications.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="how-it-works" className="section bg-cloud py-[100px] md:py-[140px]">
      <div className="container">
        <p className="reveal font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">How NestBridge Works</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          From a rough idea to a real plan —
          <br className="hidden md:block" /> with the right person next to you.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-[60px] md:mt-[80px]">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} flex flex-col`}
            >
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-6 bg-mist">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] hover:scale-[1.03]"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-ink-black font-accent font-semibold text-[14px] px-3.5 py-1.5 rounded-full shadow-sm">
                  {s.num}
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-heading text-[24px] text-ink-black mb-2">{s.title}</h3>
                <p className="text-[16px] text-slate leading-[1.6]">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-16 md:mt-[80px]">
          <a href="#" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-bridge-green text-paper-white transition-all duration-300 ease-[var(--ease-out-expo)] border-none text-[15px] px-[28px] py-[14px] hover:bg-forest hover:-translate-y-0.5 hover:shadow-lg">
            Start Matching — It&apos;s Free
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
    <section className="section bg-ink-black text-paper-white overflow-hidden py-[100px] md:py-[140px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-left">
            <p className="reveal font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-signal-mint mb-5 text-left ml-0">
              The Plan Generator
            </p>
            <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-paper-white mb-5 md:mb-6 max-w-[720px] text-left ml-0 leading-[1.15] tracking-[-0.02em] font-medium font-heading">
              Not a wall of text.
              <br />A one-pager you&apos;d actually pin.
            </h2>
            <p className="reveal reveal-delay-2 text-[17px] text-white/55 leading-[1.7] mt-5 max-w-[500px]">
              Most AI tools hand you paragraphs. NestBridge hands you a
              card&nbsp;— problem, audience, solution, business model, next
              steps — laid out clean enough to screenshot and send to anyone.
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-8 md:gap-12 mt-12 pt-10 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="font-accent text-[28px] font-semibold text-paper-white">Minutes</span>
                <span className="text-[13px] text-signal-mint font-medium tracking-[0.05em] uppercase">not weeks</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-accent text-[28px] font-semibold text-paper-white">Built for two</span>
                <span className="text-[13px] text-signal-mint font-medium tracking-[0.05em] uppercase">matched teams</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-accent text-[28px] font-semibold text-paper-white">Yours to keep</span>
                <span className="text-[13px] text-signal-mint font-medium tracking-[0.05em] uppercase">always editable</span>
              </div>
            </div>
          </div>

          <div className="reveal-scale relative">
            <div className="bg-white rounded-[16px] shadow-lg overflow-hidden border border-black/5 transform md:rotate-[2deg] transition-transform duration-700 hover:rotate-0 hover:shadow-xl">
              <div className="bg-[#F2F4F3] border-b border-black/5 px-4 py-3 flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="p-8 md:p-10 text-ink-black bg-white">
                <h4 className="font-heading text-[22px] border-b border-black/5 pb-4 mb-6 text-ink-black font-medium">NestBridge Plan</h4>
                <div className="mb-6">
                  <strong className="block font-accent text-[12px] uppercase tracking-[0.08em] text-light-slate mb-1">Problem</strong>
                  <p className="text-[15px] text-slate leading-[1.5]">First-time founders can&apos;t find co-founders or articulate their idea.</p>
                </div>
                <div className="mb-6">
                  <strong className="block font-accent text-[12px] uppercase tracking-[0.08em] text-light-slate mb-1">Solution</strong>
                  <p className="text-[15px] text-slate leading-[1.5]">Explainable matching + AI-generated shareable one-pager.</p>
                </div>
                <div className="mb-6">
                  <strong className="block font-accent text-[12px] uppercase tracking-[0.08em] text-light-slate mb-1">Next Steps</strong>
                  <p className="text-[15px] text-slate leading-[1.5]">1. Validate with 10 users &nbsp;2. Build MVP &nbsp;3. Apply to YC</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-mist text-slate font-accent text-[12px] font-medium px-3 py-1 rounded-full">SaaS</span>
                  <span className="bg-mist text-slate font-accent text-[12px] font-medium px-3 py-1 rounded-full">Global</span>
                  <span className="bg-mist text-slate font-accent text-[12px] font-medium px-3 py-1 rounded-full">Pre-seed</span>
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
      name: "Matching apps",
      them: "Find someone and DM them",
      us: "Match and build something together after",
    },
    {
      name: "AI chatbots",
      them: "Draft a plan alone",
      us: "Turn a two-person conversation into a shared plan",
    },
    {
      name: "Pitch templates",
      them: "Fill in blanks by yourself",
      us: "Generate something visual, together, in minutes",
    },
  ];

  return (
    <section className="section bg-white py-[100px] md:py-[140px]">
      <div className="container">
        <p className="reveal font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">Why Not Just Use…</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          Everyone solves half the problem.
          <br className="hidden md:block" /> We built the missing half.
        </h2>

        <div className="reveal reveal-delay-2 max-w-[900px] mx-auto mt-[60px] md:mt-[80px] bg-white rounded-[24px] border border-black/5 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.5fr] items-center bg-cloud border-b border-black/5 px-6 py-4">
            <div className="hidden md:block" />
            <div className="hidden md:block font-accent text-[12px] font-bold uppercase tracking-[0.08em] text-light-slate">They help you…</div>
            <div className="hidden md:block font-accent text-[12px] font-bold uppercase tracking-[0.08em] text-bridge-green bg-bridge-green/10 rounded-full px-4 py-1.5 w-max">
              NestBridge helps you…
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.5fr] items-center px-6 py-5 md:py-6 border-b border-black/5 last:border-b-0 gap-2 md:gap-4 transition-colors hover:bg-[#fafafa]">
              <div className="font-heading text-[18px] text-ink-black font-medium">{r.name}</div>
              <div className="text-[14px] text-slate md:text-[15px]">{r.them}</div>
              <div className="text-[14px] font-medium text-bridge-green md:text-[15px]">{r.us}</div>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-3 max-w-[700px] mx-auto text-center mt-12 text-[20px] md:text-[24px] font-heading italic text-light-slate leading-[1.5]">
          &ldquo;NestBridge isn&apos;t trying to replace Y&nbsp;Combinator.
          It&apos;s what gets you ready to apply.&rdquo;
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
      title: "Founder Profiles",
      text: "Photo, bio, skills, industry interests, location — the real signal our matching runs on.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Explainable Matching",
      text: "Every match shows exactly why: complementary skills, shared city, same stage.",
    },
    {
      icon: <Shield size={24} />,
      title: "Gated Messaging",
      text: "Connect directly once there's mutual interest — no spam, no cold inbox.",
    },
    {
      icon: <Zap size={24} />,
      title: "AI Plan Generator",
      text: "Your idea + a short Q&A becomes a clean, visual one-pager in minutes.",
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Shared Dashboard",
      text: "Track goals and milestones together — tied to the plan you generated.",
    },
    {
      icon: <Share2 size={24} />,
      title: "Shareable Profile",
      text: "Your one-pager becomes a public profile to send, post, or pin anywhere.",
    },
  ];

  return (
    <section id="features" className="section bg-cloud py-[100px] md:py-[140px]">
      <div className="container">
        <p className="reveal font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">Features</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          Everything that gets you
          <br className="hidden md:block" /> from stranger to shared plan.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12 mt-[60px] md:mt-[80px]">
          {features.map((f, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} p-4`}
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
    <section className="section bg-white pt-[140px] pb-0">
      <div className="container text-center">
        <div className="reveal-scale relative rounded-[32px] overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center justify-center py-20 px-6 max-w-[1200px] mx-auto shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
            alt="Founders collaborating"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink-black/60 mix-blend-multiply" />
          <div className="relative z-10 max-w-[600px] flex flex-col items-center">
            <h2 className="font-heading text-[clamp(32px,4vw,48px)] leading-[1.15] text-paper-white mb-8 font-medium tracking-[-0.01em]">
              Be one of the first 500
              <br />
              founding members globally.
            </h2>
            <a href="#" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-bridge-green text-paper-white transition-all duration-300 ease-[var(--ease-out-expo)] border-none text-[17px] px-[36px] py-[18px] justify-center hover:bg-forest hover:-translate-y-[2px] hover:shadow-lg">
              Claim Your Spot
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
    <section id="pricing" className="section bg-cloud py-[100px] md:py-[140px]">
      <div className="container">
        <p className="reveal font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">Pricing</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          Start free. Upgrade when you&apos;re
          <br className="hidden md:block" /> ready to move faster.
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-[900px] mx-auto mt-[60px] md:mt-[80px]">
          {/* Free */}
          <div className="reveal reveal-delay-2 flex-1 bg-white border border-black/5 rounded-[24px] p-8 md:p-10 flex flex-col relative transition-shadow duration-300 hover:shadow-md">
            <div className="mb-6 pb-6 border-b border-black/5">
              <h3 className="font-accent text-[20px] font-medium text-slate mb-2">Free</h3>
              <div className="font-heading text-[48px] text-ink-black leading-none">
                $0<span className="text-[18px] text-light-slate font-body">/mo</span>
              </div>
            </div>
            <ul className="flex-1 list-none p-0 m-0 mb-8 flex flex-col gap-4">
              <li className="flex items-center gap-3 text-[15px] text-slate"><Check size={16} className="text-bridge-green" /> 1 founder profile</li>
              <li className="flex items-center gap-3 text-[15px] text-slate"><Check size={16} className="text-bridge-green" /> 3 connects / month</li>
              <li className="flex items-center gap-3 text-[15px] text-slate"><Check size={16} className="text-bridge-green" /> 1 AI plan generation</li>
              <li className="flex items-center gap-3 text-[15px] text-slate"><Check size={16} className="text-bridge-green" /> Shared team dashboard</li>
            </ul>
            <a href="#" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-transparent border-2 border-slate/20 text-ink-black transition-all duration-300 ease-[var(--ease-out-expo)] text-[15px] px-[28px] py-[14px] justify-center hover:border-ink-black mt-auto">
              Get Started Free
            </a>
          </div>

          {/* Premium */}
          <div className="reveal reveal-delay-3 flex-1 bg-ink-black text-paper-white rounded-[24px] p-8 md:p-10 flex flex-col relative md:-translate-y-4 shadow-lg border border-white/10 transition-transform duration-300 hover:-translate-y-6">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-premium-gold to-[#E5C78A] text-ink-black font-accent text-[12px] font-bold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <Star size={12} fill="currentColor" /> Most Popular
            </div>
            <div className="mb-6 pb-6 border-b border-white/10">
              <h3 className="font-accent text-[20px] font-medium text-[#E5C78A] mb-2">Premium</h3>
              <div className="font-heading text-[48px] text-white leading-none">
                $15<span className="text-[18px] text-white/50 font-body">/mo</span>
              </div>
            </div>
            <ul className="flex-1 list-none p-0 m-0 mb-8 flex flex-col gap-4">
              <li className="flex items-center gap-3 text-[15px] text-white/80"><Check size={16} className="text-premium-gold" /> Unlimited connects</li>
              <li className="flex items-center gap-3 text-[15px] text-white/80"><Check size={16} className="text-premium-gold" /> Unlimited plans & revisions</li>
              <li className="flex items-center gap-3 text-[15px] text-white/80"><Check size={16} className="text-premium-gold" /> Priority match placement</li>
              <li className="flex items-center gap-3 text-[15px] text-white/80"><Check size={16} className="text-premium-gold" /> Verified badge</li>
              <li className="flex items-center gap-3 text-[15px] text-white/80"><Check size={16} className="text-premium-gold" /> Everything in Free</li>
            </ul>
            <a href="#" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-gradient-to-r from-premium-gold to-[#E5C78A] text-ink-black transition-all duration-300 ease-[var(--ease-out-expo)] border-none text-[15px] px-[28px] py-[14px] justify-center hover:opacity-90 hover:shadow-[0_4px_20px_rgba(212,175,106,0.3)] hover:-translate-y-[1px] mt-auto">
              Go Premium
            </a>
          </div>
        </div>

        <p className="reveal max-w-[600px] mx-auto text-center mt-12 text-[14px] text-light-slate">
          No commission on anything you build. No equity ever changes hands on
          NestBridge — matching and planning, nothing more.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-black/5 last:border-b-0 ${open ? "" : ""}`}>
      <button
        className="w-full flex items-center justify-between py-5 md:py-6 text-left bg-transparent border-none cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <span className={`font-heading text-[18px] md:text-[20px] font-medium pr-6 transition-colors duration-200 ${open ? "text-bridge-green" : "text-ink-black group-hover:text-bridge-green"}`}>
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-slate transition-transform duration-300 ease-[var(--ease-out-expo)] ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
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
      q: "Is NestBridge only for tech startups?",
      a: "No — NestBridge works for any idea that needs a complementary co-founder. Our starter sectors are Tech and D2C, with more coming.",
    },
    {
      q: "Does NestBridge take equity or a cut?",
      a: "No. NestBridge doesn't take equity, commission, or any financial stake. We charge a simple subscription — that's it.",
    },
    {
      q: "Can I use this with an existing co-founder?",
      a: "Yes — the AI Plan Generator and shared dashboard work for existing teams too, not just new matches.",
    },
    {
      q: "Where is NestBridge available?",
      a: "We are a global platform: you can find co-founders from anywhere in the world.",
    },
    {
      q: "Will NestBridge help me raise money?",
      a: "Not directly. NestBridge helps you get to a clear, shareable plan and the right team — the foundation you need before approaching investors.",
    },
  ];

  return (
    <section id="faq" className="section bg-white py-[100px] md:py-[140px]">
      <div className="container">
        <p className="reveal font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-bridge-green mb-5 text-center">FAQ</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(32px,5vw,52px)] text-ink-black mb-5 md:mb-6 max-w-[720px] text-center mx-auto leading-[1.15] tracking-[-0.02em] font-medium font-heading">
          Common Questions
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

/* ───────────────────────── FINAL CTA ───────────────────────── */
function FinalCtaSection() {
  return (
    <section className="bg-ink-black text-paper-white py-[100px] md:py-[140px] border-b border-white/5 relative overflow-hidden">
      <div className="container text-center relative z-10">
        <h2 className="reveal font-heading text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 max-w-[800px] mx-auto font-medium">
          Your co-founder is out there.
          <br />
          <span className="text-signal-mint italic pr-2 font-normal">Go find them.</span>
        </h2>
        <p className="reveal reveal-delay-1 text-[18px] text-white/45 mb-10 max-w-[480px] mx-auto">
          It takes less time to sign up than it did to read this page.
        </p>
        <div className="reveal reveal-delay-2 flex justify-center mb-8">
          <a href="#" className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-bridge-green text-paper-white transition-all duration-300 ease-[var(--ease-out-expo)] border-none text-[17px] px-[36px] py-[18px] justify-center hover:bg-forest hover:-translate-y-[2px] hover:shadow-lg">
            Get Started Free
            <ArrowRight size={20} />
          </a>
        </div>
        <p className="reveal reveal-delay-3 text-[15px] text-white/40">
          Already have an account? <a href="#" className="text-white hover:text-signal-mint transition-colors underline underline-offset-4 decoration-white/30">Log in</a>
        </p>
      </div>
      
      {/* Background radial gradient */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[600px] bg-bridge-green/10 blur-[100px] md:blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
    </section>
  );
}

# NestBridge Landing Page — Copy & Design Spec

**Version:** v1 (aligned to NestBridge MVP v2 Executable Plan)
**Positioning:** The friendly on-ramp before Y Combinator.
**Core promise:** Find the right co-founder, walk away with a visual plan you're proud to show.

> Note: This spec deliberately excludes equity/share language, legal-hub claims, KYC/verification
> promises, and "global ecosystem" claims from the original proposal — those were cut in v2 for
> compliance and focus. Every line below is something the v1 product can actually deliver on day one.

---

## 0. Design System

### Color Palette

| Role | Color | Hex | Usage |
|---|---|---|---|
| Primary Black | Ink Black | `#0B0F0D` | Backgrounds (dark sections), headline text |
| Primary Green | Bridge Green | `#0F7A4A` | Primary buttons, links, active states, icons |
| Deep Green | Forest | `#0A4D30` | Gradients, hover states, dark-section accents |
| Mint | Signal Mint | `#3FE0A5` | Highlights, small accents, chart/data visuals, glow effects |
| White | Paper White | `#FFFFFF` | Light-section backgrounds, text on dark |
| Off-White | Cloud | `#F6F8F7` | Section backgrounds (alt), cards |
| Gold Accent | Premium Gold | `#D4AF6A` | Premium plan badge, "Verified"/"Pro" tags, upgrade CTAs only — used sparingly |
| Neutral Gray | Slate | `#5B6660` | Body copy on white, secondary text |
| Border Gray | Mist | `#E3E8E5` | Card borders, dividers |

**Rule of thumb:** Green = action & growth. Black = confidence & premium foundation. White = clarity & breathing room. Gold = *only* touches Premium-tier moments (pricing card border, "Priority Match" badge, upgrade prompts) — never used decoratively elsewhere, so it keeps its meaning.

### Typography

- **Headlines:** A confident serif or semi-serif (e.g. *Fraunces*, *Canela*, or *Playfair Display*) — gives NestBridge the "here's a bridge to something real" gravitas instead of generic SaaS.
- **Body / UI:** A clean geometric sans (e.g. *Inter*, *General Sans*, or *Satoshi*) for readability and a modern startup feel.
- **Numerals/stats:** Tabular, slightly bold, in Signal Mint or Gold on dark backgrounds.

### Visual Motifs

- **The bridge visual**: an abstract line-drawing bridge (two nodes connecting across a gap) as a recurring graphic motif — literalizes "NestBridge" and the co-founder-matching idea in one image. Use in hero background, section dividers, and favicon.
- **The one-pager card**: since the AI Plan Generator's shareable visual one-pager *is* the differentiator, mock it up prominently — a clean card with problem / audience / solution / next steps, styled like a Pinterest pin or Polaroid, tilted slightly for a "real artifact" feel.
- **Explainable-match chips**: small pill/tag UI ("Complementary skills," "Same city," "Same idea-stage") shown as actual UI elements in screenshots — this shows the "not a black box" promise rather than just claiming it.
- Generous white space, rounded corners (12–16px), soft shadows — avoid dense enterprise-SaaS layouts.

---

## 1. Navigation Bar

**Background:** White, sticky, subtle bottom border on scroll.

- **Logo:** NestBridge wordmark + bridge icon (green)
- **Nav links:** How It Works · Features · Pricing · FAQ
- **Right side:** "Log In" (text link) + "Get Started Free" (green filled button)

---

## 2. Hero Section

**Background:** Ink Black with a subtle animated bridge-line graphic (mint glow, low opacity) connecting two nodes.

**Eyebrow tag** *(small pill, mint text on dark green background)*
> 🌉 The on-ramp before your first pitch

**Headline** *(serif, white, large)*
> Find your co-founder. Leave with a plan.

**Subheadline** *(sans, slate/light gray)*
> NestBridge pairs first-time founders with the right person to build alongside — then turns your raw idea into a clean, shareable one-pager in minutes. No fluff, no fifty-tab spreadsheet, no "figure it out yourself."

**CTA Buttons**
- Primary: **"Find Your Co-Founder"** (green filled, white text)
- Secondary: **"See How It Works"** (outline, white border, ghost button — scrolls to section 4)

**Hero Visual:** Mockup of the shareable one-pager card floating slightly tilted, next to a match card showing two profile photos connected by a bridge line with tags: *"Complementary skills," "Same city," "Same idea-stage."*

**Micro-trust line** *(small, centered below CTAs)*
> Free to start · No credit card required · Currently live in [Starter City]

---

## 3. Problem Section

**Background:** White

**Section label:** *"The Problem"*

**Headline**
> Great ideas die alone in a notes app.

**Body copy**
> You've got the idea. What you don't have is the person to build it with — or a clear way to explain it once you find them. So the idea sits. Not because it's bad. Because starting is lonely and disorganized, and every "co-founder matching" tool out there either stops at the intro or hands you a blank template and wishes you luck.

**Three pain-point cards** *(icon + short line, off-white cards on white background)*
1. **"I don't know anyone technical."** → Finding the right complementary skill set feels like a full-time search.
2. **"We matched, then went nowhere."** → Networking apps end at the DM. Nobody helps you build anything after.
3. **"I can't explain my idea cleanly."** → Turning a raw idea into something you can actually show someone takes hours you don't have.

---

## 4. How It Works (Main Feature)

**Background:** Off-white (Cloud), with the bridge motif as a thin connecting line running through all four steps.

**Section label:** *"How NestBridge Works"*

**Headline**
> From a rough idea to a real plan — with the right person next to you.

**Step 1 — Describe your idea**
> Tell us what you're building and what kind of co-founder would make it real. No pitch deck required — just be honest about where you're stuck.

**Step 2 — See real, explainable matches**
> No black-box scoring. Every match comes with visible reasons: complementary skills, same idea-stage, same city. You'll always know *why* someone showed up in your feed.
*(UI element: match card with visible tag chips)*

**Step 3 — Connect and generate your plan**
> Once you're talking, either of you can trigger the AI Plan Generator. It turns your conversation and a short Q&A into a clean one-pager: problem, audience, solution, business model, and your next three steps.

**Step 4 — Share what you built**
> That one-pager becomes your public Team profile — the thing you actually screenshot, share, and pin to your applications. Not a wall of text. Something you're proud to show.

**CTA below steps:** *"Start Matching — It's Free"* (green button)

---

## 5. Product Showcase — The Visual Plan Generator

**Background:** Ink Black (contrast section to make the product mockup pop)

**Headline** *(white)*
> Not a wall of text. A one-pager you'd actually pin.

**Body copy** *(light gray)*
> Most AI tools hand you paragraphs. NestBridge hands you a card: problem, audience, solution, early business model, next steps — laid out clean enough to screenshot and send to anyone, from your co-founder's mom to your first investor conversation.

**Visual:** Large centered mockup of the one-pager card, mint glow border, subtle shadow, slightly tilted — treat it like the "hero product" the way Notion or Linear show off a UI screenshot.

**Supporting stat row** *(three small stats in mint numerals)*
- "Minutes, not weeks" — time to first plan
- "Built for two" — matched teams, not solo tools
- "Yours to keep" — shareable, editable, always available

---

## 6. Differentiator Section — Why NestBridge

**Background:** White

**Section label:** *"Why Not Just Use..."*

**Headline**
> Everyone solves half the problem. We built the missing half.

**Comparison layout:** three columns/cards, each with a competitor name (small, gray) and one clear line of differentiation. Keep this factual and non-disparaging — comparisons should describe positioning, not claim superiority.

| | They help you... | NestBridge helps you... |
|---|---|---|
| **Matching apps** | Find someone and DM them | Match *and* build something together after |
| **AI chatbots** | Draft a plan alone | Turn a two-person conversation into a shared plan |
| **Pitch templates** | Fill in blanks by yourself | Generate something visual, together, in minutes |

**Closing line** *(centered, italic serif)*
> "NestBridge isn't trying to replace Y Combinator. It's what gets you ready to apply."

---

## 7. Features Grid (Supporting Features)

**Background:** Off-white

**Headline**
> Everything that gets you from stranger to shared plan.

**Feature cards** *(2x3 or 3x2 grid, icon + title + one-line description — green icon accents)*

1. **Founder Profiles** — Photo, bio, skills, industry interests, location, and experience — the real signal our matching runs on, not a resume dump.
2. **Explainable Matching** — Every suggested match shows exactly why: complementary skills, shared city, same stage. You're always in control.
3. **Gated Messaging** — Connect and talk directly once there's mutual interest — no spam, no cold inbox.
4. **AI Plan Generator** — Your idea + a short Q&A becomes a clean, visual one-pager in minutes.
5. **Shared Team Dashboard** — Once matched, track goals and milestones together — tied directly to the plan you generated, not a generic to-do list.
6. **Shareable Startup Profile** — Your one-pager becomes a public profile you can send, post, or pin — built to be shown, not filed away.

---

## 8. Social Proof / Early Traction Section

**Background:** White

*(Use placeholders until real data exists — do not fabricate testimonials or numbers.)*

**Headline**
> Built with first-time founders, for first-time founders.

**Placeholder pattern:**
- [ ] Founder quote card (photo, name, one-line quote about finding a co-founder or using the plan generator)
- [ ] "As featured in" logo row — leave empty until real press/partners exist
- [ ] Simple counter: "X founders matched in [Starter City]" — populate once real, don't launch with a fake number

**Design note:** If no real testimonials/press exist yet, replace this section with a **"Founding Cohort" call-to-action** instead of empty social proof:
> "Be one of the first 50 founders in [Starter City]." (green banner, white text, CTA button: "Claim Your Spot")

---

## 9. Pricing Section

**Background:** Off-white

**Headline**
> Start free. Upgrade when you're ready to move faster.

**Two pricing cards side by side:**

### Free
*(white card, green border)*
- $0/month
- 1 founder profile
- 3 connects / month
- 1 AI plan generation
- Shared team dashboard
- CTA: **"Get Started Free"** (green outline button)

### Premium — ★ Gold badge: "Most Popular"
*(black card, gold border/accent, white text — the one place gold shows up prominently)*
- $15/month *(placeholder — confirm final price)*
- Unlimited connects
- Unlimited plan generations & revisions
- Priority match placement
- Verified badge
- Everything in Free
- CTA: **"Go Premium"** (gold filled button, black text)

**Below pricing, small reassurance line:**
> No commission on anything you build. No equity ever changes hands on NestBridge — matching and planning, nothing more.

*(This line does double duty: it's honest positioning **and** quietly reinforces the compliance boundary from the v2 cut list — no securities-law exposure, stated plainly and confidently rather than defensively.)*

---

## 10. FAQ Section

**Background:** White

**Headline:** Common Questions

*(Accordion-style, collapsed by default)*

**Q: Is NestBridge only for tech startups?**
> No — NestBridge works for any idea that needs a complementary co-founder, not just software. Our starter sectors are [X and Y], with more coming.

**Q: Does NestBridge take equity or a cut of my startup?**
> No. NestBridge doesn't take equity, commission, or any financial stake in what you build. We charge a simple subscription for using the platform — that's it.

**Q: Can I use this if I already have a co-founder?**
> Yes — the AI Plan Generator and shared dashboard work for existing teams too, not just new matches.

**Q: What cities is NestBridge available in?**
> We're starting focused: currently live in [Starter City], with more cities on the roadmap as we grow.

**Q: Will NestBridge help me raise money?**
> Not directly, today. NestBridge helps you get to a clear, shareable plan and the right team — the foundation you need before approaching investors or accelerators like Y Combinator.

---

## 11. Final CTA Section

**Background:** Ink Black, bridge motif graphic fading in from the bottom edge, mint glow

**Headline** *(white, large serif)*
> Your co-founder is out there. Go find them.

**Subtext**
> It takes less time to sign up than it did to read this page.

**CTA button:** **"Get Started Free"** (green filled, large)

**Secondary micro-link:** "Already have an account? Log in"

---

## 12. Footer

**Background:** Ink Black

- **Left:** NestBridge logo (white/mint) + one-line tagline: *"The on-ramp before Y Combinator."*
- **Columns:**
  - **Product:** How It Works · Features · Pricing
  - **Company:** About · Contact · Careers
  - **Legal:** Terms of Service · Privacy Policy
- **Bottom bar:** © [Year] NestBridge. All rights reserved. · Social icons (LinkedIn, X/Twitter, Instagram) in mint

---

## Copywriting Principles Used Throughout

1. **No overclaiming.** No "world's first AI-powered global ecosystem" language — that belongs to the original proposal, not the v1 product. Every claim above is something the 12-week build plan actually ships.
2. **No equity/investment language directed at end users.** Pricing section explicitly states no equity/commission, matching the compliance cut list.
3. **Specificity over grandeur.** "One city, one starter sector" is stated as a *feature* (depth over geography), not hidden as a limitation.
4. **Gold is earned, not decorative.** It only appears on Premium — this keeps the accent meaningful instead of just "premium-looking."
5. **The product's realness is centered.** The one-pager mockup and explainable-match chips are visual proof of both features named in the differentiator claim — page copy always points back to a screenshot, not just an adjective.

---

## Open Items for Tabe to Fill In Before Build

- [ ] Confirm final Starter City (SF vs NYC vs other) and starter sector(s)
- [ ] Confirm Premium price point ($15–18 range per v2 plan)
- [ ] Real founder testimonials/logos once available (do not fabricate placeholders in the live build)
- [ ] Final legal copy for Terms/Privacy (separate from this spec)
- [ ] Confirm launch cohort size for the "Founding Cohort" CTA if used
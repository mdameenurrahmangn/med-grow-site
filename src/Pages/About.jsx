import React, { useLayoutEffect, useState } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";
import mockupHero from "../assets/images/mockup-hero.png";
import socialHero from "../assets/images/social-marketing-hero.png";
import laptopImage from "../assets/images/laptop.png";
import ourMissionHero from "../assets/images/our-mission-hero.jpg";
import ourVisionHero from "../assets/images/our-vision-hero.jpg";
import howItComparesHero from "../assets/images/how-it-compares-hero.jpg";
import aboutHeroDashboard from "../assets/images/about-hero-dashboard.jpg";
import digitalMarketingHeroImg from "../assets/images/digital-marketing-hero.jpg";
import hospitalBrandingHeroImg from "../assets/images/hospital-branding-hero.jpg";
import hospitalWebsiteHeroImg from "../assets/images/hospital-website-hero.jpg";
import mediqoraHmsHeroImg from "../assets/images/mediqora-hms-hero.jpg";
import growthConsultingHeroImg from "../assets/images/growth-consulting-hero.jpg";
import { setupAboutPageAnimations } from "../Animations";
import AboutHeroSection from "../Components/AboutHeroSection.jsx";

const stats = [
  ["5", "+", "Years of Healthcare Marketing Experience"],
  ["40", "+", "Doctor Specialities Served"],
  ["1", "", "Accountable Team: Marketing + Software"],
];

const story = [
  "MedGrowDigi was born from a simple frustration we kept hearing from doctors, clinic owners and hospital administrators across India: marketing agencies promised leads, software vendors promised efficiency, and consultants promised compliance, but nobody connected the three.",
  "We started as a specialised healthcare vertical inside a broader digital marketing practice, working closely with skin clinics, fertility centres, neuro and ortho hospitals, and diagnostic chains across Chennai and beyond.",
  "Over time, a pattern became unmistakable: the hospitals and clinics that grew fastest were not the ones running the flashiest ad campaigns. They were the ones whose marketing, website, software and front-desk operations were finally talking to each other.",
  "That insight became MedGrowDigi, and it is the same insight that led us to build Mediqora HMS, our own Hospital Management Software, instead of simply recommending someone else's.",
  "We did not set out to be a software company. We set out to stop watching good marketing get undone by bad back-office systems, and building Mediqora HMS turned out to be the only honest way to fix that.",
];

const reasons = [
  ["Healthcare-Only Specialisation", "Every strategist, designer and developer works exclusively on healthcare accounts."],
  ["Marketing + Software Under One Roof", "A rare healthcare growth partner that also engineers hospital software through Mediqora HMS."],
  ["Compliance-First Approach", "NABH, NABL and Indian healthcare advertising guidelines are built into the process."],
  ["Transparent, Founder-Led Delivery", "No black-box reporting. You see what is spent, what is earned and what is next."],
  ["248+ Healthcare Categories", "From cardiologists to corporate hospitals to pharma manufacturers."],
];

const comparison = [
  ["Separate marketing agency, software vendor and compliance consultant", "One ecosystem covering all three"],
  ["Software recommended, not understood", "Software designed and owned in-house"],
  ["Generic healthcare templates", "248+ category-specific playbooks"],
];

const rollout = [
  ["Week 1", "Discovery Call", "Understanding your specialty, current challenges and growth goals."],
  ["Week 2", "Audit & Proposal", "A full digital and operational audit, followed by a scoped proposal."],
  ["Week 3 onward", "Onboarding & Execution", "Team assignment and the first 90-day roadmap goes live."],
];

const fit = [
  ["Strong fit", "You want one accountable partner instead of juggling several vendors."],
  ["Strong fit", "You are open to combining marketing with operational and software improvements for compounding results."],
  ["Not the right start", "You are looking for the cheapest possible one-off service with no ongoing relationship."],
  ["Not the right start", "You need a non-healthcare specialist. We focus exclusively on healthcare."],
];

const faqs = [
  ["Is MedGrowDigi part of a larger company?", "MedGrowDigi operates as a dedicated healthcare growth ecosystem, including our in-house Mediqora HMS software division."],
  ["Do you work with healthcare brands outside India?", "Our current focus and deepest expertise is the Indian healthcare market: its regulations, patient behaviour and competitive landscape."],
];

const pairLinks = [
  ["Home", "/"],
  ["Hospital Growth Consulting", "/contact"],
  ["Mediqora HMS", "/contact"],
];

const aboutImages = {
  hero: aboutHeroDashboard,
  story: digitalMarketingHeroImg,
  system: laptopImage,
  mission: ourMissionHero,
  vision: ourVisionHero,
  compares: howItComparesHero,
};

const SplitTitle = ({ children }) => (
  <h2 className="about-split mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
    {children.split(" ").map((word, index) => (
      <span className="about-word inline-block overflow-hidden pb-1" key={`${word}-${index}`}>
        <span className="inline-block">{word}</span>
        {index < children.split(" ").length - 1 ? "\u00a0" : ""}
      </span>
    ))}
  </h2>
);

const AboutImageSlot = ({ src, label, className = "", mixBlend = true }) => (
  <div className={`about-image-slot about-reveal relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-black/60 shadow-2xl ${className}`}>
    <img
      src={src}
      alt={label}
      className={`h-full w-full object-cover transition duration-700 hover:scale-105 ${
        mixBlend ? "opacity-85 mix-blend-screen" : "opacity-95"
      }`}
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.2),transparent_45%),linear-gradient(180deg,transparent_60%,rgba(5,5,5,0.85))]" />
  </div>
);

const About = () => {
  const [activeAboutFaq, setActiveAboutFaq] = useState(0);

  useLayoutEffect(() => {
    ScrollTrigger.clearScrollMemory();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    document.title = "About MedGrowDigi | Healthcare Marketing Experts in India";

    let description = document.querySelector("meta[name='description']");
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute(
      "content",
      "Learn about MedGrowDigi, India's healthcare growth ecosystem combining digital marketing, branding, software and hospital growth consulting under one team.",
    );

    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 1.02,
      touchMultiplier: 1.45,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = setupAboutPageAnimations();
    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 250);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(refreshTimer);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="about-page relative isolate overflow-hidden bg-[#050505] text-white">
      <div className="about-noise pointer-events-none fixed inset-0 z-0 opacity-[0.12]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_84%_12%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(34,197,94,0.1),transparent_34%)]" />

      {/* Exact Reference Match Hero Section */}
      <AboutHeroSection />

      {/* OUR STORY / WHY MEDGROWDIGI EXISTS - Box-Less Futuristic Laser Stream Timeline */}
      <section className="relative z-10 px-5 py-24 sm:px-8 lg:px-10 overflow-hidden" id="about-story">
        <div className="mx-auto max-w-6xl space-y-16">
          
          {/* Section Header */}
          <div className="about-reveal text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-emerald-500/40 bg-emerald-950/70 text-emerald-400 text-sm font-semibold uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(34,197,94,0.2)]">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Our Founding Story</span>
            </div>
            <SplitTitle>Why MedGrowDigi Exists</SplitTitle>
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed">
              How a simple frustration among doctors and hospital owners evolved into India&apos;s first unified healthcare growth ecosystem.
            </p>
          </div>

          {/* Box-Less Stream Timeline with Central Laser Line */}
          <div className="relative pt-6">
            
            {/* Central Laser Beam Line */}
            <div className="pointer-events-none absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500 via-[#22c55e] to-teal-500 shadow-[0_0_15px_#22c55e] opacity-70" />

            <div className="space-y-20 sm:space-y-28">
              {story.map((item, index) => {
                const isEven = index % 2 === 0;
                const phaseData = [
                  {
                    phase: "PHASE 01",
                    kicker: "THE FRUSTRATION",
                    title: "Nobody Was Connecting Marketing, Software & Compliance",
                    image: digitalMarketingHeroImg,
                  },
                  {
                    phase: "PHASE 02",
                    kicker: "CHENNAI ORIGINS",
                    title: "Specialized Healthcare Focus",
                    image: hospitalBrandingHeroImg,
                  },
                  {
                    phase: "PHASE 03",
                    kicker: "THE BREAKTHROUGH",
                    title: "Connected Systems Outperform Ad Spend Alone",
                    image: hospitalWebsiteHeroImg,
                  },
                  {
                    phase: "PHASE 04",
                    kicker: "SOFTWARE PIVOT",
                    title: "Building Mediqora HMS In-House",
                    image: mediqoraHmsHeroImg,
                  },
                  {
                    phase: "PHASE 05",
                    kicker: "COMPLETE ECOSYSTEM",
                    title: "Stopping Back-Office Undo of Good Marketing",
                    image: growthConsultingHeroImg,
                  },
                ];

                const currentPhase = phaseData[index];

                return (
                  <div
                    key={index}
                    className="about-story-card relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                  >
                    {/* Central Floating Orb Node */}
                    <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-20 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#050505] border-2 border-emerald-400 flex items-center justify-center font-mono font-bold text-lg text-emerald-300 shadow-[0_0_30px_rgba(34,197,94,0.4)] transition duration-500 hover:scale-125">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Text Column */}
                    <div
                      className={`pl-16 md:pl-0 ${
                        isEven ? "md:text-right md:pr-12 md:order-1" : "md:order-2 md:pl-12"
                      } space-y-4 relative z-10`}
                    >
                      {/* Sheer Background Watermark Index */}
                      <span
                        className={`pointer-events-none absolute -top-10 font-bold text-8xl sm:text-9xl text-white/[0.035] font-mono leading-none select-none ${
                          isEven ? "right-0" : "left-0"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <div className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-400 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        <span>{currentPhase.phase}</span>
                        <span>•</span>
                        <span>{currentPhase.kicker}</span>
                      </div>

                      <h3 className="font-belleza text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                        {currentPhase.title}
                      </h3>

                      <p className="text-gray-200 text-lg sm:text-xl font-normal leading-relaxed">
                        {item}
                      </p>

                      <div className={`pt-2 flex items-center gap-3 text-xs text-gray-400 font-mono ${isEven ? "md:justify-end" : "justify-start"}`}>
                        <span className="w-8 h-[1px] bg-emerald-500/50" />
                        <span>MedGrow Milestone</span>
                      </div>
                    </div>

                    {/* Opposite 3D Image Column */}
                    <div
                      className={`pl-16 md:pl-0 ${
                        isEven ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12"
                      } relative z-10`}
                    >
                      <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-2xl transition duration-500 hover:border-emerald-500/50 hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)]">
                        <img
                          src={currentPhase.image}
                          alt={currentPhase.title}
                          className="w-full h-auto max-h-[320px] object-cover group-hover:scale-105 transition duration-700 opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-emerald-300 font-mono">
                          <span>{currentPhase.phase} Visual</span>
                          <span className="text-gray-300 font-bold">MedGrow Architecture</span>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      <section className="about-stats-section relative z-10 px-5 py-12 sm:px-8 lg:px-10">
        <div className="about-reveal mx-auto mb-10 max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">By The Numbers</p>
          <SplitTitle>MedGrowDigi at a Glance</SplitTitle>
        </div>
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {stats.map(([value, suffix, label]) => (
            <div className="about-stat about-reveal border-y border-white/10 py-8" key={label}>
              <p className="text-6xl font-semibold text-emerald-300 sm:text-7xl">
                <span className="about-stat-value" data-target={value}>0</span>{suffix}
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/58">{label}</p>
            </div>
          ))}
        </div>
        <p className="about-reveal mx-auto mt-6 max-w-7xl text-xs leading-6 text-white/36">
          Illustrative placeholders to be replaced with verified MedGrowDigi performance data before publishing.
        </p>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="about-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">Why MedGrow Digi</p>
            <SplitTitle>One Team for the Whole Growth Loop</SplitTitle>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
              Your marketing, your software, your compliance support and your
              operations roadmap work better when they are planned by one
              healthcare-only team.
            </p>
          </div>

          <div className="about-reason-system relative">
            <div className="about-system-beam" />
            {reasons.map(([title, copy], index) => (
              <article className="about-reason about-reveal grid gap-5 py-6 sm:grid-cols-[4rem_1fr]" key={title}>
                <p className="about-reason-number text-sm font-semibold text-emerald-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="text-lg font-semibold text-white">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/58">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="about-reveal max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">How This Compares</p>
              <SplitTitle>Old Way vs. The MedGrowDigi Way</SplitTitle>
            </div>

            <div className="about-compare mt-8">
              {comparison.map(([oldWay, medgrow], index) => (
                <div className="about-compare-row grid gap-4 py-5 md:grid-cols-[0.9fr_1.1fr]" key={oldWay}>
                  <div className="text-sm leading-7 text-white/42">{oldWay}</div>
                  <div className="text-sm leading-7 text-white/84">
                    <span className="mr-4 text-xs font-semibold text-emerald-300">0{index + 1}</span>{medgrow}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AboutImageSlot
            src={aboutImages.compares}
            label="Unified Healthcare Growth Ecosystem vs Fragmented Vendors"
            className="about-compare-image min-h-[28rem]"
            mixBlend={false}
          />
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8 lg:px-10">
        <div className="about-belief-stage mx-auto max-w-7xl">
          <article className="about-belief about-belief-mission about-reveal grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="about-belief-copy">
              <span className="about-belief-index">01</span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Our Mission</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Give every Indian healthcare provider corporate-grade growth infrastructure.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/75 font-normal">
                To give every Indian healthcare provider, from a solo
                practitioner to a multi-branch hospital chain, access to the
                same calibre of digital growth strategy, technology and
                brand-building that large corporate hospital groups take for
                granted.
              </p>
            </div>
            <AboutImageSlot
              src={aboutImages.mission}
              label="MedGrowDigi Mission 3D Healthcare Infrastructure Visual"
              className="about-belief-image h-[24rem] sm:h-[26rem]"
              mixBlend={false}
            />
          </article>

          <article className="about-belief about-belief-vision about-reveal mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <AboutImageSlot
              src={aboutImages.vision}
              label="MedGrowDigi Vision 3D Healthcare Ecosystem Visual"
              className="about-belief-image order-2 h-[24rem] sm:h-[26rem] lg:order-1"
              mixBlend={false}
            />
            <div className="about-belief-copy order-1 lg:order-2">
              <span className="about-belief-index">02</span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Our Vision</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Become India&apos;s most trusted healthcare growth ecosystem.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/75 font-normal">
                To become India&apos;s most trusted healthcare growth ecosystem:
                the single partner healthcare brands turn to for marketing,
                branding, software, AI automation and growth consulting.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="about-workflow-section relative z-10 px-5 py-16 sm:px-8 lg:px-10" id="about-workflow">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="about-reveal lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">How It Rolls Out</p>
            <SplitTitle>How a New Client Relationship Typically Begins</SplitTitle>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
              Every engagement starts with clarity first, then audit, then a
              90-day execution roadmap that connects growth and operations.
            </p>
          </div>
          <div className="about-rollout">
            <div className="about-rollout-progress" />
            {rollout.map(([week, title, copy]) => (
              <article className="about-rollout-card about-reveal grid gap-5 py-7 sm:grid-cols-[5rem_1fr]" key={week}>
                <div className="about-rollout-marker">
                  <span>{week.split(" ")[1] || "3+"}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-300">{week}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="about-reveal max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">Our Team</p>
            <SplitTitle>Built Like the Patient Journey Itself</SplitTitle>
            <p className="mt-6 text-base leading-8 text-white/62">
              MedGrowDigi brings together healthcare SEO specialists,
              performance marketers, brand designers, software engineers,
              automation specialists and hospital growth consultants, each
              working within healthcare exclusively. Our team structure mirrors
              the patient journey itself: discovery, decision, conversion,
              retention and operations, with a dedicated pillar for each.
            </p>
          </div>

          <div className="about-team-grid mt-12 grid gap-4 md:grid-cols-5">
            {["Discovery", "Decision", "Conversion", "Retention", "Operations"].map((pillar, index) => (
              <div className="about-team-pillar about-reveal" key={pillar}>
                <p className="text-xs font-semibold text-emerald-300">0{index + 1}</p>
                <h3 className="mt-8 text-xl font-semibold">{pillar}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8 lg:px-10" id="about-fit">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="about-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">Is This Right for You?</p>
            <SplitTitle>Working With MedGrowDigi</SplitTitle>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {fit.map(([type, copy]) => (
              <article className="about-fit-card about-reveal" key={copy}>
                <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${type === "Strong fit" ? "text-emerald-300" : "text-white/40"}`}>
                  {type}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/66">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article className="about-plain-note about-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Careers</p>
            <h2 className="mt-5 text-3xl font-semibold">Work on Outcomes That Matter</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">
              We&apos;re always looking for healthcare-focused marketers,
              designers, developers and growth strategists who want to work on
              patient access, hospital efficiency and the digital credibility of
              Indian healthcare brands.
            </p>
          </article>
          <article className="about-plain-note about-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Partners</p>
            <h2 className="mt-5 text-3xl font-semibold">Extend the Growth Ecosystem</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">
              MedGrowDigi partners with hospital groups, clinic chains,
              diagnostic networks, healthcare technology companies and industry
              bodies to extend our growth ecosystem further.
            </p>
          </article>
          <article className="about-plain-note about-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">In Plain English</p>
            <h2 className="mt-5 text-3xl font-semibold">Growth Partner vs. Vendor</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">
              A vendor delivers a defined service and moves on. A growth partner
              stays accountable for the outcome, adjusting strategy, software
              and execution together as your practice evolves.
            </p>
          </article>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="about-reveal text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">FAQ</p>
            <SplitTitle>Frequently Asked Questions</SplitTitle>
          </div>
          <div className="about-faq-list mt-12">
            {faqs.map(([question, answer], index) => {
              const isOpen = activeAboutFaq === index;

              return (
                <article className={`about-faq about-reveal ${isOpen ? "is-open" : ""}`} key={question}>
                  <button
                    aria-expanded={isOpen}
                    className="about-faq-trigger"
                    onClick={() => setActiveAboutFaq(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span>{question}</span>
                    <span className="about-faq-icon" aria-hidden="true" />
                  </button>
                  <div className="about-faq-answer">
                    <div>
                      <p>{answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="about-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">Pairs Well With</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pairLinks.map(([label, href], index) => (
              <a className="about-pair-link about-reveal" href={href} key={label}>
                <span>0{index + 1}</span>
                <strong>{label}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-20 pt-8 sm:px-8 lg:px-10">
        <div className="about-cta about-reveal mx-auto max-w-7xl rounded-[1.8rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.26),rgba(5,5,5,0.95)_58%)] px-6 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">Call To Action</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Want to Know More About How We Work?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62">
            Talk to our team about your hospital, clinic or practice and see
            exactly how the MedGrowDigi ecosystem would apply to you.
          </p>
          <a className="mt-9 inline-flex rounded-full bg-emerald-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#050505]" href="/contact">
            Schedule a Strategy Call
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;

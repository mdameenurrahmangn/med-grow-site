// src/Components/FitAndMythsSection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  FileCode,
  X,
  Check,
  ShieldCheck,
  Users,
  TrendingUp,
  Lock,
  Leaf,
  Quote
} from "lucide-react";
import laptopImg from "../assets/images/laptop.png";

gsap.registerPlugin(ScrollTrigger);

const FitAndMythsSection = ({ service }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fit-anim-card",
        { opacity: 0, y: 45, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  // Fallback data if service object is light
  const fitText1 = service?.isRightForYou?.fitIf?.[0] || "You want compounding, long-term patient acquisition, not just a quick spike.";
  const fitText2 = service?.isRightForYou?.fitIf?.[1] || "You're willing to invest 6+ months before judging full results.";
  
  const plainEnglishTerm = service?.inPlainEnglish?.term || "Schema Markup";
  const plainEnglishDef = service?.inPlainEnglish?.definition || "Structured code added to your website that helps Google understand exactly what your page is about — for example, that a page lists a doctor, their specialty, and their clinic hours — which can improve how (and whether) you appear in rich search results.";

  const myth1 = service?.mythsAndMistakes?.[0]?.myth || "More keywords crammed onto a page means better rankings.";
  const reality1 = service?.mythsAndMistakes?.[0]?.reality || "Google rewards genuine topical depth and patient usefulness, not keyword density — overstuffed pages often rank worse.";

  const myth2 = service?.mythsAndMistakes?.[1]?.myth || "SEO results are immediate, like ads.";
  const reality2 = service?.mythsAndMistakes?.[1]?.reality || "SEO is a compounding channel. Early movement shows in 8-12 weeks; the strongest results build over 6-12 months and keep compounding after.";

  return (
    <div ref={sectionRef} className="space-y-16 py-12 w-full isolate font-sans">
      
      {/* =========================================================================
          SECTION 1 — FIT ASSESSMENT & SERVICE SCOPE (Exact Reference Match)
         ========================================================================= */}
      <section className="fit-anim-card relative rounded-3xl bg-[#021810] text-white p-6 sm:p-10 lg:p-12 border border-[#166444] shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Subtle Ambient Background Watermark Leaves & Radial Glow */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[35rem] bg-[#35C978]/10 rounded-full blur-[140px]" />
          
          {/* Faint Leaf Watermark Outline */}
          <div className="absolute -bottom-10 -left-10 opacity-10 text-[#35C978]">
            <Leaf className="w-80 h-80 stroke-[1]" />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ── LEFT COLUMN: SERVICE SCOPE & HEADING ── */}
          <div className="lg:col-span-4 space-y-5">
            {/* Kicker */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#35C978] font-mono">
                SERVICE SCOPE —
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.1] tracking-tight">
              What This Engagement{" "}
              <span className="text-[#35C978] drop-shadow-[0_0_15px_rgba(53,201,120,0.4)]">
                Requires &amp; Means
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-[#b3dbc8] text-xs sm:text-sm leading-relaxed font-normal max-w-md pt-1">
              A transparent look at what a successful engagement requires, how we execute, and the realities of SEO growth.
            </p>

            {/* Thin Accent Bar */}
            <div className="w-16 h-[2px] bg-[#35C978] rounded-full shadow-[0_0_8px_#35C978]" />

            {/* Bottom Pill Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#35C978]/30 bg-[#073624]/90 text-[#35C978] text-[11px] font-semibold px-4 py-2 shadow-[0_0_15px_rgba(53,201,120,0.15)] backdrop-blur-md">
                <Leaf className="w-3.5 h-3.5 text-[#35C978]" />
                <span>More Visibility → More Patients → Better Healthcare Impact</span>
              </div>
            </div>
          </div>

          {/* ── CENTER COLUMN: HEALTHCARE SEO ANALYTICS LAPTOP + STETHOSCOPE VISUAL ── */}
          <div className="lg:col-span-4 relative flex justify-center items-center py-4">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-b from-[#063020]/90 to-[#021810] border border-[#166444] shadow-[0_0_40px_rgba(0,0,0,0.5)] p-4 flex flex-col items-center justify-center group">
              
              {/* Radial Arch Lighting Effect Behind Laptop */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#35C978]/20 rounded-full blur-2xl" />

              {/* Laptop Image */}
              <img
                src={laptopImg}
                alt="Healthcare SEO Analytics Laptop & Stethoscope"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 relative z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
              />

              {/* Foreground Healthcare Stethoscope & Cross Badge Overlay */}
              <div className="absolute bottom-3 right-4 z-20 px-3 py-1.5 rounded-xl bg-[#042417]/95 border border-[#35C978]/40 shadow-lg flex items-center gap-2 text-[10px] text-[#35C978] font-bold uppercase tracking-wider backdrop-blur-md">
                <div className="w-4 h-4 rounded-full bg-[#35C978] text-[#021810] flex items-center justify-center font-black text-xs">
                  +
                </div>
                <span>Medical SEO Desk</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: 2 STACKED NUMBERED PANELS (01 & 02) ── */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Panel 01: LIKELY A STRONG FIT IF */}
            <div className="group rounded-2xl bg-[#06291d]/80 border border-[#166444] hover:border-[#35C978]/60 p-5 sm:p-6 space-y-3 shadow-xl backdrop-blur-md transition-all duration-300">
              
              {/* Header Row: Number Box + Target Icon */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white text-[#04281b] font-mono font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  01
                </div>

                <div className="w-9 h-9 rounded-full bg-[#35C978]/20 border border-[#35C978] text-[#35C978] flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(53,201,120,0.3)]">
                  <Target className="w-4.5 h-4.5" />
                </div>
              </div>

              {/* Label & Title */}
              <div className="space-y-1">
                <span className="text-[#35C978] font-mono font-extrabold text-[10px] sm:text-xs tracking-wider uppercase block">
                  LIKELY A STRONG FIT IF:
                </span>
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                  {fitText1}
                </h3>
              </div>

              {/* Divider & Bullet Point */}
              <div className="pt-2 border-t border-[#166444]/60">
                <p className="text-[#b2d8c7] text-xs leading-relaxed font-normal">
                  • {fitText2}
                </p>
              </div>

            </div>

            {/* Panel 02: IN PLAIN ENGLISH */}
            <div className="group rounded-2xl bg-[#06291d]/80 border border-[#166444] hover:border-[#35C978]/60 p-5 sm:p-6 space-y-3 shadow-xl backdrop-blur-md transition-all duration-300">
              
              {/* Header Row: Number Box + Document Search Icon */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white text-[#04281b] font-mono font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  02
                </div>

                <div className="w-9 h-9 rounded-full bg-[#35C978]/20 border border-[#35C978] text-[#35C978] flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(53,201,120,0.3)]">
                  <FileCode className="w-4.5 h-4.5" />
                </div>
              </div>

              {/* Label & Title */}
              <div className="space-y-1">
                <span className="text-[#35C978] font-mono font-extrabold text-[10px] sm:text-xs tracking-wider uppercase block">
                  IN PLAIN ENGLISH
                </span>
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                  {plainEnglishTerm}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#b2d8c7] text-xs leading-relaxed font-normal pt-1">
                {plainEnglishDef}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — MYTHS & MISCONCEPTIONS (Exact Reference Match with VS Element)
         ========================================================================= */}
      <section className="fit-anim-card space-y-8 pt-4">
        
        {/* Centered Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#35C978] tracking-tight drop-shadow-[0_0_20px_rgba(53,201,120,0.3)]">
            Myths &amp; Misconceptions
          </h2>
          <div className="w-16 h-[2px] bg-[#35C978] mx-auto rounded-full shadow-[0_0_8px_#35C978]" />
        </div>

        {/* 2 Large Comparison Cards with Central VS Circle */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
          
          {/* ── CARD 1 (LEFT MYTH & REALITY) ── */}
          <div className="md:col-span-5 rounded-3xl bg-[#05291d]/90 border border-[#166444] border-t-2 border-t-red-500/70 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-red-500/50 transition-colors">
            
            {/* MYTH ROW */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(239,68,68,0.3)]">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <span className="bg-red-500/20 text-red-400 text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full uppercase border border-red-500/30">
                  MYTH
                </span>
              </div>

              <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                {myth1}
              </h3>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-[#166444]/80" />

            {/* REALITY ROW */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#35C978]/20 border border-[#35C978]/60 text-[#35C978] flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(53,201,120,0.3)]">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <span className="bg-[#35C978]/20 text-[#35C978] text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full uppercase border border-[#35C978]/30">
                  REALITY
                </span>
              </div>

              <p className="text-[#c2e5d6] text-xs sm:text-sm font-normal leading-relaxed">
                {reality1}
              </p>
            </div>

          </div>

          {/* ── CENTER VS CIRCLE ELEMENT ── */}
          <div className="md:col-span-2 flex items-center justify-center py-2 md:py-0">
            <div className="w-16 h-16 rounded-full bg-[#032015] border-2 border-[#35C978] text-[#35C978] font-serif font-bold text-xl flex items-center justify-center shadow-[0_0_30px_rgba(53,201,120,0.5)] z-20 hover:scale-110 transition-transform">
              VS
            </div>
          </div>

          {/* ── CARD 2 (RIGHT MYTH & REALITY) ── */}
          <div className="md:col-span-5 rounded-3xl bg-[#05291d]/90 border border-[#35C978]/60 border-t-2 border-t-[#35C978] p-6 sm:p-8 space-y-6 shadow-[0_0_35px_rgba(53,201,120,0.15)] backdrop-blur-xl relative overflow-hidden group hover:border-[#35C978] transition-colors">
            
            {/* MYTH ROW */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(239,68,68,0.3)]">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <span className="bg-red-500/20 text-red-400 text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full uppercase border border-red-500/30">
                  MYTH
                </span>
              </div>

              <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                {myth2}
              </h3>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-[#166444]/80" />

            {/* REALITY ROW */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#35C978]/20 border border-[#35C978]/60 text-[#35C978] flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(53,201,120,0.3)]">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <span className="bg-[#35C978]/20 text-[#35C978] text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full uppercase border border-[#35C978]/30">
                  REALITY
                </span>
              </div>

              <p className="text-[#c2e5d6] text-xs sm:text-sm font-normal leading-relaxed">
                {reality2}
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          BOTTOM BANNER — SUSTAINS GROWTH VALUE BAR (Exact Reference Match)
         ========================================================================= */}
      <div className="w-full max-w-6xl mx-auto pt-6">
        <div className="rounded-2xl sm:rounded-full bg-white text-[#041a12] p-5 sm:p-6 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 px-8 sm:px-12 border border-white/20">
          
          {/* Quote Title */}
          <div className="flex items-center gap-4">
            <Quote className="w-10 h-10 text-[#35C978] flex-shrink-0 rotate-180" />
            <div className="leading-tight">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 block">
                WE FOCUS ON WHAT
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#041a12]">
                <span className="text-[#22c55e]">sustains growth</span> — not what spikes it.
              </h4>
            </div>
          </div>

          {/* 4 Value Badges with Vertical Dividers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-0 lg:divide-x divide-gray-200">
            
            <div className="flex items-center gap-2.5 px-3 py-1">
              <div className="w-8 h-8 rounded-full bg-[#35C978]/15 text-[#22c55e] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="leading-none">
                <span className="text-xs font-bold text-[#041a12] block">Evidence-led</span>
                <span className="text-[10px] text-gray-500">Strategy</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-1">
              <div className="w-8 h-8 rounded-full bg-[#35C978]/15 text-[#22c55e] flex items-center justify-center flex-shrink-0">
                <Users className="w-4.5 h-4.5" />
              </div>
              <div className="leading-none">
                <span className="text-xs font-bold text-[#041a12] block">Patient-first</span>
                <span className="text-[10px] text-gray-500">Approach</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-1">
              <div className="w-8 h-8 rounded-full bg-[#35C978]/15 text-[#22c55e] flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <div className="leading-none">
                <span className="text-xs font-bold text-[#041a12] block">Long-term</span>
                <span className="text-[10px] text-gray-500">Growth</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-1">
              <div className="w-8 h-8 rounded-full bg-[#35C978]/15 text-[#22c55e] flex items-center justify-center flex-shrink-0">
                <Lock className="w-4.5 h-4.5" />
              </div>
              <div className="leading-none">
                <span className="text-xs font-bold text-[#041a12] block">Transparent</span>
                <span className="text-[10px] text-gray-500">Process</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default FitAndMythsSection;

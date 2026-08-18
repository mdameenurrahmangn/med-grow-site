// src/Components/ExecutionRoadmap.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileSearch, Layers, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

// Image imports from assets
import auditImg from "../assets/images/hospital-website-hero.jpg";
import foundationImg from "../assets/images/growth-consulting-hero.jpg";
import compoundingImg from "../assets/images/services-hero-doctor.jpg";

gsap.registerPlugin(ScrollTrigger);

const ExecutionRoadmap = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".roadmap-header-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards staggered
      gsap.fromTo(
        ".roadmap-card-anim",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".roadmap-cards-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      phase: "PHASE 1",
      icon: FileSearch,
      pill: "WEEK 1-2",
      title: "Audit & Keyword Mapping",
      description:
        "Full technical audit plus keyword mapping tailored to patient search intent and medical queries.",
      image: auditImg,
    },
    {
      number: "02",
      phase: "PHASE 2",
      icon: Layers,
      pill: "WEEK 3-6",
      title: "Foundation Build",
      description:
        "On-page optimization, clinical schema markup, and YMYL core content cluster build-out.",
      image: foundationImg,
    },
    {
      number: "03",
      phase: "PHASE 3",
      icon: TrendingUp,
      pill: "MONTH 3+",
      title: "Compounding Growth",
      description:
        "Ongoing authority journal backlinks, local map dominance, and continuous ranking scale.",
      image: compoundingImg,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full rounded-3xl py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white/70 via-[#f0f8f3]/60 to-white/70 backdrop-blur-2xl text-slate-800 overflow-hidden isolate font-sans shadow-[0_20px_60px_rgba(4,51,35,0.08)] border border-white/80"
    >
      {/* ── GLASSMORPHISM VIBRANT AMBIENT BACKDROP ORBS ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

        {/* Top-Left Glowing Emerald Glass Orb */}
        <div className="absolute -top-12 -left-12 w-[34rem] h-[34rem] bg-[#35C978]/25 rounded-full blur-[110px]" />
        
        {/* Bottom-Right Deep Forest Glass Orb */}
        <div className="absolute -bottom-16 -right-16 w-[38rem] h-[38rem] bg-[#054029]/20 rounded-full blur-[130px]" />

        {/* Center Soft Mint Glass Wash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[28rem] bg-[#a3e4c1]/35 rounded-full blur-[140px]" />

        {/* Glass Prism Reflection Highlight Lines */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-2xl opacity-60" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-gradient-to-tl from-white/60 to-transparent rounded-full blur-2xl opacity-60" />

        {/* Subtle Geometric Grid Backdrop */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#054029 1.5px, transparent 1.5px)`,
            backgroundSize: `32px 32px`,
          }}
        />

        {/* Horizontal Dotted Connecting Line (Desktop Background) */}
        <div className="hidden md:block absolute top-[285px] left-[16%] right-[16%] border-t-2 border-dashed border-[#20c974]/50 z-0" />
      </div>

      {/* ── FOREGROUND CONTENT ── */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-14 sm:space-y-16">

        {/* ── SECTION HEADER ── */}
        <div className="text-center space-y-4 max-w-2xl mx-auto roadmap-header-anim">
          {/* Frosted Glass Badge */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#054029] inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_4px_15px_rgba(4,51,35,0.06)]">
            EXECUTION ROADMAP
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#043323] leading-[1.18] tracking-tight">
            Follow Easy Working Steps
            <br />
            for{" "}
            <span className="text-[#0a6644] underline decoration-emerald-400/60 decoration-wavy underline-offset-8">
              Healthcare SEO Growth
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-lg mx-auto pt-1 leading-relaxed">
            A structured 3-phase execution roadmap built for compounding rankings,
            trust, and patient acquisition.
          </p>
        </div>

        {/* ── 3 FROSTED GLASS ROADMAP CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 roadmap-cards-grid">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="roadmap-card-anim flex flex-col items-center group relative">

                {/* Step Circle Header (01, 02, 03) */}
                <div className="relative mb-6 z-10">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#043323] border-4 border-[#20c974] flex items-center justify-center shadow-[0_10px_25px_rgba(4,51,35,0.3)] group-hover:scale-110 group-hover:bg-[#20c974] group-hover:border-[#043323] transition-all duration-300">
                    <span className="text-[#20c974] group-hover:text-[#043323] font-black text-xl font-mono">
                      {step.number}
                    </span>
                  </div>

                  {/* Vertical Connector Line down to card */}
                  <div className="w-[2px] h-6 border-l-2 border-dashed border-[#20c974]/60 mx-auto" />
                </div>

                {/* Glassmorphic Translucent Card Container */}
                <div className="w-full bg-white/65 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_15px_35px_rgba(4,51,35,0.06)] hover:shadow-[0_30px_60px_rgba(4,51,35,0.16)] hover:bg-white/85 hover:border-[#20c974]/60 hover:-translate-y-2.5 transition-all duration-500">

                  {/* Week / Month Frosted Glass Pill Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-emerald-200/80 px-3.5 py-1 rounded-full mb-5 shadow-xs">
                    <div className="w-2 h-2 rounded-full bg-[#20c974] animate-pulse" />
                    <span className="text-[#054029] text-xs font-black tracking-wider uppercase">
                      {step.pill}
                    </span>
                  </div>

                  {/* Circular Image Treatment with Glass Border Ring */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white/90 shadow-md mb-6 relative group-hover:border-[#20c974]/60 transition-colors">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>

                  {/* Top Glass Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-white/90 border border-emerald-200/80 flex items-center justify-center text-[#043323] mb-4 shadow-sm group-hover:scale-110 group-hover:bg-[#20c974] group-hover:text-[#043323] transition-all duration-300">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[#043323] font-black text-lg sm:text-xl mb-2.5 tracking-tight group-hover:text-[#0a6644] transition-colors">
                    {step.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xs flex-grow">
                    {step.description}
                  </p>

                  {/* Small Mint Underline Accent */}
                  <div className="w-12 h-1 bg-[#20c974] rounded-full mt-5 group-hover:w-20 transition-all duration-300" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExecutionRoadmap;


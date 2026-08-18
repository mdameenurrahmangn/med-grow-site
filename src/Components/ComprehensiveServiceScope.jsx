import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  FileText,
  MapPin,
  Settings,
  Pencil,
  Link as LinkIcon,
  Building2,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Left Watercolor Botanical Leaves Illustration Component
const WatercolorBotanicalLeft = () => (
  <svg
    className="absolute left-0 top-0 bottom-0 h-full w-[220px] sm:w-[300px] md:w-[380px] pointer-events-none select-none z-0 opacity-80 sm:opacity-90"
    viewBox="0 0 400 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="leafGradLeft1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#529b74" stopOpacity="0.85" />
        <stop offset="50%" stopColor="#2d6a4f" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#1b4332" stopOpacity="0.95" />
      </linearGradient>
      <linearGradient id="leafGradLeft2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#74c69d" stopOpacity="0.8" />
        <stop offset="60%" stopColor="#40916c" stopOpacity="0.88" />
        <stop offset="100%" stopColor="#2d6a4f" stopOpacity="0.92" />
      </linearGradient>
      <linearGradient id="leafGradLeft3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b7e4c7" stopOpacity="0.85" />
        <stop offset="70%" stopColor="#74c69d" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#52b788" stopOpacity="0.95" />
      </linearGradient>
      <radialGradient id="washGlowLeft" cx="20%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#a3e4c1" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#d8f3dc" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#e8f5e9" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Soft Watercolor Wash Backdrops */}
    <path
      d="M-40,80 Q160,160 170,380 T40,680 Q-90,780 -40,80 Z"
      fill="url(#washGlowLeft)"
      filter="blur(24px)"
    />
    <circle cx="70" cy="220" r="130" fill="#95d5b2" opacity="0.25" filter="blur(30px)" />
    <circle cx="50" cy="580" r="150" fill="#74c69d" opacity="0.2" filter="blur(35px)" />

    {/* Botanical Stems */}
    <path
      d="M-10,790 C50,610 65,410 35,210 C20,110 8,50 0,-10"
      stroke="#2d6a4f"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.65"
    />
    <path
      d="M25,530 C95,430 135,290 115,150"
      stroke="#40916c"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.55"
    />

    {/* Watercolor Leaf Elements */}
    <g transform="translate(10, 50) rotate(-25)">
      <path d="M0,0 Q30,-40 60,-20 Q70,10 0,0 Z" fill="url(#leafGradLeft2)" />
      <path d="M0,0 Q25,-15 50,-10" stroke="#1b4332" strokeWidth="0.8" opacity="0.4" />
    </g>
    <g transform="translate(25, 110) rotate(-45)">
      <path d="M0,0 Q45,-55 90,-25 Q95,20 0,0 Z" fill="url(#leafGradLeft1)" />
      <path d="M0,0 Q40,-25 80,-12" stroke="#1b4332" strokeWidth="1" opacity="0.4" />
    </g>
    <g transform="translate(45, 170) rotate(15)">
      <path d="M0,0 Q50,-35 85,-5 Q75,35 0,0 Z" fill="url(#leafGradLeft3)" />
      <path d="M0,0 Q40,-15 75,-2" stroke="#2d6a4f" strokeWidth="0.8" opacity="0.4" />
    </g>

    <g transform="translate(50, 250) rotate(-35)">
      <path d="M0,0 Q60,-65 120,-30 Q125,25 0,0 Z" fill="url(#leafGradLeft1)" />
      <path d="M0,0 Q55,-30 110,-15" stroke="#1b4332" strokeWidth="1.2" opacity="0.4" />
    </g>
    <g transform="translate(65, 320) rotate(20)">
      <path d="M0,0 Q65,-40 115,-5 Q100,45 0,0 Z" fill="url(#leafGradLeft2)" />
      <path d="M0,0 Q50,-18 100,-2" stroke="#1b4332" strokeWidth="1" opacity="0.4" />
    </g>
    <g transform="translate(90, 220) rotate(-55)">
      <path d="M0,0 Q40,-45 80,-20 Q85,15 0,0 Z" fill="url(#leafGradLeft3)" />
    </g>
    <g transform="translate(110, 300) rotate(-15)">
      <path d="M0,0 Q50,-50 95,-20 Q90,25 0,0 Z" fill="url(#leafGradLeft2)" />
    </g>

    <g transform="translate(55, 410) rotate(-40)">
      <path d="M0,0 Q70,-70 135,-35 Q140,30 0,0 Z" fill="url(#leafGradLeft1)" />
      <path d="M0,0 Q60,-32 120,-16" stroke="#1b4332" strokeWidth="1.2" opacity="0.4" />
    </g>
    <g transform="translate(40, 480) rotate(25)">
      <path d="M0,0 Q75,-45 130,-10 Q115,50 0,0 Z" fill="url(#leafGradLeft3)" />
      <path d="M0,0 Q60,-20 115,-4" stroke="#2d6a4f" strokeWidth="1" opacity="0.4" />
    </g>
    <g transform="translate(70, 550) rotate(-30)">
      <path d="M0,0 Q65,-60 120,-25 Q115,30 0,0 Z" fill="url(#leafGradLeft2)" />
    </g>

    <g transform="translate(30, 630) rotate(-50)">
      <path d="M0,0 Q80,-80 150,-40 Q155,35 0,0 Z" fill="url(#leafGradLeft1)" />
    </g>
    <g transform="translate(20, 700) rotate(15)">
      <path d="M0,0 Q85,-50 145,-10 Q130,55 0,0 Z" fill="url(#leafGradLeft3)" />
    </g>
  </svg>
);

// Right Watercolor Botanical Leaves Illustration Component
const WatercolorBotanicalRight = () => (
  <svg
    className="absolute right-0 top-0 bottom-0 h-full w-[220px] sm:w-[300px] md:w-[380px] pointer-events-none select-none z-0 opacity-80 sm:opacity-90 scale-x-[-1]"
    viewBox="0 0 400 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="leafGradRight1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#529b74" stopOpacity="0.85" />
        <stop offset="50%" stopColor="#2d6a4f" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#1b4332" stopOpacity="0.95" />
      </linearGradient>
      <linearGradient id="leafGradRight2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#74c69d" stopOpacity="0.8" />
        <stop offset="60%" stopColor="#40916c" stopOpacity="0.88" />
        <stop offset="100%" stopColor="#2d6a4f" stopOpacity="0.92" />
      </linearGradient>
      <linearGradient id="leafGradRight3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b7e4c7" stopOpacity="0.85" />
        <stop offset="70%" stopColor="#74c69d" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#52b788" stopOpacity="0.95" />
      </linearGradient>
      <radialGradient id="washGlowRight" cx="20%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#a3e4c1" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#d8f3dc" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#e8f5e9" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Soft Watercolor Wash Backdrops */}
    <path
      d="M-40,80 Q160,160 170,380 T40,680 Q-90,780 -40,80 Z"
      fill="url(#washGlowRight)"
      filter="blur(24px)"
    />
    <circle cx="70" cy="220" r="130" fill="#95d5b2" opacity="0.25" filter="blur(30px)" />
    <circle cx="50" cy="580" r="150" fill="#74c69d" opacity="0.2" filter="blur(35px)" />

    {/* Botanical Stems */}
    <path
      d="M-10,790 C50,610 65,410 35,210 C20,110 8,50 0,-10"
      stroke="#2d6a4f"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.65"
    />
    <path
      d="M25,530 C95,430 135,290 115,150"
      stroke="#40916c"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.55"
    />

    {/* Watercolor Leaf Elements */}
    <g transform="translate(10, 50) rotate(-25)">
      <path d="M0,0 Q30,-40 60,-20 Q70,10 0,0 Z" fill="url(#leafGradRight2)" />
      <path d="M0,0 Q25,-15 50,-10" stroke="#1b4332" strokeWidth="0.8" opacity="0.4" />
    </g>
    <g transform="translate(25, 110) rotate(-45)">
      <path d="M0,0 Q45,-55 90,-25 Q95,20 0,0 Z" fill="url(#leafGradRight1)" />
      <path d="M0,0 Q40,-25 80,-12" stroke="#1b4332" strokeWidth="1" opacity="0.4" />
    </g>
    <g transform="translate(45, 170) rotate(15)">
      <path d="M0,0 Q50,-35 85,-5 Q75,35 0,0 Z" fill="url(#leafGradRight3)" />
      <path d="M0,0 Q40,-15 75,-2" stroke="#2d6a4f" strokeWidth="0.8" opacity="0.4" />
    </g>

    <g transform="translate(50, 250) rotate(-35)">
      <path d="M0,0 Q60,-65 120,-30 Q125,25 0,0 Z" fill="url(#leafGradRight1)" />
      <path d="M0,0 Q55,-30 110,-15" stroke="#1b4332" strokeWidth="1.2" opacity="0.4" />
    </g>
    <g transform="translate(65, 320) rotate(20)">
      <path d="M0,0 Q65,-40 115,-5 Q100,45 0,0 Z" fill="url(#leafGradRight2)" />
      <path d="M0,0 Q50,-18 100,-2" stroke="#1b4332" strokeWidth="1" opacity="0.4" />
    </g>
    <g transform="translate(90, 220) rotate(-55)">
      <path d="M0,0 Q40,-45 80,-20 Q85,15 0,0 Z" fill="url(#leafGradRight3)" />
    </g>
    <g transform="translate(110, 300) rotate(-15)">
      <path d="M0,0 Q50,-50 95,-20 Q90,25 0,0 Z" fill="url(#leafGradRight2)" />
    </g>

    <g transform="translate(55, 410) rotate(-40)">
      <path d="M0,0 Q70,-70 135,-35 Q140,30 0,0 Z" fill="url(#leafGradRight1)" />
      <path d="M0,0 Q60,-32 120,-16" stroke="#1b4332" strokeWidth="1.2" opacity="0.4" />
    </g>
    <g transform="translate(40, 480) rotate(25)">
      <path d="M0,0 Q75,-45 130,-10 Q115,50 0,0 Z" fill="url(#leafGradRight3)" />
      <path d="M0,0 Q60,-20 115,-4" stroke="#2d6a4f" strokeWidth="1" opacity="0.4" />
    </g>
    <g transform="translate(70, 550) rotate(-30)">
      <path d="M0,0 Q65,-60 120,-25 Q115,30 0,0 Z" fill="url(#leafGradRight2)" />
    </g>

    <g transform="translate(30, 630) rotate(-50)">
      <path d="M0,0 Q80,-80 150,-40 Q155,35 0,0 Z" fill="url(#leafGradRight1)" />
    </g>
    <g transform="translate(20, 700) rotate(15)">
      <path d="M0,0 Q85,-50 145,-10 Q130,55 0,0 Z" fill="url(#leafGradRight3)" />
    </g>
  </svg>
);

const ComprehensiveServiceScope = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".scope-header-anim",
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

      // Row 1 cards reveal
      gsap.fromTo(
        ".scope-card-row1",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".scope-row1-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // Row 2 cards reveal
      gsap.fromTo(
        ".scope-card-row2",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".scope-row2-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // Benefits bar reveal
      gsap.fromTo(
        ".scope-benefit-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".scope-benefits-bar",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const topRowServices = [
    {
      id: "01",
      title: "Medical Keyword Research",
      icon: Search,
      description:
        "Targeting high-intent medical queries, specialized treatment terms, and patient search phrases.",
    },
    {
      id: "02",
      title: "On-Page SEO",
      icon: FileText,
      description:
        "Optimizing clinical content, meta tags, header hierarchy, and specialized medical schema markups.",
    },
    {
      id: "03",
      title: "Healthcare Local SEO",
      icon: MapPin,
      description:
        "Dominating Google Maps, 3-Pack local listings, and multi-location patient discovery.",
    },
    {
      id: "04",
      title: "Technical SEO",
      icon: Settings,
      description:
        "Maximizing site speed, mobile experience, crawling performance & HIPAA-compliant security.",
    },
  ];

  const secondRowServices = [
    {
      id: "05",
      title: "Content SEO",
      icon: Pencil,
      description:
        "E-E-A-T compliant medical content written to satisfy Google YMYL standards & build clinical trust.",
    },
    {
      id: "06",
      title: "Link Building",
      icon: LinkIcon,
      description:
        "Acquiring authoritative healthcare journal backlinks, hospital citations, and medical press mentions.",
    },
    {
      id: "07",
      title: "Multi-location SEO",
      icon: Building2,
      description:
        "Scalable search architecture built for multi-branch clinic chains, hospital networks & healthcare hubs.",
    },
  ];

  const benefits = [
    "Patient-Focused SEO Strategy",
    "Industry-Specific Expertise",
    "Measurable Growth",
    "Better Visibility, More Appointments",
  ];

  return (
    <section
      ref={sectionRef}
      id="comprehensive-scope"
      className="relative rounded-3xl w-full py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#f3f9f5] via-[#ebf5ef] to-[#f4faf6] text-slate-800 overflow-hidden isolate shadow-sm border border-emerald-100/60"
    >
      {/* Botanical Watercolor Left & Right Artworks */}
      <WatercolorBotanicalLeft />
      <WatercolorBotanicalRight />

      {/* Subtle Center Soft Watercolor Glow Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48rem] h-[48rem] bg-[#a3e4c1]/25 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-16">

        {/* =========================================================================
            HEADER SECTION
           ========================================================================= */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto scope-header-anim">
          {/* Section Title Badge */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#054029] inline-block px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 shadow-sm">
            COMPREHENSIVE SERVICE SCOPE
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#043323] leading-tight">
            What Our <span className="text-[#0a6644] underline decoration-emerald-400/60 decoration-wavy underline-offset-8">SEO Services</span> Cover
          </h2>

          {/* Decorative ECG / Heart Pulse Line */}
          <div className="pt-2 flex justify-center items-center gap-3">
            <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#054029]/40" />
            <div className="relative flex items-center justify-center">
              <svg
                className="w-28 sm:w-36 h-8 text-[#054029] filter drop-shadow-[0_0_4px_#35C978]"
                viewBox="0 0 160 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 0 20 L 35 20 L 45 10 L 55 30 L 65 5 L 75 35 L 85 20 L 95 20 M 95 20 L 105 14 L 115 26 L 125 20 L 160 20" />
              </svg>
              <div
                className="absolute w-2 h-2 rounded-full bg-[#20c974] shadow-[0_0_8px_#20c974] animate-ping"
                style={{ left: '42%' }}
              />
            </div>
            <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#054029]/40" />
          </div>
        </div>

        {/* =========================================================================
            FIRST ROW — 4 Services Connected by Dotted Line
           ========================================================================= */}
        <div className="relative pt-4">

          {/* Horizontal Dotted Green Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[8%] right-[8%] border-t-2 border-dashed border-[#054029]/25 z-0" />

          {/* Grid of 4 Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10 scope-row1-grid">
            {topRowServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="scope-card-row1 group relative bg-[#043323] border border-[#0c5c3f] hover:border-[#20c974] rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(4,51,35,0.25)] shadow-md"
                >
                  {/* Step Number */}
                  <span className="text-[#20c974] font-mono font-extrabold text-sm sm:text-base tracking-widest mb-3">
                    {srv.id}
                  </span>

                  {/* Circular Icon */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-full bg-[#022418] border-2 border-[#20c974]/70 flex items-center justify-center text-[#20c974] shadow-[0_0_15px_rgba(32,201,116,0.2)] group-hover:scale-110 group-hover:bg-[#20c974] group-hover:text-[#022418] group-hover:shadow-[0_0_25px_#20c974] transition-all duration-300">
                      <IconComp className="w-7 h-7 stroke-[2]" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-3 leading-snug group-hover:text-[#20c974] transition-colors">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#d0e5da] text-xs sm:text-sm leading-relaxed font-normal flex-grow">
                    {srv.description}
                  </p>

                  {/* Small Green Underline Accent */}
                  <div className="w-12 h-1 bg-[#20c974] rounded-full mt-5 group-hover:w-20 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            SECOND ROW — Outlined Section Container with 3 Services
           ========================================================================= */}
        <div className="relative rounded-3xl bg-[#043323]/5 border border-[#054029]/20 p-6 sm:p-10 lg:p-12 shadow-sm backdrop-blur-sm transition-all duration-500 overflow-hidden">

          {/* Subtle Healthcare Shield Decoration on Left */}
          <div className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 opacity-[0.06] text-[#054029] hidden lg:block">
            <ShieldCheck className="w-64 h-64" />
          </div>

          {/* Subtle Growth Chart Decoration on Right */}
          <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 opacity-[0.06] text-[#054029] hidden lg:block">
            <TrendingUp className="w-64 h-64" />
          </div>

          {/* Inner Content Container */}
          <div className="relative z-10">

            {/* Horizontal Dotted Line Connecting Row 2 Services (Desktop) */}
            <div className="hidden md:block absolute top-[48px] left-[12%] right-[12%] border-t-2 border-dashed border-[#054029]/25 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10 scope-row2-grid">
              {secondRowServices.map((srv) => {
                const IconComp = srv.icon;
                return (
                  <div
                    key={srv.id}
                    className="scope-card-row2 group relative bg-[#043323] border border-[#0c5c3f] hover:border-[#20c974] rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(4,51,35,0.25)] shadow-md"
                  >
                    {/* Step Number */}
                    <span className="text-[#20c974] font-mono font-extrabold text-sm sm:text-base tracking-widest mb-3">
                      {srv.id}
                    </span>

                    {/* Circular Icon */}
                    <div className="relative mb-5">
                      <div className="w-16 h-16 rounded-full bg-[#022418] border-2 border-[#20c974]/70 flex items-center justify-center text-[#20c974] shadow-[0_0_15px_rgba(32,201,116,0.2)] group-hover:scale-110 group-hover:bg-[#20c974] group-hover:text-[#022418] group-hover:shadow-[0_0_25px_#20c974] transition-all duration-300">
                        <IconComp className="w-7 h-7 stroke-[2]" />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-3 leading-snug group-hover:text-[#20c974] transition-colors">
                      {srv.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#d0e5da] text-xs sm:text-sm leading-relaxed font-normal flex-grow">
                      {srv.description}
                    </p>

                    {/* Small Green Underline Accent */}
                    <div className="w-12 h-1 bg-[#20c974] rounded-full mt-5 group-hover:w-20 transition-all duration-300" />
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* =========================================================================
            BOTTOM — Floating White Pill Benefits Bar
           ========================================================================= */}
        <div className="w-full max-w-6xl mx-auto pt-2 scope-benefits-bar">
          <div className="rounded-2xl sm:rounded-full bg-white border border-emerald-100 p-4 sm:p-5 lg:px-8 shadow-[0_12px_35px_rgba(4,51,35,0.08)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:divide-x divide-emerald-100">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="scope-benefit-item flex items-center justify-center gap-3 px-2 sm:px-4 py-1.5 transition-transform duration-300 hover:scale-105"
                >
                  {/* Green Circular Check Icon */}
                  <div className="w-7 h-7 rounded-full bg-emerald-100/80 border border-emerald-300 flex items-center justify-center text-[#043323] flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  </div>

                  {/* Benefit Text */}
                  <span className="text-[#043323] font-bold text-xs sm:text-sm lg:text-base tracking-wide text-center">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComprehensiveServiceScope;


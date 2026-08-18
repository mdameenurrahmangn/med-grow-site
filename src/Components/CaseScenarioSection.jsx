// src/Components/CaseScenarioSection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, Zap, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CaseScenarioSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".case-card-anim",
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
  const cards = [
    {
      id: "01",
      badgeTitle: "SITUATION",
      badgeIcon: AlertTriangle,
      text: "A skin clinic with three branches was effectively invisible for any search beyond its own brand name.",
      colorType: "red",
    },
    {
      id: "02",
      badgeTitle: "WHAT MEDGROW DID",
      badgeIcon: Zap,
      text: "We rebuilt location pages, built symptom and treatment content clusters, and corrected technical SEO issues blocking indexing.",
      colorType: "green",
    },
    {
      id: "03",
      badgeTitle: "OUTCOME",
      badgeIcon: TrendingUp,
      text: "Organic visibility expanded well beyond branded searches into the symptom and treatment searches that drive genuinely new patient enquiries.",
      colorType: "green",
    },
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-12 px-4 sm:px-6 lg:px-12 bg-[#02100a] text-white overflow-hidden isolate font-sans">
      
      {/* ── Background Soft Ambient Glow & Digital Grid ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Radial Emerald Glow Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[35rem] bg-[#22c55e]/10 rounded-full blur-[140px]" />
        
        {/* Subtle Digital Dot Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#22c55e 1px, transparent 1px)`,
            backgroundSize: `28px 28px`,
          }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-36 bg-gradient-to-b from-[#22c55e]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ── LARGE ROUNDED OUTLINED CONTAINER (Exact Reference Match) ── */}
        <div className="relative rounded-3xl bg-[#03150d]/90 border border-[#22c55e]/50 hover:border-[#22c55e]/80 p-6 sm:p-10 lg:p-12 shadow-[0_0_40px_rgba(34,197,94,0.15)] backdrop-blur-xl transition-all duration-500 overflow-hidden">
          
          {/* Subtle Corner Glow Accent */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#22c55e]/15 rounded-full blur-2xl pointer-events-none" />

          {/* ── CONTAINER HEADER ── */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6">
            
            {/* Left: Label & Heading */}
            <div className="space-y-1.5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#22c55e] block font-mono">
                CASE SCENARIO
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Real-World Engagement Pattern
              </h2>
            </div>

            {/* Right: Large Faded Watermark "01" */}
            <div className="sm:self-start select-none pointer-events-none">
              <span className="text-7xl sm:text-8xl lg:text-9xl font-black font-mono text-[#0a3d27]/40 leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                01
              </span>
            </div>

          </div>

          {/* ── THIN GREEN ACCENT DIVIDER LINE WITH GLOWING DOT ── */}
          <div className="relative z-10 mb-10">
            <div className="w-full h-[1px] bg-[#22c55e]/20 relative">
              {/* Active glowing accent line segment */}
              <div className="w-32 sm:w-40 h-[2.5px] bg-[#22c55e] rounded-full shadow-[0_0_10px_#22c55e] absolute -top-[0.75px] left-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] absolute -top-[3.5px] right-0 shadow-[0_0_10px_#22c55e] animate-ping" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] absolute -top-[3.5px] right-0 shadow-[0_0_10px_#22c55e]" />
              </div>
            </div>
          </div>

          {/* ── 3 EQUAL CARDS IN ONE HORIZONTAL ROW ── */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {cards.map((card) => {
              const IconComp = card.badgeIcon;
              const isRed = card.colorType === "red";

              return (
                <div
                  key={card.id}
                  className={`case-card-anim group relative rounded-2xl p-6 sm:p-8 flex flex-col justify-start space-y-6 transition-all duration-300 backdrop-blur-md ${
                    isRed
                      ? "bg-[#0d0404]/90 border border-red-500/40 hover:border-red-500/80 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)]"
                      : "bg-[#02180f]/90 border border-[#22c55e]/40 hover:border-[#22c55e]/80 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]"
                  }`}
                >
                  {/* Small Glowing Accent Node on Top Border */}
                  <div
                    className={`absolute -top-[5px] right-12 w-2.5 h-2.5 rounded-full ${
                      isRed ? "bg-red-500 shadow-[0_0_8px_#ef4444]" : "bg-[#22c55e] shadow-[0_0_8px_#22c55e]"
                    }`}
                  />

                  {/* Header inside Card: Circular Icon Badge + Title */}
                  <div className="flex items-center gap-4">
                    {/* Glowing Circular Icon Badge */}
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                        isRed
                          ? "bg-[#1c0808] border-red-500 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                          : "bg-[#031d13] border-[#22c55e] text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                      }`}
                    >
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Card Title */}
                    <h3
                      className={`font-black text-sm sm:text-base tracking-wider uppercase ${
                        isRed ? "text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]" : "text-[#22c55e] drop-shadow-[0_0_6px_rgba(34,197,94,0.4)]"
                      }`}
                    >
                      {card.badgeTitle}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-gray-200 text-xs sm:text-sm font-normal leading-relaxed text-left">
                    {card.text}
                  </p>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseScenarioSection;

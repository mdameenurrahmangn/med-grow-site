import React from "react";

const medicalBubbles = [
  { icon: "pulse", title: "Patient Funnel", className: "hero-med-bubble-one" },
  { icon: "pill", title: "Care Campaigns", className: "hero-med-bubble-two" },
  { icon: "cross", title: "Clinic Growth", className: "hero-med-bubble-four" },
  { icon: "lab", title: "Diagnostics", className: "hero-med-bubble-six" },
];

const MedicalIcon = ({ name }) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.8,
    viewBox: "0 0 48 48",
  };

  const icons = {
    pulse: (
      <svg {...common} aria-hidden="true">
        <path d="M5 25h8l4-11 8 24 5-13h13" />
        <path d="M24 8c6.4-6 18 0.4 18 10.5 0 9-10 16.2-18 21.5C16 34.7 6 27.5 6 18.5 6 8.4 17.6 2 24 8Z" opacity="0.42" />
      </svg>
    ),
    pill: (
      <svg {...common} aria-hidden="true">
        <path d="M17.2 37.8 10.3 31c-4.1-4.1-4.1-10.8 0-14.9l5.8-5.8c4.1-4.1 10.8-4.1 14.9 0l6.8 6.8c4.1 4.1 4.1 10.8 0 14.9L32 37.8c-4.1 4.1-10.7 4.1-14.8 0Z" />
        <path d="m17 17 14 14" />
        <path d="M13.4 27.8 20 34.4" opacity="0.45" />
      </svg>
    ),
    records: (
      <svg {...common} aria-hidden="true">
        <path d="M15 6h18a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4Z" />
        <path d="M19 16h10" />
        <path d="M19 24h14" />
        <path d="M19 32h8"  />
        <path d="M24 10v8" opacity="0.45" />
        <path d="M20 14h8" opacity="0.45" />
      </svg>
    ),
    cross: (
      <svg {...common} aria-hidden="true">
        <path d="M20 7h8v13h13v8H28v13h-8V28H7v-8h13V7Z" />
        <path d="M13 13c6-6 16-6 22 0" opacity="0.45" />
        <path d="M13 35c6 6 16 6 22 0" opacity="0.45" />
      </svg>
    ),
    automation: (
      <svg {...common} aria-hidden="true">
        <path d="M16 18a8 8 0 0 1 16 0v5a8 8 0 0 1-16 0v-5Z" />
        <path d="M12 26h24" />
        <path d="M18 38h12" />
        <path d="M24 31v7" />
        <path d="M19 18h.1" />
        <path d="M29 18h.1" />
        <path d="M20 24c2.6 2 5.4 2 8 0" opacity="0.55" />
      </svg>
    ),
    lab: (
      <svg {...common} aria-hidden="true">
        <path d="M18 6h12" />
        <path d="M21 6v12L11.6 34.3A5 5 0 0 0 16 42h16a5 5 0 0 0 4.4-7.7L27 18V6" />
        <path d="M16 32h16" />
        <path d="M20 36h8" opacity="0.45" />
      </svg>
    ),
  };

  return icons[name] || icons.pulse;
};

const Hero = () => {
  return (
    <div className="hero-panel absolute inset-0 z-30 overflow-hidden text-white">
      <div className="hero-med-bubbles pointer-events-none absolute inset-0 z-20">
        <div className="hero-med-thread hero-med-thread-left" />
        <div className="hero-med-thread hero-med-thread-right" />
        {medicalBubbles.map((bubble) => (
          <div className={`hero-med-bubble ${bubble.className}`} key={bubble.title}>
            <span className="hero-med-bubble-core">
              <span className="hero-med-icon">
                <MedicalIcon name={bubble.icon} />
              </span>
              <span className="hero-med-label">{bubble.title}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-30 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-6 pb-24 pt-24 text-center sm:px-8 sm:pb-28 sm:pt-28 lg:px-10 lg:pt-28 xl:pt-32">
        <div className="hero-copy inline-flex flex-col items-center">
     

          <h1 className="hero-heading max-w-4xl text-3xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-7xl">
            India&apos;s{" "}
            <span className="text-[#22c55e]">Healthcare Growth</span>{" "}
            Ecosystem
          </h1>

          <p className="hero-subtitle mt-4 max-w-2xl text-base leading-8 text-white/70 sm:text-lg lg:text-xl">
            We Don&apos;t Just Market Healthcare. We Engineer Its Growth.
          </p>

          <p className="hero-lead mt-4 max-w-3xl text-sm leading-7 text-white/58 sm:text-base sm:leading-8">
            MedGrowDigi is a full-stack healthcare growth ecosystem built for
            hospitals, clinics, doctors, diagnostic labs and healthcare brands
            across India.
          </p>

          <div className="hero-cta mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#growth"
              className="group inline-flex items-center justify-center rounded-full border border-emerald-500/40 bg-[#22c55e] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#050505] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(34,197,94,0.24)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(34,197,94,0.35)]"
            >
              Book a Free Consultation
            </a>
            <a
              href="#proposal"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-xl transition duration-300 hover:border-emerald-300/50 hover:text-emerald-200"
            >
              Get a Proposal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

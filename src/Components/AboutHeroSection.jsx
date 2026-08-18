// src/Components/AboutHeroSection.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import medgrowLogo from "../assets/images/medgrow-logo.png";

const AboutHeroSection = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-[#030705] text-white overflow-hidden isolate flex flex-col justify-between font-sans">
      
      {/* ── Background Soft Green Ambient Glow (Right Side) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large Soft Green Radial Glow on the Right */}
        <div 
          className="absolute top-1/2 -right-20 -translate-y-1/2 w-[45rem] h-[45rem] sm:w-[60rem] sm:h-[60rem] rounded-full blur-[140px] opacity-75"
          style={{
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(10, 80, 45, 0.2) 45%, transparent 70%)"
          }}
        />

        {/* Subtle Ambient Top-Left Dark Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#062416]/40 rounded-full blur-3xl" />

        {/* Subtle Floating Green Particles */}
        <div className="absolute top-[30%] right-[25%] w-2 h-2 rounded-full bg-[#22c55e]/40 blur-[0.5px] animate-pulse" />
        <div className="absolute top-[60%] right-[15%] w-2.5 h-2.5 rounded-full bg-[#22c55e]/30 blur-[0.5px] animate-ping" />
        <div className="absolute top-[75%] right-[35%] w-1.5 h-1.5 rounded-full bg-[#22c55e]/50 blur-[0.5px]" />
      </div>

      {/* ── TOP NAVIGATION BAR ── */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 flex items-center justify-between">
        
        {/* Left: Logo + Subtitle */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={medgrowLogo} 
            alt="MedGrow Logo" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="hidden xs:flex flex-col">
            <span className="text-xl font-black tracking-tight text-white flex items-center leading-none">
              MED<span className="text-[#22c55e]">GROW</span>
            </span>
            <span className="text-[10px] text-gray-400 font-medium tracking-tight mt-0.5">
              Digital Marketing Agency For Healthcare Industry
            </span>
          </div>
        </Link>

        {/* Center: Floating Glass Pill Navbar */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-md shadow-lg">
          <Link 
            to="/" 
            className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="px-5 py-1.5 text-sm font-semibold text-[#030705] bg-white rounded-full shadow-md transition-all duration-300"
          >
            About
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-white" : ""}`} />
            </button>

            {servicesOpen && (
              <div 
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#081a11]/95 border border-[#22c55e]/30 shadow-2xl backdrop-blur-xl p-3 space-y-1 text-sm animate-fadeIn z-30"
              >
                <Link to="/services/healthcare-seo-services-india" className="block px-3 py-2 rounded-xl text-gray-200 hover:bg-[#22c55e]/20 hover:text-white transition">
                  Healthcare SEO Services
                </Link>
                <Link to="/services" className="block px-3 py-2 rounded-xl text-gray-200 hover:bg-[#22c55e]/20 hover:text-white transition">
                  Hospital Growth Marketing
                </Link>
                <Link to="/services" className="block px-3 py-2 rounded-xl text-gray-200 hover:bg-[#22c55e]/20 hover:text-white transition">
                  Mediqora HMS Software
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/contact" 
            className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Enquire Now Button */}
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#22c55e]/60 text-white text-sm font-medium hover:bg-[#22c55e]/15 hover:border-[#22c55e] transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.15)]"
          >
            Enquire Now
          </Link>
        </div>

      </header>

      {/* ── HERO MAIN CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 my-auto flex flex-col items-start justify-center">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          
          {/* Outlined Badge */}
          <div>
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#22c55e]/40 bg-black/50 text-[#22c55e] text-xs font-mono font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_12px_rgba(34,197,94,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] animate-pulse" />
              <span>HEALTHCARE GROWTH ECOSYSTEM • INDIA</span>
            </span>
          </div>

          {/* Large Typography: DESIGN THAT SELLS */}
          <h1 className="font-black text-6xl sm:text-8xl lg:text-[7.8rem] leading-[0.88] tracking-tight uppercase text-white font-sans">
            DESIGN
            <br />
            THAT SELLS
          </h1>

          {/* Paragraph Description with Green Highlighted Phrases */}
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl pt-2">
            India's first unified healthcare ecosystem combining{" "}
            <span className="text-[#22c55e] font-medium">digital marketing</span>,{" "}
            <span className="text-[#22c55e] font-medium">hospital branding</span>,{" "}
            <span className="text-[#22c55e] font-medium">proprietary Mediqora HMS software</span>, and{" "}
            <span className="text-[#22c55e] font-medium">growth consulting</span> under one accountable team.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Bright Green Filled Button: EXPLORE STORY → */}
            <a
              href="#about-story"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#22c55e] text-[#030705] font-extrabold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,197,94,0.45)] hover:bg-[#25d366] hover:scale-105 transition-all duration-300"
            >
              <span>EXPLORE STORY</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>

            {/* Dark Transparent Outlined Button: WHY MEDGROWDIGI */}
            <a
              href="#about-fit"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/20 bg-black/40 text-white font-extrabold text-sm uppercase tracking-wider backdrop-blur-md hover:border-[#22c55e] hover:text-[#22c55e] transition-all duration-300"
            >
              WHY MEDGROWDIGI
            </a>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Filler Padding */}
      <div className="h-8" />
    </section>
  );
};

export default AboutHeroSection;

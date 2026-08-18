// src/Pages/Services.jsx
import React, { useRef, useLayoutEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Megaphone,
  Palette,
  Globe,
  Building2,
  Bot,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  UserCheck,
  Building,
  Stethoscope,
  ChevronRight,
  Zap,
  TrendingUp,
  Play,
  Home,
} from "lucide-react";
import { solutionPillars, servicesData } from "../data/servicesData.js";
import { setupServicesOverviewAnimations } from "../Animations.js";

import servicesDoctorImg from "../assets/images/services-hero-doctor.jpg";
import socialMediaMarketingCardImg from "../assets/images/social-media-marketing-card.png";
import healthcareLeadGenCardImg from "../assets/images/healthcare-lead-gen-card.png";

import digitalMarketingHeroImg from "../assets/images/digital marketing in health care.jpg";
import hospitalBrandingHeroImg from "../assets/images/hospital-branding-hero.jpg";
import hospitalWebsiteHeroImg from "../assets/images/hospital-website-hero.jpg";
import mediqoraHmsHeroImg from "../assets/images/mediqora-hms-hero.jpg";
import aiAutomationHeroImg from "../assets/images/ai-automation-hero.jpg";
import growthConsultingHeroImg from "../assets/images/growth-consulting-hero.jpg";
import complianceStaffHeroImg from "../assets/images/compliance-staff-hero.jpg";

const iconMap = {
  "digital-marketing": Megaphone,
  branding: Palette,
  "website-development": Globe,
  "software-solutions": Building2,
  "ai-automation": Bot,
  "hospital-growth-consulting": BarChart3,
  "compliance-accreditation": ShieldCheck,
};

const heroImageMap = {
  "digital-marketing": digitalMarketingHeroImg,
  branding: hospitalBrandingHeroImg,
  "website-development": hospitalWebsiteHeroImg,
  "software-solutions": mediqoraHmsHeroImg,
  "ai-automation": aiAutomationHeroImg,
  "hospital-growth-consulting": growthConsultingHeroImg,
  "compliance-accreditation": complianceStaffHeroImg,
};


// ─── Verified Indian healthcare images from Pexels CDN ───────────────────────
// Format: https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg?auto=compress&cs=tinysrgb&w=600
const categoryImageMap = {

  // ── DIGITAL MARKETING ──────────────────────────────────────────────────────

  // Healthcare SEO — Indian doctor typing on laptop in clinic
  "healthcare-seo-services-india":
    "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Google Ads — digital marketing analytics on laptop screen
  "google-ads-for-hospitals-doctors-clinics":
    "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Meta Ads — person using smartphone with social media
  "meta-ads-for-hospitals-doctors":
    "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Social Media Marketing — custom brand asset (kept as-is)
  "healthcare-social-media-marketing": socialMediaMarketingCardImg,

  // Lead Generation — custom brand asset (kept as-is)
  "healthcare-lead-generation": healthcareLeadGenCardImg,

  // Reputation Management — Indian female doctor smiling in hospital
  "hospital-doctor-reputation-management":
    "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600",

  // WhatsApp & Email Marketing — doctor checking phone in hospital corridor
  "whatsapp-email-marketing-healthcare":
    "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ── BRANDING ───────────────────────────────────────────────────────────────

  // Hospital Branding — modern hospital building exterior India
  "hospital-branding-agency-india":
    "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Doctor Personal Branding — confident Indian male doctor portrait
  "doctor-personal-branding-india":
    "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Clinic Branding — well-lit modern clinic reception interior
  "clinic-branding-services-india":
    "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Medical Graphic Design — stethoscope and design concept
  "medical-graphic-design-services":
    "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ── WEBSITE DEVELOPMENT ────────────────────────────────────────────────────

  // Hospital Website — doctor working on desktop computer
  "hospital-website-development-india":
    "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Clinic Website — Indian doctor using a tablet device
  "clinic-website-development-india":
    "https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Healthcare Landing Page — medical appointment booking UI mockup on laptop
  "healthcare-landing-page-design":
    "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ── SOFTWARE SOLUTIONS ─────────────────────────────────────────────────────

  // Hospital Management Software — hospital admin at computer workstation
  "hospital-management-software-india":
    "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Clinic Management Software — clinic receptionist managing records
  "clinic-management-software-india":
    "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600",

  // EMR / EHR Software — electronic health records on digital tablet
  "emr-ehr-software-india":
    "https://images.pexels.com/photos/7578808/pexels-photo-7578808.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Healthcare CRM — CRM dashboard analytics on monitor
  "healthcare-crm-software-india":
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Healthcare Mobile App — Indian patient using health app on smartphone
  "healthcare-mobile-app-development-india":
    "https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Patient Portal — patient booking appointment on laptop
  "patient-portal-software-india":
    "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ── AI & AUTOMATION ────────────────────────────────────────────────────────

  // AI Chatbot — AI robot and digital chat interface
  "ai-chatbot-for-hospitals-india":
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",

  // WhatsApp Automation — WhatsApp chat notification on phone
  "whatsapp-automation-for-clinics-india":
    "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Voice AI — doctor using voice assistant microphone
  "voice-ai-for-healthcare-india":
    "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600",

  // CRM Automation — business automation workflow on screen
  "crm-automation-hospitals-india":
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Lead Automation — marketing funnel analytics presentation
  "lead-automation-healthcare-india":
    "https://images.pexels.com/photos/7947668/pexels-photo-7947668.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ── HOSPITAL GROWTH CONSULTING ─────────────────────────────────────────────

  // Growth Consulting — business strategy meeting with whiteboard
  "hospital-growth-consulting-india":
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ── COMPLIANCE & ACCREDITATION ─────────────────────────────────────────────

  // NABH / NABL Consultant — hospital quality audit clipboard inspection
  "nabh-nabl-consultant-india":
    "https://images.pexels.com/photos/7089609/pexels-photo-7089609.jpeg?auto=compress&cs=tinysrgb&w=600",

  // Hospital Staff Training — medical team in training session
  "hospital-staff-training-india":
    "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const getCardImage = (service) =>
  categoryImageMap[service.slug] ||
  "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600";

const Services = () => {
  const containerRef = useRef(null);
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const activeCategory = categorySlug || "all";
  const [visibleCount, setVisibleCount] = useState(16);
  const PAGE_SIZE = 16;

  const activePillar = solutionPillars.find((p) => p.id === activeCategory);

  useLayoutEffect(() => {
    // Lenis Smooth Scrolling Engine
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    // Setup GSAP Animations
    const ctx = setupServicesOverviewAnimations(containerRef);

    // Refresh ScrollTrigger after render
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(refreshTimer);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeCategory]);

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  const visibleServices = filteredServices.slice(0, visibleCount);
  const hasMore = visibleCount < filteredServices.length;
  const hasLess = visibleCount > PAGE_SIZE;

  const handleCategoryChange = (cat) => {
    setVisibleCount(PAGE_SIZE);
    if (cat === "all") {
      navigate("/services");
    } else {
      navigate(`/services/category/${cat}`);
    }
  };

  // DEDICATED CATEGORY SINGLE PAGE VIEW (3 Sections: Section 1 Hero with Image Right, Section 2 Services Grid, Section 3 Footer)
  if (categorySlug && activePillar) {
    const categoryHeroImg = heroImageMap[activeCategory] || digitalMarketingHeroImg;

    return (
      <div
        ref={containerRef}
        className="relative isolate min-h-screen bg-[#050505] text-white font-koho px-4 sm:px-8 lg:px-12 overflow-hidden"
      >
        {/* Background Radial Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(34,197,94,0.14),transparent_38%)]" />
        <div className="pointer-events-none absolute left-[-12%] top-[5%] h-[35rem] w-[35rem] rounded-full bg-emerald-500/20 blur-[160px]" />
        <div className="pointer-events-none absolute right-[-10%] bottom-[10%] h-[38rem] w-[38rem] rounded-full bg-emerald-400/15 blur-[170px]" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-20">

          {/* ── SECTION 1: HERO (Title & Subtitle on Left, Related Image on Right) ── */}
          <section className="min-h-[calc(100vh-60px)] pt-32 pb-10 flex flex-col justify-between">
            <div className="my-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                {/* Left Column: Title & Subtitle */}
                <div className="space-y-6 text-left items-start">
                  <div className="services-hero-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-950/70 text-emerald-400 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(34,197,94,0.25)]">
                    <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
                    <span>{activePillar.name} Solutions</span>
                  </div>

                  <h1 className="services-hero-title font-text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-7xl text-white">
                    {activePillar.name} Solutions for{" "}
                    <span className="text-[#22c55e]">Healthcare</span>
                  </h1>

                  <p className="services-hero-desc text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-normal">
                    {activePillar.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3.5 rounded-full border border-emerald-500/40 bg-[#22c55e] px-8 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-[#050505] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(34,197,94,0.24)] transition duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.35)]"
                    >
                      <span>Enquire for This Solution</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                      href="#category-services-section"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-gray-200 backdrop-blur-md transition duration-300 hover:border-emerald-500/40 hover:text-white"
                    >
                      Explore Services
                    </a>
                  </div>
                </div>

                {/* Right Column: Image Related to Title */}
                <div className="services-hero-visual relative min-h-[26rem] sm:min-h-[30rem] lg:min-h-[34rem] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-3xl bg-emerald-500/10 blur-2xl pointer-events-none" />
                  <div
                    className="relative w-full h-full min-h-[24rem] sm:min-h-[28rem] overflow-hidden rounded-3xl group"
                    style={{
                      border: "1.5px solid rgba(34, 197, 94, 0.55)",
                      boxShadow: "0 0 0 1px rgba(34,197,94,0.12), 0 0 28px 4px rgba(34,197,94,0.28), 0 0 60px 8px rgba(34,197,94,0.14), 0 24px 64px rgba(0,0,0,0.7)",
                    }}
                  >
                    <img
                      src={categoryHeroImg}
                      alt={`${activePillar.name} Healthcare Solution`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                      style={{ filter: "brightness(0.9) saturate(0.9)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-6 pb-2 text-center animate-bounce">
              <a href="#category-services-section" className="text-emerald-400 hover:text-emerald-300 transition inline-flex items-center gap-1.5 text-xs uppercase tracking-widest">
                <span>Scroll to Services</span>
                <ChevronRight className="w-4 h-4 rotate-90" />
              </a>
            </div>
          </section>

          {/* ── SECTION 2: SERVICES (Title Services & List of Services Cards Down Below) ── */}
          <section id="category-services-section" className="pt-4 pb-16 space-y-10">
            <div className="space-y-3 text-left">
              <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Specialized Capabilities</span>
              <h2 className="font-belleza text-4xl font-semibold sm:text-6xl text-white">
                {activePillar.name} Services
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl font-normal">
                Explore our specialized {activePillar.name.toLowerCase()} services engineered exclusively for healthcare brands.
              </p>
            </div>

            {/* SERVICES CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
              {filteredServices.map((service) => {
                const ServiceIcon = iconMap[service.category] || TrendingUp;
                return (
                  <div
                    key={service.id}
                    className="service-card-item group relative rounded-2xl overflow-hidden bg-[#0a0f0b] border border-white/8 hover:border-emerald-500/50 transition-colors duration-200 hover:shadow-[0_8px_40px_rgba(34,197,94,0.2)] cursor-pointer flex flex-col"
                    style={{ minHeight: "340px" }}
                  >
                    <div className="relative flex-shrink-0 overflow-hidden" style={{ height: "210px" }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0b] via-[#0a0f0b]/30 to-transparent" />

                      <div className="absolute top-3 left-3 z-20">
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full bg-black/70 border border-emerald-500/40 text-emerald-400 backdrop-blur-sm">
                          <ServiceIcon className="w-3 h-3" />
                          {service.categoryName}
                        </span>
                      </div>
                    </div>

                    <div className="relative flex flex-col flex-1 px-4 pt-3 pb-4">
                      <h3 className="font-belleza text-base sm:text-lg leading-snug text-white group-hover:text-emerald-400 transition-colors duration-200 line-clamp-2 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-[10px] text-emerald-300/70 italic font-medium line-clamp-1 border-l-2 border-emerald-500/50 pl-2 mb-3">
                        {service.heroSubtitle}
                      </p>

                      <div className="overflow-hidden transition-all duration-300 ease-out max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                        <p className="text-xs text-gray-300 leading-relaxed line-clamp-3 mb-3">
                          {service.heroDescription}
                        </p>
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 hover:text-white hover:bg-emerald-500 px-3 py-1.5 rounded-full border border-emerald-500/40 hover:border-emerald-500 transition-all duration-200"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="mt-auto flex items-center justify-end group-hover:opacity-0 transition-opacity duration-200">
                        <div className="w-7 h-7 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── SECTION 3: FOOTER is automatically rendered at the bottom via App.jsx ── */}

        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative isolate min-h-screen bg-[#050505] text-white font-koho px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(34,197,94,0.14),transparent_38%)]" />
      <div className="pointer-events-none absolute left-[-12%] top-[5%] h-[35rem] w-[35rem] rounded-full bg-emerald-500/20 blur-[160px]" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[10%] h-[38rem] w-[38rem] rounded-full bg-emerald-400/15 blur-[170px]" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-20">

        {/* HERO SECTION - 2-Column Split: Title & Paragraph on Left, Image Space on Right */}
        <section className="min-h-[calc(100vh-60px)] pt-32 pb-10 flex flex-col justify-between">

          <div className="my-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

              {/* Left Column: Title, Badge, Description, and Pillars */}
              <div className="space-y-6 text-left items-start">

                {/* Badge */}
                <div className="services-hero-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-950/70 text-emerald-400 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(34,197,94,0.25)]">
                  <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
                  <span>{activePillar ? `${activePillar.name} Solutions` : "Healthcare Growth Solutions"}</span>
                </div>

                {/* Heading */}
                <h1 className="services-hero-title font-text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-7xl text-white">
                  {activePillar ? (
                    <>
                      {activePillar.name} Solutions for{" "}
                      <span className="text-[#22c55e]">Healthcare</span>
                    </>
                  ) : (
                    <>
                      Every Solution a Brand Needs to{" "}
                      <span className="text-[#22c55e]">Grow</span>
                    </>
                  )}
                </h1>

                {/* Lead Description */}
                <p className="services-hero-desc text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-normal">
                  {activePillar
                    ? activePillar.description
                    : "MedGrowDigi's Solutions hub is organised around the real questions hospital administrators, doctors and clinic owners ask us every week. Each solution can be engaged independently or combined into a single growth roadmap — built around your specialty, your city, and your current stage of growth."}
                </p>

                {/* Quick Pillars Pills Bar */}
                <div className="pt-2 flex flex-wrap items-center justify-start gap-3">
                  {solutionPillars.map((pillar) => {
                    const PillarIcon = iconMap[pillar.id] || Zap;
                    const isPillarActive = activeCategory === pillar.id;
                    return (
                      <button
                        key={pillar.id}
                        onClick={() => handleCategoryChange(pillar.id)}
                        className={`services-hero-pillars px-4 py-2 rounded-full text-sm sm:text-base font-medium flex items-center gap-2 backdrop-blur-md transition duration-300 cursor-pointer ${isPillarActive
                          ? "border border-emerald-500 bg-emerald-500/20 text-emerald-300 font-semibold"
                          : "border border-white/15 bg-white/5 text-gray-200 hover:border-emerald-500/40 hover:text-emerald-300"
                          }`}
                      >
                        <PillarIcon className="w-4 h-4 text-emerald-400" />
                        <span>{pillar.name}</span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Right Column: Doctor image blended with dark UI */}
              <div
                className="services-hero-visual relative min-h-[26rem] sm:min-h-[30rem] lg:min-h-[34rem] flex items-center justify-center"
                style={{ animation: "services-float 5s ease-in-out infinite" }}
              >
                {/* Outer glow halo behind the card */}
                <div className="absolute inset-0 rounded-3xl bg-emerald-500/10 blur-2xl pointer-events-none" />

                {/* Main image card with emerald glowing border */}
                <div
                  className="relative w-full h-full min-h-[24rem] sm:min-h-[28rem] overflow-hidden rounded-3xl group"
                  style={{
                    border: "1.5px solid rgba(34, 197, 94, 0.55)",
                    boxShadow: "0 0 0 1px rgba(34,197,94,0.12), 0 0 28px 4px rgba(34,197,94,0.28), 0 0 60px 8px rgba(34,197,94,0.14), 0 24px 64px rgba(0,0,0,0.7)",
                  }}
                >
                  <img
                    src={servicesDoctorImg}
                    alt="Doctor and healthcare growth consultant reviewing digital solutions"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                    style={{ filter: "brightness(0.88) saturate(0.85)" }}
                  />

                  {/* Multi-layer dark blending to integrate with dark bg */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-[#050505]/20" />
                  {/* Emerald tint overlay for cohesion */}
                  <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color" />

                  {/* Animated emerald border pulse ring */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 20px 2px rgba(34,197,94,0.12)",
                      animation: "services-glow-pulse 3s ease-in-out infinite",
                    }}
                  />
                </div>

                {/* Bottom-left corner glow accent */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                {/* Top-right corner glow accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400/15 rounded-full blur-2xl pointer-events-none" />
              </div>

            </div>
          </div>

          {/* Down Indicator */}
          <div className="pt-6 pb-2 text-center animate-bounce">
            <a href="#category-tabs" className="text-emerald-400 hover:text-emerald-300 transition inline-flex items-center gap-1.5 text-xs uppercase tracking-widest">
              <span>Scroll to Filter Solutions</span>
              <ChevronRight className="w-4 h-4 rotate-90" />
            </a>
          </div>

        </section>

        {/* CATEGORY FILTER TABS */}
        <div id="category-tabs" className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-7 border-y border-white/10 backdrop-blur-xl bg-white/[0.01]">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${activeCategory === "all"
              ? "bg-[#22c55e] text-[#050505] shadow-[0_0_25px_rgba(34,197,94,0.4)] scale-105"
              : "border border-white/15 bg-white/5 text-gray-200 hover:border-emerald-500/40 hover:text-white"
              }`}
          >
            All Solutions ({servicesData.length})
          </button>
          {solutionPillars.map((pillar) => {
            const PillarIcon = iconMap[pillar.id] || Zap;
            const count = servicesData.filter((s) => s.category === pillar.id).length;
            const isActive = activeCategory === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => handleCategoryChange(pillar.id)}
                className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 flex items-center gap-3 cursor-pointer ${isActive
                  ? "bg-[#22c55e] text-[#050505] font-semibold tracking-[0.1em] shadow-[0_0_25px_rgba(34,197,94,0.4)] scale-105"
                  : "border border-white/15 bg-white/5 text-gray-200 hover:border-emerald-500/40 hover:text-white"
                  }`}
              >
                <PillarIcon className={`w-5 h-5 ${isActive ? "text-[#050505]" : "text-emerald-400"}`} />
                <span>{pillar.name}</span>
                <span className={`text-sm px-2.5 py-0.5 rounded-full font-mono ${isActive ? "bg-black/20 text-[#050505]" : "bg-white/10 text-emerald-300"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* SERVICES CARDS GRID — Image-first 4×4 responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {visibleServices.map((service) => {
            const ServiceIcon = iconMap[service.category] || TrendingUp;
            return (
              <div
                key={service.id}
                className="service-card-item group relative rounded-2xl overflow-hidden bg-[#0a0f0b] border border-white/8 hover:border-emerald-500/50 transition-colors duration-200 hover:shadow-[0_8px_40px_rgba(34,197,94,0.2)] cursor-pointer flex flex-col"
                style={{ minHeight: "340px" }}
              >
                {/* ── IMAGE SECTION (top 60%) ── */}
                <div className="relative flex-shrink-0 overflow-hidden" style={{ height: "210px" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600";
                    }}
                  />
                  {/* Dark gradient overlay so title is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0b] via-[#0a0f0b]/30 to-transparent" />

                  {/* Category pill — top-left */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full bg-black/70 border border-emerald-500/40 text-emerald-400 backdrop-blur-sm">
                      <ServiceIcon className="w-3 h-3" />
                      {service.categoryName}
                    </span>
                  </div>
                </div>

                {/* ── CONTENT SECTION (bottom) ── */}
                <div className="relative flex flex-col flex-1 px-4 pt-3 pb-4">

                  {/* Title — always visible */}
                  <h3 className="font-belleza text-base sm:text-lg leading-snug text-white group-hover:text-emerald-400 transition-colors duration-200 line-clamp-2 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[10px] text-emerald-300/70 italic font-medium line-clamp-1 border-l-2 border-emerald-500/50 pl-2 mb-3">
                    {service.heroSubtitle}
                  </p>

                  {/* Hover-reveal panel — description + link */}
                  <div className="overflow-hidden transition-all duration-300 ease-out max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-3 mb-3">
                      {service.heroDescription}
                    </p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 hover:text-white hover:bg-emerald-500 px-3 py-1.5 rounded-full border border-emerald-500/40 hover:border-emerald-500 transition-all duration-200"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Arrow hint — visible when not hovered */}
                  <div className="mt-auto flex items-center justify-end group-hover:opacity-0 transition-opacity duration-200">
                    <div className="w-7 h-7 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LOAD MORE / LOAD LESS BUTTONS */}
        {(hasMore || hasLess) && (
          <div className="flex flex-wrap justify-center gap-4 pt-4 pb-2">
            {hasLess && (
              <button
                onClick={() => setVisibleCount((prev) => Math.max(PAGE_SIZE, prev - PAGE_SIZE))}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 bg-white/5 text-gray-300 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 rotate-[-90deg]" />
                <span>Load Less</span>
              </button>
            )}
            {hasMore && (
              <button
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-emerald-500/40 bg-emerald-950/50 text-emerald-300 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-black hover:border-emerald-500 hover:shadow-[0_0_28px_rgba(34,197,94,0.35)] transition-all duration-300 cursor-pointer"
              >
                <span>Load More</span>
                <span className="text-xs opacity-70">({filteredServices.length - visibleCount} remaining)</span>
                <ChevronRight className="w-4 h-4 rotate-90" />
              </button>
            )}
          </div>
        )}

        {/* HOW THIS DIFFERS BY SETTING SECTION */}
        <div className="relative isolate overflow-hidden bg-white text-[#10261c] border border-emerald-950/10 rounded-3xl p-9 sm:p-12 lg:p-16 shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
          {/* Ambient glow blobs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-lime-100 blur-3xl" />

          {/* ── Centered header ── */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-emerald-700">
              Setting Alignment
            </p>
            <h2 className="font-belleza text-4xl sm:text-5xl lg:text-6xl text-[#10261c] leading-tight">
              The Right Starting Point for Every Healthcare Setting
            </h2>
            <p className="text-base sm:text-lg text-[#496157] leading-relaxed">
              Each solution can be engaged independently or combined into a single growth roadmap — built around your specialty, your city, and your stage of growth.
            </p>
          </div>

          {/* ── Two-column body ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center relative z-10">

            {/* LEFT — image visual */}
            <div className="relative">
              {/* Glow halo */}
              <div className="absolute inset-0 rounded-2xl bg-emerald-300/30 blur-2xl pointer-events-none" />

              <div
                className="relative overflow-hidden rounded-2xl border border-emerald-500/25 shadow-[0_18px_45px_rgba(16,38,28,0.12)]"
              >
                <img
                  src={servicesDoctorImg}
                  alt="Healthcare growth consultation"
                  className="w-full h-[22rem] sm:h-[26rem] lg:h-[30rem] object-cover object-center"
                  style={{ filter: "brightness(0.95) saturate(0.95)" }}
                />
                {/* Light blending overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/20" />
                <div className="absolute inset-0 bg-emerald-900/5 mix-blend-color" />
              </div>

              {/* Corner glow accents */}
              <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-emerald-200/40 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* RIGHT — vertical timeline steps */}
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-emerald-500/80 via-emerald-400/40 to-emerald-200/20 pointer-events-none" />

              {/* Step 1 */}
              <div className="relative flex gap-6 pb-10 group">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-[0_4px_14px_rgba(34,197,94,0.35)] mt-0.5">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-700">Solo Doctors</p>
                  <h3 className="font-belleza text-2xl sm:text-3xl text-[#10261c] leading-snug group-hover:text-emerald-600 transition duration-300">
                    Personal Brand + Local SEO + Clinic Website
                  </h3>
                  <p className="text-sm sm:text-base text-[#496157] leading-relaxed max-w-lg">
                    Establish immediate authority and patient search visibility — a foundational stack that pays back fast and scales with your reputation.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6 pb-10 group">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center mt-0.5 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 group-hover:shadow-[0_4px_14px_rgba(34,197,94,0.35)] transition-all duration-300">
                  <UserCheck className="w-5 h-5 transition duration-300" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-700">Clinics &amp; Chains</p>
                  <h3 className="font-belleza text-2xl sm:text-3xl text-[#10261c] leading-snug group-hover:text-emerald-600 transition duration-300">
                    Ads + CRM + WhatsApp Automation
                  </h3>
                  <p className="text-sm sm:text-base text-[#496157] leading-relaxed max-w-lg">
                    Rapid, predictable appointment generation — Google &amp; Meta Ads combined with a healthcare CRM and WhatsApp flows that convert and retain patients.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6 group">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center mt-0.5 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 group-hover:shadow-[0_4px_14px_rgba(34,197,94,0.35)] transition-all duration-300">
                  <Building className="w-5 h-5 transition duration-300" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-700">Multi-Specialty Hospitals</p>
                  <h3 className="font-belleza text-2xl sm:text-3xl text-[#10261c] leading-snug group-hover:text-emerald-600 transition duration-300">
                    Market Research + SEO Silos + Mediqora HMS
                  </h3>
                  <p className="text-sm sm:text-base text-[#496157] leading-relaxed max-w-lg">
                    Un-silo your growth engine — department-wise SEO, a hospital management system, and market research working as one coordinated strategy.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CALL TO ACTION BANNER — 3D Section Breakout Mobile Mockup Design */}
        <div className="relative isolate bg-[#070e09] border border-emerald-500/25 rounded-[2.5rem] px-4 py-8 sm:px-7 sm:py-12 lg:px-9 lg:py-16 text-white overflow-visible my-16 lg:my-28">

          {/* Inner Medium Dark-Emerald Card */}
          <div className="relative rounded-[2rem] bg-gradient-to-r from-[#06180e] via-[#0b2416] to-[#06180e] border border-emerald-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl">

            {/* Soft background glow highlight */}
            <div className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-emerald-500/18 blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

              {/* LEFT COLUMN: Text & Actions */}
              <div className="lg:col-span-7 space-y-6 text-left">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-[0.22em] shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>Healthcare Growth Hub</span>
                </div>

                {/* Main Heading */}
                <h2 className="font-belleza text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-white">
                  MedGrow, <span className="text-[#22c55e] italic font-serif font-normal">your partner</span> in healthcare growth.
                </h2>

                {/* Lead Description */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl font-normal">
                  Find and map your custom growth roadmap — specialty, city, and patient catchment solutions built into one connected healthcare engine.
                </p>

                {/* CTA Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#22c55e] px-8 py-4 text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-[#050505] shadow-[0_0_30px_rgba(34,197,94,0.4)] transition duration-300 hover:bg-emerald-400 hover:scale-105"
                  >
                    <span>Get Custom Solution Map</span>
                    <ChevronRight className="w-5 h-5 text-black" />
                  </Link>

                  <a
                    href="#category-tabs"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm sm:text-base font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition duration-300 hover:bg-white/20 hover:border-emerald-500/40"
                  >
                    <span>Explore Pillars</span>
                  </a>
                </div>

              </div>

              {/* RIGHT COLUMN: Mobile Phone Mockup POPPING OUT (Top & Bottom Breakout) */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-30 group">

                {/* Background glow halo circle behind phone */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/25 blur-3xl" />

                {/* Floating Pop-Out Badge 1 (Top Left outside phone) */}
                <div className="absolute -top-16 -left-4 sm:left-2 z-40 bg-[#09170e]/95 border border-emerald-500/50 px-3.5 py-2.5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl flex items-center gap-2.5 transition duration-300 group-hover:scale-105">
                  <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">Live Growth Engine</p>
                    <p className="text-[11px] font-bold text-white">+148% Patient Catchment</p>
                  </div>
                </div>

                {/* Floating Pop-Out Badge 2 (Bottom Right outside phone) */}
                <div className="absolute -bottom-14 -right-2 sm:right-2 z-40 bg-[#09170e]/95 border border-emerald-500/50 px-3.5 py-2.5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl flex items-center gap-2.5 transition duration-300 group-hover:scale-105">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">HMS Connected</p>
                    <p className="text-[11px] font-bold text-white">Mediqora HMS Active</p>
                  </div>
                </div>

                {/* 3D Phone Mockup Frame - Extending significantly above top and below bottom border lines */}
                <div className="relative z-30 w-[275px] sm:w-[295px] lg:-mt-36 lg:-mb-24 rounded-[44px] bg-black p-3.5 shadow-[25px_30px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(34,197,94,0.35)] border-4 border-emerald-500/50 transform lg:rotate-[-3deg] lg:group-hover:rotate-0 lg:group-hover:scale-105 transition-all duration-500 ease-out">

                  {/* Phone Screen Container - Dark Mode UI */}
                  <div className="rounded-[34px] bg-[#060c08] border border-emerald-500/20 text-white p-4 font-sans text-xs space-y-3 shadow-inner relative overflow-hidden">

                    {/* Dynamic Island / Notch */}
                    <div className="w-20 h-4 bg-[#020503] border border-emerald-500/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 opacity-80" />
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <p className="text-[10px] text-gray-400 font-medium">Hello</p>
                        <p className="text-sm font-bold text-white tracking-tight">Dr. Alicia Regis</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#22c55e] text-black font-bold flex items-center justify-center text-[10px] shadow-[0_0_14px_rgba(34,197,94,0.6)]">
                        AR
                      </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-1.5 pt-1 overflow-x-auto no-scrollbar">
                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-gray-300 text-[10px] font-medium">Beginner</span>
                      <span className="px-3 py-1 rounded-full bg-[#22c55e] text-black text-[10px] font-bold shadow-[0_0_10px_rgba(34,197,94,0.4)]">Growth Hub</span>
                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-gray-300 text-[10px] font-medium">Advanced</span>
                    </div>

                    {/* Featured Workouts / Solutions Card */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold text-gray-300 uppercase tracking-wider">Popular Workouts</span>
                        <span className="text-emerald-400 font-semibold">View All</span>
                      </div>

                      <div className="relative rounded-2xl overflow-hidden h-28 border border-white/15 shadow-sm group/card">
                        <img
                          src={servicesDoctorImg}
                          alt="Wellness Growth Workshops"
                          className="w-full h-full object-cover group-hover/card:scale-110 transition duration-700"
                          style={{ filter: "brightness(0.85)" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060c08] via-black/40 to-transparent" />

                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                          <div>
                            <p className="text-white text-xs font-bold leading-tight">Wellness Growth</p>
                            <p className="text-[9px] text-emerald-400 mt-0.5 font-medium">Workshops</p>
                            <div className="flex items-center gap-1 mt-1 text-[8px] text-gray-200">
                              <span className="bg-black/60 border border-white/10 backdrop-blur-md px-1.5 py-0.5 rounded-full">10 Min</span>
                              <span className="bg-black/60 border border-white/10 backdrop-blur-md px-1.5 py-0.5 rounded-full">300 Kcal</span>
                            </div>
                          </div>

                          <div className="w-6 h-6 rounded-full bg-[#22c55e] text-black flex items-center justify-center shadow-[0_0_12px_rgba(34,197,94,0.5)]">
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Today Plan Section */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Today Plan</p>

                      {/* Floating Bottom Nav Capsule Bar inside Phone */}
                      <div className="rounded-2xl bg-[#030905] border border-emerald-500/30 text-white p-2 flex items-center justify-around shadow-lg">
                        <div className="flex items-center gap-1.5 bg-[#22c55e] text-black px-3 py-1 rounded-full font-bold shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                          <Home className="w-3.5 h-3.5" />
                          <span className="text-[9px]">Home</span>
                        </div>
                        <Zap className="w-3.5 h-3.5 text-gray-400 hover:text-emerald-400 transition" />
                        <BarChart3 className="w-3.5 h-3.5 text-gray-400 hover:text-emerald-400 transition" />
                        <UserCheck className="w-3.5 h-3.5 text-gray-400 hover:text-emerald-400 transition" />
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Services;

// src/Pages/ServiceDetail.jsx
import React, { useRef, useLayoutEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
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
  XCircle,
  Clock,
  Zap,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { getServiceBySlug } from "../data/servicesData.js";
import { setupServiceDetailAnimations } from "../Animations.js";
import HealthcareSeoDetail from "../Components/HealthcareSeoDetail.jsx";

// Import theme-aligned hero images for each solution category
import digitalMarketingHeroImg from "../assets/images/digital-marketing-hero.jpg";
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

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const containerRef = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const service = getServiceBySlug(serviceSlug);

  useLayoutEffect(() => {
    if (service) {
      // Lenis Smooth Scroll Engine
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

      // GSAP Animations
      const ctx = setupServiceDetailAnimations(containerRef);

      // Refresh ScrollTrigger
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
    }
  }, [serviceSlug, service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  };

  const ServiceCategoryIcon = iconMap[service.category] || TrendingUp;
  const categoryHeroImg = heroImageMap[service.category] || digitalMarketingHeroImg;

  // Resolve related services
  const relatedServices = service.pairsWellWith
    ? service.pairsWellWith
      .map((slugOrId) => getServiceBySlug(slugOrId))
      .filter(Boolean)
    : [];

  if (service.slug === "healthcare-seo-services-india") {
    return <HealthcareSeoDetail service={service} relatedServices={relatedServices} />;
  }

  return (
    <div
      ref={containerRef}
      className="relative isolate min-h-screen bg-[#050505] text-white font-koho px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.18),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-[-5%] h-[35rem] w-[35rem] rounded-full bg-emerald-500/20 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">

        {/* HERO SECTION - 2-Column Split: Title & Paragraph on Left, Image Space on Right */}
        <section className="min-h-[calc(100vh-60px)] pt-32 pb-12 flex flex-col justify-between">

          <div className="my-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

              {/* Left Column: Breadcrumbs, Badge, Title, Subtitle, Description & CTAs */}
              <div className="space-y-6 text-left items-start">

                {/* Breadcrumb Header */}
                <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-300">
                  <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  <Link to="/services" className="hover:text-emerald-400 transition">Services</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-emerald-400 font-medium truncate">{service.title}</span>
                </nav>

                {/* Category Badge */}
                <div>
                  <span className="sd-hero-badge px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] inline-flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.25)]">
                    <ServiceCategoryIcon className="w-4 h-4" />
                    <span>{service.categoryName}</span>
                  </span>
                </div>

                {/* Title */}
                <h1 className="sd-hero-title font-cormorant text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl text-white">
                  {service.title}
                </h1>

                {/* Subtitle */}
                <p className="sd-hero-subtitle text-lg sm:text-xl text-emerald-300 font-medium italic border-l-4 border-emerald-500/70 pl-4 leading-relaxed">
                  "{service.heroSubtitle}"
                </p>

                {/* Description */}
                <p className="sd-hero-desc text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed font-normal">
                  {service.heroDescription}
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3.5 rounded-full border border-emerald-500/40 bg-[#22c55e] px-8 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-[#050505] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(34,197,94,0.24)] transition duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.35)]"
                  >
                    <span>Enquire for This Solution</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="#advantage-section"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-gray-200 backdrop-blur-md transition duration-300 hover:border-emerald-500/40 hover:text-white"
                  >
                    View Feature Scope
                  </a>
                </div>

              </div>

              {/* Right Column: Space reserved on the right for Image Visual */}
              <div className="sd-hero-visual relative min-h-[26rem] sm:min-h-[30rem] flex items-center justify-center">
                <div className="relative w-full h-full min-h-[24rem] sm:min-h-[28rem] overflow-hidden rounded-3xl border border-white/15 bg-[#0a0a0a] shadow-2xl group">
                  <img
                    src={categoryHeroImg}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />
                </div>
              </div>

            </div>
          </div>

          {/* Down Indicator */}
          <div className="pt-6 pb-2 text-center animate-bounce">
            <a href="#advantage-section" className="text-emerald-400 hover:text-emerald-300 transition inline-flex items-center gap-1.5 text-xs uppercase tracking-widest">
              <span>Scroll to Explore</span>
              <ChevronRight className="w-4 h-4 rotate-90" />
            </a>
          </div>

        </section>

        {/* ADVANTAGE & THEME VISUAL IMAGE SECTION */}
        <section id="advantage-section" className="pt-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Advantage Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Strategic Excellence</span>
              </div>

              <h2 className="font-cormorant text-3xl font-semibold sm:text-5xl text-white">
                The MedGrowDigi Advantage in {service.title}
              </h2>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-normal bg-gradient-to-r from-emerald-950/50 via-[#0d0d0d] to-black border-l-4 border-[#22c55e] rounded-r-3xl p-6 sm:p-8">
                {service.overviewText || service.heroDescription}
              </p>
            </div>

            {/* Right: Theme-Aligned 3D Visual Image */}
            <div className="lg:col-span-5 relative group">
              <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500/30 to-teal-500/20 blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-[#0a0a0a] shadow-2xl">
                <img
                  src={categoryHeroImg}
                  alt={`${service.title} Solution Visual`}
                  className="w-full h-auto max-h-[460px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              </div>
            </div>

          </div>
        </section>

        {/* BY THE NUMBERS */}
        {service.byTheNumbers && service.byTheNumbers.length > 0 && (
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">By The Numbers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {service.byTheNumbers.map((item, idx) => (
                <div
                  key={idx}
                  className="sd-stat-card bg-[#0d0d0d] border border-white/15 hover:border-emerald-500/40 rounded-2xl p-7 space-y-3 transition duration-300 shadow-xl"
                >
                  <div className="font-cormorant text-5xl sm:text-6xl text-[#22c55e]">
                    {item.stat}
                  </div>
                  <div className="text-lg sm:text-xl text-gray-200 font-medium leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-400 italic">
              Illustrative placeholders — performance benchmarks customized to specialty & city scale.
            </p>
          </div>
        )}

        {/* WHAT'S INCLUDED / CORE CAPABILITIES */}
        <div id="whats-included" className="space-y-9 pt-4">
          <div className="space-y-2.5">
            <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Comprehensive Scope</span>
            <h2 className="font-cormorant text-4xl font-semibold sm:text-6xl text-white">
              What Our {service.title} Covers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
            {service.whatsIncluded.map((feature, idx) => (
              <div
                key={idx}
                className="sd-feature-card bg-[#0d0d0d] border border-white/15 hover:border-emerald-500/50 rounded-2xl p-6 sm:p-7 flex items-start gap-4.5 transition duration-300 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0 text-base font-bold mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-normal">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON TABLE */}
        {service.howItCompares && (
          <div className="space-y-7 pt-4">
            <div className="space-y-2.5">
              <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Comparative Standard</span>
              <h2 className="font-cormorant text-4xl font-semibold sm:text-5xl text-white">
                {service.howItCompares.leftHeader} vs. {service.howItCompares.rightHeader}
              </h2>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-white/15 bg-[#0d0d0d] shadow-2xl">
              <table className="w-full text-left text-lg sm:text-xl">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-5 sm:p-7 text-gray-400 font-semibold w-1/2 uppercase tracking-wider text-sm sm:text-base">
                      {service.howItCompares.leftHeader}
                    </th>
                    <th className="p-5 sm:p-7 text-emerald-400 font-semibold w-1/2 uppercase tracking-wider text-sm sm:text-base">
                      {service.howItCompares.rightHeader}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {service.howItCompares.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="p-5 sm:p-7 text-gray-300 leading-relaxed flex items-start gap-3 font-normal">
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                        <span>{row.left}</span>
                      </td>
                      <td className="p-5 sm:p-7 text-gray-100 font-medium leading-relaxed bg-emerald-950/20">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                          <span>{row.right}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ILLUSTRATIVE SCENARIO */}
        {service.illustrativeScenario && (
          <div className="bg-[#0d0d0d] border border-white/15 rounded-3xl p-8 sm:p-12 space-y-7 shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-emerald-950 text-emerald-400 text-sm font-semibold uppercase tracking-wider">
                Case Scenario
              </span>
              <h3 className="font-cormorant text-3xl text-white">Real-World Engagement Pattern</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              <div className="space-y-3 bg-black/60 p-6 rounded-2xl border border-white/5">
                <span className="text-sm uppercase text-red-400 font-semibold tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4.5 h-4.5" /> Situation
                </span>
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal">
                  {service.illustrativeScenario.situation}
                </p>
              </div>

              <div className="space-y-3 bg-black/60 p-6 rounded-2xl border border-white/5">
                <span className="text-sm uppercase text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
                  <Zap className="w-4.5 h-4.5" /> What MedGrowDigi Did
                </span>
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal">
                  {service.illustrativeScenario.whatMedgrowDid}
                </p>
              </div>

              <div className="space-y-3 bg-black/60 p-6 rounded-2xl border border-white/5">
                <span className="text-sm uppercase text-teal-300 font-semibold tracking-wider flex items-center gap-2">
                  <TrendingUp className="w-4.5 h-4.5" /> Shape of Outcome
                </span>
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal">
                  {service.illustrativeScenario.outcome}
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 italic">
              Illustrative scenario based on common patterns seen across similar healthcare engagements.
            </p>
          </div>
        )}

        {/* ROLLOUT ROADMAP */}
        {service.rollout && service.rollout.length > 0 && (
          <div className="space-y-9 pt-4">
            <div className="space-y-2.5">
              <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Execution Timeline</span>
              <h2 className="font-cormorant text-4xl font-semibold sm:text-6xl text-white">
                How a {service.title} Rolls Out
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {service.rollout.map((step, idx) => (
                <div
                  key={idx}
                  className="sd-timeline-step bg-[#0d0d0d] border border-white/15 hover:border-emerald-500/40 rounded-2xl p-7 space-y-4 transition duration-300 shadow-xl"
                >
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-emerald-950 text-emerald-400 text-sm font-bold">
                    <Clock className="w-4 h-4" /> {step.stage}
                  </span>
                  <h3 className="font-cormorant text-2xl text-white">{step.name}</h3>
                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRICING SNAPSHOT / TIERS */}
        {service.pricingSnapshot && service.pricingSnapshot.tiers && (
          <div className="bg-gradient-to-b from-[#0d0d0d] to-[#121212] border border-white/15 rounded-3xl p-8 sm:p-12 space-y-7 shadow-2xl">
            <div className="space-y-2.5">
              <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Plan Tiers</span>
              <h2 className="font-cormorant text-4xl text-white">Pricing & Scalability Snapshot</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {service.pricingSnapshot.tiers.map((tier, idx) => (
                <div key={idx} className="bg-black/50 border border-white/10 rounded-2xl p-7 space-y-4">
                  <h3 className="font-cormorant text-3xl text-emerald-400">{tier.name}</h3>
                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal">{tier.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-400">
              Exact proposal structured around city competitiveness, specialty & target patient volume — shared after a discovery call.
            </p>
          </div>
        )}

        {/* IS THIS RIGHT FOR YOU? */}
        {service.isRightForYou && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-4">
            <div className="bg-[#0d0d0d] border border-emerald-500/40 rounded-3xl p-8 space-y-5 shadow-xl">
              <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-sm sm:text-base uppercase tracking-wider">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Likely a Strong Fit If:</span>
              </div>
              <ul className="space-y-4">
                {service.isRightForYou.fitIf.map((item, idx) => (
                  <li key={idx} className="text-lg sm:text-xl text-gray-200 flex items-start gap-3 font-normal leading-relaxed">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0d0d0d] border border-white/15 rounded-3xl p-8 space-y-5 shadow-xl">
              <div className="flex items-center gap-2.5 text-gray-400 font-semibold text-sm sm:text-base uppercase tracking-wider">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>May Not Be Right Starting Point If:</span>
              </div>
              <ul className="space-y-4">
                {service.isRightForYou.notFitIf.map((item, idx) => (
                  <li key={idx} className="text-lg sm:text-xl text-gray-300 flex items-start gap-3 font-normal leading-relaxed">
                    <span className="text-gray-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* MYTHS & MISTAKES */}
        {service.mythsAndMistakes && service.mythsAndMistakes.length > 0 && (
          <div className="space-y-7 pt-4">
            <div className="space-y-2.5">
              <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Common Misconceptions</span>
              <h2 className="font-cormorant text-4xl font-semibold sm:text-5xl text-white">
                Myths & Mistakes in {service.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {service.mythsAndMistakes.map((item, idx) => (
                <div key={idx} className="sd-myth-card bg-[#0d0d0d] border border-white/15 rounded-2xl p-7 space-y-4 shadow-xl">
                  <div className="text-sm uppercase tracking-wide text-red-400 font-semibold flex items-center gap-2.5">
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Myth:</span> {item.myth}
                  </div>
                  <div className="text-lg sm:text-xl text-gray-200 leading-relaxed pt-3 border-t border-white/5 font-normal">
                    <strong className="text-emerald-400 font-semibold">Reality: </strong>
                    {item.reality}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HOW THIS DIFFERS BY SETTING */}
        {service.differsBySetting && service.differsBySetting.length > 0 && (
          <div className="bg-[#0d0d0d] border border-white/15 rounded-3xl p-8 sm:p-10 space-y-7">
            <h3 className="font-cormorant text-3xl text-white">How This Solution Differs By Healthcare Setting</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {service.differsBySetting.map((diff, idx) => (
                <div key={idx} className="space-y-3 bg-black/60 p-6 rounded-xl border border-white/5">
                  <span className="text-base text-emerald-400 font-semibold">{diff.setting}</span>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">{diff.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IN PLAIN ENGLISH GLOSSARY */}
        {service.inPlainEnglish && (
          <div className="bg-emerald-950/50 border border-emerald-500/40 rounded-2xl p-7 space-y-3">
            <div className="flex items-center gap-2.5 text-sm uppercase font-bold text-emerald-400 tracking-wider">
              <Lightbulb className="w-5 h-5" />
              <span>In Plain English</span>
            </div>
            <h4 className="font-cormorant text-3xl text-white">{service.inPlainEnglish.term}</h4>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal">
              {service.inPlainEnglish.definition}
            </p>
          </div>
        )}

        {/* FREQUENTLY ASKED QUESTIONS - Sleek Animated Accordion */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-8 pt-4">
            <div className="space-y-2.5">
              <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Clear Answers</span>
              <h2 className="font-cormorant text-4xl font-semibold sm:text-6xl text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="about-faq-list">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`about-faq ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      aria-expanded={isOpen}
                      className="about-faq-trigger flex items-center justify-between gap-4"
                      onClick={() => toggleFaq(idx)}
                      type="button"
                    >
                      <span className="flex items-center gap-3.5 pr-2">
                        <span className="text-emerald-400 font-mono font-bold text-lg sm:text-xl">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xl sm:text-2xl font-medium text-white">{faq.question}</span>
                      </span>
                      <span className="about-faq-icon flex-shrink-0" aria-hidden="true" />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-7 text-lg sm:text-xl text-gray-200 leading-relaxed border-t border-white/5 pt-5 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PAIRS WELL WITH */}
        {relatedServices.length > 0 && (
          <div className="space-y-7 pt-4">
            <div className="space-y-1.5">
              <span className="text-sm uppercase text-emerald-400 font-semibold tracking-wider">Synergistic Solutions</span>
              <h3 className="font-cormorant text-3xl sm:text-4xl text-white">Pairs Well With</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="group bg-[#0d0d0d] border border-white/15 hover:border-emerald-500/50 rounded-2xl p-6 space-y-4 transition duration-300 block shadow-md"
                >
                  <span className="text-sm text-emerald-400 font-semibold uppercase">{rel.categoryName}</span>
                  <h4 className="font-cormorant text-2xl text-white group-hover:text-emerald-400 transition">
                    {rel.title}
                  </h4>
                  <p className="text-base sm:text-lg text-gray-300 line-clamp-2 leading-relaxed">
                    {rel.heroSubtitle}
                  </p>
                  <div className="text-sm text-emerald-400 font-medium group-hover:translate-x-1 transition inline-flex items-center gap-1.5">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CALL TO ACTION */}
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-emerald-950 via-[#0a0a0a] to-teal-950 border border-emerald-500/40 rounded-3xl p-10 sm:p-16 lg:p-20 text-center space-y-7 shadow-2xl">
          <h2 className="font-cormorant text-4xl font-semibold leading-tight sm:text-6xl text-white max-w-4xl mx-auto">
            {service.cta.title}
          </h2>

          <p className="text-xl sm:text-2xl max-w-3xl mx-auto font-normal text-gray-200 leading-relaxed">
            {service.cta.subtitle}
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3.5 rounded-full border border-emerald-500/40 bg-[#22c55e] px-9 py-4.5 text-base sm:text-lg font-semibold uppercase tracking-[0.2em] text-[#050505] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(34,197,94,0.24)] transition duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.35)]"
            >
              <span>{service.cta.buttonText}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;

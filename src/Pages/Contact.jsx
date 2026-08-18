// src/Pages/Contact.jsx
import React, { useLayoutEffect, useState } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Send,
  CheckCircle2,
  PhoneCall,
  Mail,
  Globe,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import aboutHeroDashboard from "../assets/images/about-hero-dashboard.jpg";
import laptopImage from "../assets/images/laptop.png";
import ourMissionHero from "../assets/images/our-mission-hero.jpg";
import { setupContactPageAnimations } from "../Animations";

const contactRoutes = [
  [
    "01",
    "Book a Strategy Call",
    "Share your speciality, city, current patient flow, and the growth target you want to hit.",
  ],
  [
    "02",
    "Get a Growth Audit",
    "We review website, ads, SEO, software gaps, and patient journey friction before suggesting the next move.",
  ],
  [
    "03",
    "Start the 90-Day Sprint",
    "A clear roadmap connects marketing, branding, automation, and front-desk operations into one workflow.",
  ],
];

const contactDetails = [
  ["Email", "hello@medgrowdigi.com", "mailto:hello@medgrowdigi.com"],
  ["Website", "www.medgrowdigi.com", "https://www.medgrowdigi.com"],
  ["Service Area", "Healthcare brands across India", "#contact-form"],
  ["Response Window", "Within one business day", "#contact-form"],
];

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useLayoutEffect(() => {
    ScrollTrigger.clearScrollMemory();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    document.title = "Contact MedGrowDigi | Healthcare Growth Consultation";

    let description = document.querySelector("meta[name='description']");
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute(
      "content",
      "Contact MedGrowDigi to discuss healthcare digital marketing, branding, software, automation, and hospital growth consulting."
    );

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

    const ctx = setupContactPageAnimations();
    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 250);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(refreshTimer);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => ScrollTrigger.refresh(), 150);
    }, 1000);
  };

  return (
    <main className="contact-page relative isolate overflow-hidden bg-[#050505] text-white font-koho px-4 sm:px-8 lg:px-12">
      {/* Background Glow Overlay */}
      <div className="contact-grid pointer-events-none fixed inset-0 z-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_88%_16%,rgba(14,165,233,0.14),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.12),transparent_38%)]" />

      {/* HERO SECTION */}
      <section className="contact-hero relative z-10 min-h-screen pt-36 pb-20">
        <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          
          <div className="contact-hero-copy space-y-7">
            <div className="contact-kicker inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-emerald-500/40 bg-emerald-950/70 text-emerald-400 text-sm font-semibold uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(34,197,94,0.2)]">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Healthcare Growth Consultation</span>
            </div>

            <h1 className="contact-title font-belleza max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl text-white">
              Let&apos;s Map Your Healthcare Growth System.
            </h1>

            <p className="contact-lead text-xl sm:text-2xl text-gray-200 leading-relaxed font-normal max-w-2xl">
              Tell us where your hospital, clinic, or healthcare brand is today. We will help you identify the highest-leverage path across marketing, website, software, and operations.
            </p>

            <div className="contact-hero-actions pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3.5 rounded-full border border-emerald-500/40 bg-[#22c55e] px-9 py-4.5 text-base sm:text-lg font-semibold uppercase tracking-[0.2em] text-[#050505] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(34,197,94,0.24)] transition duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.35)]"
              >
                <span>Start Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@medgrowdigi.com"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base sm:text-lg font-semibold uppercase tracking-[0.18em] text-gray-200 backdrop-blur-md transition duration-300 hover:border-emerald-500/40 hover:text-white"
              >
                Email Strategy Team
              </a>
            </div>
          </div>

          {/* HERO VISUAL STAGE */}
          <div className="contact-visual contact-reveal relative min-h-[35rem] flex items-center justify-center">
            <div className="contact-orbit contact-orbit-a absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-emerald-500/20 rounded-full pointer-events-none" />
            <div className="contact-orbit contact-orbit-b absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] border border-white/10 rounded-full pointer-events-none" />
            
            {/* Main 3D Dashboard Image Card */}
            <div className="contact-dashboard contact-image-wrap absolute left-0 top-2 h-[20rem] sm:h-[22rem] w-[78%] overflow-hidden rounded-3xl border border-white/15 bg-[#0a0a0a] shadow-2xl group">
              <img
                src={aboutHeroDashboard}
                alt="Healthcare Growth Command Dashboard"
                className="h-full w-full object-cover opacity-95 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />
            </div>

            {/* Overlaid Growth Desk Card */}
            <div className="contact-phone-card absolute bottom-2 right-0 w-[82%] rounded-3xl border border-emerald-500/30 bg-black/90 p-6 shadow-2xl backdrop-blur-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">Growth Desk Response</p>
                </div>
                <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(34,197,94,0.9)] animate-ping" />
              </div>

              <div className="space-y-3.5">
                {contactRoutes.map(([number, title, copy]) => (
                  <div className="contact-mini-step flex items-start gap-4" key={title}>
                    <span className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {number}
                    </span>
                    <div className="space-y-0.5">
                      <p className="text-base font-semibold text-white">{title}</p>
                      <p className="text-sm text-gray-300 font-normal leading-relaxed">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT FLOW ROADMAP */}
      <section className="relative z-10 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="contact-reveal lg:sticky lg:top-32 space-y-4">
            <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Contact Flow</span>
            <h2 className="font-belleza text-4xl sm:text-6xl font-semibold leading-tight text-white">
              Clear answers before any proposal.
            </h2>
            <p className="text-xl sm:text-2xl text-gray-200 font-normal leading-relaxed">
              The first conversation is built to understand your current patient acquisition system, not to push a generic package.
            </p>
          </div>

          <div className="contact-flow relative space-y-8">
            <div className="contact-route-line absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500 opacity-50" />
            {contactRoutes.map(([number, title, copy]) => (
              <article
                className="contact-flow-step contact-reveal bg-[#0d0d0d] border border-white/15 hover:border-emerald-500/50 rounded-3xl p-8 flex items-start gap-6 transition duration-300 shadow-xl"
                key={title}
              >
                <span className="contact-flow-index w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-mono font-bold text-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  {number}
                </span>
                <div className="space-y-2">
                  <h3 className="font-belleza text-3xl text-white">{title}</h3>
                  <p className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE FORM SECTION */}
      <section className="relative z-10 py-24" id="contact-form">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="contact-reveal text-center max-w-3xl mx-auto space-y-4">
            <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Start Here</span>
            <h2 className="font-belleza text-4xl sm:text-6xl font-semibold text-white">
              Tell us what your healthcare brand needs next.
            </h2>
            <p className="text-xl sm:text-2xl text-gray-200 font-normal leading-relaxed">
              Share a few details and our team will map the right path across marketing, branding, software, or consulting.
            </p>
          </div>

          {/* Form Container */}
          <div className="contact-form-shell contact-reveal rounded-3xl border border-white/15 bg-[#0d0d0d] p-7 sm:p-10 backdrop-blur-2xl shadow-2xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-6 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-belleza text-3xl sm:text-4xl text-white">Strategy Request Received!</h3>
                <p className="text-xl text-gray-200 max-w-xl mx-auto font-normal leading-relaxed">
                  Thank you for reaching out to MedGrowDigi. Our healthcare growth strategists will review your request and get back to you within one business day.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-7 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-base hover:bg-emerald-500 hover:text-black transition duration-300"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-base sm:text-lg font-semibold text-gray-200 block">
                      Doctor / Practice Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Dr. Aravind / City Heart Care Hospital"
                      className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15 text-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-base sm:text-lg font-semibold text-gray-200 block">
                      Contact Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15 text-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-base sm:text-lg font-semibold text-gray-200 block">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="doctor@hospital.com"
                      className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15 text-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition duration-300"
                    />
                  </div>

                  {/* Healthcare Category */}
                  <div className="space-y-2">
                    <label className="text-base sm:text-lg font-semibold text-gray-200 block">
                      Healthcare Category *
                    </label>
                    <select
                      required
                      name="type"
                      defaultValue=""
                      className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15 text-lg text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition duration-300"
                    >
                      <option value="" disabled className="bg-black text-gray-400">Select category</option>
                      <option className="bg-black text-white">Doctor / Individual Practitioner</option>
                      <option className="bg-black text-white">Clinic / Multispecialty Clinic</option>
                      <option className="bg-black text-white">Hospital / Super Speciality</option>
                      <option className="bg-black text-white">Diagnostic Centre / Pathology Lab</option>
                      <option className="bg-black text-white">Healthcare Support / MedTech Brand</option>
                    </select>
                  </div>

                  {/* Primary Focus Need */}
                  <div className="space-y-2">
                    <label className="text-base sm:text-lg font-semibold text-gray-200 block">
                      Primary Focus Area *
                    </label>
                    <select
                      required
                      name="need"
                      defaultValue=""
                      className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15 text-lg text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition duration-300"
                    >
                      <option value="" disabled className="bg-black text-gray-400">Select focus</option>
                      <option className="bg-black text-white">Digital Marketing (SEO & Ads)</option>
                      <option className="bg-black text-white">Hospital & Doctor Branding</option>
                      <option className="bg-black text-white">Website & Landing Page Development</option>
                      <option className="bg-black text-white">Mediqora Hospital Software (HMS)</option>
                      <option className="bg-black text-white">AI Chatbots & WhatsApp Automation</option>
                      <option className="bg-black text-white">Hospital Growth Consulting</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-base sm:text-lg font-semibold text-gray-200 block">
                      Message & Practice Details
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell us about your current challenges, target patient volume, city, and goals..."
                      className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15 text-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition duration-300"
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#22c55e] px-8 py-5 text-base sm:text-lg font-semibold uppercase tracking-[0.2em] text-[#050505] shadow-[0_0_25px_rgba(34,197,94,0.3)] transition duration-300 hover:scale-[1.01] hover:bg-emerald-400 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Strategy Request...</span>
                  ) : (
                    <>
                      <span>Request Strategy Call</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* COVERAGE & CONTACT DETAILS SECTION */}
      <section className="relative z-10 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="contact-map-stage contact-reveal relative min-h-[34rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#07100b]/70 p-6 backdrop-blur-xl">
            <div className="contact-map-radar" />
            <div className="contact-map-path contact-map-path-one" />
            <div className="contact-map-path contact-map-path-two" />
            <div className="contact-map-city contact-map-city-main">
              <span />
              <p>MedGrowDigi Growth Desk</p>
            </div>
            <div className="contact-map-city contact-map-city-a">
              <span />
              <p>Hospitals</p>
            </div>
            <div className="contact-map-city contact-map-city-b">
              <span />
              <p>Clinics</p>
            </div>
            <div className="contact-map-city contact-map-city-c">
              <span />
              <p>Diagnostics</p>
            </div>
            <div className="contact-map-city contact-map-city-d">
              <span />
              <p>Doctors</p>
            </div>
            <div className="contact-map-card">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Coverage</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">India-wide healthcare growth support.</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Strategy, performance marketing, website, software and
                automation support for healthcare teams across Indian cities.
              </p>
            </div>
          </div>

          <div className="contact-details-panel contact-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">Contact Details</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Reach the right growth desk directly.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/62">
              Share your requirement through the form or reach us directly.
              Your enquiry will be mapped to marketing, software or consulting
              based on what your healthcare brand needs first.
            </p>
            <div className="mt-8 space-y-4">
              {contactDetails.map(([label, value, href], index) => (
                <a className="contact-detail-row contact-reveal" href={href} key={label}>
                  <span className="contact-detail-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{label}</strong>
                    <em>{value}</em>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative z-10 pb-24 pt-8">
        <div className="contact-cta contact-reveal mx-auto grid max-w-7xl gap-8 rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950 via-[#0a0a0a] to-teal-950 p-8 sm:p-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch shadow-2xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/60 h-full min-h-[220px]">
            <img src={laptopImage} alt="Mediqora HMS and growth systems" className="h-full w-full object-cover opacity-90" />
          </div>
          <div className="space-y-5 flex flex-col justify-center">
            <span className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Next Step</span>
            <h2 className="font-belleza text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Premium growth starts with a precise first conversation.
            </h2>
            <p className="text-xl text-gray-200 font-normal leading-relaxed">
              Share your goals and we will identify whether you need a campaign, a conversion rebuild, software support, or a full healthcare growth ecosystem.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/footer-logo.png";

const services = [
  "Healthcare SEO",
  "Google & Meta Ads",
  "Hospital Branding",
  "Website Development",
  "Mediqora HMS",
  "AI Automation",
];

const Footer = () => {
  return (
    <footer className="site-footer relative isolate overflow-hidden bg-[#050505] px-5 pt-20 text-white sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_86%_24%,rgba(14,165,233,0.1),transparent_26%)]" />
      <div className="site-footer-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="site-footer-cta grid gap-8 border-y border-white/10 py-10 text-center lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:text-left">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">
              MedGrowDigi
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Healthcare growth, branding and software under one accountable team.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-end">
            <Link
              className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-emerald-400 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#050505] transition duration-300 hover:scale-[1.02] sm:w-auto"
              to="/contact"
            >
              Enquire Now
            </Link>
            <Link
              className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md transition duration-300 hover:text-white sm:w-auto"
              to="/about-medgrowdigi"
            >
              About Us
            </Link>
          </div>
        </div>

        <div className="site-footer-main grid gap-10 py-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.15fr_0.7fr_0.9fr_1fr]">
          <div className="site-footer-brand sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex justify-center sm:justify-start">
              <img src={Logo} alt="MedGrowDigi" className="w-40 object-contain" />
            </Link>
            <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/58 sm:mx-0">
              A healthcare-only growth ecosystem for doctors, clinics,
              hospitals, diagnostics and healthcare brands across India.
            </p>
          </div>

          <div className="site-footer-col">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Pages</p>
            <div className="mt-5 grid justify-items-center gap-3 text-sm text-white/62 sm:justify-items-start">
              <Link className="site-footer-link hover:text-emerald-400 transition" to="/">Home</Link>
              <Link className="site-footer-link hover:text-emerald-400 transition" to="/about-medgrowdigi">About</Link>
              <Link className="site-footer-link hover:text-emerald-400 transition" to="/services">All Solutions</Link>
              <Link className="site-footer-link hover:text-emerald-400 transition" to="/contact">Contact</Link>
            </div>
          </div>

          <div className="site-footer-col">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Services</p>
            <div className="mt-5 grid justify-items-center gap-3 text-sm text-white/62 sm:justify-items-start">
              <Link className="site-footer-link hover:text-emerald-400 transition" to="/services/healthcare-seo-services-india">Healthcare SEO</Link>
              <Link className="site-footer-link hover:text-emerald-400 transition" to="/services/google-ads-for-hospitals-doctors-clinics">Google Ads</Link>
              <Link className="site-footer-link hover:text-emerald-400 transition" to="/services/hospital-branding-agency-india">Hospital Branding</Link>
              <Link className="site-footer-link hover:text-emerald-400 transition" to="/services/hospital-website-development-india">Website Development</Link>
              <Link className="site-footer-link hover:text-emerald-400 transition" to="/services/hospital-management-software-india">Mediqora HMS</Link>
              <Link className="site-footer-link hover:text-emerald-400 transition" to="/services/ai-chatbot-for-hospitals-india">AI Chatbot</Link>
            </div>
          </div>

          <div className="site-footer-col">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Contact</p>
            <div className="mt-5 grid justify-items-center gap-3 text-sm text-white/62 sm:justify-items-start">
              <a className="site-footer-link" href="mailto:hello@medgrowdigi.com">hello@medgrowdigi.com</a>
              <a className="site-footer-link" href="https://www.medgrowdigi.com">www.medgrowdigi.com</a>
              <span>Healthcare growth support across India</span>
            </div>
          </div>
        </div>

        <div className="site-footer-marquee border-y border-white/10 py-4">
          <div>
            <span>Healthcare Marketing</span>
            <span>Branding</span>
            <span>Mediqora HMS</span>
            <span>AI Automation</span>
            <span>Growth Consulting</span>
            <span>Healthcare SEO</span>
          </div>
          <div aria-hidden="true">
            <span>Healthcare Marketing</span>
            <span>Branding</span>
            <span>Mediqora HMS</span>
            <span>AI Automation</span>
            <span>Growth Consulting</span>
            <span>Healthcare SEO</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-xs uppercase tracking-[0.24em] text-white/36 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 MedGrowDigi. All rights reserved.</p>
          <p>Healthcare Growth Ecosystem</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

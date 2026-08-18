// src/Components/Header-and-Footer/Navbar.jsx
import React, { Fragment, useState } from "react";
import Logo from "../../assets/images/medgrow-logo.png";
import MediqoraLogo from "../../assets/images/Mediquora Logo.png";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Megaphone,
  Palette,
  Globe,
  Building2,
  Bot,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";
import { solutionPillars } from "../../data/servicesData.js";

const iconMap = {
  "digital-marketing": Megaphone,
  branding: Palette,
  "website-development": Globe,
  "software-solutions": Building2,
  "ai-automation": Bot,
  "hospital-growth-consulting": BarChart3,
  "compliance-accreditation": ShieldCheck,
};

const pillarTopSlugs = {
  "digital-marketing": "healthcare-seo-services-india",
  branding: "hospital-branding-agency-india",
  "website-development": "hospital-website-development-india",
  "software-solutions": "hospital-management-software-india",
  "ai-automation": "ai-chatbot-for-hospitals-india",
  "hospital-growth-consulting": "hospital-growth-consulting-india",
  "compliance-accreditation": "nabh-nabl-consultant-india",
};

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full z-50 font-raleway">
        <div
          className="mx-auto w-[90%] relative"
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* Main Navbar Bar */}
          <div className="flex items-center justify-between bg-white shadow-lg rounded-b-4xl px-8 py-4.5 relative z-50">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={Logo} alt="MedGrowDigi Logo" className="w-40 object-contain" />
            </Link>

            {/* Main Navigation Links */}
            <nav>
              <ul className="flex items-center gap-9 font-semibold text-black text-lg">
                <li>
                  <Link to="/" className="hover:text-green-600 transition">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about-medgrowdigi" className="hover:text-green-600 transition">
                    About
                  </Link>
                </li>

                {/* SERVICES DROPDOWN LINK */}
                <li
                  className="py-1"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                >
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 hover:text-green-600 transition cursor-pointer"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180 text-green-600" : ""
                      }`}
                    />
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:text-green-600 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Enquire Now CTA Button */}
            <Link
              to="/contact"
              className="bg-black text-white px-7 py-3 rounded-4xl hover:bg-green-700 font-semibold text-lg transition shadow-md"
            >
              Enquire Now
            </Link>
          </div>

          {/* FULL NAVBAR WIDTH MEGA DROPDOWN BOX */}
          <div
            className={`absolute left-0 right-0 top-full pt-2.5 w-full transition-all duration-300 z-40 ${
              isDropdownOpen
                ? "opacity-100 visible translate-y-0 pointer-events-auto"
                : "opacity-0 invisible -translate-y-2 pointer-events-none"
            }`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="bg-[#0a0a0a] text-white border border-white/15 shadow-2xl rounded-3xl p-7 lg:p-8 backdrop-blur-2xl space-y-6">
              
              {/* Header Title Bar */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-belleza text-2xl text-white font-semibold">
                      MedGrowDigi Healthcare Solutions Ecosystem
                    </h3>
                    <p className="text-sm text-gray-300">
                      Select a solution pillar below to jump directly into the full service page.
                    </p>
                  </div>
                </div>

                <Link
                  to="/services"
                  onClick={() => setIsDropdownOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-semibold uppercase tracking-wider transition shadow-md"
                >
                  <span>Explore All Solutions Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 3x3 GRID LAYOUT: 7 PILLARS + 1 TWO-COLUMN MEDIQORA SPOTLIGHT CARD */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {solutionPillars.map((pillar, idx) => {
                  const IconComp = iconMap[pillar.id] || Megaphone;
                  const targetSlug = pillarTopSlugs[pillar.id] || "healthcare-seo-services-india";
                  const isSoftware = pillar.id === "software-solutions";

                  return (
                    <Link
                      key={pillar.id}
                      to={`/services/category/${pillar.id}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className={`group/item flex items-start gap-4 p-4 rounded-2xl transition duration-300 shadow-md ${
                        isSoftware
                          ? "bg-gradient-to-r from-emerald-950/90 to-black border border-emerald-500/50 hover:border-emerald-400"
                          : "bg-white/[0.03] hover:bg-emerald-950/70 border border-white/5 hover:border-emerald-500/50"
                      }`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover/item:bg-emerald-500 group-hover/item:text-black transition duration-300 flex-shrink-0 mt-0.5">
                        <IconComp className="w-5.5 h-5.5" />
                      </div>
                      <div className="space-y-1.5 min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-sm font-bold text-emerald-400 font-mono">0{idx + 1}</span>
                            <h4 className="text-base sm:text-lg font-semibold text-white group-hover/item:text-emerald-400 transition truncate">
                              {pillar.name}
                            </h4>
                          </div>

                          {isSoftware && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider flex-shrink-0">
                              <Clock className="w-3 h-3" />
                              <span>Coming Soon</span>
                            </span>
                          )}
                        </div>

                        <p className="text-sm text-gray-200 leading-relaxed line-clamp-2 font-normal">
                          {pillar.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}

                {/* MEDIQORA SPOTLIGHT CARD FITTING EXACTLY THE 2 REMAINING GRID SLOTS (col-span-2) */}
                <Link
                  to="/services/hospital-management-software-india"
                  onClick={() => setIsDropdownOpen(false)}
                  className="lg:col-span-2 bg-gradient-to-r from-emerald-950/90 via-[#0d0d0d] to-black border border-emerald-500/40 hover:border-emerald-400 rounded-2xl p-4 flex items-center justify-between gap-4 transition duration-300 group/mediqora shadow-lg"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="p-2.5 bg-black/80 rounded-xl border border-emerald-500/30 flex-shrink-0">
                      <img
                        src={MediqoraLogo}
                        alt="Mediqora Suite Logo"
                        className="h-9 w-auto object-contain brightness-110"
                      />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover/mediqora:text-emerald-400 transition truncate">
                          Mediqora Hospital & Clinic Suite
                        </h4>
                        <span className="px-3 py-0.5 rounded-full bg-emerald-400 text-black text-xs font-bold uppercase tracking-widest animate-pulse flex-shrink-0">
                          Coming Soon
                        </span>
                      </div>
                      <p className="text-sm text-gray-200 truncate font-normal">
                        HMS • EMR/EHR • OPD Queue • Patient Portal
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm text-emerald-400 font-semibold group-hover/mediqora:translate-x-1 transition flex-shrink-0">
                    <span>Explore Mediqora</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;

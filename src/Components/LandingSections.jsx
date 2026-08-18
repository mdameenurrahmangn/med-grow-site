import React, { useState } from "react";
import methodologyImage from "../assets/images/1233.png";
import faqImage from "../assets/images/social-marketing-hero.png";

const stats = [
  ["5", "+", "Years of Healthcare-Only Marketing Focus"],
  ["248", "+", "Healthcare Categories Served"],
  ["0", "%", "Markup on Ad Spend - Always"],
];

const ecosystemPoints = [
  "100% Healthcare Focus: every strategist, designer and developer works exclusively on healthcare accounts.",
  "Software-Backed Growth: MedGrowDigi also builds and owns Mediqora HMS, our cloud-native Hospital Management System.",
  "Compliance-Aware Execution: NABH, NABL and Indian healthcare advertising norms are built into campaigns and patient communication.",
  "Transparent Economics: ad spend is always passed through at zero markup, billed separately from our fees.",
];

const comparisonRows = [
  [
    "Recommends software, does not build it",
    "Designs and owns Mediqora HMS in-house",
  ],
  [
    "Generic campaign templates across industries",
    "Healthcare-only specialists, every account",
  ],
  [
    "Reports clicks and impressions",
    "Reports cost-per-patient and booked appointments",
  ],
  [
    "Compliance is an afterthought",
    "NABH/NABL and ad-policy compliance built into process",
  ],
];

const methodology = [
  [
    "Diagnose",
    "A complete audit of your digital presence, competitor landscape, and patient acquisition funnel.",
  ],
  [
    "Design",
    "A growth roadmap tailored to your specialty, city and patient catchment.",
  ],
  [
    "Deploy",
    "Campaigns, assets, software and automation configured with compliance built in.",
  ],
  [
    "Deliver & Report",
    "Transparent dashboards on leads, cost-per-acquisition and ROI in plain language.",
  ],
  [
    "Optimise",
    "Continuous testing and refinement, treating your growth plan as a living system.",
  ],
];

const audiences = [
  "Doctors & Individual Practitioners - 40+ specialities",
  "Clinics - Dental, Skin, Hair, IVF, Eye, Physiotherapy, Cosmetic, Orthopedic and more",
  "Hospitals - Multispeciality, Super Speciality, Corporate and General",
  "Diagnostic Centres, Pathology Labs, Blood Labs, MRI & Imaging Centres",
  "Medical Equipment Manufacturers & Pharmaceutical Companies",
  "Dental Industry, Medical Colleges, HealthTech & Healthcare SaaS Brands",
  "Healthcare Support Services - Medical Billing, Coding, NABH Consulting, Healthcare BPO",
];

const pillars = [
  [
    "Digital Marketing",
    "Healthcare SEO, Google Ads, Meta Ads, social media marketing, lead generation, reputation management and WhatsApp & email marketing.",
  ],
  [
    "Branding",
    "Hospital branding, doctor personal branding, clinic branding and medical graphic design.",
  ],
  [
    "Website Development",
    "Hospital, clinic and landing page development built for conversion, speed and medical credibility.",
  ],
  [
    "Software Solutions",
    "Hospital Management Software, Clinic Management Software, EMR/EHR, Healthcare CRM, mobile apps and patient portals.",
  ],
  [
    "AI, Automation & Consulting",
    "AI chatbots, WhatsApp and CRM automation, voice AI, market research, SWOT analysis, NABH/NABL compliance and expansion consulting.",
  ],
];

const faqs = [
  [
    "What makes MedGrowDigi different from a typical healthcare marketing agency?",
    "We are not only a marketing agency - we are a healthcare growth ecosystem. Alongside SEO, ads and branding, we design and own Mediqora HMS, our own hospital management software, and offer hospital growth consulting, compliance support and AI automation. This means your marketing, your software and your operations strategy come from one accountable partner instead of three or four disconnected vendors.",
  ],
  [
    "Do you only work with hospitals, or also with individual doctors and clinics?",
    "Both, and everything in between. We work with individual doctors across 40+ specialities, clinics of every type, multispeciality and super speciality hospitals, diagnostic labs, pharma companies and healthcare technology brands.",
  ],
  [
    "How is ad spend billed?",
    "We follow a strict zero-markup-on-ad-spend policy. The amount you spend on Google Ads or Meta Ads goes entirely to the platform, and our service fee is billed separately and transparently.",
  ],
  [
    "Can MedGrowDigi help with NABH or NABL accreditation alongside marketing?",
    "Yes. Our Hospital Growth Consulting vertical includes NABH and NABL accreditation support, hospital licensing guidance and SOP development, alongside your marketing roadmap.",
  ],
  [
    "How quickly can I expect results from healthcare SEO and ads?",
    "Paid campaigns typically generate measurable leads within 2-4 weeks. Healthcare SEO compounds - most clinics see meaningful ranking movement in 3-4 months, with strong, durable results building over 6-12 months.",
  ],
];

const SectionHeader = ({ eyebrow, title, children, light = false }) => (
  <div className={`mg-reveal mx-auto max-w-5xl text-center ${light ? "comparison-heading" : ""}`}>
    <p className={`text-xs font-semibold uppercase tracking-[0.34em] ${light ? "text-emerald-700" : "text-emerald-400"}`}>
      {eyebrow}
    </p>
    <h2 className={`mg-split mt-4 text-3xl font-semibold leading-tight ${light ? "text-[#10261c]" : "text-white"} sm:text-5xl lg:text-6xl`}>
      {title.split(" ").map((word, index) => (
        <span className="split-word inline-block overflow-hidden pb-1" key={`${word}-${index}`}>
          <span className="inline-block">{word}</span>
          {index < title.split(" ").length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </h2>
    {children ? (
      <p className={`mx-auto mt-5 max-w-3xl text-base leading-8 ${light ? "text-[#496157]" : "text-white/62"} sm:text-lg`}>
        {children}
      </p>
    ) : null}
  </div>
);

const LandingSections = ({ sectionRef }) => {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="landing-shell relative overflow-visible bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="mg-grid pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="mg-aurora mg-aurora-one pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[160px]" />
      <div className="mg-aurora mg-aurora-two pointer-events-none absolute right-[-18rem] top-[38%] h-[42rem] w-[42rem] rounded-full bg-emerald-300/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <section className="mg-panel py-10">
          <SectionHeader
            eyebrow="By The Numbers"
            title="Why Hospitals and Clinics Choose MedGrowDigi"
          >
            Most healthcare marketing agencies sell hospitals a campaign. We
            build hospitals a system.
          </SectionHeader>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map(([value, suffix, label]) => (
              <div
                className="stat-card mg-reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl"
                key={label}
              >
                <p className="text-5xl font-semibold text-emerald-400 sm:text-6xl">
                  <span className="stat-value" data-target={value}>0</span>
                  {suffix}
                </p>
                <p className="mt-4 text-sm leading-6 text-white/65">{label}</p>
              </div>
            ))}
          </div>

          <p className="mg-reveal mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-white/38">
            Illustrative placeholders - to be replaced with verified
            MedGrowDigi performance data before publishing.
          </p>
        </section>

        <section className="ecosystem-pin mg-panel py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="mg-reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-400">
                The Ecosystem Difference
              </p>
              <h2 className="mg-split mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                {"One Ecosystem. Every Growth Lever You Need.".split(" ").map((word, index) => (
                  <span className="split-word inline-block overflow-hidden pb-1" key={`${word}-${index}`}>
                    <span className="inline-block">{word}</span>
                    {index < "One Ecosystem. Every Growth Lever You Need.".split(" ").length - 1 ? "\u00a0" : ""}
                  </span>
                ))}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/62">
                Hospitals rarely lose patients because of one weak channel.
                They lose patients because SEO, ads, website, front desk,
                software and reputation all work in isolation.
              </p>
            </div>

            <div className="ecosystem-stack relative grid gap-4">
              <div className="ecosystem-orbit pointer-events-none absolute left-1/2 top-1/2 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/15 lg:block" />
              <div className="ecosystem-orbit pointer-events-none absolute left-1/2 top-1/2 hidden h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 lg:block" />
              {ecosystemPoints.map((point, index) => (
                <div
                  className="ecosystem-card mg-reveal relative flex gap-4 rounded-3xl border border-white/10 bg-[#0a0f0c]/80 p-5 backdrop-blur-xl"
                  key={point}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-[#050505]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-white/72">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="comparison-section mg-panel relative my-6 overflow-hidden rounded-[2rem] bg-white px-5 py-14 text-[#10261c] shadow-[0_28px_80px_rgba(0,0,0,0.22)] sm:px-8 sm:py-20 lg:px-12">
          <div className="comparison-orb pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/70 blur-3xl" />
          <div className="comparison-orb pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-lime-100 blur-3xl" />
          <div className="relative z-10">
          <SectionHeader
            eyebrow="How This Compares"
            title="A Marketing Agency vs. A Healthcare Growth Ecosystem"
            light
          />

          <div className="comparison-table mg-reveal mt-10 overflow-hidden rounded-3xl border border-emerald-950/10 bg-white/80 shadow-[0_18px_50px_rgba(16,38,28,0.10)] backdrop-blur-xl sm:mt-12">
            <div className="grid grid-cols-2 border-b border-emerald-950/10 bg-[#113526] text-xs font-semibold uppercase tracking-[0.14em] text-white sm:text-sm sm:tracking-[0.18em]">
              <div className="p-4 sm:p-5">Typical Agency</div>
              <div className="border-l border-white/15 bg-emerald-500 p-4 text-[#062416] sm:p-5">
                MedGrowDigi
              </div>
            </div>
            {comparisonRows.map(([agency, medgrow]) => (
              <div
                className="comparison-row grid grid-cols-2 border-b border-emerald-950/10 last:border-b-0"
                key={agency}
              >
                <div className="p-4 text-sm leading-7 text-[#64756c] sm:p-5">
                  {agency}
                </div>
                <div className="comparison-benefit border-l border-emerald-950/10 p-4 text-sm font-medium leading-7 text-[#173d2b] sm:p-5">
                  <span aria-hidden="true">✓</span>{medgrow}
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        <section className="methodology-pin mg-methodology py-16 lg:py-20">
          <div className="methodology-layout grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="methodology-visual flex flex-col gap-8">
              <div className="mg-reveal">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-400">
                  How It Rolls Out
                </p>
                <h2 className="mg-split mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                  {"Our Growth Methodology".split(" ").map((word, index) => (
                    <span className="split-word inline-block overflow-hidden pb-1" key={`${word}-${index}`}>
                      <span className="inline-block">{word}</span>
                      {index < "Our Growth Methodology".split(" ").length - 1 ? "\u00a0" : ""}
                    </span>
                  ))}
                </h2>
              </div>

              <div className="methodology-image-sticky">
                <div className="methodology-image-card overflow-hidden rounded-[2rem]">
                  <div className="methodology-image-inner relative overflow-hidden rounded-[1.75rem]">
                    <img
                      src={methodologyImage}
                      alt="Healthcare growth methodology"
                      className="methodology-image h-full w-full object-cover"
                    />
                  </div>
                  <div className="methodology-step-meter" aria-hidden="true">
                    <span className="methodology-step-meter-fill" />
                  </div>
                </div>
              </div>
            </div>

            <div className="method-track grid gap-4">
              {methodology.map(([title, copy], index) => (
                <div
                  className={`mg-reveal method-card ${
                    index === methodology.length - 1 ? "method-card-final" : ""
                  } rounded-3xl border border-white/10 bg-[#07100b]/80 p-6 backdrop-blur-xl`}
                  key={title}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mg-panel pb-20 pt-12">
          <SectionHeader
            eyebrow="Who We Serve"
            title="Built for Every Corner of Indian Healthcare"
          >
            Whether you are a solo dermatologist, a 200-bed multispecialty
            hospital, or a diagnostic chain, MedGrowDigi has a growth model
            built for your category.
          </SectionHeader>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <div
                className="audience-chip mg-reveal rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-white/72"
                key={audience}
              >
                {audience}
              </div>
            ))}
          </div>
        </section>

        <section className="pillars-stage mg-panel py-20">
          <SectionHeader eyebrow="Our Pillars" title="Five Pillars. One Growth Engine." />

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {pillars.map(([title, copy], index) => (
              <div
                className="pillar-card mg-reveal rounded-3xl border border-white/10 bg-[#0b0f0c] p-5 backdrop-blur-xl lg:min-h-[18rem]"
                key={title}
              >
                <p className="text-xs font-semibold text-emerald-400">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mg-panel grid gap-5 py-20 lg:grid-cols-3">
          <div className="scenario-card mg-reveal rounded-3xl border border-emerald-400/20 bg-emerald-400 p-7 text-[#050505] lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.28em]">
              Illustrative Scenario
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              From five disconnected vendors to one connected growth system.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#050505]/75">
              A multispecialty hospital had separate vendors handling website,
              ads, software and reception training. MedGrowDigi consolidated the
              stack into a rebuilt website, Mediqora HMS, department-wise SEO,
              unified CRM and front-office workflow.
            </p>
          </div>
          <div className="definition-card mg-reveal rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              In Plain English
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Healthcare Growth Ecosystem
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/62">
              A single, connected operating model where marketing, branding,
              website, software and compliance are designed together.
            </p>
          </div>
        </section>

        <section className="faq-showcase mg-panel py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="faq-copy">
              <h2 className="faq-showcase-heading max-w-5xl text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                Frequently Asked <span>Questions</span>
              </h2>
              <p className="faq-intro mt-5 max-w-3xl text-white/62">
                Clear answers on how MedGrowDigi connects marketing, software,
                consulting and compliance into one healthcare growth system.
              </p>

              <div className="faq-list mt-10">
                {faqs.map(([question, answer], index) => {
                  const isOpen = activeFaq === index;

                  return (
                    <div className={`faq-row ${isOpen ? "is-open" : ""}`} key={question}>
                      <button
                        aria-expanded={isOpen}
                        className="faq-trigger"
                        onClick={() => setActiveFaq(isOpen ? -1 : index)}
                        type="button"
                      >
                        <span className="faq-question">
                          <span className="faq-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{question}</span>
                        </span>
                        <span className="faq-toggle" aria-hidden="true" />
                      </button>
                      <div className="faq-answer">
                        <div className="faq-answer-inner">
                          <p>{answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="faq-media-wrap">
              <div className="faq-media-card">
                <img src={faqImage} alt="Healthcare digital marketing conversation" />
                <div className="faq-media-overlay">
                  <span>Connected Growth</span>
                  <strong>Marketing + HMS + Consulting</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="cta-panel mg-reveal rounded-[2rem] border border-emerald-400/20 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.28),rgba(5,5,5,0.92)_55%)] px-6 py-16 text-center"
          id="proposal"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-400">
            Call To Action
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
            Ready to Build Your Healthcare Growth Ecosystem?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
            Whether you need a single campaign or a complete growth and
            software overhaul, MedGrowDigi&apos;s team is ready to map what your
            practice needs next.
          </p>
          <a
            className="mt-9 inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#050505] transition duration-300 hover:scale-[1.02]"
            href="#growth"
          >
            Book a Free Consultation
          </a>
        </section>
      </div>
    </section>
  );
};

export default LandingSections;

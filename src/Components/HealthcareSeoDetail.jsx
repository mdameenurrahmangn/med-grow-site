// src/Components/HealthcareSeoDetail.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Megaphone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  Search,
  Plus,
  HeartPulse,
  Building2,
  Stethoscope,
  UserCheck,
  Check,
} from "lucide-react";
import digitalMarketingHeroImg from "../assets/images/digital-marketing-hero.jpg";
import indianDoctorHeroImg from "../assets/images/indian-doctor-hero.jpg";
import ComprehensiveServiceScope from "./ComprehensiveServiceScope.jsx";
import ExecutionRoadmap from "./ExecutionRoadmap.jsx";
import CaseScenarioSection from "./CaseScenarioSection.jsx";
import FitAndMythsSection from "./FitAndMythsSection.jsx";

gsap.registerPlugin(ScrollTrigger);

// ─── Interactive Movable Canvas Constellation Network Background ────────────
const DnaConstellationBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for dynamic interactive movement
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Generate constellation nodes spread evenly across canvas
    const nodeCount = Math.floor(Math.min(width, 1800) / 11);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2.2 + 1.2,
      baseAlpha: Math.random() * 0.5 + 0.35,
      pulse: Math.random() * Math.PI * 2,
      glow: Math.random() > 0.6,
    }));

    const render = () => {
      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep dark forest emerald ambient backdrop gradient (matching reference image)
      const bgGradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height)
      );
      bgGradient.addColorStop(0, "#084732");
      bgGradient.addColorStop(0.45, "#04281c");
      bgGradient.addColorStop(1, "#02150e");

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // ── Render Constellation Network Nodes & Connections ──
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse influence offset
        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        let offsetX = 0;
        let offsetY = 0;
        if (distMouse < 240) {
          const force = (1 - distMouse / 240) * 18;
          offsetX = (dxMouse / distMouse) * force;
          offsetY = (dyMouse / distMouse) * force;
        }

        const renderX = node.x + offsetX;
        const renderY = node.y + offsetY;

        // Pulse alpha
        node.pulse += 0.018;
        const alpha = node.baseAlpha + Math.sin(node.pulse) * 0.18;

        // Draw particle node with optional soft glow
        if (node.glow) {
          ctx.shadowColor = "#35C978";
          ctx.shadowBlur = 10;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `rgba(53, 201, 120, ${alpha})`;
        ctx.beginPath();
        ctx.arc(renderX, renderY, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect mouse cursor to nearby nodes
        if (distMouse < 180) {
          const mouseAlpha = (1 - distMouse / 180) * 0.35;
          ctx.strokeStyle = `rgba(53, 201, 120, ${mouseAlpha})`;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(renderX, renderY);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Connect nearby nodes to form constellation mesh
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const lineAlpha = (1 - dist / 150) * 0.26;
            ctx.strokeStyle = `rgba(53, 201, 120, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
};

// ─── Custom Hook for Scroll Element Reveal ──────────────────────────────────
const useScrollReveal = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

// ─── StatCounter Component (Clean Glowing Dashboard Metrics) ────────────────
const StatCounter = ({ targetStat, label }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const match = targetStat.match(/\d+/);
    const endNum = match ? parseInt(match[0], 10) : 10;
    const duration = 1400;
    const increment = endNum / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endNum) {
        setDisplayValue(targetStat);
        clearInterval(timer);
      } else {
        const currentInt = Math.floor(start);
        setDisplayValue(targetStat.replace(/\d+/, currentInt));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, targetStat]);

  return (
    <div
      ref={ref}
      className={`group relative p-6 bg-[#073324]/80 border border-[#166444] rounded-2xl shadow-xl backdrop-blur-md transition-all duration-700 transform hover:border-[#35C978] hover:shadow-[0_0_25px_rgba(53,201,120,0.2)] ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
        }`}
    >
      <div className="text-4xl sm:text-5xl font-black text-[#35C978] tracking-tight font-sans drop-shadow-[0_0_12px_rgba(53,201,120,0.4)]">
        {displayValue}
      </div>
      <div className="mt-2 text-xs sm:text-sm text-[#c2e5d6] font-bold uppercase tracking-wider leading-snug">
        {label}
      </div>
    </div>
  );
};

// ─── Main Healthcare Digital Marketing Dark Emerald Dashboard Component ─────
const HealthcareSeoDetail = ({ service, relatedServices }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeServiceHover, setActiveServiceHover] = useState(0);
  const [activeSettingTab, setActiveSettingTab] = useState(0);

  // GSAP Animation Refs
  const mainPageRef = useRef(null);
  const headerRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const heroImageRef = useRef(null);

  const intelligenceSectionRef = useRef(null);
  const progressBarsContainerRef = useRef(null);

  const advantageSectionRef = useRef(null);
  const advantageLeftRef = useRef(null);
  const advantageRightRef = useRef(null);

  const bentoGridRef = useRef(null);
  const comparisonGridRef = useRef(null);
  const faqContainerRef = useRef(null);
  const finalCtaRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // 1. Header scroll trigger compact & shadow
      ScrollTrigger.create({
        start: "top top-=20",
        onUpdate: (self) => {
          if (!headerRef.current) return;
          if (self.scroll() > 30) {
            gsap.to(headerRef.current.firstElementChild, {
              paddingTop: "0.6rem",
              paddingBottom: "0.6rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              duration: 0.3,
              ease: "power2.out",
            });
          } else {
            gsap.to(headerRef.current.firstElementChild, {
              paddingTop: "1rem",
              paddingBottom: "1rem",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              duration: 0.3,
              ease: "power2.out",
            });
          }
        },
      });

      // 2. Hero entrance timeline
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .fromTo(heroBadgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(heroTitleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
        .fromTo(heroSubtitleRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(heroDescRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(heroButtonsRef.current?.children || [], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }, "-=0.3")
        .fromTo(heroImageRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.9 }, "-=0.7");

      // 3. Section 2: SEO Intelligence (Metrics & Progress Bars)
      if (intelligenceSectionRef.current) {
        gsap.fromTo(
          intelligenceSectionRef.current.querySelector(".intel-header"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: intelligenceSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (progressBarsContainerRef.current) {
        const bars = progressBarsContainerRef.current.querySelectorAll(".intel-bar-fill");
        bars.forEach((bar) => {
          const targetWidth = bar.getAttribute("data-target-width");
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: targetWidth,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: progressBarsContainerRef.current,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // 4. Section 3: Why Choose Us (Left & Right Split reveal)
      if (advantageSectionRef.current) {
        const isMobile = window.innerWidth < 768;
        if (advantageLeftRef.current) {
          gsap.fromTo(
            advantageLeftRef.current,
            { opacity: 0, x: isMobile ? -25 : -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: advantageSectionRef.current,
                start: "top 78%",
                toggleActions: "play none none none",
              },
            }
          );
        }
        if (advantageRightRef.current) {
          gsap.fromTo(
            advantageRightRef.current,
            { opacity: 0, x: isMobile ? 25 : 50, scale: 0.96 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: advantageSectionRef.current,
                start: "top 78%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // 5. Bento Grid (Specialty Adaptation)
      if (bentoGridRef.current) {
        gsap.fromTo(
          bentoGridRef.current.children,
          { opacity: 0, y: 45, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bentoGridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 6. Comparison Section
      if (comparisonGridRef.current) {
        const isMobile = window.innerWidth < 768;
        gsap.fromTo(
          comparisonGridRef.current.children[0],
          { opacity: 0, x: isMobile ? -20 : -45 },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: comparisonGridRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
        gsap.fromTo(
          comparisonGridRef.current.children[1],
          { opacity: 0, x: isMobile ? 20 : 45 },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: comparisonGridRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 7. FAQ Accordion Container
      if (faqContainerRef.current) {
        gsap.fromTo(
          faqContainerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: faqContainerRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 8. Final CTA Section
      if (finalCtaRef.current) {
        gsap.fromTo(
          finalCtaRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: finalCtaRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, mainPageRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const categoryHeroImg = service.image || digitalMarketingHeroImg;

  // Step Relevant Images for Execution Roadmap
  const stepImages = [
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
  ];

  // Horizontal Analytics Data for Section 2
  const analyticsData = [
    { label: "Organic Visibility", percentage: 82, note: "Top 3 positions for target specialty keywords" },
    { label: "Patient Search Growth", percentage: 68, note: "Increase in high-intent symptom & treatment searches" },
    { label: "Local Search Presence", percentage: 76, note: "Google Business Profile Map Pack prominence" },
  ];

  return (
    <div ref={mainPageRef} className="relative min-h-screen bg-[#052419] text-white font-sans overflow-x-hidden selection:bg-[#35C978]/30">

      {/* Dynamic Animated Movable Canvas Background */}
      <DnaConstellationBg />

      {/* Dynamic Keyframe Motion & Glow Styles */}
      <style>{`
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.04); opacity: 0.95; }
        }
        @keyframes floatWidget {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatWidgetAlt {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-20 lg:space-y-28">

        {/* =========================================================================
            HEADER — Matching User Image Floating White Navbar Header
           ========================================================================= */}
        <header ref={headerRef} className="pt-2 sticky top-0 z-50">
          <div className="rounded-b-3xl bg-[#FFFFFF] text-[#052419] px-6 sm:px-10 py-4 shadow-2xl border-b border-emerald-500/20 flex flex-wrap items-center justify-between gap-4 transition-all duration-500">

            {/* Logo & Breadcrumb Navigation */}
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-tight text-[#052419]">
                <span className="text-2xl">MEDGROW</span>
              </Link>

              <nav aria-label="Breadcrumb" className="hidden md:flex items-center gap-2 text-xs sm:text-sm text-[#052419]/80 font-bold">
                <Link to="/" className="hover:text-[#168A4A] transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#052419]/40" />
                <Link to="/about" className="hover:text-[#168A4A] transition-colors">About</Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#052419]/40" />
                <Link to="/services" className="hover:text-[#168A4A] transition-colors">Services</Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#052419]/40" />
                <span className="text-[#168A4A] font-extrabold">Healthcare SEO</span>
              </nav>
            </div>

            {/* Header Right Action Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#052419] hover:bg-[#168A4A] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-md hover:scale-105"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#35C978]" />
            </Link>

          </div>
        </header>

        {/* =========================================================================
            HERO — Deep Emerald Background Matching Reference Image
           ========================================================================= */}
        <section className="pt-4 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Eyebrow, Heading, Description & Actions */}
            <div className="lg:col-span-6 space-y-6">

              {/* Eyebrow */}
              <div ref={heroBadgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#35C978]/10 border border-[#35C978]/30 text-[#35C978] text-xs font-bold tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#35C978] animate-ping" />
                <Megaphone className="w-3.5 h-3.5 text-[#35C978]" />
                <span>HEALTHCARE DIGITAL GROWTH</span>
              </div>

              {/* Main Headline */}
              <h1 ref={heroTitleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                India's <br />
                <span className="text-[#35C978] drop-shadow-[0_0_20px_rgba(53,201,120,0.4)]">Healthcare SEO</span> <br />
                Growth Ecosystem
              </h1>

              {/* Tagline Callout */}
              <p ref={heroSubtitleRef} className="text-lg sm:text-xl text-[#35C978] font-bold italic border-l-3 border-[#35C978] pl-4 py-0.5">
                "{service.heroSubtitle}"
              </p>

              {/* Lead Description */}
              <p ref={heroDescRef} className="text-base sm:text-lg text-[#c2e5d6] leading-relaxed font-medium">
                {service.heroDescription}
              </p>

              {/* CTAs matching the image buttons */}
              <div ref={heroButtonsRef} className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#35C978] hover:bg-[#22e079] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-[#031b13] shadow-[0_0_30px_rgba(53,201,120,0.4)] transition-all duration-300 hover:scale-105"
                >
                  <span>BOOK A FREE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-[#031b13]" />
                </Link>

                <a
                  href="#whats-included"
                  className="inline-flex items-center gap-2 rounded-full border border-[#35C978]/40 bg-[#083626]/60 hover:bg-[#35C978]/20 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 backdrop-blur-md hover:scale-105"
                >
                  <span>GET A PROPOSAL</span>
                  <ChevronRight className="w-4 h-4 text-[#35C978]" />
                </a>
              </div>

              {/* Core Scope Keywords */}
              {service.secondaryKeywords && (
                <div className="pt-4 border-t border-emerald-500/20 flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[#c2e5d6] font-bold mr-2">
                    Core Scope:
                  </span>
                  {service.secondaryKeywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-[#083626]/80 border border-[#166444] text-xs font-semibold text-[#c2e5d6] shadow-2xs transition-all duration-300 hover:border-[#35C978] hover:text-[#35C978]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Healthcare SEO Intelligence Panel with Floating Widgets */}
            <div ref={heroImageRef} className="lg:col-span-6 relative">

              {/* Central Panel Card with glowing green frame */}
              <div className="relative rounded-[28px] border-2 border-[#35C978]/40 bg-[#062c1e]/90 p-3 shadow-[0_0_50px_rgba(53,201,120,0.2)] overflow-hidden group backdrop-blur-xl">

                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#031b13]">
                  <img
                    src={indianDoctorHeroImg}
                    alt={service.title}
                    onError={(e) => {
                      e.currentTarget.src = categoryHeroImg;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052419] via-transparent to-transparent" />

                  {/* Panel Overlay Label */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#062c1e]/95 backdrop-blur-md border border-[#35C978]/30 shadow-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase text-[#35C978] tracking-wider">
                        HEALTHCARE GROWTH PERFORMANCE
                      </div>
                      <div className="text-sm font-black text-white">
                        Active Patient Search Campaign
                      </div>
                    </div>
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35C978] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#35C978]"></span>
                    </span>
                  </div>
                </div>

              </div>

              {/* ── OVERLAPPING ANALYTICS WIDGET 1: Top-Left ── */}
              <div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 z-20 p-4 rounded-2xl bg-[#083626]/95 border border-[#35C978]/40 shadow-2xl backdrop-blur-xl space-y-1.5 w-44 sm:w-48 transition-transform duration-500 hover:scale-105"
                style={{ animation: "floatWidget 6s ease-in-out infinite" }}
              >
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#c2e5d6]">
                  <span>PATIENT INTENT</span>
                  <HeartPulse className="w-3.5 h-3.5 text-[#35C978]" />
                </div>
                <div className="text-2xl font-black text-white">94.2%</div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#35C978]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+18.4% this month</span>
                </div>
              </div>

              {/* ── OVERLAPPING ANALYTICS WIDGET 2: Bottom-Right ── */}
              <div
                className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 z-20 p-4.5 rounded-2xl bg-[#031b13]/95 text-white border border-[#35C978]/50 shadow-2xl backdrop-blur-xl space-y-1.5 w-48 sm:w-52 transition-transform duration-500 hover:scale-105"
                style={{ animation: "floatWidgetAlt 7s ease-in-out infinite 1s" }}
              >
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#35C978]">
                  <span>GOOGLE VISIBILITY</span>
                  <Search className="w-3.5 h-3.5 text-[#35C978]" />
                </div>
                <div className="text-2xl font-black text-white">82% Rank</div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c2e5d6]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#35C978]" />
                  <span>YMYL Compliant</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 2 — SEO INTELLIGENCE (Horizontal Analytics & Scroll Progress Bars)
           ========================================================================= */}
        <section ref={intelligenceSectionRef} className="space-y-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 intel-header">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#35C978] block mb-1">
                DATA-DRIVEN METRICS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Healthcare SEO Intelligence
              </h2>
            </div>
            <p className="text-sm text-[#c2e5d6] max-w-md font-medium">
              Real patient search patterns require structured optimization. Here is how search intent translates into practice visibility.
            </p>
          </div>

          {/* Large Horizontal Analytics Dashboard Panel */}
          <div className="rounded-3xl bg-[#073324]/80 border border-[#166444] p-6 sm:p-10 shadow-2xl backdrop-blur-md space-y-8">
            <div ref={progressBarsContainerRef} className="space-y-6">
              {analyticsData.map((item, idx) => (
                <div key={idx} className="space-y-2.5">
                  <div className="flex items-center justify-between text-sm sm:text-base font-bold text-white">
                    <span>{item.label}</span>
                    <span className="font-mono text-[#35C978] text-lg font-black">{item.percentage}%</span>
                  </div>

                  {/* Animated Progress Bar Triggered on Scroll */}
                  <div className="h-4 w-full rounded-full bg-[#031b13] border border-[#166444] overflow-hidden p-0.5">
                    <div
                      className="intel-bar-fill h-full rounded-full bg-gradient-to-r from-[#168A4A] via-[#35C978] to-[#5effa3] transition-all duration-1000 ease-out shadow-[0_0_12px_#35C978]"
                      data-target-width={`${item.percentage}%`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>

                  <div className="text-xs text-[#c2e5d6] font-medium italic">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Benchmarks Grid */}
            {service.byTheNumbers && service.byTheNumbers.length > 0 && (
              <div className="pt-6 border-t border-[#166444]">
                <div className="text-xs font-bold uppercase tracking-widest text-[#c2e5d6] mb-4">
                  Expected Timelines & Growth Targets
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.byTheNumbers.map((item, idx) => (
                    <div key={idx} className="stat-counter-item">
                      <StatCounter targetStat={item.stat} label={item.label} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </section>

        {/* =========================================================================
            SECTION 3 — WHY CHOOSE US / ADVANTAGE (Matching Reference UI Image Layout)
           ========================================================================= */}
        <section id="advantage-section" ref={advantageSectionRef} className="space-y-10">

          {/* Eyebrow + Header Title + Subtitle */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#35C978] tracking-widest uppercase">
              <span className="text-[#35C978]">✦</span>
              <span>Why Choose Us</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.12] tracking-tight">
              Here's Why Brands <br />
              Trust <span className="text-[#35C978] underline decoration-[#35C978]/40 underline-offset-8">Our Expertise</span>
            </h2>

            <p className="text-base sm:text-lg text-[#c2e5d6] leading-relaxed font-medium pt-2">
              {service.overviewText || service.heroDescription}
            </p>
          </div>

          {/* Two Column Layout: Cards + Vertical Pill on Left / Arch-Clipped Image with Circular Stat on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">

            {/* Left Column: Stacked Feature Cards + Vertical Pill Badge */}
            <div ref={advantageLeftRef} className="lg:col-span-7 flex flex-col sm:flex-row gap-6 items-stretch">

              {/* Cards Stack */}
              <div className="flex-1 rounded-3xl bg-[#073324]/80 border border-[#166444] p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">

                {/* Feature 1 */}
                <div className="flex items-start gap-5 pb-6 border-b border-[#166444]">
                  <div className="w-14 h-14 rounded-2xl bg-[#031b13] border border-[#35C978]/50 flex items-center justify-center flex-shrink-0 text-[#35C978] shadow-[0_0_15px_rgba(53,201,120,0.2)]">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white">YMYL Trust & Compliance</h3>
                    <p className="text-sm text-[#c2e5d6] leading-relaxed font-medium">
                      We structure content around Google's stricter YMYL (Your Money Your Life) guidelines, verifying doctor credentials and clinical accuracy.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-5 pt-2">
                  <div className="w-14 h-14 rounded-2xl bg-[#031b13] border border-[#35C978]/50 flex items-center justify-center flex-shrink-0 text-[#35C978] shadow-[0_0_15px_rgba(53,201,120,0.2)]">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white">Data-Driven Intent Strategy</h3>
                    <p className="text-sm text-[#c2e5d6] leading-relaxed font-medium">
                      Maps organic search terms directly to patient symptom queries, location intent, and treatment decisions to drive real OPD consultations.
                    </p>
                  </div>
                </div>

              </div>

              {/* Pill-Shaped Vertical Avatar Badge */}
              <div className="w-full sm:w-28 rounded-3xl bg-[#031b13]/90 border border-[#35C978]/40 p-5 flex flex-col items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
                {/* Avatar Stack */}
                <div className="flex sm:flex-col items-center justify-center -space-x-3 sm:space-x-0 sm:-space-y-3 pt-2">
                  <div className="w-10 h-10 rounded-full border-2 border-[#35C978] bg-[#168A4A] text-white font-bold flex items-center justify-center text-xs shadow-md">
                    +
                  </div>
                  <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80" alt="Doctor 1" className="w-10 h-10 rounded-full border-2 border-[#031b13] object-cover shadow-md" />
                  <img src="https://images.unsplash.com/photo-1594824813566-88855ce78c0d?auto=format&fit=crop&w=150&q=80" alt="Doctor 2" className="w-10 h-10 rounded-full border-2 border-[#031b13] object-cover shadow-md" />
                  <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=150&q=80" alt="Doctor 3" className="w-10 h-10 rounded-full border-2 border-[#031b13] object-cover shadow-md" />
                </div>

                {/* Vertical Text */}
                <div className="text-xs font-bold text-[#35C978] uppercase tracking-widest sm:[writing-mode:vertical-lr] sm:rotate-180 text-center">
                  300+ Medical Clients
                </div>
              </div>

            </div>

            {/* Right Column: Arch / Pill Shaped Frame Image with Circular Stat Overlay */}
            <div ref={advantageRightRef} className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">

              {/* Arch Clipped Image Frame */}
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[250px] border-4 border-[#35C978]/40 shadow-[0_0_50px_rgba(53,201,120,0.25)] overflow-hidden bg-[#062c1e] group">
                <img
                  src="https://html.kodesolution.com/2026/gencyo-html/images/resource/choose-us-1-1.jpg"
                  alt="Why Choose MedGrow"
                  onError={(e) => {
                    e.currentTarget.src = categoryHeroImg;
                  }}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052419] via-transparent to-transparent opacity-80" />
              </div>

              {/* Overlapping Dark Circular Stat Callout Badge */}
              <div className="absolute -bottom-6 left-4 sm:-left-4 z-20 w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-[#031b13]/95 border-2 border-[#35C978] shadow-[0_0_35px_rgba(53,201,120,0.35)] flex flex-col items-center justify-center text-center p-4 backdrop-blur-xl transition-transform duration-500 hover:scale-105">
                <div className="text-3xl sm:text-4xl font-black text-[#35C978] font-mono tracking-tight drop-shadow-[0_0_10px_#35C978]">
                  92%
                </div>
                <div className="mt-1 text-xs font-bold text-white leading-tight max-w-[130px]">
                  Satisfied Clients Returning Often
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 4 — COMPREHENSIVE SERVICE SCOPE (Pixel-Perfect Recreation)
           ========================================================================= */}
        <div>
          <ComprehensiveServiceScope />
        </div>

        {/* =========================================================================
            SECTION 5 — EXECUTION ROADMAP (Exact Pixel-Perfect Reference Match)
           ========================================================================= */}
        <div>
          <ExecutionRoadmap />
        </div>

        {/* =========================================================================
            SECTION 6 — CASE SCENARIO (Exact Pixel-Perfect Hexagon Card Reference Match)
           ========================================================================= */}
        <div>
          <CaseScenarioSection />
        </div>

        {/* =========================================================================
            SECTION 7 — COMPARISON (Generic SEO vs MedGrowDigi)
           ========================================================================= */}
        {service.howItCompares && (
          <section className="space-y-8">

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#35C978] block">
                COMPARATIVE DIFFERENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {service.howItCompares.leftHeader} <span className="text-[#c2e5d6] font-normal">VS</span> {service.howItCompares.rightHeader}
              </h2>
            </div>

            {/* Side-by-side Cards Container */}
            <div ref={comparisonGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Left: Generic SEO */}
              <div className="rounded-3xl bg-[#200c0c]/80 border border-red-500/30 p-6 sm:p-8 space-y-6 shadow-xl transition-all duration-500">
                <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
                  <span className="text-sm font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span>{service.howItCompares.leftHeader}</span>
                  </span>
                </div>

                <div className="space-y-4">
                  {service.howItCompares.rows.map((row, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-red-950/40 border border-red-500/20 text-sm text-zinc-200 font-semibold">
                      <XCircle className="w-4.5 h-4.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{row.left}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: MedGrowDigi Specialist */}
              <div className="rounded-3xl bg-[#073324] text-white border-2 border-[#35C978] p-6 sm:p-8 space-y-6 shadow-[0_0_30px_rgba(53,201,120,0.25)] transition-all duration-500">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#35C978] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#35C978]" />
                    <span>{service.howItCompares.rightHeader}</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold bg-[#35C978]/20 text-[#35C978] px-2.5 py-1 rounded-md">
                    RECOMMENDED
                  </span>
                </div>

                <div className="space-y-4">
                  {service.howItCompares.rows.map((row, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/10 border border-white/10 text-sm text-white font-semibold">
                      <Check className="w-4.5 h-4.5 text-[#35C978] flex-shrink-0 mt-0.5" />
                      <span>{row.right}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </section>
        )}

        {/* =========================================================================
            SECTION 8 — HEALTHCARE SETTINGS (Matching Reference Gencyo Bento Grid UI)
           ========================================================================= */}
        {service.differsBySetting && service.differsBySetting.length > 0 && (
          <section className="space-y-8">

            {/* Section Header */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#35C978] block">
                ✦ SPECIALTY ADAPTATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Healthcare SEO for Every Practice Setting
              </h2>
            </div>

            {/* Bento Grid Layout matching reference screenshot */}
            <div ref={bentoGridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* ── CARD 1 (Top-Left, 7 Cols): Large Dark Capability Banner ── */}
              <div className="lg:col-span-7 rounded-3xl bg-[#073324]/90 border border-[#166444] p-8 sm:p-12 shadow-2xl backdrop-blur-md flex flex-col justify-between space-y-8 relative overflow-hidden group">

                {/* Subtle Background Radial Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#35C978]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#083626] border border-[#166444] text-[#35C978]">
                    CUSTOM HEALTHCARE FRAMEWORK
                  </span>

                  <h3 className="text-3xl sm:text-5xl font-black text-white leading-[1.15] tracking-tight">
                    Tailored SEO Capabilities <br />
                    Designed <span className="text-[#35C978] drop-shadow-[0_0_15px_rgba(53,201,120,0.3)]">for Healthcare Growth</span>
                  </h3>

                  <p className="text-base sm:text-lg text-[#c2e5d6] font-medium leading-relaxed max-w-xl">
                    Whether managing multi-department hospital search visibility, local clinic map packs, or doctor personal brand trust, our execution matrix adapts directly to patient search intent.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="relative z-10 pt-4">
                  <a
                    href="#final-cta"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#35C978] text-[#031b13] font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(53,201,120,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#42de88]"
                  >
                    <span>Book A Free Strategy Call</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* ── CARD 2 (Top-Right, 5 Cols): Multi-Specialty Hospitals ── */}
              {service.differsBySetting[0] && (
                <div
                  onClick={() => setActiveSettingTab(0)}
                  className={`lg:col-span-5 rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md flex flex-col justify-between cursor-pointer transition-all duration-500 group overflow-hidden ${activeSettingTab === 0
                    ? "bg-[#0c4d37] border-[#35C978] shadow-[0_0_35px_rgba(53,201,120,0.3)]"
                    : "bg-[#073324]/80 border-[#166444] hover:border-[#35C978]/60"
                    }`}
                >
                  {/* Card Top Image Container */}
                  <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-[#031b13]">
                    <img
                      src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80"
                      alt="Multi-Specialty Hospitals"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052419] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#031b13]/80 border border-[#35C978]/40 text-[#35C978] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md">
                      HOSPITALS & CHAINS
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-white group-hover:text-[#35C978] transition-colors flex items-center justify-between">
                      <span>{service.differsBySetting[0].setting}</span>
                      <Building2 className="w-6 h-6 text-[#35C978]" />
                    </h4>
                    <p className="text-sm text-[#c2e5d6] font-medium leading-relaxed">
                      {service.differsBySetting[0].focus}
                    </p>
                  </div>
                </div>
              )}

              {/* ── CARD 3 (Bottom-Left, 5 Cols): Single-Specialty Clinics (Featured Highlight Card) ── */}
              {service.differsBySetting[1] && (
                <div
                  onClick={() => setActiveSettingTab(1)}
                  className={`lg:col-span-5 rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md flex flex-col justify-between cursor-pointer transition-all duration-500 group overflow-hidden ${activeSettingTab === 1
                    ? "bg-[#0c4d37] border-[#35C978] shadow-[0_0_35px_rgba(53,201,120,0.3)]"
                    : "bg-[#083828] border-[#166444] hover:border-[#35C978]/60"
                    }`}
                >
                  {/* Featured Image Container */}
                  <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-[#031b13]">
                    <img
                      src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80"
                      alt="Single-Specialty Clinics"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052419] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#031b13]/80 border border-[#35C978]/40 text-[#35C978] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md">
                      LOCAL OPD & CLINICS
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-white group-hover:text-[#35C978] transition-colors flex items-center justify-between">
                      <span>{service.differsBySetting[1].setting}</span>
                      <Stethoscope className="w-6 h-6 text-[#35C978]" />
                    </h4>
                    <p className="text-sm text-[#c2e5d6] font-medium leading-relaxed">
                      {service.differsBySetting[1].focus}
                    </p>
                  </div>
                </div>
              )}

              {/* ── CARD 4 (Bottom-Right, 7 Cols): Individual Doctor Practices (Wide Layout) ── */}
              {service.differsBySetting[2] && (
                <div
                  onClick={() => setActiveSettingTab(2)}
                  className={`lg:col-span-7 rounded-3xl border p-6 sm:p-8 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-center gap-6 cursor-pointer transition-all duration-500 group overflow-hidden ${activeSettingTab === 2
                    ? "bg-[#0c4d37] border-[#35C978] shadow-[0_0_35px_rgba(53,201,120,0.3)]"
                    : "bg-[#073324]/80 border-[#166444] hover:border-[#35C978]/60"
                    }`}
                >
                  {/* Side Image */}
                  <div className="relative w-full sm:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-[#031b13] flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
                      alt="Individual Doctor Practices"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052419] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#031b13]/80 border border-[#35C978]/40 text-[#35C978] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md">
                      DOCTOR PERSONAL BRAND
                    </div>
                  </div>

                  <div className="space-y-3 w-full sm:w-1/2">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase text-[#35C978] tracking-widest">
                      <UserCheck className="w-5 h-5 text-[#35C978]" />
                      <span>{service.differsBySetting[2].setting}</span>
                    </div>

                    <h4 className="text-2xl font-black text-white group-hover:text-[#35C978] transition-colors">
                      PRACTITIONER BRANDING
                    </h4>

                    <p className="text-sm text-[#c2e5d6] font-medium leading-relaxed">
                      {service.differsBySetting[2].focus}
                    </p>
                  </div>
                </div>
              )}

            </div>

          </section>
        )}

        {/* =========================================================================
            FIT ASSESSMENT & MYTHS & MISCONCEPTIONS (Exact Reference Match)
           ========================================================================= */}
        <div>
          <FitAndMythsSection service={service} />
        </div>

        {/* =========================================================================
            SECTION 9 — FAQ (Modern Split-Layout FAQ)
           ========================================================================= */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">

            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#35C978] block">
                CLEAR ANSWERS
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Frequently <br />
                Asked <br />
                Questions
              </h2>
              <p className="text-sm text-[#c2e5d6] font-medium leading-relaxed">
                Direct insights on timelines, search intent targeting, and multi-location setups.
              </p>
            </div>

            {/* Right Column: Clean Accordion Rows */}
            <div ref={faqContainerRef} className="lg:col-span-7 space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                      ? "bg-[#073324] border-[#35C978] shadow-lg"
                      : "bg-[#073324]/80 border-[#166444] hover:border-[#35C978]/60"
                      }`}
                  >
                    <button
                      aria-expanded={isOpen}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                      onClick={() => toggleFaq(idx)}
                      type="button"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-[#35C978] font-mono font-black text-lg">
                          0{idx + 1}
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-white">
                          {faq.question}
                        </span>
                      </span>

                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen
                          ? "bg-[#35C978] border-[#35C978] text-[#031b13] rotate-45 shadow-[0_0_10px_#35C978]"
                          : "bg-[#031b13] border-[#166444] text-[#35C978]"
                          }`}
                      >
                        <Plus className="w-4 h-4 stroke-[3]" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-sm sm:text-base text-[#c2e5d6] leading-relaxed border-t border-[#166444] pt-4 font-medium animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </section>
        )}

        {/* Related Services */}
        {relatedServices && relatedServices.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-[#35C978] tracking-wider block">
                SYNERGISTIC SOLUTIONS
              </span>
              <h3 className="text-2xl font-black text-white">Pairs Well With</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="group rounded-2xl bg-[#073324]/80 border border-[#166444] hover:border-[#35C978] p-6 space-y-3 transition-all duration-300 block shadow-xl hover:scale-[1.02]"
                >
                  <span className="text-xs text-[#35C978] font-bold uppercase">
                    {rel.categoryName}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#35C978] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#c2e5d6] line-clamp-2 leading-relaxed font-medium">
                    {rel.heroSubtitle}
                  </p>
                  <div className="text-xs text-[#35C978] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5 pt-1">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION 10 — FINAL CTA BANNER (Glowing Emerald Background)
           ========================================================================= */}
        <section id="final-cta" ref={finalCtaRef} className="relative overflow-hidden rounded-3xl bg-[#031b13] border border-[#35C978]/40 p-10 sm:p-16 text-center text-white space-y-8 shadow-2xl">

          {/* Glowing Green Organic Visual Background */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#35C978]/25 blur-3xl"
            style={{ animation: "subtlePulse 4s ease-in-out infinite" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              See Where You're Losing Patients to{" "}
              <span className="text-[#35C978]">Search Rankings</span>
            </h2>

            <p className="text-base sm:text-xl text-[#c2e5d6] font-normal leading-relaxed max-w-2xl mx-auto">
              {service.cta.subtitle}
            </p>

            <div className="pt-2 flex justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#35C978] hover:bg-[#22e079] text-[#031b13] px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wider shadow-[0_0_35px_rgba(53,201,120,0.5)] transition-all duration-300 hover:scale-105"
              >
                <span>REQUEST A FREE SEO AUDIT</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#031b13]" />
              </Link>
            </div>
          </div>

        </section>

        {/* Footer info strip */}
        <footer className="pt-6 pb-4 border-t border-[#166444] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#c2e5d6]">
          <span>© {new Date().getFullYear()} MedGrow. All rights reserved.</span>
          <span>Healthcare Digital Marketing & Strategy</span>
        </footer>

      </div>
    </div>
  );
};

export default HealthcareSeoDetail;

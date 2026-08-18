import React, { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../Components/Hero";
import GrowthSection from "../Components/GrowthSection";
import LandingSections from "../Components/LandingSections";
import SocialMarketingVisual from "../Components/SocialMarketingVisual";
import {
  setupHeroGrowthAnimations,
  setupLandingContentAnimations,
} from "../Animations";

const Home = () => {
  const heroGrowthSectionRef = useRef(null);
  const landingSectionsRef = useRef(null);
  const sharedLaptopRef = useRef(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const heroGrowthCtx = setupHeroGrowthAnimations(
      heroGrowthSectionRef,
      sharedLaptopRef,
    );
    const landingCtx = setupLandingContentAnimations(landingSectionsRef);

    const refreshScroll = () => ScrollTrigger.refresh();
    const refreshTimer = window.setTimeout(refreshScroll, 350);
    window.addEventListener("load", refreshScroll);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", refreshScroll);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      heroGrowthCtx.revert();
      landingCtx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative isolate bg-[#050505]">
      <section
        ref={heroGrowthSectionRef}
        className="hero-growth-section relative min-h-[560vh] overflow-visible bg-[#050505] text-white"
      >
        <div id="growth" className="absolute top-[125vh] h-px w-px" />
        <div className="hero-growth-sticky sticky top-0 h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.16),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.12),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="hero-glow hero-glow-top absolute left-[-10%] top-[-8%] h-[30rem] w-[30rem] rounded-full bg-emerald-500/35 blur-[140px]" />
            <div className="hero-glow hero-glow-bottom absolute bottom-[-8%] right-[-8%] h-[32rem] w-[32rem] rounded-full bg-emerald-400/25 blur-[150px]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
          </div>

          <div
            ref={sharedLaptopRef}
            className="shared-laptop invisible pointer-events-none absolute left-1/2 top-[53%] z-40 w-[min(38rem,86vw)] opacity-0"
          >
            <SocialMarketingVisual />
          </div>

          <Hero />
          <GrowthSection />
        </div>
      </section>
      <LandingSections sectionRef={landingSectionsRef} />
    </main>
  );
};

export default Home;

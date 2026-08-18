import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupHeroGrowthAnimations = (sectionRef, laptopRef) => {
  const ctx = gsap.context(() => {
    const laptopElement = laptopRef.current;
    const growthCards = gsap.utils.toArray(".growth-card");
    const socialOrbitRings = gsap.utils.toArray(".shared-laptop .social-orbit-ring");
    const socialOrbitChips = gsap.utils.toArray(".shared-laptop .social-orbit-chip");
    const heroMedicalBubbles = gsap.utils.toArray(".hero-med-bubble");
    const cardDirection = (index) => (index % 2 === 0 ? -1 : 1);

    gsap.set(laptopElement, {
      xPercent: -50,
      yPercent: -50,
      y: "56vh",
      scale: 0.62,
      autoAlpha: 0,
      filter: "blur(16px)",
      transformOrigin: "center center",
      force3D: true,
    });

    gsap.set(".shared-laptop .social-person-img", {
      animation: "none",
      force3D: true,
    });

    gsap.set(".shared-laptop .social-person-img", {
      y: 16,
      scale: 0.98,
      transformOrigin: "50% 70%",
    });

    gsap.set(".growth-panel", { autoAlpha: 0 });
    gsap.set(".shared-laptop .social-orbit-system", {
      autoAlpha: 0,
      scale: 0.82,
      filter: "blur(8px)",
      force3D: true,
    });
    gsap.set(socialOrbitRings, {
      scale: 0.86,
      autoAlpha: 0,
      transformOrigin: "50% 50%",
    });
    gsap.set(socialOrbitChips, {
      scale: 0.7,
      autoAlpha: 0,
      transformOrigin: "50% 50%",
    });
    gsap.set(".growth-cards-stage", {
      autoAlpha: 0,
      y: 0,
      filter: "blur(8px)",
      force3D: true,
    });

    gsap.set(heroMedicalBubbles, {
      autoAlpha: 0,
      scale: 0.72,
      y: 28,
      filter: "blur(12px)",
      transformOrigin: "50% 50%",
      force3D: true,
    });

    gsap.set(".hero-med-thread", {
      autoAlpha: 0,
      scale: 0.9,
      filter: "blur(10px)",
      transformOrigin: "50% 50%",
    });

    growthCards.forEach((card, index) => {
      const direction = cardDirection(index);

      gsap.set(card, {
        xPercent: direction * 34,
        y: "38vh",
        rotate: direction * -5,
        scale: 0.94,
        autoAlpha: 0,
        filter: "blur(14px)",
        zIndex: growthCards.length - index,
        pointerEvents: "none",
        force3D: true,
      });
    });

    const introTl = gsap.timeline({ defaults: { ease: "power4.out" } });

    introTl
      .from(".hero-glow", { opacity: 0, scale: 0.78, duration: 1.2 })
      .to(
        ".hero-med-thread",
        {
          autoAlpha: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.15,
          stagger: 0.08,
        },
        "-=0.95",
      )
      .to(
        heroMedicalBubbles,
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.86,
          ease: "back.out(1.7)",
          stagger: {
            each: 0.08,
            from: "edges",
          },
        },
        "-=0.95",
      )
      .from(".hero-heading", { y: 70, opacity: 0, duration: 1 }, "-=0.75")
      .from(".hero-subtitle", { y: 35, opacity: 0, duration: 0.8 }, "-=0.55")
      .from(".hero-lead", { y: 28, opacity: 0, duration: 0.75 }, "-=0.5")
      .from(
        ".hero-cta",
        { y: 25, opacity: 0, scale: 0.96, duration: 0.7 },
        "-=0.45",
      );

    gsap.to(".hero-med-thread-left", {
      rotate: 360,
      duration: 40,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".hero-med-thread-right", {
      rotate: -360,
      duration: 46,
      repeat: -1,
      ease: "none",
    });

    heroMedicalBubbles.forEach((bubble, index) => {
      const core = bubble.querySelector(".hero-med-bubble-core");

      gsap.to(bubble, {
        y: index % 2 === 0 ? -10 : 10,
        x: index % 3 === 0 ? 6 : -6,
        rotate: index % 2 === 0 ? 2 : -2,
        scale: index % 2 === 0 ? 0.96 : 1.04,
        duration: 5.6 + index * 0.45,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      if (core) {
        gsap.to(core, {
          scale: index % 2 === 0 ? 1.06 : 0.94,
          duration: 3.2 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      gsap.to(bubble, {
        borderRadius:
          index % 2 === 0
            ? "58% 42% 48% 52% / 42% 58% 42% 58%"
            : "40% 60% 58% 42% / 60% 40% 56% 44%",
        duration: 5.8 + index * 0.35,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    gsap.to(".shared-laptop .social-orbit-track", {
      rotation: "+=360",
      duration: 24,
      repeat: -1,
      ease: "none",
    });

    gsap.to(socialOrbitChips, {
      rotation: "-=360",
      duration: 24,
      repeat: -1,
      ease: "none",
    });

    gsap.to(socialOrbitRings, {
      rotation: (index) => (index % 2 === 0 ? "+=360" : "-=360"),
      duration: 38,
      repeat: -1,
      ease: "none",
      stagger: 0.2,
    });

    gsap.to(socialOrbitChips, {
      filter: "brightness(1.35)",
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.18,
    });

    const scrollTl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        invalidateOnRefresh: true,
      },
    });

    scrollTl
      .to(".hero-copy", {
        yPercent: -18,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.88,
      })
      .to(
        ".hero-med-bubble",
        {
          yPercent: -20,
          scale: 0.84,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.72,
        },
        0,
      )
      .to(
        ".hero-med-thread",
        {
          opacity: 0,
          scale: 1.08,
          filter: "blur(10px)",
          duration: 0.72,
        },
        0,
      )
      .to(
        ".hero-glow-top",
        { x: 110, y: 95, scale: 1.05, duration: 0.9 },
        0,
      )
      .to(
        ".hero-glow-bottom",
        { x: -90, y: -80, scale: 1.1, duration: 0.9 },
        0,
      )
      .to(".growth-panel", { autoAlpha: 1, duration: 0.18 }, 0.08)
      .to(
        ".shared-laptop .social-orbit-system",
        {
          autoAlpha: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        },
        0.68,
      )
      .to(
        laptopElement,
        {
          y: "0vh",
          scale: 1,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 2.15,
          ease: "power3.out",
        },
        0.34,
      )
      .to(
        ".shared-laptop .social-person-img",
        { y: 0, scale: 1, duration: 1.25, ease: "power3.out" },
        0.8,
      )
      .to(
        socialOrbitRings,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.7)",
          stagger: 0.08,
        },
        0.82,
      )
      .to(
        socialOrbitChips,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.8)",
          stagger: 0.06,
        },
        1.05,
      )
      .to(
        ".growth-cards-stage",
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.45,
          ease: "power3.out",
        },
        1.8,
      );

    growthCards.forEach((card, index) => {
      const direction = cardDirection(index);
      const startAt = 2.75 + index * 1.7;

      scrollTl
        .to(
          card,
          {
            xPercent: 0,
            y: "-4vh",
            rotate: 0,
            scale: 1,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power4.out",
          },
          startAt,
        )
        .to(
          card,
          {
            y: "-28vh",
            scale: 1.01,
            duration: 1.15,
            ease: "sine.inOut",
          },
          startAt + 0.95,
        )
        .to(
          card,
          {
            xPercent: direction * 18,
            y: "-72vh",
            rotate: direction * 2.5,
            scale: 0.95,
            autoAlpha: 0,
            filter: "blur(14px)",
            duration: 1,
            ease: "power2.in",
          },
          startAt + 2.18,
        );
    });

    scrollTl
      .to(
        ".growth-cards-stage",
        {
          autoAlpha: 0,
          y: "-8vh",
          filter: "blur(8px)",
          duration: 0.42,
          ease: "power2.in",
        },
        10.8,
      )
      .to(
        ".shared-laptop .social-orbit-system",
        {
          autoAlpha: 0,
          scale: 0.94,
          filter: "blur(8px)",
          duration: 0.72,
          ease: "power2.inOut",
        },
        10.8,
      )
      .to(
        laptopElement,
        {
          y: "-8vh",
          scale: 0.92,
          autoAlpha: 0,
          filter: "blur(10px)",
          duration: 0.78,
          ease: "power2.inOut",
        },
        10.88,
      )
      .to(
        ".growth-panel",
        {
          autoAlpha: 0,
          duration: 0.55,
          ease: "power2.inOut",
        },
        11.08,
      );
  }, sectionRef);

  return ctx;
};

export const setupLandingContentAnimations = (sectionRef) => {
  const ctx = gsap.context(() => {
    const animateIn = (target, fromVars = {}, toVars = {}) => {
      gsap.fromTo(
        target,
        {
          autoAlpha: 0,
          y: 64,
          filter: "blur(10px)",
          ...fromVars,
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          ease: "power3.out",
          ...toVars,
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
            ...(toVars.scrollTrigger || {}),
          },
        },
      );
    };

    gsap.to(".mg-grid", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".mg-aurora-one", {
      x: -140,
      y: 220,
      scale: 1.16,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".mg-aurora-two", {
      x: -130,
      y: -220,
      scale: 0.9,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.utils.toArray(".mg-reveal").forEach((item) => {
      if (
        item.matches(
          ".stat-card,.ecosystem-card,.comparison-table,.comparison-row,.method-card,.audience-chip,.pillar-card,.scenario-card,.definition-card,.faq-row,.cta-panel",
        )
      ) {
        return;
      }

      animateIn(item);
    });

    gsap.utils.toArray(".mg-split").forEach((line) => {
      gsap.fromTo(
        line.querySelectorAll(".split-word > span"),
        { yPercent: 110, rotateX: -32 },
        {
          yPercent: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.035,
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    });

    gsap.utils.toArray(".stat-card").forEach((card, index) => {
      const value = card.querySelector(".stat-value");
      const counter = { value: 0 };
      const target = Number(value.dataset.target || 0);

      animateIn(
        card,
        { y: 80, scale: 0.94, rotateX: -8 },
        { delay: index * 0.08 },
      );

      gsap.to(counter, {
        value: target,
        duration: 1.1,
        ease: "power2.out",
        onUpdate: () => {
          value.textContent = Math.round(counter.value).toString();
        },
        scrollTrigger: {
          trigger: card,
          start: "top 78%",
          toggleActions: "play none none reset",
        },
      });
    });

    gsap.utils.toArray(".ecosystem-card").forEach((card, index) => {
      animateIn(
        card,
        {
          x: index % 2 === 0 ? 80 : -80,
          y: 40,
          rotate: index % 2 === 0 ? 2 : -2,
        },
        {
          x: 0,
          rotate: 0,
          delay: index * 0.08,
        },
      );
    });

    animateIn(".comparison-table", {
      clipPath: "inset(0 50% 0 50% round 1.5rem)",
    }, {
      clipPath: "inset(0 0% 0 0% round 1.5rem)",
    });

    gsap.utils.toArray(".comparison-row").forEach((row, index) => {
      gsap.fromTo(
        row.children,
        { x: index % 2 === 0 ? -50 : 50, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    });

    const methodCards = gsap.utils.toArray(".method-card");

    const setActiveMethodStep = (activeIndex) => {
      methodCards.forEach((card, index) => {
        card.classList.toggle("is-active", index === activeIndex);
      });
    };

    methodCards.forEach((card, index) => {
      animateIn(
        card,
        {
          xPercent: index % 2 === 0 ? 10 : -10,
          rotate: index % 2 === 0 ? 1.5 : -1.5,
          scale: 0.96,
        },
        {
          xPercent: 0,
          rotate: 0,
          scale: 1,
        },
      );

      ScrollTrigger.create({
        trigger: card,
        start: "top 58%",
        end: "bottom 42%",
        onEnter: () => setActiveMethodStep(index),
        onEnterBack: () => setActiveMethodStep(index),
      });
    });

    if (methodCards.length) {
      setActiveMethodStep(0);

      gsap.fromTo(
        ".methodology-step-meter-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".method-track",
            start: "top 58%",
            end: "bottom 42%",
            scrub: true,
          },
        },
      );

      gsap.to(".methodology-image", {
        yPercent: -8,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".methodology-pin",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".methodology-image-card",
        {
          y: 36,
          rotateX: -5,
          scale: 0.96,
          filter: "blur(10px)",
          autoAlpha: 0,
        },
        {
          y: 0,
          rotateX: 0,
          scale: 1,
          filter: "blur(0px)",
          autoAlpha: 1,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".methodology-image-sticky",
            start: "top 84%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    }

    gsap.utils.toArray(".audience-chip").forEach((chip, index) => {
      animateIn(
        chip,
        {
          x: index % 3 === 0 ? -60 : index % 3 === 1 ? 0 : 60,
          y: 42,
        },
        { x: 0, delay: index * 0.03 },
      );
    });

    gsap.utils.toArray(".pillar-card").forEach((card, index) => {
      animateIn(
        card,
        {
          y: 90,
          rotateY: -10,
          scale: 0.95,
        },
        {
          rotateY: 0,
          scale: 1,
          delay: index * 0.06,
        },
      );
    });

    animateIn(".scenario-card", { x: -100, scale: 0.94 }, { x: 0, scale: 1 });
    animateIn(".definition-card", { x: 80, scale: 0.94 }, { x: 0, scale: 1 });

    gsap.utils.toArray(".faq-row").forEach((row, index) => {
      animateIn(
        row,
        { xPercent: -8, y: 36 },
        { xPercent: 0, delay: index * 0.06 },
      );
    });

    animateIn(".faq-showcase-heading", { y: 70, scale: 0.96 }, { y: 0, scale: 1 });
    animateIn(".faq-media-wrap", { x: 110, rotate: 3, scale: 0.92 }, { x: 0, rotate: 0, scale: 1 });

    gsap.to(".faq-media-card img", {
      scale: 1.12,
      ease: "none",
      scrollTrigger: {
        trigger: ".faq-showcase",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    animateIn(
      ".cta-panel",
      { y: 90, scale: 0.95 },
      {
        scale: 1,
        boxShadow:
          "0 0 120px rgba(34,197,94,0.24), inset 0 0 80px rgba(34,197,94,0.14)",
      },
    );
  }, sectionRef);

  return ctx;
};

export const setupAboutPageAnimations = () => {
  const ctx = gsap.context((self) => {
    const page = document.querySelector(".about-page");
    const heroVisual = document.querySelector(".about-hero-visual");
    const heroImageSlots = gsap.utils.toArray(".about-hero-visual .about-image-slot");
    const heroOrbits = gsap.utils.toArray(".about-hero-visual .about-orbit");

    const reveal = (target, fromVars = {}, toVars = {}) => {
      const scrollTriggerVars = toVars.scrollTrigger || {};
      const animationVars = { ...toVars };
      delete animationVars.scrollTrigger;

      gsap.fromTo(
        target,
        {
          autoAlpha: 0,
          y: 70,
          filter: "blur(12px)",
          ...fromVars,
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          ease: "power3.out",
          ...animationVars,
          scrollTrigger: {
            trigger: target,
            start: "top 88%",
            toggleActions: "play none none reverse",
            ...scrollTriggerVars,
          },
        },
      );
    };

    gsap.set(".about-hero-title,.about-hero-copy,.about-hero-actions,.about-kicker", {
      autoAlpha: 0,
      y: 36,
      filter: "blur(10px)",
    });

    gsap.timeline({ defaults: { ease: "power4.out" } })
      .to(".about-kicker", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.65 })
      .to(".about-hero-title", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 }, "-=0.35")
      .to(".about-hero-copy", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.82 }, "-=0.58")
      .to(".about-hero-actions", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.7 }, "-=0.48")
      .fromTo(
        ".about-hero-visual",
        { autoAlpha: 0, y: 80, rotate: -3, scale: 0.94, filter: "blur(14px)" },
        { autoAlpha: 1, y: 0, rotate: 0, scale: 1, filter: "blur(0px)", duration: 1.05 },
        "-=0.62",
      );

    if (page && heroVisual) {
      const moveX = gsap.quickTo(heroVisual, "x", { duration: 0.8, ease: "power3.out" });
      const moveY = gsap.quickTo(heroVisual, "y", { duration: 0.8, ease: "power3.out" });
      const rotateX = gsap.quickTo(heroVisual, "rotateX", { duration: 0.8, ease: "power3.out" });
      const rotateY = gsap.quickTo(heroVisual, "rotateY", { duration: 0.8, ease: "power3.out" });

      const moveImageA = heroImageSlots[0]
        ? gsap.quickTo(heroImageSlots[0], "x", { duration: 1, ease: "power3.out" })
        : null;
      const moveImageB = heroImageSlots[1]
        ? gsap.quickTo(heroImageSlots[1], "x", { duration: 1, ease: "power3.out" })
        : null;

      const onMouseMove = (event) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        moveX(x * 18);
        moveY(y * 14);
        rotateX(y * -5);
        rotateY(x * 5);
        if (moveImageA) moveImageA(x * -16);
        if (moveImageB) moveImageB(x * 16);
      };

      page.addEventListener("mousemove", onMouseMove);
      self.add(() => page.removeEventListener("mousemove", onMouseMove));
    }

    gsap.to(".about-noise", {
      backgroundPosition: "140px 220px",
      ease: "none",
      scrollTrigger: {
        trigger: ".about-page",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.utils.toArray(".about-reveal").forEach((item, index) => {
      if (
        item.classList.contains("about-hero-visual") ||
        item.classList.contains("about-image-slot") ||
        item.classList.contains("about-story-card") ||
        item.classList.contains("about-reason") ||
        item.classList.contains("about-belief") ||
        item.classList.contains("about-belief-image") ||
        item.classList.contains("about-rollout-card") ||
        item.classList.contains("about-team-pillar")
      ) {
        return;
      }

      const isSectionHeading = Boolean(item.querySelector(".about-split"));

      reveal(
        item,
        isSectionHeading ? { y: 34, filter: "blur(8px)" } : {},
        {
          delay: isSectionHeading ? 0 : Math.min(index * 0.012, 0.1),
          scrollTrigger: {
            start: isSectionHeading ? "top 94%" : "top 88%",
          },
        },
      );
    });

    gsap.utils.toArray(".about-split").forEach((line) => {
      gsap.fromTo(
        line.querySelectorAll(".about-word > span"),
        { yPercent: 112, rotateX: -35 },
        {
          yPercent: 0,
          rotateX: 0,
          duration: 0.78,
          ease: "power4.out",
          stagger: 0.032,
          scrollTrigger: {
            trigger: line,
            start: "top 94%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    gsap.utils.toArray(".about-image-slot img").forEach((image) => {
      const slot = image.closest(".about-image-slot");

      gsap.fromTo(
        slot,
        {
          clipPath: "inset(12% 10% 12% 10% round 1.5rem)",
          scale: 0.96,
          filter: "blur(12px)",
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 1.5rem)",
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slot,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.to(image, {
        yPercent: -14,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: slot,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.to(".about-orbit-one", {
      rotate: 360,
      duration: 28,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".about-orbit-two", {
      rotate: -360,
      duration: 36,
      repeat: -1,
      ease: "none",
    });

    heroOrbits.forEach((orbit, index) => {
      gsap.to(orbit, {
        scale: index === 0 ? 1.08 : 0.94,
        duration: 3.2 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    gsap.utils.toArray(".about-stat").forEach((card) => {
      const value = card.querySelector(".about-stat-value");
      const counter = { value: 0 };
      const target = Number(value.dataset.target || 0);

      gsap.to(counter, {
        value: target,
        duration: 1.25,
        ease: "power2.out",
        onUpdate: () => {
          value.textContent = Math.round(counter.value).toString();
        },
        scrollTrigger: {
          trigger: card,
          start: "top 78%",
          toggleActions: "play none none reset",
        },
      });

      gsap.fromTo(
        card,
        { scale: 0.92, letterSpacing: "0.02em" },
        {
          scale: 1,
          letterSpacing: "0em",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 45%",
            scrub: true,
          },
        },
      );
    });

    gsap.utils.toArray(".about-story-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 90,
          rotate: index % 2 === 0 ? -2 : 2,
          scale: 0.94,
          autoAlpha: 0,
          filter: "blur(12px)",
        },
        {
          y: 0,
          rotate: 0,
          scale: 1,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.to(card, {
        yPercent: index % 2 === 0 ? -8 : 8,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray(".about-reason").forEach((card, index) => {
      const number = card.querySelector(".about-reason-number");

      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          x: 90,
          filter: "blur(12px)",
        },
        {
          autoAlpha: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-reason-system",
            start: "top 74%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.075,
        },
      );

      gsap.fromTo(
        number,
        { scale: 0.6, rotate: -90 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    gsap.fromTo(
      ".about-system-beam",
      { scaleY: 0, autoAlpha: 0 },
      {
        scaleY: 1,
        autoAlpha: 1,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-reason-system",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.utils.toArray(".about-compare-row").forEach((row, index) => {
      gsap.fromTo(
        row.children,
        {
          xPercent: index % 2 === 0 ? -12 : 12,
          autoAlpha: 0,
          clipPath: "inset(0 100% 0 0)",
        },
        {
          xPercent: 0,
          autoAlpha: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: row,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        row,
        { "--line-scale": 0 },
        {
          "--line-scale": 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    gsap.utils.toArray(".about-belief").forEach((section, index) => {
      const copy = section.querySelector(".about-belief-copy");
      const image = section.querySelector(".about-belief-image");
      const indexText = section.querySelector(".about-belief-index");

      gsap.fromTo(
        copy,
        { x: index % 2 === 0 ? -80 : 80, autoAlpha: 0, filter: "blur(12px)" },
        {
          x: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        image,
        {
          x: index % 2 === 0 ? 90 : -90,
          y: 40,
          rotate: index % 2 === 0 ? 2 : -2,
          autoAlpha: 0,
          filter: "blur(14px)",
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.to(indexText, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray(".about-rollout-card").forEach((card, index) => {
      const marker = card.querySelector(".about-rollout-marker span");

      gsap.fromTo(
        card,
        { xPercent: index % 2 === 0 ? 10 : -10, autoAlpha: 0, filter: "blur(10px)" },
        {
          xPercent: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.86,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        marker,
        { scale: 0.72, rotate: -45, autoAlpha: 0 },
        {
          scale: 1,
          rotate: 0,
          autoAlpha: 1,
          duration: 0.72,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        card,
        { "--rollout-line": 0 },
        {
          "--rollout-line": 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    gsap.fromTo(
      ".about-rollout-progress",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-rollout",
          start: "top 78%",
          end: "bottom 62%",
          scrub: true,
        },
      },
    );

    gsap.utils.toArray(".about-team-pillar").forEach((pillar, index) => {
      gsap.fromTo(
        pillar,
        { y: 90, rotateY: -16, autoAlpha: 0 },
        {
          y: 0,
          rotateY: 0,
          autoAlpha: 1,
          duration: 0.78,
          ease: "power3.out",
          delay: index * 0.04,
          scrollTrigger: {
            trigger: pillar,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.to(pillar, {
        yPercent: index % 2 === 0 ? -8 : 8,
        ease: "none",
        scrollTrigger: {
          trigger: pillar,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  });

  return ctx;
};

export const setupContactPageAnimations = () => {
  const ctx = gsap.context((self) => {
    const page = document.querySelector(".contact-page");
    const visual = document.querySelector(".contact-visual");

    const reveal = (target, fromVars = {}, toVars = {}) => {
      gsap.fromTo(
        target,
        {
          autoAlpha: 0,
          y: 68,
          filter: "blur(12px)",
          ...fromVars,
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          ease: "power3.out",
          ...toVars,
          scrollTrigger: {
            trigger: target,
            start: "top 84%",
            toggleActions: "play none none reverse",
            ...(toVars.scrollTrigger || {}),
          },
        },
      );
    };

    gsap.set(".contact-kicker,.contact-title,.contact-lead,.contact-hero-actions", {
      autoAlpha: 0,
      y: 36,
      filter: "blur(10px)",
    });

    gsap.timeline({ defaults: { ease: "power4.out" } })
      .to(".contact-kicker", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.65 })
      .to(".contact-title", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1.05 }, "-=0.35")
      .to(".contact-lead", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.82 }, "-=0.58")
      .to(".contact-hero-actions", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.7 }, "-=0.5")
      .fromTo(
        ".contact-visual",
        { autoAlpha: 0, y: 90, rotate: 2.5, scale: 0.94, filter: "blur(16px)" },
        { autoAlpha: 1, y: 0, rotate: 0, scale: 1, filter: "blur(0px)", duration: 1.1 },
        "-=0.62",
      );

    if (page && visual) {
      const moveX = gsap.quickTo(visual, "x", { duration: 0.9, ease: "power3.out" });
      const moveY = gsap.quickTo(visual, "y", { duration: 0.9, ease: "power3.out" });
      const rotateX = gsap.quickTo(visual, "rotateX", { duration: 0.9, ease: "power3.out" });
      const rotateY = gsap.quickTo(visual, "rotateY", { duration: 0.9, ease: "power3.out" });

      const onMouseMove = (event) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        moveX(x * 16);
        moveY(y * 12);
        rotateX(y * -4);
        rotateY(x * 4);
      };

      page.addEventListener("mousemove", onMouseMove);
      self.add(() => page.removeEventListener("mousemove", onMouseMove));
    }

    gsap.to(".contact-grid", {
      backgroundPosition: "130px 210px",
      ease: "none",
      scrollTrigger: {
        trigger: ".contact-page",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.to(".contact-orbit-a", {
      rotate: 360,
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".contact-orbit-b", {
      rotate: -360,
      duration: 38,
      repeat: -1,
      ease: "none",
    });

    gsap.utils.toArray(".contact-mini-step").forEach((step, index) => {
      gsap.fromTo(
        step,
        { x: 36, autoAlpha: 0, filter: "blur(8px)" },
        {
          x: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.72,
          ease: "power3.out",
          delay: index * 0.08,
        },
      );
    });

    gsap.utils.toArray(".contact-reveal").forEach((item, index) => {
      if (
        item.classList.contains("contact-visual") ||
        item.classList.contains("contact-flow-step") ||
        item.classList.contains("contact-map-stage") ||
        item.classList.contains("contact-detail-row")
      ) {
        return;
      }

      reveal(item, {}, { delay: Math.min(index * 0.018, 0.14) });
    });

    gsap.fromTo(
      ".contact-route-line",
      { scaleY: 0, autoAlpha: 0 },
      {
        scaleY: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-flow",
          start: "top 78%",
          end: "bottom 58%",
          scrub: true,
        },
      },
    );

    gsap.utils.toArray(".contact-flow-step").forEach((step, index) => {
      const marker = step.querySelector(".contact-flow-index");

      reveal(
        step,
        { xPercent: index % 2 === 0 ? 8 : -8, y: 36 },
        { xPercent: 0, delay: index * 0.06 },
      );

      gsap.fromTo(
        marker,
        { scale: 0.72, rotate: -40, autoAlpha: 0 },
        {
          scale: 1,
          rotate: 0,
          autoAlpha: 1,
          duration: 0.72,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: step,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    gsap.utils.toArray(".contact-channel").forEach((channel, index) => {
      reveal(channel, { x: 48, y: 20 }, { x: 0, delay: index * 0.06 });
    });

    gsap.fromTo(
      ".contact-map-stage",
      {
        autoAlpha: 0,
        y: 80,
        rotateX: -8,
        filter: "blur(14px)",
      },
      {
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-map-stage",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      ".contact-map-path",
      { scaleX: 0, autoAlpha: 0 },
      {
        scaleX: 1,
        autoAlpha: 1,
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".contact-map-stage",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.utils.toArray(".contact-map-city").forEach((city, index) => {
      gsap.fromTo(
        city,
        { scale: 0.72, autoAlpha: 0, y: 24 },
        {
          scale: 1,
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          ease: "back.out(1.9)",
          delay: index * 0.07,
          scrollTrigger: {
            trigger: ".contact-map-stage",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    gsap.utils.toArray(".contact-detail-row").forEach((row, index) => {
      reveal(
        row,
        {
          x: 62,
          y: 22,
          scale: 0.96,
        },
        {
          x: 0,
          scale: 1,
          delay: index * 0.055,
        },
      );
    });

    gsap.to(".contact-image-wrap img,.contact-map img,.contact-cta img", {
      yPercent: -12,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".contact-page",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".contact-map-pulse", {
      scale: 1.75,
      autoAlpha: 0,
      duration: 1.8,
      repeat: -1,
      ease: "power2.out",
    });
  });

  return ctx;
};

export const setupServicesOverviewAnimations = (containerRef) => {
  if (!containerRef.current) return;
  const ctx = gsap.context(() => {
    // Hero Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(".services-hero-badge", {
      scale: 0.75,
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.8,
    })
      .from(
        ".services-hero-title",
        {
          y: 40,
          opacity: 0,
          filter: "blur(12px)",
          duration: 1,
        },
        "-=0.5"
      )
      .from(
        ".services-hero-desc",
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .from(
        ".services-hero-pillars",
        {
          y: 20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.6,
        },
        "-=0.4"
      );

    // Stagger Service Cards with 3D Reveal
    gsap.utils.toArray(".service-card-item").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.94,
          rotateX: -8,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // High-performance 60fps 3D tilt using gsap.quickTo (eliminates mousemove lag)
      const xTo = gsap.quickTo(card, "rotateY", { duration: 0.2, ease: "power1.out" });
      const yTo = gsap.quickTo(card, "rotateX", { duration: 0.2, ease: "power1.out" });
      const scaleTo = gsap.quickTo(card, "scale", { duration: 0.2, ease: "power1.out" });

      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        xTo(x * 0.02);
        yTo(-y * 0.02);
        scaleTo(1.015);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
        scaleTo(1);
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    // Setting Difference Cards Stagger
    gsap.utils.toArray(".setting-card-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });
  }, containerRef);

  return ctx;
};

export const setupServiceDetailAnimations = (containerRef) => {
  if (!containerRef.current) return;
  const ctx = gsap.context(() => {
    // Hero Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(".sd-hero-badge", {
      opacity: 0,
      scale: 0.75,
      duration: 0.7,
      ease: "back.out(1.8)",
    })
      .from(
        ".sd-hero-title",
        {
          opacity: 0,
          y: 40,
          filter: "blur(12px)",
          duration: 0.9,
        },
        "-=0.4"
      )
      .from(
        ".sd-hero-subtitle",
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
        },
        "-=0.5"
      )
      .from(
        ".sd-hero-desc",
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
        },
        "-=0.5"
      );

    // Advantage Section Scroll Animation
    gsap.fromTo(
      "#advantage-section",
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#advantage-section",
          start: "top 85%",
        },
      }
    );

    // Stat Cards Counter Stagger Reveal
    gsap.utils.toArray(".sd-stat-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 45, scale: 0.92, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.7,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });

    // Feature Cards Stagger Reveal
    gsap.utils.toArray(".sd-feature-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 35, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: (index % 2) * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        }
      );
    });

    // Timeline Rollout Steps Reveal
    gsap.utils.toArray(".sd-timeline-step").forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: -40, filter: "blur(8px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.75,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
          },
        }
      );
    });

    // Myth Buster Cards Reveal
    gsap.utils.toArray(".sd-myth-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    // FAQ Accordion Rows Reveal
    gsap.utils.toArray(".about-faq").forEach((faqRow, index) => {
      gsap.fromTo(
        faqRow,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRow,
            start: "top 88%",
          },
        }
      );
    });
  }, containerRef);

  return ctx;
};




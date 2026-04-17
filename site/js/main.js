/* =========================================================
   CK Custom Wall Design — scroll choreography
   Depends on: GSAP 3 + ScrollTrigger + SplitText (fallback)
   ========================================================= */

(function () {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Nav scroll state ---------- */
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 20) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu toggle ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Year in footer ---------- */
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Bail out early if GSAP missing or reduced motion ---------- */
  if (reduced || typeof window.gsap === "undefined") {
    // Show all reveal elements immediately
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
    return;
  }

  const { gsap } = window;
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  /* ---------- Hero word/char split (manual to avoid SplitText license) ---------- */
  const heroH1 = document.querySelector(".hero h1");
  if (heroH1 && heroH1.dataset.split !== "done") {
    const text = heroH1.textContent.trim();
    heroH1.innerHTML = "";
    text.split(" ").forEach((word, wi, arr) => {
      const span = document.createElement("span");
      span.className = "word";
      span.style.overflow = "hidden";
      const inner = document.createElement("span");
      inner.className = "word-inner";
      inner.style.display = "inline-block";
      inner.textContent = word;
      span.appendChild(inner);
      heroH1.appendChild(span);
      if (wi < arr.length - 1) heroH1.appendChild(document.createTextNode(" "));
    });
    heroH1.dataset.split = "done";

    gsap.from(".hero h1 .word-inner", {
      yPercent: 110,
      rotate: 4,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.2,
    });
  }

  /* ---------- Hero sub + actions ---------- */
  gsap.from(".hero-eyebrow, .hero-sub, .hero-actions, .hero-scroll-hint, .hero-mark", {
    y: 24,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.6,
  });

  /* ---------- Hero asset parallax + subtle reveal ---------- */
  const heroAsset = document.querySelector(".hero-asset");
  if (heroAsset && window.ScrollTrigger) {
    gsap.from(heroAsset, { opacity: 0, scale: 0.96, duration: 1.4, delay: 0.4, ease: "power2.out" });
    gsap.to(heroAsset, {
      yPercent: 18,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  /* ---------- Generic reveal-on-scroll ---------- */
  if (window.ScrollTrigger) {
    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      });
    });

    /* ---------- Section eyebrow + heading entrance ---------- */
    gsap.utils.toArray("[data-animate='head']").forEach(group => {
      const items = group.querySelectorAll(".eyebrow, h2, .lede, .section-head-right, p");
      gsap.from(items, {
        y: 36,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: { trigger: group, start: "top 80%" },
      });
    });

    /* ---------- Trust bar count / reveal ---------- */
    gsap.from(".trust-item", {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: ".trust", start: "top 80%" },
    });

    /* ---------- Services cards ---------- */
    gsap.from(".service-card", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.07,
      scrollTrigger: { trigger: ".services-grid", start: "top 78%" },
    });

    /* ---------- Method steps ---------- */
    gsap.utils.toArray(".method-step").forEach((step, i) => {
      gsap.from(step, {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: i * 0.15,
        scrollTrigger: { trigger: ".method-steps", start: "top 75%" },
      });
    });

    /* ---------- Portfolio tiles ---------- */
    gsap.utils.toArray(".p-tile").forEach((tile, i) => {
      gsap.from(tile, {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
        delay: (i % 3) * 0.08,
        scrollTrigger: { trigger: tile, start: "top 88%" },
      });
      // subtle parallax on image
      const img = tile.querySelector("img");
      if (img) {
        gsap.to(img, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: tile, start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    });

    /* ---------- Founders block ---------- */
    gsap.from(".founders-portrait", {
      x: -40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: ".founders", start: "top 75%" },
    });
    gsap.from(".founders-copy > *", {
      x: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: ".founders", start: "top 75%" },
    });

    /* ---------- Pricing cards ---------- */
    gsap.from(".price-card", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: ".pricing-grid", start: "top 80%" },
    });

    /* ---------- Quote ---------- */
    gsap.from(".quote q, .quote .attr", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: ".quote", start: "top 80%" },
    });

    /* ---------- Press ---------- */
    gsap.from(".press-logos > *", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: ".press", start: "top 85%" },
    });

    /* ---------- Technique rows (services/portfolio list) ---------- */
    gsap.utils.toArray(".tech-row").forEach((row, i) => {
      gsap.from(row, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.04,
        scrollTrigger: { trigger: row, start: "top 88%" },
      });
    });

    /* ---------- Final CTA ---------- */
    gsap.from(".final-cta h2, .final-cta p, .final-cta .btn", {
      y: 40,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: ".final-cta", start: "top 80%" },
    });
  }

  /* ---------- Magnetic CTA (very light) ---------- */
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.15, y: y * 0.2, duration: 0.4, ease: "power3.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
    });
  });
})();

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroVisual from "./HeroVisual";
import Stats from "./Stats";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 }
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 45 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.35"
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.45"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.35"
        );

      // Main scroll-driven visual.
      if (visualRef.current) {
        gsap.to(visualRef.current, {
          y: -120,
          x: 40,
          rotate: 8,
          scale: 0.82,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // Content gently moves upward while scrolling.
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -80,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "70% top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="hero-section relative min-h-[100svh] overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1400px] items-center px-6 pb-20 pt-28 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
          {/* LEFT */}
          <div className="max-w-3xl">
            <span
              ref={eyebrowRef}
              className="mb-7 inline-flex border border-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/45"
            >
              Creative Digital Experience
            </span>

            <h1
              ref={headlineRef}
              className="hero-title text-balance text-[clamp(3.2rem,8vw,7.8rem)] font-light uppercase leading-[0.88] tracking-[-0.045em] text-white"
            >
              Welcome
              <span className="block hero-accent mt-2">
                Itz Fizz
              </span>
            </h1>

            <p
              ref={subtextRef}
              className="mt-8 max-w-xl text-sm leading-7 text-white/50 sm:text-base"
            >
              A scroll-driven digital experience where every movement becomes
              part of the interface. Crafted with precision, powered by
              motion.
            </p>

            <div
              ref={ctaRef}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#impact"
                className="hero-button group"
              >
                Explore Experience
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#impact"
                className="hero-secondary-button"
              >
                View Impact
              </a>
            </div>

            {/* Desktop mini label */}
            <div className="mt-16 hidden items-center gap-4 lg:flex">
              <span className="h-px w-12 bg-white/20" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                Scroll to discover
              </span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div
              ref={visualRef}
              className="w-full max-w-[520px] sm:max-w-[580px]"
            >
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-8 left-0 z-20 w-full px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] items-end justify-between gap-8">
          <Stats />

          <div className="hidden items-center gap-3 md:flex">
            <span className="text-[9px] uppercase tracking-[0.28em] text-white/30">
              Scroll
            </span>

            <div className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
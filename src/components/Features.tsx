"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    number: "01",
    title: "MOTION",
    description:
      "Scroll-driven interactions and fluid movement that respond directly to user input, creating an organic connection between gesture and visual feedback.",
  },
  {
    number: "02",
    title: "PERFORMANCE",
    description:
      "GPU-accelerated animations using transform and opacity properties, ensuring buttery-smooth 60fps rendering across devices and browsers.",
  },
  {
    number: "03",
    title: "EXPERIENCE",
    description:
      "Responsive, accessible, and polished interaction design that adapts gracefully from desktop to mobile while respecting user preferences.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <span className="text-[11px] tracking-[0.25em] uppercase text-muted mb-16 block">
          Core Principles
        </span>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {FEATURES.map((feature) => (
            <article
              key={feature.number}
              className="feature-card group bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-surface-light cursor-default"
            >
              <span className="text-[11px] tracking-[0.2em] text-accent/60 font-[family-name:var(--font-display)]">
                {feature.number}
              </span>

              <h3 className="font-[family-name:var(--font-display)] text-lg tracking-[0.15em] font-light text-foreground mt-6 mb-4">
                {feature.title}
              </h3>

              <p className="text-[13px] leading-relaxed text-muted">
                {feature.description}
              </p>

              {/* Subtle bottom accent line on hover */}
              <div className="mt-8 h-px bg-border group-hover:bg-accent/30 transition-colors duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

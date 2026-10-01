"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 78, suffix: "%", label: "Creative Impact" },
  { value: 92, suffix: "%", label: "Performance" },
  { value: 96, suffix: "%", label: "Satisfaction" },
];

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.from(".impact-line", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Counter animation
      STATS.forEach((stat, i) => {
        const el = sectionRef.current?.querySelector(
          `[data-stat-index="${i}"]`
        );
        if (!el) return;

        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.value,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(counter.val) + stat.suffix;
          },
        });
      });

      // Stat cards stagger
      gsap.from(".impact-stat-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".impact-stats-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16"
    >
      {/* Large typography */}
      <div className="max-w-5xl mx-auto mb-20 md:mb-28">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.06em] text-foreground leading-[1.15]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="impact-line block">DESIGNED TO MOVE.</span>
          <span className="impact-line block text-accent mt-2">
            BUILT TO IMPACT.
          </span>
        </h2>
      </div>

      {/* Stats grid */}
      <div className="impact-stats-grid grid grid-cols-1 md:grid-cols-3 gap-px max-w-4xl mx-auto bg-border">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="impact-stat-card bg-background p-10 md:p-14 text-center"
          >
            <span
              data-stat-index={i}
              className="block text-5xl md:text-6xl font-light text-foreground tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              0{stat.suffix}
            </span>
            <span className="block text-[11px] tracking-[0.15em] uppercase text-muted mt-4">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

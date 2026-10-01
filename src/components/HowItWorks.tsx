"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { label: "SCROLL", icon: "↕" },
  { label: "SCROLL PROGRESS", icon: "%" },
  { label: "GSAP / SCROLLTRIGGER", icon: "⚡" },
  { label: "VISUAL TRANSFORMATION", icon: "◆" },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".how-step", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".how-connector", {
        scaleY: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
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
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <span className="text-[11px] tracking-[0.25em] uppercase text-muted mb-6 block text-center">
          How It Works
        </span>

        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light tracking-[0.08em] text-foreground text-center mb-20">
          From Gesture to Motion
        </h2>

        {/* Flow diagram */}
        <div className="flex flex-col items-center gap-0">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center">
              <div className="how-step flex flex-col items-center py-4">
                <span className="text-2xl mb-3 text-accent/70">
                  {step.icon}
                </span>
                <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-foreground text-center">
                  {step.label}
                </span>
              </div>

              {i < STEPS.length - 1 && (
                <div className="how-connector w-px h-12 bg-gradient-to-b from-border to-border/30 origin-top" />
              )}
            </div>
          ))}
        </div>

        {/* Explanation */}
        <p className="text-center text-[13px] text-muted leading-relaxed mt-16 max-w-md mx-auto">
          The scroll position is captured by GSAP ScrollTrigger and mapped
          directly to CSS transform properties — creating a smooth, performant,
          scroll-controlled animation without layout recalculation.
        </p>
      </div>
    </section>
  );
}

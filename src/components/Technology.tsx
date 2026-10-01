"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TECH = [
  { name: "Next.js", detail: "Framework" },
  { name: "React", detail: "UI Library" },
  { name: "TypeScript", detail: "Language" },
  { name: "Tailwind CSS", detail: "Styling" },
  { name: "GSAP", detail: "Animation" },
  { name: "ScrollTrigger", detail: "Scroll Control" },
];

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
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
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <span className="text-[11px] tracking-[0.25em] uppercase text-muted mb-16 block">
          Technology
        </span>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {TECH.map((tech) => (
            <div
              key={tech.name}
              className="tech-item bg-background p-8 md:p-10 group"
            >
              <span className="block font-[family-name:var(--font-display)] text-base md:text-lg tracking-[0.1em] text-foreground font-light">
                {tech.name}
              </span>
              <span className="block text-[11px] tracking-[0.15em] uppercase text-muted mt-2">
                {tech.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

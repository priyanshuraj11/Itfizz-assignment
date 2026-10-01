"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  {
    value: "78%",
    label: "Creative Impact",
  },
  {
    value: "92%",
    label: "Performance",
  },
  {
    value: "96%",
    label: "Satisfaction",
  },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-stat",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.14,
          delay: 0.9,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 divide-x divide-white/[0.08]"
    >
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="hero-stat min-w-[90px] px-4 first:pl-0 sm:min-w-[120px] sm:px-7 md:min-w-[145px]"
        >
          <div className="font-display text-2xl font-light tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
            {stat.value}
          </div>

          <div className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/35 sm:text-[9px]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
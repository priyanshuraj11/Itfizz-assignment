"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          scale: 0.82,
          y: 35,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.3,
          delay: 0.35,
          ease: "power3.out",
        }
      );

      // Very subtle floating motion.
      gsap.to(".hero-orbit-main", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-orbit-small", {
        rotate: -360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-core", {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[560px]"
    >
      {/* Outer glow */}
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6c63ff]/10 blur-[100px]" />

      {/* Large atmospheric ring */}
      <div className="hero-orbit-main absolute inset-[8%] rounded-full border border-white/[0.07]" />

      <div className="absolute inset-[15%] rounded-full border border-white/[0.05]" />

      {/* Main core */}
      <div className="hero-core absolute left-1/2 top-1/2 aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#161629] via-[#0b0b13] to-[#030305] shadow-[0_0_100px_rgba(108,99,255,0.16)]" />

        {/* Blue/violet light */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, rgba(130,120,255,0.55), transparent 32%), radial-gradient(circle at 70% 72%, rgba(42,87,255,0.22), transparent 38%)",
          }}
        />

        {/* White reflection */}
        <div
          className="absolute left-[22%] top-[17%] h-[15%] w-[30%] rounded-full blur-md"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.4), transparent 70%)",
            transform: "rotate(-25deg)",
          }}
        />

        {/* Inner rim */}
        <div className="absolute inset-[3%] rounded-full border border-white/[0.09]" />

        {/* Center mark */}
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md">
          <span className="text-lg font-light tracking-[0.18em] text-white/80">
            F
          </span>
        </div>
      </div>

      {/* Orbiting small element */}
      <div className="hero-orbit-small absolute inset-[23%]">
        <div className="absolute right-[-5px] top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8b82ff] shadow-[0_0_14px_#8b82ff]" />
        </div>
      </div>

      {/* Accent points */}
      <div className="absolute left-[16%] top-[28%] h-2 w-2 rounded-full bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

      <div className="absolute bottom-[22%] right-[17%] h-1.5 w-1.5 rounded-full bg-[#6c63ff] shadow-[0_0_15px_#6c63ff]" />

      {/* Decorative lines */}
      <div className="absolute left-[10%] top-1/2 h-px w-[20%] bg-gradient-to-r from-transparent to-white/10" />

      <div className="absolute right-[10%] top-1/2 h-px w-[20%] bg-gradient-to-l from-transparent to-white/10" />

      {/* Label */}
      <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
        <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
          Motion / 01
        </span>
      </div>
    </div>
  );
}
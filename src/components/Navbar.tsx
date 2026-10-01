"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const NAV_LINKS = ["About", "Works", "Impact", "Contact"] as const;

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!navRef.current) return;

      gsap.fromTo(
        navRef.current,
        {
          opacity: 0,
          y: -16,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.05,
          ease: "power3.out",
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 top-0 z-[100] px-6 py-6 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <a
          href="#"
          className="text-[13px] font-semibold tracking-[0.18em] text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ITZ FIZZ
        </a>

        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/45 transition-colors duration-300 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden border border-white/15 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open navigation menu"
        >
          <span className="block h-px w-5 bg-white" />
          <span className="block h-px w-5 bg-white" />
        </button>
      </div>
    </nav>
  );
}
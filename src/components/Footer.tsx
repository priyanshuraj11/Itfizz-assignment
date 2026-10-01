const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          {/* Brand block */}
          <div>
            <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.2em] text-foreground block mb-6">
              ITZ FIZZ
            </span>
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light tracking-[0.04em] text-foreground leading-snug">
              CREATE.
              <br />
              MOVE.
              <br />
              IMPACT.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] tracking-[0.08em] uppercase text-muted hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-[11px] tracking-[0.1em] text-muted">
            © {new Date().getFullYear()} ITZ FIZZ. All rights reserved.
          </span>
          <span className="text-[11px] tracking-[0.1em] text-muted">
            Frontend Animation Assignment
          </span>
        </div>
      </div>
    </footer>
  );
}

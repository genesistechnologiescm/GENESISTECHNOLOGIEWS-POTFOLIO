import { BRAND } from "@/lib/constants";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: `mailto:${BRAND.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-14 bg-[var(--bg)]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

          {/* Logo — Trinity Mark */}
          <a href="#hero" className="flex items-center gap-3.5" aria-label="Flint — home">
            <svg width="28" height="28" viewBox="0 0 100 100" aria-hidden="true">
              <polygon points="50,12 83,62 17,62" fill="none" stroke="#F4F6FA" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="50,68 17,38 83,38" fill="#00E5FF"/>
            </svg>
            <div>
              <div
                className="text-[14px] font-bold uppercase tracking-[1.5px] text-[var(--text)] leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Flint
              </div>
            </div>
          </a>

          {/* Tagline */}
          <p
            className="text-[11px] uppercase tracking-[2px] text-[var(--text-muted)] hidden lg:block max-w-[340px] text-center"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {BRAND.tagline}
          </p>

          {/* Links */}
          <ul className="flex flex-wrap gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span
            className="text-[11px] text-[var(--text-muted)] opacity-40 tracking-[1px]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2026 Flint. All rights reserved.
          </span>
          <span
            className="text-[11px] text-[var(--text-muted)] opacity-40 tracking-[1px]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Built with Next.js 16 · Tailwind v4 · Framer Motion · Three.js
          </span>
        </div>
      </div>
    </footer>
  );
}

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
              <polygon points="50,12 83,62 17,62" fill="none" stroke="var(--text)" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="50,68 17,38 83,38" fill="var(--cyan)"/>
            </svg>
            <div
              className="text-[14px] font-bold uppercase tracking-[1.5px] leading-none"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Flint
            </div>
          </a>

          {/* Tagline */}
          <p
            className="text-[11px] uppercase tracking-[2px] hidden lg:block max-w-[340px] text-center"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            {BRAND.tagline}
          </p>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social */}
          <a
            href="https://www.linkedin.com/company/flinttechnologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Flint on LinkedIn"
            className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200"
            style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span
            className="text-[11px] opacity-40 tracking-[1px]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            © 2026 Flint. All rights reserved.
          </span>
          <span
            className="text-[11px] opacity-40 tracking-[1px]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            Built with Next.js 16 · Tailwind v4 · Framer Motion · Three.js
          </span>
        </div>
      </div>
    </footer>
  );
}

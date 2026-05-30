import { BRAND } from "@/lib/constants";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: `mailto:${BRAND.email}` },
];

const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/flinttechnologies",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
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

          
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/constants";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5a6 6 0 1 0 7 7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Read saved theme
    const saved = localStorage.getItem("flint-theme");
    if (saved === "light") setTheme("light");

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("flint-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("flint-theme", "dark");
    }
  };

  const isDark = theme === "dark";

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl border-b"
            : "bg-transparent"
        }`}
        style={scrolled ? {
          background: "color-mix(in srgb, var(--bg) 92%, transparent)",
          borderColor: "var(--border)",
        } : {}}
      >
        <div className="max-w-[1160px] mx-auto px-8 h-[68px] flex items-center justify-between">
          {/* Logo — Trinity Mark */}
          <a href="#hero" className="flex items-center gap-3.5 group" aria-label="Flint — home">
            <svg
              width="34" height="34" viewBox="0 0 100 100" aria-hidden="true"
              className="transition-transform duration-500 group-hover:rotate-180"
            >
              <polygon points="50,12 83,62 17,62" fill="none" stroke="var(--text)" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="50,68 17,38 83,38" fill="var(--cyan)"/>
            </svg>
            <span
              className="text-[17px] font-bold uppercase tracking-[1.5px] leading-none"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Flint
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] transition-colors duration-200 tracking-[0.3px] hover:opacity-100"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right — theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                borderColor: "var(--border-strong)",
                background: "var(--bg-surface)",
                color: "var(--text-muted)",
              }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-bold text-[13px] tracking-[0.4px] hover:opacity-90 hover:-translate-y-px transition-all duration-200"
              style={{ fontFamily: "var(--font-display)", background: "var(--cyan)", color: "var(--cyan-btn-text)" }}
            >
              Book a call
            </a>
          </div>

          {/* Mobile: theme toggle + menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border flex items-center justify-center"
              style={{ borderColor: "var(--border-strong)", background: "var(--bg-surface)", color: "var(--text-muted)" }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="p-2"
              style={{ color: "var(--text)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ background: "color-mix(in srgb, var(--bg) 98%, transparent)" }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-bold transition-colors"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-4 px-8 py-3 rounded font-bold text-lg"
              style={{ background: "var(--cyan)", color: "var(--cyan-btn-text)", fontFamily: "var(--font-display)" }}
            >
              Book a call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

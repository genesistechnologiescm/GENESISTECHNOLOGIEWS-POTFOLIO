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

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-8 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <svg
              width="34"
              height="34"
              viewBox="0 0 100 100"
              className="transition-transform duration-500 group-hover:rotate-90"
            >
              <circle
                cx="50" cy="50" r="34"
                fill="none"
                stroke="#F4F6FA"
                strokeWidth="2.5"
              />
              <circle cx="50" cy="50" r="10" fill="#00E5FF" />
            </svg>
            <div className="flex flex-col">
              <span
                className="text-[17px] font-bold uppercase tracking-[0.5px] text-[#F4F6FA] leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Genesis
              </span>
              <span
                className="text-[8px] uppercase tracking-[5px] text-[#00E5FF] mt-[5px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[14px] font-medium text-[#8A94A6] hover:text-[#F4F6FA] transition-colors duration-200 tracking-[0.2px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00E5FF] text-[#0A0A0F] rounded font-bold text-[13px] tracking-[0.4px] hover:opacity-90 hover:-translate-y-px transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Start a project
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#F4F6FA] p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-[#0A0A0F]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-bold text-[#F4F6FA] hover:text-[#00E5FF] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-4 px-8 py-3 bg-[#00E5FF] text-[#0A0A0F] rounded font-bold text-lg"
              style={{ fontFamily: "var(--font-display)" }}
              onClick={() => setMenuOpen(false)}
            >
              Start a project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

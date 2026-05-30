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
          {/* Logo — Trinity Mark */}
          <a href="#hero" className="flex items-center gap-3.5 group" aria-label="Flint — home">
            <svg
              width="34"
              height="34"
              viewBox="0 0 100 100"
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:rotate-180"
            >
              <polygon points="50,12 83,62 17,62" fill="none" stroke="#F4F6FA" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="50,68 17,38 83,38" fill="#00E5FF"/>
            </svg>
            <div className="flex flex-col">
              <span
                className="text-[17px] font-bold uppercase tracking-[1.5px] text-[#F4F6FA] leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Flint
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] text-[#8A94A6] hover:text-[#F4F6FA] transition-colors duration-200 tracking-[0.3px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00E5FF] text-[#0A0A0F] rounded font-bold text-[13px] tracking-[0.4px] hover:opacity-90 hover:-translate-y-px transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book a call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#F4F6FA] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
            className="fixed inset-0 z-40 bg-[#0A0A0F]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-bold text-[#F4F6FA] hover:text-[#00E5FF] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-4 px-8 py-3 bg-[#00E5FF] text-[#0A0A0F] rounded font-bold text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book a call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

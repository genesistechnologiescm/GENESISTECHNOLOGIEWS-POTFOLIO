"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const ServiceIcons = {
  build: (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="8" width="36" height="28" rx="3" stroke="#00E5FF" strokeWidth="1.4" />
      <line x1="6" y1="16" x2="42" y2="16" stroke="#00E5FF" strokeWidth="1.4" opacity="0.4" />
      <circle cx="11" cy="12" r="1.4" fill="#00E5FF" opacity="0.5" />
      <circle cx="16" cy="12" r="1.4" fill="#00E5FF" opacity="0.5" />
      <circle cx="21" cy="12" r="1.4" fill="#00E5FF" opacity="0.5" />
      <path d="M14 28l4.5-5.5 4.5 3.5 5.5-6.5" stroke="#00E5FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="18" y1="40" x2="30" y2="40" stroke="#F4F6FA" strokeWidth="1.4" strokeLinecap="round" opacity="0.25" />
      <line x1="24" y1="36" x2="24" y2="40" stroke="#F4F6FA" strokeWidth="1.4" opacity="0.25" />
    </svg>
  ),
  intelligence: (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="10" stroke="#00E5FF" strokeWidth="1.4" />
      <circle cx="24" cy="24" r="3" fill="#00E5FF" />
      {[0, 72, 144, 216, 288].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 24 + Math.cos(rad) * 13;
        const y1 = 24 + Math.sin(rad) * 13;
        const x2 = 24 + Math.cos(rad) * 18;
        const y2 = 24 + Math.sin(rad) * 18;
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
            <circle cx={x2} cy={y2} r="2" fill="#00E5FF" opacity="0.55" />
          </g>
        );
      })}
    </svg>
  ),
  automate: (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <rect x="7" y="7" width="13" height="13" rx="2" stroke="#00E5FF" strokeWidth="1.4" />
      <rect x="28" y="7" width="13" height="13" rx="2" stroke="#00E5FF" strokeWidth="1.4" />
      <rect x="17.5" y="28" width="13" height="13" rx="2" stroke="#00E5FF" strokeWidth="1.4" />
      <path d="M20 13.5H28" stroke="#00E5FF" strokeWidth="1.4" opacity="0.5" />
      <path d="M13.5 20v5l4.5 4" stroke="#00E5FF" strokeWidth="1" opacity="0.35" />
      <path d="M34.5 20v5l-4.5 4" stroke="#00E5FF" strokeWidth="1" opacity="0.35" />
      <circle cx="13.5" cy="13.5" r="2" fill="#00E5FF" opacity="0.7" />
      <circle cx="34.5" cy="13.5" r="2" fill="#1A6BFF" />
      <circle cx="24" cy="34.5" r="2" fill="#00E5FF" opacity="0.5" />
    </svg>
  ),
  consult: (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <path d="M24 6C14.06 6 6 14.06 6 24s8.06 18 18 18 18-8.06 18-18S33.94 6 24 6z" stroke="#1A6BFF" strokeWidth="1.4" />
      <path d="M16 28c1.5 3.5 4 6 8 6s6.5-2.5 8-6" stroke="#1A6BFF" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="18" y1="20" x2="18" y2="24" stroke="#1A6BFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="20" x2="30" y2="24" stroke="#1A6BFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 14l4 2" stroke="#1A6BFF" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <path d="M38 14l-4 2" stroke="#1A6BFF" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    </svg>
  ),
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref} className="py-[120px] bg-[#10101A]">
      <div className="max-w-[1160px] mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="block text-[11px] uppercase tracking-[4px] text-[#00E5FF] opacity-80 mb-5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            What We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.5px] text-[#F4F6FA] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four service lines.<br />One unified standard.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease }}
            className="text-[17px] text-[#8A94A6] leading-[1.75]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Every engagement is scoped, tiered, and delivered to production-grade quality. No shortcuts, no filler work.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-white/[0.04] rounded-xl overflow-hidden border border-white/[0.04]">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease }}
              className="group relative bg-[#0A0A0F] p-10 flex flex-col hover:bg-[#0f0f18] transition-colors duration-300 cursor-default"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: svc.id === 'consult' ? 'linear-gradient(90deg,transparent,#1A6BFF,transparent)' : undefined }} />

              <span
                className="block text-[11px] tracking-[2px] mb-7 opacity-40"
                style={{ fontFamily: "var(--font-mono)", color: svc.id === 'consult' ? '#1A6BFF' : '#00E5FF' }}
              >
                {svc.number} /
              </span>

              <div className="mb-6">
                {ServiceIcons[svc.id as keyof typeof ServiceIcons]}
              </div>

              <span
                className="block text-[12px] font-semibold uppercase tracking-[3px] mb-2"
                style={{ fontFamily: "var(--font-display)", color: svc.id === 'consult' ? '#1A6BFF' : '#00E5FF' }}
              >
                {svc.slug}
              </span>

              <h3
                className="text-[22px] font-bold text-[#F4F6FA] leading-[1.2] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {svc.name}
              </h3>

              <p
                className="text-[14px] text-[#8A94A6] leading-[1.7] mb-8 flex-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {svc.description}
              </p>

              <ul className="space-y-0 mb-8">
                {svc.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 text-[13px] text-[#8A94A6] py-2 border-b border-white/[0.05] last:border-0"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-60"
                      style={{ background: svc.id === 'consult' ? '#1A6BFF' : '#00E5FF' }}
                    />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2 flex-wrap">
                {svc.tiers.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 border border-white/[0.08] rounded-sm text-[10px] uppercase tracking-[1px] text-[#8A94A6] group-hover:border-white/20 group-hover:text-[#F4F6FA] transition-all duration-200"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="3" stroke="#00E5FF" strokeWidth="1.4" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2" stroke="#00E5FF" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    name: "Engineering-First",
    desc: "Architecture designed to scale, not patched together.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" stroke="#00E5FF" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="4.5" stroke="#00E5FF" strokeWidth="1.2" opacity="0.5" />
        <circle cx="10" cy="10" r="2" fill="#00E5FF" />
      </svg>
    ),
    name: "Outcome-Driven",
    desc: "We measure success by the business result, not the deliverable.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="4" y="9" width="12" height="9" rx="1.5" stroke="#00E5FF" strokeWidth="1.4" />
        <path d="M7 9V6.5a3 3 0 0 1 6 0V9" stroke="#00E5FF" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="10" cy="13.5" r="1.2" fill="#00E5FF" />
      </svg>
    ),
    name: "Secure by Design",
    desc: "Security built in from day one — not bolted on at the end.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" stroke="#00E5FF" strokeWidth="1.4" />
        <ellipse cx="10" cy="10" rx="3" ry="7.5" stroke="#00E5FF" strokeWidth="1.2" opacity="0.5" />
        <path d="M2.5 10h15" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <path d="M3.5 6.5h13M3.5 13.5h13" stroke="#00E5FF" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
    name: "Fully Remote",
    desc: "Global capability, zero overhead. Speed from anywhere.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-[120px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Visual — animated rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease }}
            className="flex items-center justify-center order-first lg:order-last"
          >
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#00E5FF]/20"
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00E5FF]" />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-white/[0.07]"
              >
                <div className="absolute bottom-6 -right-1 w-1.5 h-1.5 rounded-full bg-[#1A6BFF]" />
              </motion.div>

              {/* Inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-[#1A6BFF]/20"
              />

              {/* Core mark */}
              <div className="relative z-10 w-[88px] h-[88px] rounded-full border border-[#00E5FF]/15 bg-[#00E5FF]/[0.04] flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 100 100" aria-hidden="true">
                  <circle cx="50" cy="50" r="34" fill="none" stroke="#F4F6FA" strokeWidth="2" />
                  <circle cx="50" cy="50" r="10" fill="#00E5FF" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="block text-[11px] uppercase tracking-[4px] text-[#00E5FF] opacity-80 mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08, ease }}
              className="text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.5px] text-[#F4F6FA] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built at the intersection of precision and possibility.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="text-[17px] text-[#8A94A6] leading-[1.75] mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Flint is a digital engineering company. We don&apos;t
              sell templates or off-the-shelf tools. Every system we design is
              purpose-built around your business — your data, your workflows,
              your future.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-[17px] text-[#8A94A6] leading-[1.75] mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We operate fully online with a lean, expert team model — lower
              overhead, faster delivery, and direct access to senior-level
              thinking on every project.
            </motion.p>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.28 + i * 0.07, ease }}
                  className="p-5 bg-[#10101A] border border-white/[0.06] rounded-lg hover:border-[#00E5FF]/20 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-md bg-[#00E5FF]/[0.07] border border-[#00E5FF]/15 flex items-center justify-center mb-3">
                    {p.icon}
                  </div>
                  <div
                    className="text-[14px] font-bold text-[#F4F6FA] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.name}
                  </div>
                  <div
                    className="text-[13px] text-[#8A94A6] leading-[1.5]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {p.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

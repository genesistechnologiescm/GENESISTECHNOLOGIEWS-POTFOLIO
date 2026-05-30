"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WHY_POINTS, BRAND } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const icons = [
  <svg key="star" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L10 6H15L11 9.5L12.5 14.5L8 11.5L3.5 14.5L5 9.5L1 6H6L8 1Z" stroke="#00E5FF" strokeWidth="1.2" fill="none" strokeLinejoin="round" /></svg>,
  <svg key="check" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#00E5FF" strokeWidth="1.2" /><path d="M5 8l2 2 4-4" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="clock" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#00E5FF" strokeWidth="1.2" /><path d="M8 5v3l2 2" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round" /></svg>,
  <svg key="globe" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" stroke="#00E5FF" strokeWidth="1.2" /><path d="M5 8.5C5.5 10 6.5 11 8 11s2.5-1 3-2.5" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round" /><circle cx="6" cy="7" r="0.8" fill="#00E5FF" /><circle cx="10" cy="7" r="0.8" fill="#00E5FF" /></svg>,
];

export default function Why() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why" ref={ref} className="py-[120px] bg-[var(--bg-surface)]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="block text-[11px] uppercase tracking-[4px] text-[var(--cyan)] opacity-80 mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Why Flint
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08, ease }}
              className="text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.5px] text-[var(--text)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We build systems,<br />not deliverables.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="text-[17px] text-[var(--text-muted)] leading-[1.75] mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Most digital agencies hand you a file and disappear. We architect
              systems that run your business better — measurably, reliably, and
              built to grow with you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-[17px] text-[var(--text-muted)] leading-[1.75] mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We cap active client projects at three. That&apos;s not a constraint —
              it&apos;s a quality guarantee.
            </motion.p>

            {/* CEO quote */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28, ease }}
              className="pl-8 border-l-2 border-[#00E5FF] bg-[#00E5FF]/[0.03] rounded-r-xl py-7 pr-7"
            >
              <p
                className="text-[17px] font-semibold text-[var(--text)] leading-[1.55] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;The origin of your digital evolution isn&apos;t a product. It&apos;s
                the moment your business starts operating at full intelligence.&rdquo;
              </p>
              <cite
                className="text-[10px] uppercase tracking-[2px] text-[var(--cyan)] opacity-70 not-italic"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Kfusaluh Kesi Ghangha · CEO, {BRAND.company}
              </cite>
            </motion.div>
          </div>

          {/* Right — differentiator points */}
          <div className="flex flex-col gap-3">
            {WHY_POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.12 + i * 0.1, ease }}
                className="p-7 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:border-[#00E5FF]/20 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00E5FF]/[0.07] border border-[#00E5FF]/15 flex items-center justify-center flex-shrink-0">
                    {icons[i]}
                  </div>
                  <span
                    className="text-[15px] font-bold text-[var(--text)] group-hover:text-[var(--cyan)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.title}
                  </span>
                </div>
                <p
                  className="text-[14px] text-[var(--text-muted)] leading-[1.65] pl-[52px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

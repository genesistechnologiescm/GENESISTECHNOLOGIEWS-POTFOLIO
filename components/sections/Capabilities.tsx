"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CAPABILITIES } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="capabilities" ref={ref} className="py-[120px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="text-center max-w-[600px] mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="block text-[11px] uppercase tracking-[4px] text-[var(--cyan)] opacity-80 mb-5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Technical Depth
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.5px] text-[var(--text)] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What we&apos;re capable of building, today and tomorrow.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease }}
            className="text-[17px] text-[var(--text-muted)] leading-[1.75]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We&apos;re not generalists. Every service line has deep specialisation behind it.
          </motion.p>
        </div>

        <div className="flex flex-col gap-3">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.serviceSlug}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease }}
              className="grid grid-cols-1 lg:grid-cols-[260px_1fr] bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[#00E5FF]/15 transition-colors duration-300 group"
            >
              {/* Left label */}
              <div className="px-10 py-9 bg-[var(--bg-surface2)] border-b lg:border-b-0 lg:border-r border-[var(--border)] flex flex-col justify-center gap-1.5">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[3px] text-[var(--cyan)] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cap.serviceSlug}
                </span>
                <span
                  className="text-[19px] font-bold text-[var(--text)] leading-[1.2]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cap.label}
                </span>
              </div>

              {/* Right content */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
                {cap.items.map((item) => (
                  <div
                    key={item.title}
                    className="px-8 py-8 hover:bg-[var(--bg)]/60 transition-colors duration-200"
                  >
                    <div
                      className="text-[14px] font-bold text-[var(--text)] mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="text-[13px] text-[var(--text-muted)] leading-[1.6]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

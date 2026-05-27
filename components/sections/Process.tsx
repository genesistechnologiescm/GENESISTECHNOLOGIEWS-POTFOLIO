"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" ref={ref} className="py-[120px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="max-w-[540px] mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="block text-[11px] uppercase tracking-[4px] text-[#00E5FF] opacity-80 mb-5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.5px] text-[#F4F6FA] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Structured delivery.<br />Zero surprises.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease }}
            className="text-[17px] text-[#8A94A6] leading-[1.75]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Every project follows the same rigorous process. You always know where we are, what&apos;s next, and what it costs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease }}
              className="relative p-10 bg-[#10101A] border border-white/[0.06] rounded-xl hover:border-[#00E5FF]/20 hover:bg-[#10101f] transition-all duration-300 group"
            >
              {/* Step connector line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden xl:block absolute top-[52px] -right-[7px] w-3.5 h-px bg-[#1A6BFF]/30 z-10" />
              )}

              <div
                className="text-[11px] tracking-[2px] text-[#00E5FF] opacity-50 mb-5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {step.num}
              </div>

              <h3
                className="text-[18px] font-bold text-[#F4F6FA] mb-3 group-hover:text-[#00E5FF] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>

              <p
                className="text-[14px] text-[#8A94A6] leading-[1.65]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

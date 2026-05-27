"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BRAND } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const meta = [
  "Response within 24 hours",
  "Free discovery call",
  "No commitment required",
];

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="py-[120px] bg-[#10101A] relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,229,255,0.045) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1160px] mx-auto px-8 relative z-10">
        <div className="text-center max-w-[720px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="block text-[11px] uppercase tracking-[4px] text-[#00E5FF] opacity-80 mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Get Started
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="text-[clamp(34px,5.5vw,64px)] font-bold leading-[1.08] tracking-[-1px] text-[#F4F6FA] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to build<br />
            something{" "}
            <span className="text-[#00E5FF]">real</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="text-[17px] text-[#8A94A6] leading-[1.75] mb-12"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Book a free 60-minute discovery call. We&apos;ll map exactly what you
            need, what it will cost, and how long it will take. No obligation,
            no pitch decks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.26, ease }}
            className="flex items-center justify-center gap-4 flex-wrap mb-12"
          >
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#00E5FF] text-[#0A0A0F] rounded font-bold text-[15px] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book a discovery call →
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/10 text-[#F4F6FA] rounded font-semibold text-[15px] hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Send us a brief →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="flex items-center justify-center gap-8 flex-wrap"
          >
            {meta.map((m) => (
              <div
                key={m}
                className="flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[#8A94A6]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] opacity-60" />
                {m}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

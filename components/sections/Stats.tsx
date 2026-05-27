"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "4", unit: "+", label: "Service Lines" },
  { value: "∞", unit: "", label: "Scalability Ceiling" },
  { value: "100", unit: "%", label: "Custom Builds" },
  { value: "24", unit: "/7", label: "System Uptime Focus" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="border-t border-b border-white/[0.06] py-10"
    >
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div
                className="text-[36px] font-bold text-[#F4F6FA] leading-none mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.value}
                <span className="text-[#00E5FF]">{s.unit}</span>
              </div>
              <div
                className="text-[11px] uppercase tracking-[2px] text-[#8A94A6]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

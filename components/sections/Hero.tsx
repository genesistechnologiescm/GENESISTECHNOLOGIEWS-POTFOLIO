"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";

const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), { ssr: false });

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-[68px]">
      {/* Three.js canvas */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,107,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,107,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0F] to-transparent z-[2] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1160px] mx-auto px-8 py-24 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          <span
            className="text-[11px] uppercase tracking-[3px] text-[#00E5FF]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Flint · Est. 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-[clamp(44px,7.5vw,96px)] font-bold leading-[1.03] tracking-[-2px] text-[#F4F6FA] mb-7 max-w-[820px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Origin and<br />
          Direction of Your{" "}
          <span className="text-[#00E5FF]">Digital</span>
          <br />
          Evolution.
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease }}
          className="text-[19px] text-[#8A94A6] leading-[1.75] max-w-[580px] mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Custom software, AI systems, data intelligence, and strategic tech
          advisory — built with precision for businesses ready to operate at the
          highest level.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34, ease }}
          className="flex items-center gap-5 flex-wrap"
        >
          <a
            href={`mailto:${BRAND.email}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#00E5FF] text-[#0A0A0F] rounded font-bold text-[15px] tracking-[0.3px] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Book a discovery call →
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/10 text-[#F4F6FA] rounded font-semibold text-[15px] hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore services →
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-8 flex items-center gap-3"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#1A6BFF]" />
          <span
            className="text-[10px] uppercase tracking-[3px] text-[#8A94A6]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}

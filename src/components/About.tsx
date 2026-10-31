"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { TechIcon } from "@/components/TechIcon";
import { MusurmonIcon } from "@/components/MusurmonIcon";
import { useLanguage } from "@/context/LanguageContext";

// Interactive 3D Luxury Developer Portrait Card
const AboutPortraitCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Smooth subtle 3D tilt (max 7 degrees)
    setTilt({
      x: (y - 0.5) * -7,
      y: (x - 0.5) * 8,
    });
    setGlare({ x: x * 100, y: y * 100, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[380px] sm:max-w-[420px] [perspective:1000px] select-none"
    >
      {/* Soft Ambient Radial Bloom behind Card */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 via-blue-600/15 to-indigo-500/20 rounded-[36px] blur-3xl -z-10 dark:opacity-80 opacity-40 transition-opacity" />

      {/* Main 3D Tilt Card Frame */}
      <motion.div
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="relative rounded-[30px] p-2.5 sm:p-3 border border-slate-200/90 dark:border-sky-500/25 bg-white/90 dark:bg-[#0B101D]/90 backdrop-blur-2xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] group cursor-pointer overflow-hidden"
      >
        {/* Dynamic Specular Sheen Glare */}
        <div
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
            transition: "opacity 0.3s ease",
          }}
          className="absolute inset-0 z-30 pointer-events-none"
        />

        {/* Photo Container */}
        <div className="relative w-full aspect-[3/4] rounded-[22px] overflow-hidden bg-slate-900 shadow-inner">
          <Image
            src="/images/musurmon-portrait.jpg"
            alt="Azamqulov Musurmon — Web Developer & Frontend Developer"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 420px"
          />

          {/* Cinematic lighting gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30 pointer-events-none" />

          {/* Top Live Status Pill */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2 rounded-full px-3 py-1.5 backdrop-blur-xl bg-black/60 border border-white/20 text-white shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono font-medium">
              {t.about.locationPill}
            </span>
          </div>

          {/* Top Right Verified Pill */}
          <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full px-2.5 py-1.5 backdrop-blur-xl bg-sky-500/20 border border-sky-400/40 text-sky-200 shadow-lg">
            <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase">
              {t.about.proDevPill}
            </span>
          </div>

          {/* Bottom Luxury Identity Card */}
          <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-3.5 rounded-2xl backdrop-blur-2xl bg-black/70 dark:bg-[#070D18]/85 border border-white/15 dark:border-sky-500/25 shadow-2xl flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-500/20 via-blue-500/20 to-indigo-500/30 border border-white/20 flex items-center justify-center p-1.5 shadow-inner shrink-0">
                <MusurmonIcon size={22} color="gradient" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight leading-tight">
                  Azamqulov Musurmon
                </div>
                <div className="text-[11px] font-mono text-sky-400 font-medium">
                  {t.about.subTitle}
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shrink-0"
              title={t.about.connectTitle}
              aria-label={t.about.connectTitle}
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Floating 3D Micro-Pill 1 */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        className="hidden sm:flex absolute -top-3 -right-3 z-30 items-center gap-2 rounded-xl px-3.5 py-2 backdrop-blur-xl bg-white/95 dark:bg-[#0D1424]/95 border border-slate-200/90 dark:border-slate-800 text-xs font-mono font-bold text-slate-800 dark:text-slate-200 shadow-xl cursor-pointer"
      >
        <Sparkles className="h-3.5 w-3.5 text-sky-500" />
        <span>{t.about.pill1}</span>
      </motion.div>

      {/* Floating 3D Micro-Pill 2 */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        whileHover={{ scale: 1.08 }}
        className="hidden sm:flex absolute -bottom-3 -left-3 z-30 items-center gap-2 rounded-xl px-3.5 py-2 backdrop-blur-xl bg-white/95 dark:bg-[#0D1424]/95 border border-slate-200/90 dark:border-slate-800 text-xs font-mono font-bold text-slate-800 dark:text-slate-200 shadow-xl cursor-pointer"
      >
        <Zap className="h-3.5 w-3.5 text-blue-500" />
        <span>{t.about.pill2}</span>
      </motion.div>
    </div>
  );
};

export const About: React.FC = () => {
  const { t } = useLanguage();

  const techBadges = [
    { name: "React", iconId: "react" },
    { name: "Next.js", iconId: "next.js" },
    { name: "Node.js", iconId: "node.js" },
    { name: "MongoDB", iconId: "mongodb" },
    { name: "TypeScript", iconId: "typescript" },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-bl from-blue-500/10 via-sky-500/15 to-transparent rounded-full blur-[120px] -z-10 dark:opacity-70 opacity-30" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-sky-500 uppercase mb-4"
            >
              <span>{t.about.tag}</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              {t.about.heading1} <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                {t.about.heading2}
              </span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
            >
              {t.about.paragraph}
            </motion.p>

            {/* Tech Badges Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {techBadges.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-[#0D1424]/95 px-4 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md hover:border-sky-500/50 hover:shadow-md transition-all cursor-pointer"
                >
                  <TechIcon name={tech.iconId} size={18} className="shrink-0" />
                  <span className="font-mono tracking-tight">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 active:scale-95"
                aria-label={t.about.cta}
              >
                <span>{t.about.cta}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0"
          >
            <AboutPortraitCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

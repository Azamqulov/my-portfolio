"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  Github,
  Sparkles,
  Bot,
  ShieldCheck,
  Zap,
  Code2,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  const dynamicRoles = [
    "Full-Stack Developer",
    "AI Product Builder",
    "Tauri 2 + Rust Specialist",
    "Multi-Tenant SaaS Architect",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [dynamicRoles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-teal/20 via-brand-indigo/15 to-transparent rounded-full blur-[120px] -z-10" />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-glow-subtle"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-brand-teal">
            {PERSONAL_INFO.status}
          </span>
          <span className="text-[10px] text-slate-400 font-mono border-l border-brand-teal/20 pl-2">
            O&apos;zbekiston
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]">
            Salom, men{" "}
            <span className="bg-gradient-to-r from-brand-teal via-[#38BDF8] to-brand-indigo bg-clip-text text-transparent drop-shadow-sm">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Dynamic Role Switcher */}
          <div className="h-12 sm:h-14 flex items-center justify-center overflow-hidden">
            <motion.p
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-2.5"
            >
              <Terminal className="h-6 w-6 text-brand-teal inline-block" />
              <span>{dynamicRoles[currentRoleIndex]}</span>
            </motion.p>
          </div>
        </motion.div>

        {/* Subtitle / Philosophy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-normal"
        >
          Figma eskizidan yoki oddiy tasavvurdan boshlab, to&apos;liq arxitektura,
          xavfsizlik va real foydalanuvchi tajribasiga ega{" "}
          <span className="text-white dark:text-white font-medium underline decoration-brand-teal/60 underline-offset-4">
            SaaS tizimlar
          </span>
          ,{" "}
          <span className="text-white dark:text-white font-medium underline decoration-brand-indigo/60 underline-offset-4">
            Local-First AI ilovalar
          </span>{" "}
          va avtomatlashtirilgan platformalar quraman.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#featured-projects"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-teal to-brand-indigo px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-teal/25 transition-all duration-300 hover:scale-105 hover:shadow-brand-indigo/35 active:scale-95"
          >
            <span>Loyihalarni ko&apos;rish</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 dark:border-white/15 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-slate-100 px-6 py-3.5 text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 backdrop-blur-md transition-all hover:bg-white/10 hover:border-brand-teal/40 active:scale-95"
          >
            <Send className="h-4 w-4 text-brand-teal" />
            <span>Bog&apos;lanish</span>
          </a>

          <a
            href={PERSONAL_INFO.contacts.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-brand-teal/40 transition-all hover:scale-105"
            aria-label="GitHub profili"
          >
            <Github className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Technology Highlights Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400"
        >
          <span className="text-slate-500">Core Stack:</span>
          {["Next.js", "Vue 3", "Tauri 2 (Rust)", "NestJS", "Gemini & Claude AI", "aiogram"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300 dark:text-slate-300"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>

        {/* Count-Up Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-[#121318]/70 dark:bg-[#121318]/70 light:bg-white/70 p-5 backdrop-blur-lg transition-all duration-300 hover:border-brand-teal/40 hover:-translate-y-1 hover:shadow-glow-subtle"
            >
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-brand-teal to-brand-indigo bg-clip-text text-transparent font-mono">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-400 text-center line-clamp-1">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

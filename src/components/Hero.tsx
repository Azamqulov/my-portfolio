"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Send,
  Github,
  Sparkles,
  Terminal,
  Layers,
  Cpu,
  Bot,
  Zap,
} from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/data/portfolioData";

interface CountUpProps {
  target: string;
  duration?: number;
}

const AnimatedStatValue: React.FC<CountUpProps> = ({ target }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const numMatch = target.match(/\d+/);
    if (!numMatch) {
      setDisplayValue(target);
      return;
    }
    const finalNum = parseInt(numMatch[0], 10);
    const suffix = target.replace(numMatch[0], "");

    let start = 0;
    const duration = 1200; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = finalNum / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= finalNum) {
        setDisplayValue(target);
        clearInterval(timer);
      } else {
        setDisplayValue(`${Math.floor(start)}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{displayValue}</span>;
};

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
      className="relative min-h-[96vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 overflow-hidden"
    >
      {/* Ambient background soft glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-brand-teal/20 via-brand-indigo/15 to-transparent rounded-full blur-[120px] -z-10 dark:opacity-70 opacity-30" />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 dark:border-brand-teal/30 bg-emerald-50 dark:bg-brand-teal/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-brand-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 dark:bg-brand-teal"></span>
          </span>
          <span className="text-xs font-bold tracking-wide text-emerald-800 dark:text-brand-teal">
            {PERSONAL_INFO.status}
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono border-l border-slate-300 dark:border-brand-teal/20 pl-2">
            O&apos;zbekiston
          </span>
        </motion.div>

        {/* Hero Title with 3D Orbit Motif */}
        <div className="relative w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3 max-w-4xl"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Salom, men{" "}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-indigo-600 dark:from-brand-teal dark:via-[#38BDF8] dark:to-brand-indigo bg-clip-text text-transparent drop-shadow-sm">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Dynamic Role Switcher */}
            <div className="h-12 sm:h-14 flex items-center justify-center overflow-hidden">
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2.5"
              >
                <Terminal className="h-6 w-6 text-brand-teal inline-block" />
                <span>{dynamicRoles[currentRoleIndex]}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Subtitle / Philosophy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
          >
            Figma eskizidan yoki oddiy tasavvurdan boshlab, to&apos;liq arxitektura,
            xavfsizlik va real foydalanuvchi tajribasiga ega{" "}
            <strong className="font-semibold text-slate-900 dark:text-white underline decoration-brand-teal/80 underline-offset-4">
              SaaS tizimlar
            </strong>
            ,{" "}
            <strong className="font-semibold text-slate-900 dark:text-white underline decoration-brand-indigo/80 underline-offset-4">
              Local-First AI ilovalar
            </strong>{" "}
            va avtomatlashtirilgan platformalar quraman.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#featured-projects"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-teal to-brand-indigo px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-teal/20 transition-all duration-300 hover:scale-105 hover:shadow-brand-indigo/30 active:scale-95"
          >
            <span>Loyihalarni ko&apos;rish</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-100 shadow-sm backdrop-blur-md transition-all hover:bg-slate-50 dark:hover:bg-white/10 hover:border-brand-teal/50 active:scale-95"
          >
            <Send className="h-4 w-4 text-brand-teal" />
            <span>Bog&apos;lanish</span>
          </a>

          <a
            href={PERSONAL_INFO.contacts.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-brand-teal transition-all hover:scale-105 shadow-sm"
            aria-label="GitHub profili"
          >
            <Github className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Core Stack Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400"
        >
          <span className="font-semibold text-slate-700 dark:text-slate-300">Core Stack:</span>
          {["Next.js 14", "Vue 3", "Tauri 2 (Rust)", "NestJS", "Gemini & Claude AI", "aiogram 3"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-2.5 py-1 text-slate-800 dark:text-slate-200 font-medium shadow-sm"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>

        {/* Count-Up Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121318] p-5 shadow-sm hover:shadow-md backdrop-blur-lg transition-all duration-300 hover:border-brand-teal/50 hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-brand-teal dark:to-brand-indigo bg-clip-text text-transparent font-mono">
                <AnimatedStatValue target={stat.value} />
              </div>
              <div className="mt-1 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 text-center line-clamp-1">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

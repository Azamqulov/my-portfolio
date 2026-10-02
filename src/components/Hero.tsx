"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  User,
  Briefcase,
  Code2,
  Star,
  ShieldCheck,
} from "lucide-react";
import { DeveloperWorkspace } from "@/components/DeveloperWorkspace";

interface CountUpProps {
  target: string;
}

const AnimatedStatValue: React.FC<CountUpProps> = ({ target }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numMatch = target.match(/\d+/);
    if (!numMatch) {
      setDisplayValue(target);
      return;
    }
    const finalNum = parseInt(numMatch[0], 10);
    const suffix = target.replace(numMatch[0], "");

    let start = 0;
    const duration = 1200;
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

// Animated Rotating Role Ticker for Hero
const ROLES = [
  "Frontend & Backend Developer",
  "React & Next.js Mutaxassisi",
  "TypeScript & Clean Architecture",
  "High-Performance Web Ilovalar",
];

const HeroRoleRotator: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-5 overflow-hidden flex items-center min-w-[190px] sm:min-w-[220px]">
      <motion.span
        key={roleIndex}
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -16, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs font-bold tracking-wide text-sky-600 dark:text-sky-300 font-mono absolute whitespace-nowrap"
      >
        {ROLES[roleIndex]}
      </motion.span>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[95vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-500/15 via-blue-600/15 to-indigo-600/10 rounded-full blur-[130px] -z-10 dark:opacity-80 opacity-35" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[420px] h-[420px] bg-gradient-to-br from-indigo-500/10 via-purple-600/15 to-transparent rounded-full blur-[120px] -z-10 dark:opacity-70 opacity-30" />

      <div className="w-full max-w-7xl mx-auto">
        {/* Top 2-Column Hero Area: Left Text, Right 3D Developer Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Role, Intro, Actions */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            {/* Pill Badge with Rotating Roles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-sky-500/10 dark:bg-sky-500/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <HeroRoleRotator />
            </motion.div>

            {/* Main Hero Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1.5"
            >
              <div className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200">
                Salom, men
              </div>
              <h1
                id="hero-title"
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white"
              >
                Azamqulov <br />
                <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  Musurmon
                </span>
              </h1>
            </motion.div>

            {/* Natural Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
            >
              Men zamonaviy texnologiyalar yordamida foydalanuvchilar uchun qulay va
              samarali web-ilovalarni yarataman. Loyihalarimda sifat, ishonchlilik va
              zamonaviy dizayn ustuvorlik qiladi.
            </motion.p>

            {/* Action Buttons with Animated Shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative overflow-hidden inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 active:scale-95"
                aria-label="Loyihalarimni ko'rish"
              >
                {/* Shimmer overlay */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Loyihalarimni ko&apos;rish</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-sky-500/50 active:scale-95"
                aria-label="Men haqimda"
              >
                <User className="h-4 w-4 text-sky-500" />
                <span>Men haqimda</span>
              </a>

              {/* Status Indicator */}
              <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 pl-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Toshkent • Yangi loyihalarga tayyor</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Developer Workspace */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">
            <DeveloperWorkspace />
          </div>
        </div>

        {/* Stats Bento Row (Directly below Hero) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 sm:mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {/* Card 1: 2+ Yillik tajriba */}
          <div className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0B101D]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:border-sky-500/40 hover:-translate-y-0.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 dark:text-sky-400 border border-sky-500/20">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
                <AnimatedStatValue target="2+" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                Yillik tajriba
              </div>
            </div>
          </div>

          {/* Card 2: 16+ Bajarilgan loyihalar */}
          <div className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0B101D]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
                <AnimatedStatValue target="16+" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                Bajarilgan loyihalar
              </div>
            </div>
          </div>

          {/* Card 3: 5+ Mijozlar fikri */}
          <div className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0B101D]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-0.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
                <AnimatedStatValue target="5+" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                Mijozlar fikri
              </div>
            </div>
          </div>

          {/* Card 4: 100% Muvaffaqiyatli natija */}
          <div className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0B101D]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-0.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500 dark:text-teal-400 border border-teal-500/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
                <AnimatedStatValue target="100%" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                Muvaffaqiyatli natija
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

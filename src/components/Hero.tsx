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
import { useLanguage } from "@/context/LanguageContext";

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
const HeroRoleRotator: React.FC<{ roles: string[] }> = ({ roles }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setRoleIndex(0);
  }, [roles]);

  useEffect(() => {
    if (!roles || roles.length === 0) return;
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles]);

  const currentRole = roles[roleIndex] || roles[0] || "";

  return (
    <div className="relative h-5 overflow-hidden flex items-center min-w-[210px] sm:min-w-[260px]">
      <motion.span
        key={currentRole}
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -16, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs font-bold tracking-wide text-emerald-700 dark:text-emerald-300 font-mono absolute whitespace-nowrap"
      >
        {currentRole}
      </motion.span>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[95vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-600/15 via-teal-700/15 to-forest/10 rounded-full blur-[130px] -z-10 dark:opacity-80 opacity-35" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[420px] h-[420px] bg-gradient-to-br from-forest/15 via-emerald-600/15 to-transparent rounded-full blur-[120px] -z-10 dark:opacity-70 opacity-30" />

      <div className="w-full max-w-7xl mx-auto">
        {/* Top 2-Column Hero Area: Left Text, Right 3D Developer Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Role, Intro, Actions */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Top Meta Badges Bar: Centered on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-5"
            >
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 shadow-sm">
                Full-stack dasturchi
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 shadow-sm">
                2+ yil tajriba
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Yangi loyihalar qabul qilaman</span>
              </span>
            </motion.div>

            {/* Pill Badge with Rotating Roles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <HeroRoleRotator roles={t.hero.roles} />
            </motion.div>

            {/* Main Hero Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1.5"
            >
              <div className="text-xl sm:text-2xl font-bold font-heading text-slate-700 dark:text-slate-300">
                {t.hero.greeting}
              </div>
              <h1
                id="hero-title"
                className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.08] text-slate-900 dark:text-white"
              >
                {t.hero.nameFirst} <br />
                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
                  {t.hero.nameSecond}
                </span>
              </h1>
            </motion.div>

            {/* Natural Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal mx-auto sm:mx-0"
            >
              {t.hero.bio}
            </motion.p>

            {/* Action Buttons with Luxury Hover Animations */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-4"
            >
              {/* Primary Glowing Button with Shimmer */}
              <a
                href="#projects"
                className="btn-primary-glow hover-sheen group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 active:scale-95 cursor-pointer"
                aria-label={t.hero.viewProjects}
              >
                <span className="relative z-10">{t.hero.viewProjects}</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              {/* Secondary Liquid Color-Fill Button */}
              <a
                href="https://t.me/Musurmon_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill-effect group inline-flex items-center gap-2 rounded-full border border-slate-300/80 dark:border-emerald-500/30 bg-white/80 dark:bg-[#0A1410]/80 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md transition-all active:scale-95 cursor-pointer"
              >
                <span className="relative z-10">Telegram orqali yozish</span>
                <ArrowRight className="relative z-10 h-4 w-4 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1.5" />
              </a>
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
          {/* Card 1: 2+ Experience */}
          <div className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0A1410]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-0.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
                <AnimatedStatValue target="2+" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {t.hero.stats.experience}
              </div>
            </div>
          </div>

          {/* Card 2: 16+ Projects */}
          <div className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0A1410]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:border-green-600/40 hover:-translate-y-0.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600/10 text-green-600 dark:text-green-400 border border-green-600/20">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
                <AnimatedStatValue target="16+" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {t.hero.stats.projects}
              </div>
            </div>
          </div>

          {/* Card 3: 5+ Client Reviews */}
          <div className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0A1410]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:border-teal-600/40 hover:-translate-y-0.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 dark:text-teal-400 border border-teal-600/20">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
                <AnimatedStatValue target="5+" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {t.hero.stats.reviews}
              </div>
            </div>
          </div>

          {/* Card 4: 100% Success */}
          <div className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0A1410]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:border-emerald-600/40 hover:-translate-y-0.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 border border-emerald-600/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
                <AnimatedStatValue target="100%" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {t.hero.stats.success}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Compass,
  Cpu,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Process: React.FC = () => {
  const { t } = useLanguage();

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
      case "01":
        return Layers;
      case "Compass":
      case "02":
        return Compass;
      case "Cpu":
      case "03":
        return Cpu;
      case "Sparkles":
      case "04":
        return Sparkles;
      case "ShieldCheck":
      case "05":
      default:
        return ShieldCheck;
    }
  };

  const steps = t.process?.steps || [];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background ambient radial bloom */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-emerald-600/10 via-forest/10 to-teal-700/10 rounded-full blur-[140px] -z-10 dark:opacity-70 opacity-30" />

      {/* Identical max-w-7xl mx-auto container matching all other portfolio sections */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Mobile Centered, Desktop Left-Aligned */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
              (05)
            </span>
            <span className="h-[1px] w-12 bg-emerald-500/40" />
            <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-semibold">
              {t.process.tag}
            </span>
          </motion.div>

          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight"
          >
            {t.process.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal"
          >
            {t.process.subtitle}
          </motion.p>
        </div>

        {/* Process Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((proc, idx) => {
            const Icon = getStepIcon(proc.step);
            return (
              <motion.div
                key={proc.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-emerald-500/20 bg-white/95 dark:bg-[#0A1410]/95 p-6 sm:p-7 shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-emerald-500/50 overflow-hidden"
              >
                {/* Subtle Luxury Gradient Hover Fill Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] via-transparent to-teal-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    {/* Step Number with Gradient Fill */}
                    <span className="font-mono text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                      {proc.step}
                    </span>

                    {/* Step Icon with Glowing Ring on Hover */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white shadow-xs">
                      <Icon className="h-5 w-5 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 font-mono mt-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                    <span>{proc.tagline}</span>
                  </p>

                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {proc.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="font-semibold">
                    {t.process.stepPrefix} {proc.step} / 05
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>{t.process.guarantee}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Complementary Bento Card: "Sizning Loyihangiz / Your Project" CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col justify-between rounded-3xl border-2 border-dashed border-emerald-500/40 bg-gradient-to-br from-emerald-500/5 via-green-600/5 to-teal-700/10 p-6 sm:p-7 shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-emerald-500 overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  Next Step
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                Sizning loyihangiz navbatda!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                G&apos;oyani haqiqatga aylantirish uchun birinchi qadamni hoziroq tashlang.
                15 daqiqada texnik tahlil va taklif tayyorlab beraman.
              </p>
            </div>

            <div className="mt-6 pt-4">
              <a
                href="#contact"
                className="group/btn relative w-full overflow-hidden inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Menga yozing</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

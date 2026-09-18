"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Compass,
  Cpu,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { WORK_PROCESS } from "@/data/portfolioData";

export const Process: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return Layers;
      case "Compass":
        return Compass;
      case "Cpu":
        return Cpu;
      case "Sparkles":
        return Sparkles;
      case "ShieldCheck":
        return ShieldCheck;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="process" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3.5 py-1 text-xs font-mono text-brand-teal mb-3"
          >
            <span>05 // ISHLASH METODOLOGIYASI</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight"
          >
            G&apos;oyadan ishga tushirishgacha{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-indigo bg-clip-text text-transparent">
              aniq 5 qadam
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base"
          >
            Xaos va taxminlarsiz — har bir bosqich puxta rejalashtirilgan,
            xavfsizlik va yuqori unumdorlik bilan ta&apos;minlangan jarayon.
          </motion.p>
        </div>

        {/* Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_PROCESS.map((proc, idx) => {
            const Icon = getStepIcon(proc.icon);
            return (
              <motion.div
                key={proc.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-[#121318]/70 dark:bg-[#121318]/70 light:bg-white p-7 backdrop-blur-xl transition-all duration-300 hover:border-brand-teal/40 hover:bg-[#161820] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-black bg-gradient-to-r from-brand-teal to-brand-indigo bg-clip-text text-transparent">
                      {proc.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-brand-teal group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-teal transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-teal font-mono mt-1">
                    {proc.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {proc.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Bosqich {proc.step} / 05</span>
                  <span className="text-brand-teal">Sifat Kafolati</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

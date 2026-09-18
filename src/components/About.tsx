"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  ShieldCheck,
  Bot,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: "G'oyadan Mahsulotgacha",
      desc: "Figma eskizdan to'liq arxitekturagacha, UI/UX, ma'lumotlar bazasi va API integratsiyasini bir tizimda birlashtiraman.",
      gradient: "from-brand-teal to-blue-500",
    },
    {
      icon: Cpu,
      title: "Local-First & Desktop AI",
      desc: "Tauri 2 + Rust yordamida yengil (<15MB), xavfsiz va internet talab qilmaydigan mahalliy AI tizimlarini ishlab chiqaman.",
      gradient: "from-brand-indigo to-purple-500",
    },
    {
      icon: ShieldCheck,
      title: "Xavfsizlik & Multi-Tenant",
      desc: "IDOR himoyasi, rollarga asoslangan ruxsatlar (RBAC), brute-force profilaktikasi va xavfsiz JWT sessiyalari.",
      gradient: "from-cyan-500 to-brand-teal",
    },
    {
      icon: Bot,
      title: "AI & Telegram Avtomatizatsiya",
      desc: "Claude, Gemini va FLUX modellari yordamida biznes jarayonlarini tezlashtiruvchi Telegram bot va brauzer kengaytmalari.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 dark:border-brand-teal/30 bg-teal-50 dark:bg-brand-teal/10 px-3.5 py-1 text-xs font-mono text-teal-700 dark:text-brand-teal mb-3 font-semibold"
          >
            <span>01 // MEN HAQIMDA</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Muammolarni amaliy{" "}
            <span className="bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-brand-teal dark:to-brand-indigo bg-clip-text text-transparent">
              tizimlarga aylantiraman
            </span>
          </motion.h2>
        </div>

        {/* Grid: Bio Summary & Meta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121318] p-8 sm:p-10 shadow-lg dark:shadow-2xl"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 rounded-full bg-brand-teal animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {PERSONAL_INFO.name}{" "}
                  <span className="text-sm font-normal text-slate-500 dark:text-slate-400 font-mono">
                    ({PERSONAL_INFO.nickname})
                  </span>
                </h3>
              </div>

              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-base sm:text-lg">
                {PERSONAL_INFO.bio}
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base border-l-2 border-brand-teal/70 pl-4 italic">
                &ldquo;{PERSONAL_INFO.philosophy}&rdquo;
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                  Asosiy Qiziqishlarim:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SaaS Boshqaruv Tizimlari",
                    "Local-First AI Desktop",
                    "EdTech & LMS Platformalar",
                    "Telegram Bot Avtomatizatsiyalari",
                    "Chrome Extension Ekotizimi",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-1 text-xs font-medium text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle2 className="h-3 w-3 text-brand-teal" />
                      <span>{interest}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Meta Strip */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-3 text-center">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block">Tajriba</span>
                <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  2+ Yil
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block">Hudud</span>
                <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  O&apos;zbekiston
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block">Rejim</span>
                <span className="text-sm font-bold text-teal-700 dark:text-brand-teal">
                  Masofaviy / Full-time
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right 4 Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121318] p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-teal/50 hover:bg-slate-50 dark:hover:bg-[#161820]"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr ${pillar.gradient} text-white shadow-md`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-teal transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

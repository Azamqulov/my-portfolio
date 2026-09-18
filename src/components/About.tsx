"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  ShieldCheck,
  Bot,
  MapPin,
  Calendar,
  Briefcase,
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
      gradient: "from-cyan-400 to-brand-teal",
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3.5 py-1 text-xs font-mono text-brand-teal mb-3"
          >
            <span>01 // MEN HAQIMDA</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight"
          >
            Muammolarni amaliy{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-indigo bg-clip-text text-transparent">
              tizimlarga aylantiraman
            </span>
          </motion.h2>
        </div>

        {/* Grid: Bio Summary & Meta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-[#121318]/80 dark:bg-[#121318]/80 light:bg-white p-8 sm:p-10 backdrop-blur-xl shadow-xl"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 rounded-full bg-brand-teal animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                  {PERSONAL_INFO.name}{" "}
                  <span className="text-sm font-normal text-slate-400 font-mono">
                    ({PERSONAL_INFO.nickname})
                  </span>
                </h3>
              </div>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg">
                {PERSONAL_INFO.bio}
              </p>

              <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed text-sm sm:text-base border-l-2 border-brand-teal/50 pl-4 italic">
                &ldquo;{PERSONAL_INFO.philosophy}&rdquo;
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
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
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="h-3 w-3 text-brand-teal" />
                      <span>{interest}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Meta Strip */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
              <div>
                <span className="text-xs text-slate-500 font-mono block">Tajriba</span>
                <span className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                  2+ Yil
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">Hudud</span>
                <span className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                  O&apos;zbekiston
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">Rejim</span>
                <span className="text-sm font-semibold text-brand-teal">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-[#121318]/60 dark:bg-[#121318]/60 light:bg-white p-5 backdrop-blur-md transition-all duration-300 hover:border-brand-teal/40 hover:bg-[#161820]"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr ${pillar.gradient} text-white shadow-md`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-teal transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
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

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Monitor,
  Server,
  BrainCircuit,
  Palette,
  Sparkles,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return Layout;
      case "Monitor":
        return Monitor;
      case "Server":
        return Server;
      case "BrainCircuit":
        return BrainCircuit;
      case "Palette":
        return Palette;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3.5 py-1 text-xs font-mono text-brand-teal mb-3"
          >
            <span>02 // TEXNOLOGIK STEK</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight"
          >
            Zamonaviy stack,{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-indigo bg-clip-text text-transparent">
              aniq natijalar
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base"
          >
            Har bir loyiha uchun uning me&apos;mori va talablariga mos eng maqbul,
            tezkor va xavfsiz texnologiyalarni tanlayman.
          </motion.p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = getCategoryIcon(category.iconName);
            const isFeatured = idx === 0 || idx === 3; // Highlight Frontend & AI

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveTab(idx)}
                onMouseLeave={() => setActiveTab(null)}
                className={`group relative flex flex-col justify-between rounded-3xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-[#121318]/70 dark:bg-[#121318]/70 light:bg-white p-7 backdrop-blur-xl transition-all duration-300 hover:border-brand-teal/50 hover:bg-[#171821] hover:-translate-y-1 hover:shadow-glow-subtle ${
                  isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Ambient Card Corner Glow */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-teal/10 rounded-full blur-2xl group-hover:bg-brand-teal/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-teal/20 to-brand-indigo/20 border border-brand-teal/30 text-brand-teal group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-teal transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag List */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                          skill.highlight
                            ? "border border-brand-teal/40 bg-brand-teal/10 text-white dark:text-white shadow-sm"
                            : "border border-white/10 bg-white/5 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-white/20"
                        }`}
                      >
                        {skill.highlight && (
                          <Sparkles className="h-3 w-3 text-brand-teal" />
                        )}
                        <span>{skill.name}</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-500 light:text-slate-400 font-mono">
                          • {skill.level}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{category.skills.length} ta asosiy asbob</span>
                  <span className="text-brand-teal group-hover:translate-x-0.5 transition-transform">
                    100% Production-Grade →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

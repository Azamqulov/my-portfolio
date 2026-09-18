"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Monitor,
  Server,
  BrainCircuit,
  Palette,
  Sparkles,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { TechIcon } from "@/components/TechIcon";

export const Skills: React.FC = () => {
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 dark:border-brand-teal/30 bg-teal-50 dark:bg-brand-teal/10 px-3.5 py-1 text-xs font-mono text-teal-700 dark:text-brand-teal mb-3 font-semibold"
          >
            <span>02 // TEXNOLOGIK STEK</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Zamonaviy stack,{" "}
            <span className="bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-brand-teal dark:to-brand-indigo bg-clip-text text-transparent">
              aniq natijalar
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-slate-600 dark:text-slate-300 text-sm sm:text-base"
          >
            Har bir loyiha uchun uning me&apos;mori va talablariga mos eng maqbul,
            tezkor va xavfsiz texnologiyalarni tanlayman.
          </motion.p>
        </div>

        {/* Skills Bento Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = getCategoryIcon(category.iconName);
            const isFeatured = idx === 0 || idx === 3;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121318] p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-brand-teal/50 hover:-translate-y-1 ${
                  isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 dark:bg-brand-teal/15 border border-teal-500/20 text-teal-600 dark:text-brand-teal group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-teal transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag List with Brand Icons */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                          skill.highlight
                            ? "border border-teal-500/30 dark:border-brand-teal/40 bg-teal-50/80 dark:bg-brand-teal/15 text-slate-900 dark:text-slate-100 shadow-sm"
                            : "border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20"
                        }`}
                      >
                        <TechIcon name={skill.name} size={15} />
                        <span>{skill.name}</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-400 font-mono">
                          • {skill.level}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>{category.skills.length} ta asosiy asbob</span>
                  <span className="text-teal-700 dark:text-brand-teal font-semibold group-hover:translate-x-0.5 transition-transform">
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

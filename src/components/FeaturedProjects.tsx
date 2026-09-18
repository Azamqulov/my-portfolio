"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Bot,
  Zap,
  Layers,
  ChevronRight,
  X,
  Send,
} from "lucide-react";
import { FEATURED_PROJECTS, Project } from "@/data/portfolioData";

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="featured-projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3.5 py-1 text-xs font-mono text-brand-teal mb-3"
          >
            <span>03 // TANLANGAN LOYIHALAR</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight"
          >
            Flagship loyihalar va{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-indigo bg-clip-text text-transparent">
              Bento Grid
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base"
          >
            SaaS boshqaruv platformalaridan tortib, chuqur lokal AI desktop
            ilovalari va brauzer kengaytmalarigacha bo&apos;lgan eng muhim
            ishlarim.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isLarge = idx === 0; // Boshqar.uz gets the flagship large slot

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-[#121318]/80 dark:bg-[#121318]/80 light:bg-white p-7 backdrop-blur-xl transition-all duration-500 hover:border-brand-teal/50 hover:shadow-2xl hover:shadow-brand-teal/10 hover:-translate-y-1 ${
                  isLarge ? "md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between" : ""
                }`}
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br ${project.accentColor} opacity-15 blur-3xl group-hover:opacity-25 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Card Top Strip */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-brand-teal">
                      <Sparkles className="h-3 w-3" />
                      <span>{project.categoryLabel}</span>
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        aria-label="Tafsilotlar"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 group-hover:text-white group-hover:border-brand-teal/40 group-hover:bg-brand-teal/10 transition-colors"
                      >
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-teal transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Visual Mockup Preview Area */}
                  {isLarge && (
                    <div className="mt-6 my-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#181A22] to-[#0D0E12] p-5 shadow-inner">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                          <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                          <span className="ml-2 text-[11px] font-mono text-slate-400">
                            boshqar.uz — ERP/POS System Dashboard
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded">
                          Multi-tenant Live
                        </span>
                      </div>

                      {/* Mockup UI stats representation */}
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                          <span className="text-[10px] text-slate-400 block">Savdo & POS</span>
                          <span className="text-sm sm:text-base font-bold text-brand-teal">
                            Instant Sync
                          </span>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                          <span className="text-[10px] text-slate-400 block">AI Product Entry</span>
                          <span className="text-sm sm:text-base font-bold text-blue-400">
                            Smart Autofill
                          </span>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                          <span className="text-[10px] text-slate-400 block">Cross-tenant IDOR</span>
                          <span className="text-sm sm:text-base font-bold text-emerald-400">
                            Protected 100%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Metrics Badges */}
                  {project.metrics && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px]"
                        >
                          <span className="text-slate-400">{m.label}: </span>
                          <span className="font-semibold text-white dark:text-white font-mono">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Tech Tags */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, isLarge ? 5 : 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > (isLarge ? 5 : 3) && (
                      <span className="text-[10px] font-mono text-slate-500 self-center">
                        +{project.techStack.length - (isLarge ? 5 : 3)} yana
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-brand-teal inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Batafsil ko&apos;rish <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl border border-white/20 bg-[#121318] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Yopish"
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3 py-1 text-xs font-mono text-brand-teal">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs text-slate-400 font-mono">Flagship Case Study</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-brand-teal mt-1">
                {selectedProject.subtitle}
              </p>

              <div className="my-5 p-4 rounded-2xl border border-white/10 bg-white/5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Loyiha Haqida & Arxitektura:
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
                {selectedProject.fullDetails && (
                  <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/5">
                    {selectedProject.fullDetails}
                  </p>
                )}
              </div>

              {/* Tech Stack in Modal */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Ishlatilgan Texnologiyalar:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/15 bg-white/10 px-3 py-1 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Fokus Yo&apos;nalishlari:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-brand-indigo/30 bg-brand-indigo/10 px-2.5 py-1 text-xs text-brand-indigo"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://t.me/Musurmon_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-indigo px-6 py-2.5 text-xs font-semibold text-white shadow-lg"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Ushbu loyiha bo&apos;yicha suhbat</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Yopish
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

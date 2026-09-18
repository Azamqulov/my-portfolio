"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  X,
  Send,
} from "lucide-react";
import { FEATURED_PROJECTS, Project } from "@/data/portfolioData";
import { ProjectMockup } from "@/components/ProjectMockup";

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="featured-projects" className="py-24 px-4 relative">
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
            <span>03 // TANLANGAN LOYIHALAR</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Flagship loyihalar va{" "}
            <span className="bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-brand-teal dark:to-brand-indigo bg-clip-text text-transparent">
              Bento Grid
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base"
          >
            SaaS boshqaruv platformalaridan tortib, chuqur lokal AI desktop
            ilovalari va brauzer kengaytmalarigacha bo&apos;lgan eng muhim
            ishlarim.
          </motion.p>
        </div>

        {/* Bento Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isLarge = idx === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setSelectedProject(project)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121318] p-7 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-brand-teal/50 hover:-translate-y-1 ${
                  isLarge
                    ? "md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between"
                    : "flex flex-col justify-between"
                }`}
              >
                {/* Top strip */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 dark:border-white/10 bg-teal-50 dark:bg-white/5 px-3 py-1 text-[11px] font-mono text-teal-700 dark:text-brand-teal font-semibold">
                      <Sparkles className="h-3 w-3" />
                      <span>{project.categoryLabel}</span>
                    </span>

                    <button
                      aria-label="Tafsilotlar"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 group-hover:text-brand-teal group-hover:border-brand-teal/50 transition-colors"
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-teal transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Visual UI Mockup Container */}
                  <div className="mt-5 mb-3">
                    <ProjectMockup projectId={project.id} />
                  </div>

                  {/* Metrics Badges */}
                  {project.metrics && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] px-2.5 py-1 text-[11px]"
                        >
                          <span className="text-slate-500 dark:text-slate-400">{m.label}: </span>
                          <span className="font-bold text-slate-900 dark:text-slate-100 font-mono">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Tech Tags */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, isLarge ? 5 : 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[10px] font-mono text-slate-700 dark:text-slate-300 font-medium"
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

                  <span className="text-xs font-bold text-teal-700 dark:text-brand-teal inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Batafsil <ChevronRight className="h-3 w-3" />
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl border border-slate-300 dark:border-white/20 bg-white dark:bg-[#121318] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-slate-900 dark:text-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Yopish"
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-full border border-teal-600/30 dark:border-brand-teal/30 bg-teal-50 dark:bg-brand-teal/10 px-3 py-1 text-xs font-mono text-teal-700 dark:text-brand-teal font-semibold">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Flagship Case Study</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-bold text-teal-700 dark:text-brand-teal mt-1">
                {selectedProject.subtitle}
              </p>

              {/* Visual Mockup in Modal */}
              <div className="my-4">
                <ProjectMockup projectId={selectedProject.id} />
              </div>

              <div className="my-4 p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Loyiha Haqida & Arxitektura:
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {selectedProject.description}
                </p>
                {selectedProject.fullDetails && (
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed pt-2 border-t border-slate-200 dark:border-white/10">
                    {selectedProject.fullDetails}
                  </p>
                )}
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Ishlatilgan Texnologiyalar:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/10 px-3 py-1 text-xs font-mono text-slate-800 dark:text-slate-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://t.me/Musurmon_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-indigo px-6 py-2.5 text-xs font-bold text-white shadow-lg"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Ushbu loyiha bo&apos;yicha suhbat</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white"
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

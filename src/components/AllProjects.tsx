"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Search,
  Sparkles,
  ExternalLink,
  Bot,
  GraduationCap,
  Layers,
  Monitor,
} from "lucide-react";
import { ALL_PROJECTS } from "@/data/portfolioData";
import { ProjectMockup } from "@/components/ProjectMockup";

type CategoryFilter = "all" | "ai" | "web" | "desktop" | "bot" | "edtech";

interface FilterOption {
  id: CategoryFilter;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const filterOptions: FilterOption[] = [
  { id: "all", label: "Barchasi", icon: Sparkles },
  { id: "ai", label: "AI & DevTools", icon: Bot },
  { id: "web", label: "Web & SaaS", icon: Layers },
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "bot", label: "Telegram Bot", icon: Code2 },
  { id: "edtech", label: "EdTech & LMS", icon: GraduationCap },
];

export const AllProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="all-projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 dark:border-brand-teal/30 bg-teal-50 dark:bg-brand-teal/10 px-3.5 py-1 text-xs font-mono text-teal-700 dark:text-brand-teal mb-3 font-semibold"
          >
            <span>04 // BARCHA ISHLARIM</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Loyihalar{" "}
            <span className="bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-brand-teal dark:to-brand-indigo bg-clip-text text-transparent">
              Arxivi ({ALL_PROJECTS.length}+)
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-slate-600 dark:text-slate-300 text-sm sm:text-base"
          >
            Kategoriyalar bo&apos;yicha saralang yoki istalgan texnologiya (masalan:
            Python, Tauri, React, aiogram) bo&apos;yicha tezkor qidiring.
          </motion.p>
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => {
              const Icon = opt.icon;
              const isActive = selectedCategory === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedCategory(opt.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-brand-teal to-brand-indigo text-white shadow-md shadow-brand-teal/20 scale-105"
                      : "border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Qidiruv (masalan: Rust, AI)..."
              className="w-full rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 pl-10 pr-4 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal backdrop-blur-md shadow-sm"
            />
          </div>
        </div>

        {/* Projects Grid with Stagger */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121318] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-brand-teal/50 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-semibold text-teal-700 dark:text-brand-teal bg-teal-50 dark:bg-brand-teal/10 px-2.5 py-0.5 rounded-full border border-teal-500/20 dark:border-brand-teal/20">
                      {project.categoryLabel}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 px-2 py-0.5 rounded-full">
                        ★ Flagship
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-teal transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Visual Mockup inside card */}
                  <div className="mt-4">
                    <ProjectMockup projectId={project.id} isCompact />
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/5 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[10px] font-mono text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex flex-wrap gap-1 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>

                    <a
                      href="https://t.me/Musurmon_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-teal-700 dark:text-brand-teal hover:underline flex items-center gap-1"
                    >
                      <span>Suhbat</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400 text-sm">
            Hech qanday loyiha topilmadi. Qidiruv so&apos;zini o&apos;zgartirib ko&apos;ring.
          </div>
        )}
      </div>
    </section>
  );
};

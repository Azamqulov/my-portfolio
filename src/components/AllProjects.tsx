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
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle2,
} from "lucide-react";
import { ALL_PROJECTS } from "@/data/portfolioData";
import { TechIcon } from "@/components/TechIcon";
import { Aos } from "@/components/Aos";

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
  const [showAll, setShowAll] = useState(false);

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

  // Display only 4 cards initially
  const displayedProjects = useMemo(() => {
    if (showAll || searchQuery.trim() !== "" || selectedCategory !== "all") {
      return filteredProjects;
    }
    return filteredProjects.slice(0, 4);
  }, [filteredProjects, showAll, searchQuery, selectedCategory]);

  const hasMore = filteredProjects.length > 4 && !showAll && searchQuery.trim() === "" && selectedCategory === "all";

  return (
    <section
      id="all-projects"
      aria-labelledby="all-projects-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with AOS */}
        <div className="flex flex-col items-center text-center mb-12">
          <Aos animation="fade-up" delay={0.05}>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-sky-500 uppercase mb-3">
              <span>• LOYIHALAR ARXIVI ({ALL_PROJECTS.length}+)</span>
            </div>
          </Aos>
          <Aos animation="fade-up" delay={0.12}>
            <h2
              id="all-projects-heading"
              className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight"
            >
              Loyihalar Arxivini Ko&apos;rish
            </h2>
          </Aos>
          <Aos animation="fade-up" delay={0.18}>
            <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-normal">
              Har bir soha va texnologiya bo&apos;yicha to&apos;liq arxitektura va amaliy ishlanmalar.
            </p>
          </Aos>
        </div>

        {/* Filter and Search Controls Bar with AOS */}
        <Aos animation="fade-up" delay={0.22}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Loyiha toifalari">
              {filterOptions.map((opt) => {
                const Icon = opt.icon;
                const isActive = selectedCategory === opt.id;
                return (
                  <button
                    key={opt.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setSelectedCategory(opt.id);
                      if (opt.id !== "all") setShowAll(true);
                    }}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/25 scale-105"
                        : "border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0B101D]/90 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-sky-500/30"
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
                aria-label="Loyihalarni qidirish"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Qidiruv (masalan: React, AI)..."
                className="w-full rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0B101D]/90 pl-10 pr-4 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 backdrop-blur-md shadow-sm"
              />
            </div>
          </div>
        </Aos>

        {/* 4 Cards Grid - 100% Theme Adaptive with Interactive Tabs & 3D Polish */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 4) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0B101D]/95 p-6 sm:p-7 shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-sky-500/50 backdrop-blur-md overflow-hidden"
              >
                {/* Ambient glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500/5 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                      {project.categoryLabel}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                        ★ Flagship
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Clean Theme-Adaptive Interactive Window Preview (NO black boxes!) */}
                  <div className="mt-5 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-900/70 p-4 transition-all duration-300 group-hover:border-sky-500/30 group-hover:shadow-inner">
                    {/* Window Controls Dot Bar with Status */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/70 dark:border-slate-800/70 mb-3 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] transition-transform group-hover:scale-110" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] transition-transform group-hover:scale-110" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] transition-transform group-hover:scale-110" />
                        <span className="ml-2 font-mono text-slate-600 dark:text-slate-300 font-semibold truncate max-w-[150px] sm:max-w-[200px]">
                          {project.id}.azamqulov.com
                        </span>
                      </div>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5 shrink-0">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Faol Tizim
                      </span>
                    </div>

                    {/* Metrics or Highlights inside the preview window */}
                    {project.metrics && project.metrics.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {project.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-800/70 p-2.5 transition-all hover:border-sky-500/40"
                          >
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">
                              {m.label}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center gap-2 py-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/70 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-3 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/90 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://t.me/Musurmon_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-all hover:translate-x-0.5"
                  >
                    <span>Bog&apos;lanish</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-white/95 dark:bg-[#0B101D]/90 px-8 py-3.5 text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 shadow-md hover:bg-sky-500/10 hover:border-sky-500 transition-all hover:scale-105 active:scale-95"
            >
              <span>Barcha loyihalarni ko&apos;rish (+{filteredProjects.length - 4} ta)</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        )}

        {showAll && searchQuery.trim() === "" && selectedCategory === "all" && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                setShowAll(false);
                const el = document.getElementById("all-projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-800 bg-white/90 dark:bg-[#0B101D]/90 px-6 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
            >
              <span>Kamroq ko&apos;rsatish</span>
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400 text-sm">
            Hech qanday loyiha topilmadi. Qidiruv so&apos;zini o&apos;zgartirib ko&apos;ring.
          </div>
        )}
      </div>
    </section>
  );
};

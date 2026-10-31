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
} from "lucide-react";
import { ALL_PROJECTS, Project } from "@/data/portfolioData";
import { Aos } from "@/components/Aos";
import { useLanguage } from "@/context/LanguageContext";

type CategoryFilter = "all" | "ai" | "web" | "desktop" | "bot" | "edtech";

export const AllProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  const filterOptions: {
    id: CategoryFilter;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "all", label: t.allProjects.filters.all, icon: Sparkles },
    { id: "ai", label: t.allProjects.filters.ai, icon: Bot },
    { id: "web", label: t.allProjects.filters.web, icon: Layers },
    { id: "desktop", label: t.allProjects.filters.desktop, icon: Monitor },
    { id: "bot", label: t.allProjects.filters.bot, icon: Code2 },
    { id: "edtech", label: t.allProjects.filters.edtech, icon: GraduationCap },
  ];

  const getTranslatedProject = (project: Project) => {
    const translation = (
      t.allProjects.projects as Record<
        string,
        { title?: string; subtitle?: string; description?: string }
      >
    )[project.id];
    return {
      title: translation?.title || project.title,
      subtitle: translation?.subtitle || project.subtitle,
      description: translation?.description || project.description,
    };
  };

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const translated = getTranslatedProject(project);
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        translated.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        translated.subtitle.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        translated.description.toLowerCase().includes(q) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(q)) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, t]);

  // Display only 4 cards initially
  const displayedProjects = useMemo(() => {
    if (showAll || searchQuery.trim() !== "" || selectedCategory !== "all") {
      return filteredProjects;
    }
    return filteredProjects.slice(0, 4);
  }, [filteredProjects, showAll, searchQuery, selectedCategory]);

  const hasMore =
    filteredProjects.length > 4 &&
    !showAll &&
    searchQuery.trim() === "" &&
    selectedCategory === "all";

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
              <span>
                {t.allProjects.tag} ({ALL_PROJECTS.length}+)
              </span>
            </div>
          </Aos>
          <Aos animation="fade-up" delay={0.12}>
            <h2
              id="all-projects-heading"
              className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight"
            >
              {t.allProjects.heading}
            </h2>
          </Aos>
          <Aos animation="fade-up" delay={0.18}>
            <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-normal">
              {t.allProjects.subtitle}
            </p>
          </Aos>
        </div>

        {/* Filter and Search Bar Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm backdrop-blur-md w-full md:w-auto">
            {filterOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedCategory === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedCategory(opt.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10 h-3.5 w-3.5" />
                  <span className="relative z-10">{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.allProjects.searchPlaceholder}
              className="w-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* 4 Cards Grid - 100% Theme Adaptive */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {displayedProjects.map((project) => {
              const translated = getTranslatedProject(project);

              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0B101D]/95 p-6 sm:p-7 shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-sky-500/50 backdrop-blur-xl overflow-hidden"
                >
                  {/* Subtle inner hover ambient bloom */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-sky-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-300 font-semibold">
                        {project.categoryLabel}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-amber-500 font-semibold">
                          <Sparkles className="h-3 w-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-400 transition-colors">
                      {translated.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400 mt-1 mb-3">
                      {translated.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                      {translated.description}
                    </p>

                    {/* Interactive Window Preview */}
                    <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/60 p-3.5 mb-4 shadow-inner">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2.5 pb-2 border-b border-slate-200/70 dark:border-slate-800/70">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-rose-400" />
                          <span className="h-2 w-2 rounded-full bg-amber-400" />
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          <span className="ml-2 font-mono text-slate-600 dark:text-slate-300 font-semibold truncate max-w-[150px] sm:max-w-[200px]">
                            {project.id}.azamqulov.com
                          </span>
                        </div>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5 shrink-0">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          {t.allProjects.liveSystem}
                        </span>
                      </div>

                      {/* Metrics or Highlights */}
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
                      <span>{t.allProjects.contactLink}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-white/95 dark:bg-[#0B101D]/90 px-8 py-3.5 text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 shadow-md hover:bg-sky-500/10 hover:border-sky-500 transition-all hover:scale-105 active:scale-95"
            >
              <span>
                {t.allProjects.showAll} (+{filteredProjects.length - 4} ta)
              </span>
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
              <span>{t.allProjects.showLess}</span>
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400 text-sm">
            {t.allProjects.notFound}
          </div>
        )}
      </div>
    </section>
  );
};

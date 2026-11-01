"use client";

import React, { useState, useMemo, useEffect } from "react";
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
  ChevronRight,
  Copy,
  Check,
  Activity,
  Terminal,
  Cpu,
  Zap,
  ArrowUpRight,
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
  const [activeProjectId, setActiveProjectId] = useState<string>(ALL_PROJECTS[0]?.id || "");
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
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
    )?.[project.id];
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
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

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

  // Keep active project in sync with filtered list
  useEffect(() => {
    if (filteredProjects.length > 0) {
      const exists = filteredProjects.some((p) => p.id === activeProjectId);
      if (!exists) {
        setActiveProjectId(filteredProjects[0].id);
      }
    }
  }, [filteredProjects, activeProjectId]);

  const activeProject = useMemo(() => {
    return (
      filteredProjects.find((p) => p.id === activeProjectId) ||
      filteredProjects[0] ||
      null
    );
  }, [filteredProjects, activeProjectId]);

  const activeTranslated = activeProject ? getTranslatedProject(activeProject) : null;

  const handleCopyLink = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(`https://${id}.azamqulov.com`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
    setActiveProjectId(id);
  };

  return (
    <section
      id="all-projects"
      aria-labelledby="all-projects-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Ambient localized glowing light beam */}
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-600/10 via-forest/5 to-transparent rounded-full blur-[150px] -z-10 dark:opacity-60 opacity-30" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-teal-600/10 via-forest/5 to-transparent rounded-full blur-[140px] -z-10 dark:opacity-60 opacity-25" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header: Mobile Centered, Desktop Left-Aligned */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-12">
          <Aos animation="fade-up" delay={0.05}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-emerald-500">(03)</span>
              <span className="h-[1px] w-12 bg-emerald-500/40" />
              <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-semibold">
                {t.allProjects.tag} ({ALL_PROJECTS.length}+)
              </span>
            </div>
          </Aos>
          <Aos animation="fade-up" delay={0.12}>
            <h2
              id="all-projects-heading"
              className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-heading"
            >
              {t.allProjects.heading} <sup className="text-base font-mono text-emerald-500 font-bold ml-1">{ALL_PROJECTS.length}</sup>
            </h2>
          </Aos>
          <Aos animation="fade-up" delay={0.18}>
            <p className="mt-3.5 max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed mx-auto sm:mx-0">
              {t.allProjects.subtitle}
            </p>
          </Aos>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/85 dark:bg-[#0A1410]/90 border border-slate-200/90 dark:border-slate-800 shadow-sm backdrop-blur-md w-full lg:w-auto">
            {filterOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedCategory === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedCategory(opt.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeCategoryGlider"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 shadow-md"
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
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.allProjects.searchPlaceholder}
              className="w-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-[#0A1410]/90 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-sm backdrop-blur-md transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 p-8">
            <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 mb-3">
              <Search className="h-6 w-6" />
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
              {t.allProjects.notFound}
            </p>
          </div>
        )}

        {/* SPLIT-SCREEN INTERACTIVE SHOWCASE (Desktop & Tablet) */}
        {filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Interactive Project Matrix List */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 px-2 mb-1">
                <span className="uppercase tracking-wider">
                  Tanlangan toifa ({filteredProjects.length})
                </span>
                <span className="hidden lg:inline text-emerald-500 font-medium">
                  Hover yoki bosing ⚡
                </span>
              </div>

              {filteredProjects.map((project, idx) => {
                const translated = getTranslatedProject(project);
                const isActive = activeProjectId === project.id;
                const isMobileExpanded = expandedMobileId === project.id;
                const indexFormatted = String(idx + 1).padStart(2, "0");

                return (
                  <div key={project.id} className="flex flex-col">
                    {/* Project Row Item */}
                    <div
                      onMouseEnter={() => setActiveProjectId(project.id)}
                      onClick={() => {
                        setActiveProjectId(project.id);
                        toggleMobileExpand(project.id);
                      }}
                      className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-xl ${
                        isActive
                          ? "border-emerald-500/60 dark:border-emerald-500/60 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-white/90 dark:to-[#0A1410]/95 shadow-md"
                          : "border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-[#0A1410]/80 hover:border-emerald-500/40 hover:bg-white/95 dark:hover:bg-[#0F1E18]/90 shadow-sm"
                      }`}
                    >
                      {/* Active Indicator Left Accent Bar */}
                      {isActive && (
                        <motion.div
                          layoutId="activeLeftIndicator"
                          className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-gradient-to-b from-emerald-400 to-green-600 shadow-sm"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}

                      <div className="flex items-start gap-3.5 pr-2">
                        {/* Numeral */}
                        <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-0.5 shrink-0">
                          {indexFormatted}
                        </span>

                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3
                              className={`text-base sm:text-lg font-bold font-heading transition-colors ${
                                isActive
                                  ? "text-emerald-700 dark:text-emerald-400"
                                  : "text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300"
                              }`}
                            >
                              {translated.title}
                            </h3>
                            {project.featured && (
                              <span className="flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                                <Sparkles className="h-2.5 w-2.5" />
                                Star
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-slate-500 dark:text-slate-400 font-normal line-clamp-1 mb-2">
                            {translated.subtitle}
                          </p>

                          {/* Tech chips */}
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-800"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 3 && (
                              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-slate-400">
                                +{project.techStack.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Arrow / Mobile Toggle */}
                      <div className="flex items-center gap-2 shrink-0">
                        {/* Desktop Arrow */}
                        <div
                          className={`hidden lg:flex h-8 w-8 rounded-xl items-center justify-center transition-all ${
                            isActive
                              ? "bg-emerald-600 text-white shadow-sm translate-x-1"
                              : "bg-slate-100 dark:bg-slate-800/60 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white group-hover:translate-x-0.5"
                          }`}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </div>

                        {/* Mobile Expand Chevron */}
                        <div className="lg:hidden h-8 w-8 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800/70 text-slate-500 dark:text-slate-300">
                          {isMobileExpanded ? (
                            <ChevronUp className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* MOBILE INLINE EXPANSION ACCORDION (Visible only on < lg) */}
                    <AnimatePresence>
                      {isMobileExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="lg:hidden overflow-hidden mt-2 mb-3"
                        >
                          <div className="rounded-2xl border border-emerald-500/40 bg-white/95 dark:bg-[#0A1410]/95 p-5 shadow-xl backdrop-blur-2xl">
                            {/* Live Badge and Category */}
                            <div className="flex items-center justify-between mb-3">
                              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/30">
                                {project.categoryLabel}
                              </span>
                              <span className="text-emerald-500 text-xs font-mono font-semibold flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                {t.allProjects.liveSystem}
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                              {translated.description}
                            </p>

                            {/* Metrics if available */}
                            {project.metrics && project.metrics.length > 0 && (
                              <div className="grid grid-cols-2 gap-2 mb-4">
                                {project.metrics.map((m, mIdx) => (
                                  <div
                                    key={mIdx}
                                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60"
                                  >
                                    <span className="block text-[10px] font-mono text-slate-400">
                                      {m.label}
                                    </span>
                                    <span className="text-xs font-bold font-mono text-slate-900 dark:text-white">
                                      {m.value}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Full Tech Stack */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Action Button */}
                            <a
                              href="https://t.me/Musurmon_dev"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 px-4 py-2.5 text-xs font-bold text-white shadow-md active:scale-95 transition-all"
                            >
                              <span>{t.allProjects.contactLink} (Telegram)</span>
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: STICKY LIVE PREVIEW CONSOLE (Desktop only) */}
            <div className="hidden lg:block lg:col-span-7 sticky top-28 self-start">
              {activeProject && activeTranslated && (
                <div className="relative rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0A1410]/95 shadow-2xl backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:border-emerald-500/50">
                  {/* Subtle Top Accent Ambient Light */}
                  <div
                    className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${activeProject.accentColor} opacity-20 blur-3xl pointer-events-none transition-all duration-500`}
                  />

                  {/* Browser/Terminal Chrome Bar */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/60 backdrop-blur-md">
                    {/* 3 Mac Style Buttons */}
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500/80 border border-rose-600/30" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80 border border-amber-600/30" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80 border border-emerald-600/30" />
                    </div>

                    {/* Interactive URL Bar */}
                    <div
                      onClick={(e) => handleCopyLink(activeProject.id, e)}
                      title="Nusxa olish"
                      className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-xs font-mono text-slate-600 dark:text-slate-300 hover:border-emerald-500/60 cursor-pointer shadow-inner transition-all"
                    >
                      <span className="text-emerald-500 text-[11px]">🔒</span>
                      <span className="font-semibold">{activeProject.id}.azamqulov.com</span>
                      <button className="text-slate-400 group-hover:text-emerald-500 transition-colors ml-1">
                        {copied ? (
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Live Radar Pulse */}
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                        {t.allProjects.liveSystem}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Animated Content Body */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.98 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="p-7 sm:p-8 flex flex-col justify-between"
                    >
                      <div>
                        {/* Category & Accent Badge */}
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-300">
                              {activeProject.categoryLabel}
                            </span>
                            {activeProject.featured && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/30">
                                <Sparkles className="h-3 w-3" />
                                Star Showcase
                              </span>
                            )}
                          </div>

                          <span className="text-xs font-mono text-slate-400">
                            ID: #{activeProject.id}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-2">
                          {activeTranslated.title}
                        </h3>
                        <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-4">
                          {activeTranslated.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                          {activeTranslated.description}
                        </p>

                        {/* Full Architecture Note if available */}
                        {activeProject.fullDetails && (
                          <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-4 mb-6">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 mb-1.5">
                              <Cpu className="h-3.5 w-3.5" />
                              <span>Arxitektura & Ichki Imkoniyatlar:</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                              {activeProject.fullDetails}
                            </p>
                          </div>
                        )}

                        {/* Metrics or Highlights Matrix */}
                        {activeProject.metrics && activeProject.metrics.length > 0 ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                            {activeProject.metrics.map((m, mIdx) => (
                              <div
                                key={mIdx}
                                className="group/metric rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-3.5 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-sm"
                              >
                                <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono mb-1">
                                  {m.label}
                                </span>
                                <span className="text-sm font-bold font-mono text-slate-900 dark:text-white group-hover/metric:text-emerald-500 transition-colors">
                                  {m.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {activeProject.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 px-3 py-1 text-xs font-mono text-slate-700 dark:text-slate-300"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Live Terminal Execution Simulation */}
                        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300 mb-6 shadow-inner">
                          <div className="flex items-center justify-between text-slate-500 pb-2 mb-2 border-b border-slate-800 text-[10px]">
                            <span className="flex items-center gap-1.5 text-emerald-400">
                              <Terminal className="h-3 w-3" />
                              <span>system-diagnostics</span>
                            </span>
                            <span>v2.4.0-stable</span>
                          </div>
                          <div className="space-y-1 text-[11px]">
                            <p className="text-slate-400">
                              <span className="text-emerald-400">user@azamqulov:~$</span> inspect --module {activeProject.id}
                            </p>
                            <p className="text-slate-300">
                              <span className="text-emerald-400">[CORE]</span> Engine: {activeProject.techStack[0]} • Category: {activeProject.categoryLabel}
                            </p>
                            <p className="text-emerald-400">
                              <span className="text-emerald-500">[HEALTH]</span> 100% Operational • High Availability Deployment
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack Matrix */}
                        <div className="mb-6">
                          <span className="block text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                            Texnologiyalar ekotizimi
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {activeProject.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/90 px-3 py-1.5 text-xs font-mono text-slate-700 dark:text-slate-200 font-medium hover:border-emerald-500/50 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer Action Row */}
                      <div className="pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                          <Zap className="h-3.5 w-3.5 text-amber-500" />
                          <span>Buyurtma & Konsultatsiya ochiq</span>
                        </div>

                        <a
                          href="https://t.me/Musurmon_dev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all"
                        >
                          <span>{t.allProjects.contactLink}</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

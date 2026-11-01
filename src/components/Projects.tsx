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
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Terminal,
  Cpu,
  Zap,
  ArrowUpRight,
  X,
  Send,
  Eye,
  TrendingUp,
  ShieldCheck,
  ShoppingBag,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { ALL_PROJECTS, Project } from "@/data/portfolioData";
import { ProjectMockup } from "@/components/ProjectMockup";
import { Aos } from "@/components/Aos";
import { useLanguage } from "@/context/LanguageContext";

type CategoryFilter = "all" | "ai" | "web" | "desktop" | "bot" | "edtech";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const { t, language } = useLanguage();

  // Escape key handler for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalProject(null);
      }
    };
    if (modalProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [modalProject]);

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

  // If in "all" and no search query, show top 4 by default unless showAll is true
  const isDefaultView = selectedCategory === "all" && !searchQuery.trim();
  const visibleProjects = isDefaultView && !showAll ? filteredProjects.slice(0, 4) : filteredProjects;
  const hiddenCount = isDefaultView ? Math.max(0, filteredProjects.length - 4) : 0;

  const handleCopyLink = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(`https://${id}.azamqulov.com`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const headingText =
    language === "ru"
      ? "Реализованные Проекты & Системы"
      : language === "en"
      ? "Featured Production Projects"
      : "Amaliy Loyihalar & Tizimlar";

  const subtitleText =
    language === "ru"
      ? "Ключевые флагманские решения: масштабируемый SaaS, локальный AI и высоконагруженные веб-платформы."
      : language === "en"
      ? "Core flagship platforms: scalable multi-tenant SaaS, local-first AI agent, and high-performance extensions."
      : "Eng sara 4 ta flagman loyiha: SaaS ERP boshqaruv tizimi, offline AI agent va yuqori samarali kengaytmalar.";

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background ambient localized glowing light beams */}
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-600/10 via-forest/5 to-transparent rounded-full blur-[150px] -z-10 dark:opacity-60 opacity-30" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-teal-600/10 via-forest/5 to-transparent rounded-full blur-[140px] -z-10 dark:opacity-60 opacity-25" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header: Mobile Centered, Desktop Left-Aligned */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 gap-6 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Aos animation="fade-up" delay={0.05}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold text-emerald-500">(03)</span>
                <span className="h-[1px] w-12 bg-emerald-500/40" />
                <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-semibold">
                  {language === "ru"
                    ? "• КЛЮЧЕВЫЕ ПРОЕКТЫ"
                    : language === "en"
                    ? "• FLAGSHIP WORKS"
                    : "• AMALIY ISHLANMALAR VA LOYIHALAR"}
                </span>
              </div>
            </Aos>
            <Aos animation="fade-up" delay={0.12}>
              <h2
                id="projects-heading"
                className="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight"
              >
                {headingText}
              </h2>
            </Aos>
            <Aos animation="fade-up" delay={0.18}>
              <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal mx-auto lg:mx-0">
                {subtitleText}
              </p>
            </Aos>
          </div>

          {/* Quick Stats Badges: Centered on mobile */}
          <Aos animation="fade-left" delay={0.2} className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5">
            <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
              <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
              <span>4 Flagman Loyiha</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0A1410]/80 px-3.5 py-2 text-xs font-mono font-medium text-slate-600 dark:text-slate-300">
              <Zap className="h-3.5 w-3.5 text-amber-500" />
              <span>100% Production Ready</span>
            </div>
          </Aos>
        </div>

        {/* CONTROLS BAR: Category Glider + Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Glider Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-[#0A1410]/85 backdrop-blur-xl overflow-x-auto scrollbar-none shadow-sm">
            {filterOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedCategory === opt.id;
              const count =
                opt.id === "all"
                  ? ALL_PROJECTS.length
                  : ALL_PROJECTS.filter((p) => p.category === opt.id).length;

              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setSelectedCategory(opt.id);
                    if (opt.id !== "all") setShowAll(true);
                  }}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap z-10 cursor-pointer ${
                    isSelected
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="categoryGlider"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 shadow-md shadow-emerald-600/25 -z-10"
                    />
                  )}
                  <Icon className="h-3.5 w-3.5" />
                  <span>{opt.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.allProjects.searchPlaceholder}
              className="w-full pl-10 pr-8 py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-[#0A1410]/85 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80 transition-all shadow-sm backdrop-blur-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-8 backdrop-blur-xl">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              {t.allProjects.notFound}
            </h3>
            <p className="mt-1 text-xs text-slate-500 font-mono">
              Qidiruv so&apos;zini tozalab ko&apos;ring yoki toifani almashtiring.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-mono font-bold hover:bg-emerald-500 transition-colors"
            >
              Barchasini ko&apos;rsatish
            </button>
          </div>
        )}

        {/* STUNNING SPOTLIGHT SHOWCASE LAYOUT (Concise 4 Flagship Cards) */}
        {visibleProjects.length > 0 && (
          <div className="space-y-6">
            {/* ROW 1: FLAGSHIP HERO 1 — BOSHQAR.UZ (Full Width Horizontal Showcase) */}
            {visibleProjects[0] && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0A1410]/95 p-7 sm:p-9 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Ambient glow light */}
                <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-600/15 via-forest/20 to-transparent blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Info Column */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center gap-2.5 mb-3.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          <Sparkles className="h-3 w-3" />
                          <span>★ ASOSIY FLAGMAN</span>
                        </span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {visibleProjects[0].categoryLabel}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {getTranslatedProject(visibleProjects[0]).title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 font-mono mt-1">
                        {getTranslatedProject(visibleProjects[0]).subtitle}
                      </p>

                      {/* Description */}
                      <p className="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {getTranslatedProject(visibleProjects[0]).description}
                      </p>
                    </div>

                    {/* Key Metrics Chips */}
                    <div className="grid grid-cols-3 gap-2.5 pt-1">
                      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-3">
                        <span className="text-[10px] text-slate-400 block font-mono">Kunlik Savdo</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">14.8M UZS</span>
                      </div>
                      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-3">
                        <span className="text-[10px] text-slate-400 block font-mono">Xavfsizlik</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-slate-900 dark:text-white">IDOR Safe</span>
                      </div>
                      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-3">
                        <span className="text-[10px] text-slate-400 block font-mono">Arxitektura</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">Multi-tenant</span>
                      </div>
                    </div>

                    {/* Tech Stack Matrix */}
                    <div className="flex flex-wrap gap-1.5">
                      {visibleProjects[0].techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/90 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => setModalProject(visibleProjects[0])}
                        className="btn-fill-effect inline-flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 active:scale-95 transition-all cursor-pointer"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Batafsil Tahlil</span>
                      </button>

                      <a
                        href="https://t.me/Musurmon_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-glow hover-sheen inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all active:scale-95 cursor-pointer"
                      >
                        <span>Buyurtma / Telegram</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Interactive Mockup Console */}
                  <div className="lg:col-span-6">
                    <ProjectMockup projectId={visibleProjects[0].id} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ROW 2: 3 CARDS IN A BALANCED GRID (Jarvis AI, Uzum AI, ThumbAI) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.slice(1, 4).map((project, idx) => {
                const translated = getTranslatedProject(project);

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0A1410]/95 p-6 sm:p-7 backdrop-blur-xl shadow-md hover:shadow-2xl hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Ambient inner glow */}
                    <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div>
                      {/* Card Header Row */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                          {project.categoryLabel}
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          #{String(idx + 2).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1">
                        {translated.title}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 font-mono mb-3">
                        {translated.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-sans line-clamp-3">
                        {translated.description}
                      </p>

                      {/* Mockup Preview */}
                      <div className="mb-4">
                        <ProjectMockup projectId={project.id} isCompact />
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setModalProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Batafsil tahlil</span>
                      </button>

                      <a
                        href="https://t.me/Musurmon_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:bg-emerald-600 group-hover:text-white transition-all"
                      >
                        <span>Buyurtma</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* EXPANDABLE ARCHIVE SECTION (If user clicks show more) */}
            {isDefaultView && (
              <div className="pt-4">
                <AnimatePresence>
                  {showAll && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="overflow-hidden space-y-6 pt-2 pb-6"
                    >
                      <div className="flex items-center gap-3 my-6">
                        <span className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
                          Barcha Qo&apos;shimcha Ishlanmalar & Arxiv
                        </span>
                        <span className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.slice(4).map((project, idx) => {
                          const translated = getTranslatedProject(project);

                          return (
                            <div
                              key={project.id}
                              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0A1410]/95 p-6 backdrop-blur-xl shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded">
                                    {project.categoryLabel}
                                  </span>
                                  <span className="font-mono text-xs text-slate-400">
                                    #{String(idx + 5).padStart(2, "0")}
                                  </span>
                                </div>

                                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                  {translated.title}
                                </h4>
                                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-mono mt-0.5 mb-2">
                                  {translated.subtitle}
                                </p>

                                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                  {translated.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                  {project.techStack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 text-[10.5px] font-mono text-slate-700 dark:text-slate-300"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                                <button
                                  onClick={() => setModalProject(project)}
                                  className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                                >
                                  Batafsil
                                </button>
                                <a
                                  href="https://t.me/Musurmon_dev"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs font-mono font-semibold text-slate-500 hover:text-emerald-500 transition-colors flex items-center gap-1"
                                >
                                  <span>Buyurtma</span>
                                  <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Stylish Expand / Collapse Button Bar */}
                <div className="flex items-center justify-center mt-6">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="btn-fill-effect group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-mono font-bold shadow-lg shadow-emerald-600/10 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>
                      {showAll
                        ? "Kamroq ko'rsatish (Faqat 4 ta flagman)"
                        : `Barcha loyihalar arxivi (Yana ${hiddenCount} ta loyiha)`}
                    </span>
                    {showAll ? (
                      <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    ) : (
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* FULL-SCREEN PROJECT DEEP-DIVE MODAL */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box with clean rounded-3xl clipping */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative w-full max-w-3xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A1410] shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-600 dark:text-slate-300 hover:text-rose-500 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Scrollable Content with Non-Bleeding Scrollbar */}
              <div className="overflow-y-auto p-6 sm:p-8 custom-modal-scroll flex-1">

              {/* Modal Header */}
              <div className="mb-6 pr-12">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {modalProject.categoryLabel}
                  </span>
                  {modalProject.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/30">
                      ★ Flagship
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                  {getTranslatedProject(modalProject).title}
                </h3>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 font-mono mt-1">
                  {getTranslatedProject(modalProject).subtitle}
                </p>
              </div>

              {/* Live Preview Component */}
              <div className="mb-6">
                <ProjectMockup projectId={modalProject.id} />
              </div>

              {/* Description & Full Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Loyiha haqida & Maqsad:
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {getTranslatedProject(modalProject).description}
                  </p>
                </div>

                {modalProject.fullDetails && (
                  <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-4">
                    <h4 className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
                      <Cpu className="h-4 w-4" />
                      <span>Arxitektura va Xavfsizlik yechimlari:</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {modalProject.fullDetails}
                    </p>
                  </div>
                )}
              </div>

              {/* Metrics */}
              {modalProject.metrics && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Asosiy ko&apos;rsatkichlar & Metrikalar:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {modalProject.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-3.5"
                      >
                        <span className="text-xs text-slate-400 block font-mono mb-1">
                          {m.label}
                        </span>
                        <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  To&apos;liq texnologiyalar to&apos;plami:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {modalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-3.5 py-1.5 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Buttons */}
              <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setModalProject(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Yopish (Esc)
                </button>

                <a
                  href="https://t.me/Musurmon_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span>Ushbu loyiha bo&apos;yicha suhbat</span>
                </a>
              </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

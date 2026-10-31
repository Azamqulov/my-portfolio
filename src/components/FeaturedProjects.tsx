"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  X,
  Send,
} from "lucide-react";
import { SHOWCASE_PROJECTS, ShowcaseProject } from "@/data/portfolioData";
import { Aos, AosContainer, AosItem } from "@/components/Aos";
import { useLanguage } from "@/context/LanguageContext";

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);
  const { t } = useLanguage();

  // Close modal on Escape key for a11y
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const getTranslatedProject = (project: ShowcaseProject) => {
    const translation = (
      t.featuredProjects.projects as Record<
        string,
        { title: string; badge: string; description: string }
      >
    )[project.id];
    return {
      title: translation?.title || project.title,
      badge: translation?.badge || project.badge,
      description: translation?.description || project.description,
    };
  };

  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-sky-500/10 via-blue-600/5 to-transparent rounded-full blur-[140px] -z-10 dark:opacity-70 opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start text-left">
            <Aos animation="fade-up" delay={0.05}>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-sky-500 uppercase mb-3">
                <span>{t.featuredProjects.tag}</span>
              </div>
            </Aos>
            <Aos animation="fade-up" delay={0.12}>
              <h2
                id="featured-projects-heading"
                className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
              >
                {t.featuredProjects.heading}
              </h2>
            </Aos>
          </div>

          <Aos animation="fade-left" delay={0.18}>
            <a
              href="#all-projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-500 hover:text-sky-400 transition-colors group"
            >
              <span>{t.featuredProjects.archiveLink}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Aos>
        </div>

        {/* 6 Projects Grid with Staggered AOS */}
        <AosContainer
          stagger={0.08}
          delayChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SHOWCASE_PROJECTS.map((project) => {
            const translated = getTranslatedProject(project);

            return (
              <AosItem key={project.id} animation="fade-up" distance={32}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0B101D]/95 p-5 shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-sky-500/50 backdrop-blur-xl overflow-hidden"
                >
                  <div>
                    {/* Mockup Image Container */}
                    <div
                      className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-slate-950 border border-slate-200/70 dark:border-slate-800/70 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          {t.featuredProjects.viewDetailsMockup}
                        </span>
                      </div>
                    </div>

                    {/* Title & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-400 transition-colors cursor-pointer"
                      >
                        {translated.title}
                      </h3>
                      <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-500 dark:text-sky-300 font-mono">
                        {translated.badge}
                      </span>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 px-2 py-0.5 text-[11px] font-mono text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {translated.description}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-500 dark:text-sky-400 group-hover:text-sky-300 transition-colors"
                    >
                      <span>{t.featuredProjects.viewProjectBtn}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                      {t.featuredProjects.livePreview}
                    </span>
                  </div>
                </motion.article>
              </AosItem>
            );
          })}
        </AosContainer>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1322] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-slate-900 dark:text-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label={t.featuredProjects.modalCloseBtn}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-300 font-semibold">
                  {getTranslatedProject(selectedProject).badge}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {t.featuredProjects.modalBadge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {getTranslatedProject(selectedProject).title}
              </h3>

              {/* Visual Mockup in Modal */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden my-5 border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-950">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="my-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  {t.featuredProjects.modalAboutTitle}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {getTranslatedProject(selectedProject).description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  {t.featuredProjects.modalTechTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-3 py-1 text-xs font-mono text-slate-800 dark:text-slate-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://t.me/Musurmon_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{t.featuredProjects.modalDiscussBtn}</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  {t.featuredProjects.modalCloseBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

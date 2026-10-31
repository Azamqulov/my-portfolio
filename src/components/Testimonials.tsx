"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolioData";
import { Aos } from "@/components/Aos";
import { useLanguage } from "@/context/LanguageContext";

export const Testimonials: React.FC = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / CARDS_PER_PAGE);
  const SLIDE_DURATION = 6000;
  const TICK_INTERVAL = 50;

  const handleNext = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % totalPages);
    setProgress(0);
  };

  const handlePrev = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
    setProgress(0);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + (TICK_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, page, totalPages]);

  const currentCards = TESTIMONIALS.slice(
    page * CARDS_PER_PAGE,
    (page + 1) * CARDS_PER_PAGE
  );

  const getTranslatedItem = (item: (typeof TESTIMONIALS)[0]) => {
    const found = t.testimonials.items.find((i) => i.id === item.id);
    return {
      name: found?.name || item.name,
      role: found?.role || item.role,
      quote: found?.quote || item.quote,
    };
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent rounded-full blur-[140px] -z-10 dark:opacity-70 opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start text-left">
            <Aos animation="fade-up" delay={0.05}>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-sky-500 uppercase mb-3">
                <span>{t.testimonials.tag}</span>
                <span className="text-slate-400 dark:text-slate-600 font-normal">|</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">
                  {isPaused ? t.testimonials.paused : t.testimonials.autoScroll}
                </span>
              </div>
            </Aos>
            <Aos animation="fade-up" delay={0.12}>
              <h2
                id="testimonials-heading"
                className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
              >
                {t.testimonials.heading}
              </h2>
            </Aos>
          </div>

          {/* Controls */}
          <Aos animation="fade-left" delay={0.18}>
            <div className="flex items-center gap-4">
              <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                <span className="text-sky-500 dark:text-sky-400">0{page + 1}</span> / 0{totalPages}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0B101D]/90 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0B101D]/90 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </Aos>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-full bg-slate-200/60 dark:bg-slate-800/60 h-1 rounded-full mb-8 overflow-hidden relative">
          <div
            style={{ width: `${progress}%` }}
            className={`h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 transition-[width] duration-75 ease-linear rounded-full ${
              isPaused ? "opacity-40" : "opacity-100"
            }`}
          />
        </div>

        {/* Cards Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[340px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentCards.map((item) => {
                const translated = getTranslatedItem(item);

                return (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: direction > 0 ? 50 : -50,
                        scale: 0.96,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 280,
                          damping: 24,
                        },
                      },
                    }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0B101D]/95 p-7 backdrop-blur-xl shadow-lg dark:shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-sky-500/50 cursor-default"
                  >
                    {/* Hover ambient halo */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500/5 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="relative">
                      {/* Glowing Quote Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <Quote className="h-8 w-8 text-sky-500/25 dark:text-sky-400/30 group-hover:text-sky-500 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-full">
                          ★ 5.0
                        </span>
                      </div>

                      {/* Quote Text */}
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">
                        &ldquo;{translated.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author & 5 Stars */}
                    <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-slate-800/60 flex items-center justify-between gap-3 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="relative h-11 w-11 rounded-full overflow-hidden border-2 border-sky-400/50 shadow-sm shrink-0 group-hover:border-sky-400 transition-colors">
                          <Image
                            src={item.avatar}
                            alt={translated.name}
                            fill
                            className="object-cover"
                            sizes="44px"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                            {translated.name}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {translated.role}
                          </p>
                        </div>
                      </div>

                      {/* 5 Stars Rating */}
                      <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-amber-400 text-amber-400 transition-transform group-hover:scale-110"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

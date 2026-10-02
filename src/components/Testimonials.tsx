"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolioData";
import { Aos } from "@/components/Aos";

export const Testimonials: React.FC = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / CARDS_PER_PAGE);
  const SLIDE_DURATION = 6000; // 6 seconds per page
  const TICK_INTERVAL = 50; // update progress every 50ms

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

  // Smooth auto-scroll progress counter
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

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent rounded-full blur-[140px] -z-10 dark:opacity-70 opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header with Next / Prev Navigation Controls & Auto-scroll status */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start text-left">
            <Aos animation="fade-up" delay={0.05}>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-sky-500 uppercase mb-3">
                <span>• MIJOZLAR FIKRI</span>
                <span className="text-slate-400 dark:text-slate-600 font-normal">|</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">
                  {isPaused ? "⏸ Pauza" : "⚡ Avtomatik 3 ta / 6s"}
                </span>
              </div>
            </Aos>
            <Aos animation="fade-up" delay={0.12}>
              <h2
                id="testimonials-heading"
                className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
              >
                Mijozlarim nima deyishdi?
              </h2>
            </Aos>
          </div>

          {/* Next / Prev Navigation Buttons & Page Counter */}
          <Aos animation="fade-left" delay={0.18}>
            <div className="flex items-center gap-4">
              <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                <span className="text-sky-500 dark:text-sky-400">0{page + 1}</span> / 0{totalPages}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Oldingi 3 ta fikr"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0B101D]/90 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Keyingi 3 ta fikr"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0B101D]/90 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </Aos>
        </div>

        {/* Dynamic Progress Bar for Auto-Scroll */}
        <div className="w-full bg-slate-200/60 dark:bg-slate-800/60 h-1 rounded-full mb-8 overflow-hidden relative">
          <div
            style={{ width: `${progress}%` }}
            className={`h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 transition-[width] duration-75 ease-linear rounded-full ${
              isPaused ? "opacity-40" : "opacity-100"
            }`}
          />
        </div>

        {/* 3-by-3 Cards Container with Staggered Cascading Animation */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={page}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: { duration: 0.25 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
            >
              {currentCards.map((item, idx) => (
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
                        Tavsiya #{item.id}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author & 5 Stars */}
                  <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-slate-800/60 flex items-center justify-between gap-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="relative h-11 w-11 rounded-full overflow-hidden border-2 border-sky-400/50 shadow-sm shrink-0 group-hover:border-sky-400 transition-colors">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* 5 Stars Rating with Shimmer */}
                    <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400 transition-transform group-hover:scale-110" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > page ? 1 : -1);
                setPage(idx);
                setProgress(0);
              }}
              aria-label={`Sahifa ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === page
                  ? "w-9 bg-gradient-to-r from-sky-400 to-blue-500 shadow-md shadow-blue-500/30"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

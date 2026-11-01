"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Code2, Palette, Headphones } from "lucide-react";
import { SERVICES } from "@/data/portfolioData";
import { Aos, AosContainer, AosItem } from "@/components/Aos";
import { useLanguage } from "@/context/LanguageContext";

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Code":
        return Code2;
      case "Palette":
        return Palette;
      case "Headphones":
      default:
        return Headphones;
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background ambient radial bloom */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-emerald-600/10 via-green-900/10 to-transparent rounded-full blur-[130px] -z-10 dark:opacity-70 opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header: Mobile Centered, Desktop Left-Aligned */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-16">
          <Aos animation="fade-up" delay={0.05}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">(04)</span>
              <span className="h-[1px] w-12 bg-emerald-500/40" />
              <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-semibold">
                {t.services.tag}
              </span>
            </div>
          </Aos>
          <Aos animation="fade-up" delay={0.12}>
            <h2
              id="services-heading"
              className="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight"
            >
              {t.services.heading}
            </h2>
          </Aos>
          <Aos animation="fade-up" delay={0.18}>
            <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal mx-auto sm:mx-0">
              {t.services.subtitle}
            </p>
          </Aos>
        </div>

        {/* 4 Cards Grid with Staggered AOS */}
        <AosContainer
          stagger={0.09}
          delayChildren={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            const translated = (
              t.services.items as Record<
                string,
                { title: string; description: string }
              >
            )[service.id];
            const title = translated?.title || service.title;
            const description = translated?.description || service.description;

            return (
              <AosItem key={service.id} animation="fade-up" distance={28}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0A1410]/95 p-6 sm:p-7 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-emerald-500/50 overflow-hidden"
                >
                  {/* Subtle inner hover ambient bloom */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-5 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {t.services.guarantee}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                </motion.div>
              </AosItem>
            );
          })}
        </AosContainer>
      </div>
    </section>
  );
};

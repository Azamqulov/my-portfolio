"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Palette,
  GitBranch,
  Terminal,
  Settings,
} from "lucide-react";
import { TECH_CARDS } from "@/data/portfolioData";
import { Aos, AosContainer, AosItem } from "@/components/Aos";
import { useLanguage } from "@/context/LanguageContext";

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "React":
        return Code2;
      case "Node":
        return Server;
      case "Figma":
        return Palette;
      case "Git":
        return GitBranch;
      case "Tools":
        return Terminal;
      case "Gear":
      default:
        return Settings;
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background soft ambient radial */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-600/10 via-forest/5 to-transparent rounded-full blur-[130px] -z-10 dark:opacity-70 opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header: Mobile Centered, Desktop Left-Aligned */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-16">
          <Aos animation="fade-up" delay={0.05}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-emerald-500">•</span>
              <span className="h-[1px] w-12 bg-emerald-500/40" />
              <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-semibold">
                {t.skills.tag}
              </span>
            </div>
          </Aos>
          <Aos animation="fade-up" delay={0.12}>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
            >
              {t.skills.heading}
            </h2>
          </Aos>
          <Aos animation="fade-up" delay={0.18}>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal mx-auto sm:mx-0">
              {t.skills.subtitle}
            </p>
          </Aos>
        </div>

        {/* 6 Bento Grid Cards with Staggered AOS */}
        <AosContainer
          stagger={0.08}
          delayChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECH_CARDS.map((card) => {
            const Icon = getIcon(card.iconName);
            const translatedCard =
              (t.skills.cards as Record<string, { title: string; tech: string }>)[
                card.id
              ];
            const title = translatedCard?.title || card.title;
            const tech = translatedCard?.tech || card.technologies;

            return (
              <AosItem key={card.id} animation="fade-up" distance={30}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0A1410]/95 p-6 sm:p-7 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-emerald-500/50 overflow-hidden"
                >
                  {/* Subtle inner hover ambient bloom */}
                  <div
                    className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                    style={{ backgroundColor: card.color }}
                  />

                  <div>
                    {/* Icon in top left */}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: `${card.color}15`,
                        color: card.color,
                        border: `1px solid ${card.color}35`,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {title}
                    </h3>

                    {/* Technologies list */}
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                      {tech}
                    </p>
                  </div>

                  {/* Bottom category tag */}
                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    <span className="uppercase tracking-wider">{card.categoryTag}</span>
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: card.color }}
                    />
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

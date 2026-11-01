"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Ticker: React.FC = () => {
  const { language } = useLanguage();

  const itemsUz = [
    "Veb-Ilovalar va SaaS",
    "Telegram Botlar",
    "CRM Tizimlar",
    "Next.js & React",
    "Desktop Ilovalar (Tauri)",
    "AI & DevTools",
    "Toza Kod & Arxitektura",
    "Maksimal Tezlik",
    "Moslashuvchan Veb-Dizayn",
    "API Integratsiyalar",
  ];

  const itemsRu = [
    "Веб-приложения и SaaS",
    "Telegram-боты",
    "CRM и Автоматизация",
    "Next.js & React",
    "Десктоп (Tauri & Rust)",
    "AI & DevTools",
    "Чистая архитектура",
    "Максимальная скорость",
    "Адаптивный дизайн",
    "Интеграция API",
  ];

  const itemsEn = [
    "Web Apps & SaaS",
    "Telegram Bots",
    "CRM Systems",
    "Next.js & React",
    "Desktop Apps (Tauri)",
    "AI & DevTools",
    "Clean Architecture",
    "High Performance",
    "Responsive Design",
    "API Integrations",
  ];

  const items = language === "ru" ? itemsRu : language === "en" ? itemsEn : itemsUz;

  return (
    <div className="w-full overflow-hidden border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-100/60 dark:bg-[#0A1410]/80 py-3.5 backdrop-blur-md relative select-none z-10">
      {/* Edge gradient masks for smooth fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />

      <div className="flex w-max animate-[ticker_35s_linear_infinite] hover:[animation-play-state:paused]">
        {/* Track duplicated 2 times for seamless infinite loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 px-4 sm:px-6 shrink-0">
            <span className="text-xs sm:text-sm font-heading font-semibold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
              {item}
            </span>
            <Sparkles className="h-3 w-3 text-emerald-500/80 shrink-0 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language, LANGUAGES } from "@/data/translations";
import { FlagIcon } from "@/components/FlagIcon";

interface LanguageSelectProps {
  className?: string;
  isMobileDrawer?: boolean;
}

export const LanguageSelect: React.FC<LanguageSelectProps> = ({
  className = "",
  isMobileDrawer = false,
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption =
    LANGUAGES.find((opt) => opt.code === language) || LANGUAGES[0];

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (isMobileDrawer) {
    return (
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800">
          {LANGUAGES.map((item) => {
            const isSelected = language === item.code;
            return (
              <button
                key={item.code}
                onClick={() => setLanguage(item.code)}
                type="button"
                className={`flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-md border border-slate-200/80 dark:border-slate-700/80"
                    : "text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60"
                }`}
              >
                <FlagIcon code={item.code} className="w-4 h-3 shrink-0" />
                <span className="font-mono">{item.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger Select Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Tilni tanlash / Выбор языка / Select language"
        className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-md transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
          isOpen
            ? "border-sky-500 bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 ring-2 ring-sky-500/20"
            : "border-slate-200/90 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700"
        }`}
      >
        <FlagIcon code={currentOption.code} className="w-5 h-3.5 shrink-0" />
        <span className="font-mono font-bold tracking-tight">
          {currentOption.shortLabel}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-sky-500" : ""
          }`}
        />
      </button>

      {/* Luxury Select Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="listbox"
            className="absolute right-0 top-full mt-2 z-50 min-w-[170px] rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-[#0B101D]/95 p-1.5 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 dark:ring-white/5"
          >
            <div className="flex flex-col gap-0.5">
              {LANGUAGES.map((item) => {
                const isSelected = language === item.code;
                return (
                  <button
                    key={item.code}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(item.code)}
                    type="button"
                    className={`flex items-center justify-between w-full gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-sky-500/10 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400 font-bold"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <FlagIcon
                        code={item.code}
                        className="w-5 h-3.5 shrink-0"
                      />
                      <span>{item.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        {item.shortLabel}
                      </span>
                      {isSelected && (
                        <Check className="h-3.5 w-3.5 text-sky-500 stroke-[2.5]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

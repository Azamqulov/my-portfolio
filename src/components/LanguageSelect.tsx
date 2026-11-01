"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Globe } from "lucide-react";
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
  const { language, setLanguage, isAutoDetected, resetToSystemLanguage } =
    useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption =
    LANGUAGES.find((opt) => opt.code === language) || LANGUAGES[0];

  // Click outside and escape key handling
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

  // Mobile Drawer view
  if (isMobileDrawer) {
    return (
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-inner">
          {LANGUAGES.map((item) => {
            const isSelected = language === item.code;
            return (
              <button
                key={item.code}
                onClick={() => setLanguage(item.code)}
                type="button"
                className={`relative flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-md border border-slate-200/80 dark:border-slate-700/80"
                    : "text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60"
                }`}
              >
                <FlagIcon code={item.code} isRound className="w-5 h-5 shrink-0" />
                <span className="font-mono">{item.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Luxury Custom Select Dropdown with Circular Flags
  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger Select Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Tilni tanlash / Select language"
        className={`group relative flex items-center gap-2.5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-xl transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
          isOpen
            ? "border-emerald-500 bg-white/95 dark:bg-[#0A1410] text-emerald-700 dark:text-emerald-400 ring-2 ring-emerald-500/25 shadow-lg shadow-emerald-500/15"
            : "border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-[#0A1410]/80 text-slate-800 dark:text-slate-200 hover:border-emerald-500/50 hover:bg-white dark:hover:bg-[#0F1E18]"
        }`}
      >
        {/* Round Circular Flag Avatar */}
        <div className="relative shrink-0 flex items-center justify-center">
          <FlagIcon
            code={currentOption.code}
            isRound
            className="w-5 h-5 shrink-0 shadow-xs ring-1 ring-emerald-500/40"
          />
        </div>

        <span className="font-mono font-bold tracking-wider text-xs">
          {currentOption.shortLabel}
        </span>

        {/* Animated Chevron */}
        <ChevronDown
          className={`h-3.5 w-3.5 text-slate-400 group-hover:text-emerald-500 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-emerald-500" : ""
          }`}
        />
      </button>

      {/* Luxury Select Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            role="listbox"
            className="absolute right-0 top-full mt-2 z-50 min-w-[210px] rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0A1410]/95 p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden"
          >
            {/* Header / Caption */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-100 dark:border-slate-800/80 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1.5">
                <Globe className="h-3 w-3 text-emerald-500" />
                <span>{isAutoDetected ? "Tizim tili (Auto)" : "Tanlangan til"}</span>
              </span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            </div>

            {/* Language Options List */}
            <div className="flex flex-col gap-1">
              {LANGUAGES.map((item) => {
                const isSelected = language === item.code;
                return (
                  <button
                    key={item.code}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(item.code)}
                    type="button"
                    className={`group flex items-center justify-between w-full gap-3 px-3 py-2.5 rounded-xl text-xs transition-all duration-200 ${
                      isSelected
                        ? "bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/30 shadow-xs"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100/90 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Round Flag Avatar with Ring */}
                      <div className="relative shrink-0 flex items-center justify-center">
                        <FlagIcon
                          code={item.code}
                          isRound
                          className={`w-6 h-6 transition-transform duration-200 group-hover:scale-110 ${
                            isSelected
                              ? "ring-2 ring-emerald-500 shadow-sm"
                              : "ring-1 ring-slate-200 dark:ring-slate-700"
                          }`}
                        />
                      </div>

                      {/* Language Title */}
                      <span className="font-heading font-semibold text-xs sm:text-sm">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80">
                        {item.shortLabel}
                      </span>

                      {/* Animated Checkmark Indicator */}
                      {isSelected && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-green-600 text-white shadow-xs"
                        >
                          <Check className="h-3 w-3 stroke-[2.8]" />
                        </motion.span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* If user manually chose a language, allow instant 1-click reset to system browser language */}
            {!isAutoDetected && (
              <div className="pt-1.5 mt-1 border-t border-slate-100 dark:border-slate-800/80 px-1">
                <button
                  type="button"
                  onClick={() => {
                    resetToSystemLanguage();
                    setIsOpen(false);
                  }}
                  className="w-full text-center py-1 rounded-lg text-[10px] font-mono text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                >
                  ⚡ Tizim/Brauzer tiliga qaytish
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

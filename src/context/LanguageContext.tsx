"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  Language,
  LANGUAGES,
  LanguageOption,
  TRANSLATIONS,
} from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  resetToSystemLanguage: () => void;
  isAutoDetected: boolean;
  t: (typeof TRANSLATIONS)["uz"];
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType>({
  language: "uz",
  setLanguage: () => {},
  resetToSystemLanguage: () => {},
  isAutoDetected: true,
  t: TRANSLATIONS.uz,
  languages: LANGUAGES,
});

/**
 * Accurately detects system/browser language from navigator.languages and navigator.language.
 * Prioritizes explicit manual user choices, but defaults to browser language.
 */
export function detectSystemLanguage(): { lang: Language; isManual: boolean } {
  if (typeof window === "undefined") {
    return { lang: "uz", isManual: false };
  }

  // 1. Check if user explicitly picked a language manually
  try {
    const isManualChoice = localStorage.getItem("portfolio_lang_manual") === "true";
    const saved = localStorage.getItem("portfolio_lang") as Language;

    if (isManualChoice && saved && (saved === "uz" || saved === "ru" || saved === "en")) {
      return { lang: saved, isManual: true };
    }
  } catch {
    // Storage restricted
  }

  // 2. Detect directly from System / Browser Navigator
  const candidates: string[] = [];
  if (typeof navigator !== "undefined") {
    if (navigator.languages && navigator.languages.length > 0) {
      candidates.push(...navigator.languages);
    }
    if (navigator.language) {
      candidates.push(navigator.language);
    }
    // @ts-expect-error Legacy IE/Edge support
    if (navigator.userLanguage) candidates.push(navigator.userLanguage);
    // @ts-expect-error Legacy browser support
    if (navigator.browserLanguage) candidates.push(navigator.browserLanguage);
  }

  for (const raw of candidates) {
    if (!raw) continue;
    const lower = raw.toLowerCase().trim();

    // Russian system detection (ru, ru-RU, ru-KZ, ru-BY, etc.)
    if (lower.startsWith("ru")) {
      return { lang: "ru", isManual: false };
    }
    // English system detection (en, en-US, en-GB, etc.)
    if (lower.startsWith("en")) {
      return { lang: "en", isManual: false };
    }
    // Uzbek system detection (uz, uz-UZ, uz-Latn, uz-Cyrl)
    if (lower.startsWith("uz")) {
      return { lang: "uz", isManual: false };
    }
  }

  // Default fallback if system language is not uz/ru/en (e.g. de, fr, tr)
  return { lang: "uz", isManual: false };
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("uz");
  const [isAutoDetected, setIsAutoDetected] = useState(true);

  // Synchronously initialize language on mount
  useEffect(() => {
    const { lang, isManual } = detectSystemLanguage();
    setLanguageState(lang);
    setIsAutoDetected(!isManual);

    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }

    // Listen to real-time OS / Browser language changes
    const handleSystemLanguageChange = () => {
      try {
        const isManualChoice = localStorage.getItem("portfolio_lang_manual") === "true";
        if (!isManualChoice) {
          const fresh = detectSystemLanguage();
          setLanguageState(fresh.lang);
          setIsAutoDetected(true);
          if (typeof document !== "undefined") {
            document.documentElement.lang = fresh.lang;
          }
        }
      } catch {
        // ignore
      }
    };

    window.addEventListener("languagechange", handleSystemLanguageChange);
    return () => {
      window.removeEventListener("languagechange", handleSystemLanguageChange);
    };
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setIsAutoDetected(false);
    try {
      localStorage.setItem("portfolio_lang", lang);
      localStorage.setItem("portfolio_lang_manual", "true");
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
      }
    } catch {
      // Storage restricted
    }
  }, []);

  const resetToSystemLanguage = useCallback(() => {
    try {
      localStorage.removeItem("portfolio_lang_manual");
      localStorage.removeItem("portfolio_lang");
    } catch {
      // ignore
    }
    const fresh = detectSystemLanguage();
    setLanguageState(fresh.lang);
    setIsAutoDetected(true);
    if (typeof document !== "undefined") {
      document.documentElement.lang = fresh.lang;
    }
  }, []);

  const t = TRANSLATIONS[language] || TRANSLATIONS.uz;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        resetToSystemLanguage,
        isAutoDetected,
        t,
        languages: LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

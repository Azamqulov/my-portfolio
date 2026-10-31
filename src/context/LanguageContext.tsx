"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Language,
  LANGUAGES,
  LanguageOption,
  TRANSLATIONS,
} from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof TRANSLATIONS)["uz"];
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType>({
  language: "uz",
  setLanguage: () => {},
  t: TRANSLATIONS.uz,
  languages: LANGUAGES,
});

function detectSystemLanguage(): Language {
  if (typeof window === "undefined") return "uz";
  try {
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved && (saved === "uz" || saved === "ru" || saved === "en")) {
      return saved;
    }

    const browserLangs =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || ""];

    for (const rawLang of browserLangs) {
      if (!rawLang) continue;
      const lower = rawLang.toLowerCase();
      if (lower.startsWith("ru")) return "ru";
      if (lower.startsWith("uz")) return "uz";
      if (lower.startsWith("en")) return "en";
    }
  } catch {
    // LocalStorage or navigator error fallback
  }
  return "uz";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("uz");

  useEffect(() => {
    const detected = detectSystemLanguage();
    setLanguageState(detected);
    if (typeof document !== "undefined") {
      document.documentElement.lang = detected;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_lang", lang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
      }
    } catch {
      // ignore storage errors
    }
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.uz;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languages: LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

import React from "react";
import { Language } from "@/data/translations";

interface FlagIconProps {
  code: Language;
  className?: string;
}

export const FlagIcon: React.FC<FlagIconProps> = ({
  code,
  className = "w-5 h-3.5 shrink-0",
}) => {
  if (code === "uz") {
    // Official Flag of Uzbekistan
    return (
      <svg
        viewBox="0 0 500 250"
        className={`${className} rounded-[3px] overflow-hidden shadow-xs ring-1 ring-black/15 dark:ring-white/20`}
        aria-hidden="true"
      >
        <rect width="500" height="250" fill="#0099B5" />
        <rect y="80" width="500" height="90" fill="#CE1126" />
        <rect y="85" width="500" height="80" fill="#FFFFFF" />
        <rect y="165" width="500" height="85" fill="#1EB53A" />
        {/* Crescent */}
        <circle cx="70" cy="42" r="30" fill="#FFFFFF" />
        <circle cx="78" cy="42" r="26" fill="#0099B5" />
        {/* Stars */}
        <g fill="#FFFFFF">
          <circle cx="120" cy="22" r="4.5" />
          <circle cx="140" cy="22" r="4.5" />
          <circle cx="160" cy="22" r="4.5" />
          <circle cx="100" cy="42" r="4.5" />
          <circle cx="120" cy="42" r="4.5" />
          <circle cx="140" cy="42" r="4.5" />
          <circle cx="160" cy="42" r="4.5" />
          <circle cx="80" cy="62" r="4.5" />
          <circle cx="100" cy="62" r="4.5" />
          <circle cx="120" cy="62" r="4.5" />
          <circle cx="140" cy="62" r="4.5" />
          <circle cx="160" cy="62" r="4.5" />
        </g>
      </svg>
    );
  }

  if (code === "ru") {
    // Official Flag of Russia
    return (
      <svg
        viewBox="0 0 300 200"
        className={`${className} rounded-[3px] overflow-hidden shadow-xs ring-1 ring-black/15 dark:ring-white/20`}
        aria-hidden="true"
      >
        <rect width="300" height="200" fill="#D52B1E" />
        <rect width="300" height="133.33" fill="#0039A6" />
        <rect width="300" height="66.66" fill="#FFFFFF" />
      </svg>
    );
  }

  // Official Flag of the United Kingdom (English)
  return (
    <svg
      viewBox="0 0 60 30"
      className={`${className} rounded-[3px] overflow-hidden shadow-xs ring-1 ring-black/15 dark:ring-white/20`}
      aria-hidden="true"
    >
      <clipPath id="uk-flag-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-flag-clip)">
        <rect width="60" height="30" fill="#012169" />
        {/* White diagonals */}
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
        {/* Red diagonals */}
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
        {/* White cross */}
        <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
        {/* Red cross */}
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
};

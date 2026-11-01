import React from "react";
import { Language } from "@/data/translations";

interface FlagIconProps {
  code: Language;
  className?: string;
  isRound?: boolean;
}

export const FlagIcon: React.FC<FlagIconProps> = ({
  code,
  className = "w-5 h-3.5 shrink-0",
  isRound = false,
}) => {
  const roundWrapperClass = isRound
    ? "rounded-full aspect-square overflow-hidden shadow-xs border border-slate-200/80 dark:border-emerald-500/30 bg-slate-100 dark:bg-slate-800"
    : "rounded-[3px] overflow-hidden shadow-xs ring-1 ring-black/15 dark:ring-white/20";

  if (code === "uz") {
    // Official Flag of Uzbekistan
    if (isRound) {
      return (
        <div
          className={`${className} ${roundWrapperClass} inline-flex items-center justify-center relative shrink-0`}
        >
          <svg
            viewBox="0 0 250 250"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full block"
            aria-hidden="true"
          >
            {/* Top Cyan / Blue Stripe */}
            <rect width="250" height="80" fill="#0099B5" />
            {/* Red Margin Stripe 1 */}
            <rect y="80" width="250" height="5" fill="#CE1126" />
            {/* Middle White Stripe */}
            <rect y="85" width="250" height="80" fill="#FFFFFF" />
            {/* Red Margin Stripe 2 */}
            <rect y="165" width="250" height="5" fill="#CE1126" />
            {/* Bottom Green Stripe */}
            <rect y="170" width="250" height="80" fill="#1EB53A" />

            {/* Crescent (White with Cyan inner cutout) */}
            <circle cx="68" cy="40" r="26" fill="#FFFFFF" />
            <circle cx="75" cy="40" r="22" fill="#0099B5" />

            {/* 12 Stars */}
            <g fill="#FFFFFF">
              {/* Row 1 - 3 stars */}
              <circle cx="114" cy="22" r="4.2" />
              <circle cx="132" cy="22" r="4.2" />
              <circle cx="150" cy="22" r="4.2" />
              {/* Row 2 - 4 stars */}
              <circle cx="96" cy="40" r="4.2" />
              <circle cx="114" cy="40" r="4.2" />
              <circle cx="132" cy="40" r="4.2" />
              <circle cx="150" cy="40" r="4.2" />
              {/* Row 3 - 5 stars */}
              <circle cx="78" cy="58" r="4.2" />
              <circle cx="96" cy="58" r="4.2" />
              <circle cx="114" cy="58" r="4.2" />
              <circle cx="132" cy="58" r="4.2" />
              <circle cx="150" cy="58" r="4.2" />
            </g>
          </svg>
        </div>
      );
    }

    return (
      <div
        className={`${className} ${roundWrapperClass} inline-flex items-center justify-center relative shrink-0`}
      >
        <svg
          viewBox="0 0 500 250"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full block"
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
      </div>
    );
  }

  if (code === "ru") {
    // Official Flag of Russia
    if (isRound) {
      return (
        <div
          className={`${className} ${roundWrapperClass} inline-flex items-center justify-center relative shrink-0`}
        >
          <svg
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full block"
            aria-hidden="true"
          >
            <rect width="200" height="66.67" fill="#FFFFFF" />
            <rect y="66.67" width="200" height="66.67" fill="#0039A6" />
            <rect y="133.34" width="200" height="66.67" fill="#D52B1E" />
          </svg>
        </div>
      );
    }

    return (
      <div
        className={`${className} ${roundWrapperClass} inline-flex items-center justify-center relative shrink-0`}
      >
        <svg
          viewBox="0 0 300 200"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full block"
          aria-hidden="true"
        >
          <rect width="300" height="66.66" fill="#FFFFFF" />
          <rect y="66.66" width="300" height="66.67" fill="#0039A6" />
          <rect y="133.33" width="300" height="66.67" fill="#D52B1E" />
        </svg>
      </div>
    );
  }

  // Official Flag of the United Kingdom (English)
  if (isRound) {
    return (
      <div
        className={`${className} ${roundWrapperClass} inline-flex items-center justify-center relative shrink-0`}
      >
        <svg
          viewBox="0 0 60 60"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full block"
          aria-hidden="true"
        >
          <rect width="60" height="60" fill="#012169" />
          {/* White diagonals */}
          <path d="M0,0 L60,60 M60,0 L0,60" stroke="#FFFFFF" strokeWidth="8" />
          {/* Red diagonals */}
          <path d="M0,0 L60,60 M60,0 L0,60" stroke="#C8102E" strokeWidth="4.5" />
          {/* White cross */}
          <path d="M30,0 v60 M0,30 h60" stroke="#FFFFFF" strokeWidth="12" />
          {/* Red cross */}
          <path d="M30,0 v60 M0,30 h60" stroke="#C8102E" strokeWidth="7" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`${className} ${roundWrapperClass} inline-flex items-center justify-center relative shrink-0`}
    >
      <svg
        viewBox="0 0 60 30"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full block"
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
    </div>
  );
};

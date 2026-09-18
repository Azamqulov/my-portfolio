"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
}) => {
  return (
    <div className={`group flex items-center ${className}`}>
      <div className="flex flex-col text-left">
        <span className="font-extrabold text-base sm:text-lg leading-tight tracking-tight text-slate-900 dark:text-white group-hover:text-brand-teal transition-colors">
          Azamqulov Musurmon
        </span>
        <span className="text-[11px] font-mono font-semibold text-teal-600 dark:text-brand-teal tracking-wide">
          Full-Stack & AI Builder
        </span>
      </div>
    </div>
  );
};

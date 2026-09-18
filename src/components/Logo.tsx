"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 36,
  showText = true,
}) => {
  return (
    <div className={`group flex items-center gap-3 ${className}`}>
      {/* Sleek Minimalist AM Badge */}
      <div
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-brand-teal via-cyan-400 to-brand-indigo p-[2px] shadow-sm transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-900 dark:bg-[#0A0A0B]">
          <span className="font-mono text-sm font-black tracking-tight text-white">
            AM
          </span>
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-base leading-tight tracking-tight text-slate-900 dark:text-white group-hover:text-brand-teal transition-colors">
            Azamqulov Musurmon
          </span>
          <span className="text-[11px] font-mono font-semibold text-teal-600 dark:text-brand-teal">
            Full-Stack & AI Builder
          </span>
        </div>
      )}
    </div>
  );
};

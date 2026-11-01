"use client";

import React from "react";
import { MusurmonIcon } from "@/components/MusurmonIcon";

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
      <MusurmonIcon
        size={size}
        className="group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300 drop-shadow-[0_2px_10px_rgba(16,185,129,0.35)]"
      />
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-black text-base sm:text-lg leading-tight tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
            Azamqulov
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 tracking-wide">
            Frontend & Backend Developer
          </span>
        </div>
      )}
    </div>
  );
};

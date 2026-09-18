"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 38,
  showText = true,
}) => {
  return (
    <div className={`group flex items-center gap-3 ${className}`}>
      {/* SVG Monogram Mark */}
      <div
        className="relative flex items-center justify-center rounded-xl p-[1.5px] transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Gradient Border Frame */}
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full drop-shadow-md"
        >
          <defs>
            <linearGradient id="logoBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D9C0" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="logoInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D9C0" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>

          {/* Hexagonal / Rounded Tech Badge */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="12"
            className="fill-slate-900 dark:fill-[#0A0A0B] stroke-[url(#logoBorderGrad)] stroke-[2]"
          />

          {/* Neural Connection Nodes */}
          <circle cx="10" cy="14" r="2" fill="#00D9C0" className="animate-pulse" />
          <circle cx="34" cy="14" r="2" fill="#6366F1" className="animate-pulse" />
          <circle cx="22" cy="34" r="2" fill="#38BDF8" />

          {/* Stylized 'A' & 'M' Letterform with Code Bracket Fusion */}
          {/* Letter A */}
          <path
            d="M 12 30 L 19 14 L 23 22"
            stroke="url(#logoInnerGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 14.5 24 L 21 24"
            stroke="#00D9C0"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Letter M merged */}
          <path
            d="M 23 22 L 27 14 L 32 30"
            stroke="url(#logoInnerGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Code Accent Dash (Terminal prompt cursor) */}
          <rect x="20" y="29" width="4" height="2" rx="1" fill="#00D9C0" />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-sm sm:text-base leading-tight tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-brand-teal transition-colors">
            Azamqulov M.
          </span>
          <span className="text-[10px] font-mono font-medium tracking-wider uppercase text-brand-teal">
            AI & Full-Stack
          </span>
        </div>
      )}
    </div>
  );
};

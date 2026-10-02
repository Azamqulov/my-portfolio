"use client";

import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  className = "",
  size = 18,
}) => {
  const normalized = name.toLowerCase();

  switch (normalized) {
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "vue.js 3":
    case "vue 3":
    case "vue":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path d="M2 3h3.5L12 15 18.5 3H22L12 21 2 3z" fill="#42b883" />
          <path d="M6.5 3h3.5L12 7.5 14 3h3.5L12 12 6.5 3z" fill="#35495e" />
        </svg>
      );
    case "next.js":
    case "next.js 14":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.7 17.7l-6.2-8.3v8.3H9.9V6.3h1.7l6.2 8.4V6.3h1.6v11.4h-1.7z" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 8.5H6.5V10h1.8v8h1.8v-8H12V8.5h-.5zm5.7 5.1c-.2-.6-.6-1.1-1.2-1.4l-.8-.4c-.5-.2-.8-.4-1-.6-.2-.2-.3-.5-.3-.8 0-.4.2-.7.5-.9.3-.2.8-.3 1.4-.3.6 0 1.1.1 1.5.4.4.3.7.7.8 1.2h1.6c-.1-.8-.5-1.5-1.2-2-.7-.5-1.6-.7-2.7-.7-1.1 0-2 .3-2.6.8-.7.5-1 1.2-1 2 0 .6.2 1.2.6 1.6.4.4 1 .8 1.8 1.1l.9.4c.5.2.9.5 1.1.7.2.3.3.6.3 1 0 .4-.2.8-.6 1-.4.3-1 .4-1.6.4-.7 0-1.3-.2-1.8-.5-.5-.4-.8-.9-.9-1.6h-1.7c.1 1 .5 1.8 1.3 2.4.8.6 1.8.9 3.1.9 1.2 0 2.2-.3 2.9-.9.7-.6 1.1-1.3 1.1-2.2-.1-.7-.3-1.2-.6-1.6z" fill="#FFFFFF" />
        </svg>
      );
    case "tailwind css":
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case "node":
    case "node.js":
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#5FA04E">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.5 8.6v7.8L12 20.7l7.5-4.3V8.6L12 4.3z" />
          <path d="M12 7l4 2.3v4.6l-4 2.3-4-2.3V9.3L12 7z" fill="#5FA04E" opacity="0.6" />
        </svg>
      );
    case "mongodb":
    case "mongo":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path d="M12 1.5s-6 5.5-6 11.5c0 4.5 3.5 8 6 9.5 2.5-1.5 6-5 6-9.5C18 7 12 1.5 12 1.5z" fill="#13AA52" />
          <path d="M12 1.5v19.5c2.5-1.5 6-5 6-9.5C18 7 12 1.5 12 1.5z" fill="#119246" />
        </svg>
      );
    case "rust":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#DEA584">
          <path d="M21.5 12c0-1.1-.3-2.1-.8-3.1l1.3-.7-.6-1.5-1.4.6c-.6-.8-1.4-1.5-2.2-2l.9-1.2-1.3-1-1 1.2c-1-.5-2.1-.8-3.2-.8V3h-1.6v1.5c-1.1 0-2.2.3-3.2.8L7.4 4.1 6.1 5.1l.9 1.2c-.8.5-1.6 1.2-2.2 2l-1.4-.6-.6 1.5 1.3.7c-.5 1-.8 2-.8 3.1s.3 2.1.8 3.1l-1.3.7.6 1.5 1.4-.6c.6.8 1.4 1.5 2.2 2l-.9 1.2 1.3 1 1-1.2c1 .5 2.1.8 3.2.8V21h1.6v-1.5c1.1 0 2.2-.3 3.2-.8l1 1.2 1.3-1-.9-1.2c.8-.5 1.6-1.2 2.2-2l1.4.6.6-1.5-1.3-.7c.5-1 .8-2 .8-3.1zm-9.5 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
        </svg>
      );
    case "tauri 2":
    case "tauri":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#24C8DB">
          <circle cx="9" cy="9" r="6" stroke="#24C8DB" strokeWidth="2.5" fill="none" />
          <circle cx="15" cy="15" r="6" stroke="#FFC131" strokeWidth="2.5" fill="none" />
        </svg>
      );
    case "nestjs":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#E0234E">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm7.6 14.3l-7.6 3.8-7.6-3.8V8.7l7.6-3.8 7.6 3.8v7.6z" />
          <path d="M12 6.5L6.5 9.2v5.5l5.5 2.8 5.5-2.8V9.2L12 6.5z" fill="#E0234E" opacity="0.4" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.2h5v.7H4.4C2.5 8.2 1 9.9 1 12.6c0 2.8 1.6 4.3 3.8 4.3h1.9v-2.2c0-2 1.7-3.7 3.8-3.7h5.1V8.8c0-1.8-1.5-3.3-3.7-3.3h-4.3V3.7c1.3-.2 2.7-.4 4.3-.4 2.8 0 4.6 1.4 4.6 4.1v.8h-1.9v-2H11.9c-1.3 0-2.3-.9-2.3-2.2 0-1.3 1-2.4 2.3-2.4h3.7V2h-3.7zm-2.8 2.2c.4 0 .8.3.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8z" fill="#3776AB" />
          <path d="M12.1 22c3.1 0 5-1.4 5-3.3v-2.2h-5v-.7h7.5c1.9 0 3.4-1.7 3.4-4.4 0-2.8-1.6-4.3-3.8-4.3h-1.9v2.2c0 2-1.7 3.7-3.8 3.7h-5.1v2.2c0 1.8 1.5 3.3 3.7 3.3h4.3v1.8c-1.3.2-2.7.4-4.3.4-2.8 0-4.6-1.4-4.6-4.1v-.8h1.9v2h2.7c1.3 0 2.3.9 2.3 2.2 0 1.3-1 2.4-2.3 2.4h-3.7V22h3.7zm2.8-2.2c-.4 0-.8-.3-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z" fill="#FFD43B" />
        </svg>
      );
    case "prisma":
    case "prisma orm":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#2D3748">
          <path d="M12.6 1.3L3.8 17.5l6.9 5.2L20.2 6.7l-7.6-5.4zm-.2 2.6l5.7 4.1-3.6 8.7-2.1-1.6V3.9z" fill="#5A67D8" />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#3ECF8E">
          <path d="M13.4 23.3L3.8 11.5h8.3L10.6.7l9.6 11.8h-8.3l1.5 10.8z" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
          <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
          <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#F24E1E" />
          <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
          <circle cx="16" cy="12" r="4" fill="#1ABCFE" />
        </svg>
      );
    case "gemini":
    case "gemini 2.0":
    case "claude api":
    case "claude":
    case "ollama":
    case "ollama (local ai)":
    case "replicate (flux)":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <defs>
            <linearGradient id="aiIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D9C0" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" fill="url(#aiIconGrad)" />
        </svg>
      );
    case "javascript":
    case "javascript (es6+)":
    case "js":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M6.5 18.5l1.6-.9c.4.6.7 1.1 1.4 1.1.7 0 1.1-.3 1.1-.9v-5.3h2v5.3c0 1.7-1 2.5-2.8 2.5-1.5 0-2.5-.8-3.3-1.8zm8.1-.2l1.6-.9c.5.8 1.1 1.3 2.1 1.3.9 0 1.5-.4 1.5-1 0-.7-.5-1-1.6-1.5l-.6-.3c-1.7-.7-2.8-1.5-2.8-3.3 0-1.7 1.3-2.9 3.2-2.9 1.4 0 2.4.5 3.1 1.7l-1.5 1c-.4-.6-.8-.9-1.6-.9-.7 0-1.2.4-1.2.9 0 .6.4.9 1.4 1.3l.6.3c1.9.8 3 1.6 3 3.5 0 2-1.5 3.1-3.6 3.1-2 0-3.3-.9-4.1-2.3z" fill="#000000" />
        </svg>
      );
    case "html5":
    case "html":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path d="M3 2l1.8 18.2L12 23l7.2-2.8L21 2H3zm14.5 5.5h-9l.2 2.5h8.6l-.6 6.8-4.7 1.4-4.7-1.4-.3-3.7h2.4l.2 1.8 2.4.7 2.4-.7.3-3.1H8.3l-.7-7.8h10.1l-.2 2.5z" fill="#E34F26" />
        </svg>
      );
    case "css3":
    case "css":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path d="M3 2l1.8 18.2L12 23l7.2-2.8L21 2H3zm14.6 5.5l-.2 2.5h-8.7l.2 2.5h8.3l-.6 6.8-4.6 1.4-4.6-1.4-.3-3.7h2.4l.2 1.8 2.3.7 2.3-.7.3-3.1H6.2l-.7-7.8h12.1z" fill="#1572B6" />
        </svg>
      );
    case "scss":
    case "sass":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#CF649A">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.2c-1.2.6-2.5.7-3.8.3-.9-.3-1.6-.9-2.1-1.7-.5-.8-.7-1.7-.6-2.6.2-1.3.9-2.3 2-2.9 1.1-.6 2.4-.6 3.6-.1.6.3 1.2.7 1.6 1.3l-1.4 1.1c-.2-.4-.6-.7-1-.9-.6-.3-1.3-.3-1.9 0-.6.3-1 .8-1.1 1.5-.1.5 0 1 .3 1.5.3.4.7.7 1.2.9.7.2 1.4.2 2.1-.1.4-.2.7-.4.9-.7l1.2 1.1c-.4.5-.9.9-1.5 1.2z" />
        </svg>
      );
    case "bootstrap":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <rect width="24" height="24" rx="4" fill="#7952B3" />
          <path d="M7 6h5.2c1.7 0 2.9.4 3.7 1.1.7.6 1.1 1.5 1.1 2.5 0 1.2-.6 2.1-1.7 2.6 1.4.4 2.2 1.5 2.2 3 0 1.2-.4 2.2-1.3 2.9-.9.8-2.2 1.2-4.1 1.2H7V6zm2.7 2.3v3.1h2.2c.8 0 1.4-.2 1.8-.5.4-.3.6-.8.6-1.3 0-.6-.2-1-.6-1.3-.4-.3-1.1-.4-2-.4H9.7zm0 5v3.4h2.5c.9 0 1.6-.2 2.1-.5.5-.3.7-.8.7-1.4 0-.6-.2-1.1-.7-1.4-.5-.3-1.3-.5-2.3-.5H9.7z" fill="#FFFFFF" />
        </svg>
      );
    case "vuetify":
    case "vuetify 3":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path d="M12 2L2 19.5h5.5L12 10l4.5 9.5H22L12 2z" fill="#1867C0" />
          <path d="M12 7l-3 5.5h6L12 7z" fill="#AEDDFF" />
        </svg>
      );
    case "firebase":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path d="M4.5 18.2L6.8 3.5l4.3 8.3L4.5 18.2z" fill="#FFA000" />
          <path d="M4.5 18.2l7.5 4.3 7.5-4.3L16.2 8.7 4.5 18.2z" fill="#FFCA28" />
          <path d="M14.2 2.5l2 3.8-8.8 8.4 6.8-12.2z" fill="#F57C00" />
        </svg>
      );
    case "responsive web design":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#00D9C0" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
};

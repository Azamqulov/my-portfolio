"use client";

import React from "react";
import {
  Send,
  Github,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#070A12]/95 pt-12 pb-8 px-4 sm:px-6 lg:px-8 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/70 dark:border-slate-800/60">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo size={36} />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:scale-105 transition-all shadow-sm"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:scale-105 transition-all shadow-sm"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:scale-105 transition-all shadow-sm"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:scale-105 transition-all shadow-sm"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:scale-105 transition-all shadow-sm"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex items-center justify-center text-xs text-slate-500 dark:text-slate-400 font-normal">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  Github,
  Mail,
  ArrowUp,
  Clock,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Logo } from "@/components/Logo";

export const Footer: React.FC = () => {
  const [tashkentTime, setTashkentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Tashkent",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTashkentTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-[#0A0A0B]/90 pt-16 pb-12 px-4 backdrop-blur-xl text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/5">
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <Logo size={40} />
          </div>

          {/* Live Tashkent Clock */}
          <div className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-1.5 text-xs text-slate-700 dark:text-slate-300 font-mono shadow-sm">
            <Clock className="h-3.5 w-3.5 text-teal-600 dark:text-brand-teal animate-pulse" />
            <span>Toshkent vaqti (UTC+5): </span>
            <span className="font-bold text-slate-900 dark:text-white">
              {tashkentTime || "11:45"}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-brand-teal hover:scale-105 transition-all shadow-sm"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-brand-teal hover:scale-105 transition-all shadow-sm"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.emailUrl}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-brand-teal hover:scale-105 transition-all shadow-sm"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Yuqoriga chiqish"
              title="Yuqoriga chiqish"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-teal-600/40 dark:border-brand-teal/40 bg-teal-50 dark:bg-brand-teal/10 text-teal-700 dark:text-brand-teal hover:bg-brand-teal hover:text-black hover:scale-105 transition-all ml-2 shadow-sm"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} Azamqulov Musurmon. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-2">
            <span>Next.js 14 + Tailwind CSS + Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

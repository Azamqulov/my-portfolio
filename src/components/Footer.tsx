"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  Github,
  Mail,
  ArrowUp,
  Sparkles,
  Clock,
  Heart,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

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
    <footer className="relative border-t border-white/10 dark:border-white/10 light:border-slate-200 bg-[#0A0A0B]/90 dark:bg-[#0A0A0B]/90 light:bg-slate-50 pt-16 pb-12 px-4 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-teal to-brand-indigo text-white font-mono font-black text-sm shadow-md">
              AM
            </span>
            <div>
              <h4 className="font-bold text-base text-white dark:text-white light:text-slate-900">
                {PERSONAL_INFO.name}
              </h4>
              <p className="text-xs text-brand-teal font-mono">
                {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          {/* Live Tashkent Clock */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 font-mono">
            <Clock className="h-3.5 w-3.5 text-brand-teal animate-pulse" />
            <span>Toshkent vaqti (UTC+5): </span>
            <span className="font-bold text-white dark:text-white light:text-slate-900">
              {tashkentTime || "11:25"}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-brand-teal hover:scale-105 transition-all"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-brand-teal hover:scale-105 transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.emailUrl}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-brand-teal hover:scale-105 transition-all"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Yuqoriga chiqish"
              title="Yuqoriga chiqish"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-teal/40 bg-brand-teal/10 text-brand-teal hover:bg-brand-teal hover:text-black hover:scale-105 transition-all ml-2"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Azamqulov Musurmon. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-2">
            <span>Yaratildi: Next.js 14 + Tailwind + Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  Send,
  Code2,
  FolderGit2,
  Cpu,
  User,
  Workflow,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Asosiy", href: "#hero", icon: Sparkles },
  { name: "Haqimda", href: "#about", icon: User },
  { name: "Ko'nikmalar", href: "#skills", icon: Cpu },
  { name: "Loyihalar", href: "#featured-projects", icon: FolderGit2 },
  { name: "Barchasi", href: "#all-projects", icon: Code2 },
  { name: "Jarayon", href: "#process", icon: Workflow },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ["hero", "about", "skills", "featured-projects", "all-projects", "process", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 sm:px-6 transition-all duration-300 shadow-2xl backdrop-blur-xl ${
            isDark
              ? "border-white/10 bg-[#0A0A0B]/80 shadow-black/40"
              : "border-slate-200/80 bg-white/85 shadow-slate-300/40 text-slate-800"
          }`}
        >
          {/* Logo / Moniker */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-lg"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-teal to-brand-indigo p-[1px] shadow-lg shadow-brand-teal/20 transition-transform duration-300 group-hover:scale-105">
              <span className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#0A0A0B] text-white font-mono text-sm font-black">
                AM
              </span>
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-sm leading-tight text-white dark:text-white light:text-slate-900 group-hover:text-brand-teal transition-colors">
                {PERSONAL_INFO.name.split(" ")[0]}
              </span>
              <span className="text-[10px] text-brand-teal/90 font-mono tracking-wider uppercase">
                AI & FullStack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full px-3 py-1 bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-white dark:text-white"
                      : "text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-teal/20 to-brand-indigo/30 border border-brand-teal/40"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Rejimni almashtirish"
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-slate-100 text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4 w-4 text-amber-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4 w-4 text-brand-indigo" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-teal to-brand-indigo px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-teal/20 transition-all hover:scale-105 hover:shadow-brand-indigo/30 active:scale-95"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Bog&apos;lanish</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menyu"
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-white/10 bg-[#0E0F14]/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-brand-teal transition-all"
                  >
                    <Icon className="h-4 w-4 text-brand-teal" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <hr className="my-2 border-white/10" />
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-teal to-brand-indigo py-3 text-sm font-semibold text-white shadow-lg"
              >
                <Send className="h-4 w-4" />
                <span>Bog&apos;lanish</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

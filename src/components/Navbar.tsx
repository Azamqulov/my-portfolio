"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
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
import { Logo } from "@/components/Logo";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        "hero",
        "about",
        "skills",
        "featured-projects",
        "all-projects",
        "process",
        "contact",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 220) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex w-full max-w-6xl items-center justify-between rounded-full border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0A0A0B]/85 px-4 py-2.5 sm:px-6 shadow-xl shadow-slate-200/40 dark:shadow-black/60 backdrop-blur-xl transition-all"
        >
          {/* Logo */}
          <a href="#hero" className="focus:outline-none">
            <Logo size={36} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold transition-colors rounded-full ${
                    isActive
                      ? "text-brand-teal dark:text-brand-teal"
                      : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-brand-teal/15 dark:bg-brand-teal/20 border border-brand-teal/40"
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
            {/* Prominent Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Rejimni almashtirish"
              title={isDark ? "Light rejimga o'tish" : "Dark rejimga o'tish"}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-white/15 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-slate-100 transition-all shadow-sm hover:scale-105"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && (
                  <motion.div
                    key={isDark ? "dark" : "light"}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {isDark ? (
                      <Sun className="h-5 w-5 text-amber-400" />
                    ) : (
                      <Moon className="h-5 w-5 text-indigo-600" />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-teal to-brand-indigo px-4 py-2 text-xs font-bold text-white shadow-md shadow-brand-teal/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Bog&apos;lanish</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menyu"
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white"
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
            className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0E0F14]/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden text-slate-900 dark:text-slate-100"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-brand-teal transition-all"
                  >
                    <Icon className="h-4 w-4 text-brand-teal" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <hr className="my-2 border-slate-200 dark:border-white/10" />
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-teal to-brand-indigo py-3 text-sm font-bold text-white shadow-lg"
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

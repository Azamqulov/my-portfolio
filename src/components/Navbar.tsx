"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Menu,
  X,
  Download,
  Languages,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSelect } from "@/components/LanguageSelect";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, resolvedTheme } = useTheme();
  const { t } = useLanguage();

  const navItems: NavItem[] = [
    { name: t.nav.home, href: "#hero", id: "hero" },
    { name: t.nav.projects, href: "#projects", id: "projects" },
    { name: t.nav.services, href: "#services", id: "services" },
    { name: t.nav.about, href: "#about", id: "about" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = [
        "hero",
        "about",
        "skills",
        "projects",
        "services",
        "testimonials",
        "contact",
      ];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            if (id === "services") setActiveSection("services");
            else if (id === "projects") setActiveSection("projects");
            else if (id === "about") setActiveSection("about");
            else if (id === "contact") setActiveSection("contact");
            else if (id === "hero") setActiveSection("hero");
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
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex w-full max-w-7xl items-center justify-between rounded-full border border-slate-200/90 dark:border-slate-800/80 bg-white/90 dark:bg-[#0A1410]/90 px-4 py-2.5 sm:px-6 shadow-xl shadow-slate-200/40 dark:shadow-black/60 backdrop-blur-xl transition-all"
        >
          {/* Logo */}
          <a
            href="#hero"
            aria-label="Azamqulov Musurmon"
            className="focus:outline-none"
          >
            <Logo size={36} />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-3 py-1 bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/60">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-tight transition-colors rounded-full ${
                    isActive
                      ? "text-emerald-700 dark:text-emerald-400 font-bold"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Language Select Dropdown + CV Download + Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Desktop Language Select Dropdown with SVG Flags */}
            <div className="hidden sm:block">
              <LanguageSelect />
            </div>

            {/* CV Download Button with Luxury Glow */}
            <a
              href="/Musurmon-Azamqulov-Resume.pdf"
              download="Musurmon Azamqulov - Professional Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow hover-sheen hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white active:scale-95 transition-all cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{t.nav.downloadCv}</span>
            </a>

            {/* Theme Toggle (Dark/Light) */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? t.nav.switchThemeLight : t.nav.switchThemeDark}
              title={isDark ? t.nav.switchThemeLight : t.nav.switchThemeDark}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all shadow-sm hover:scale-105"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && (
                  <motion.div
                    key={isDark ? "dark" : "light"}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? (
                      <Sun className="h-4 w-4 text-amber-400" />
                    ) : (
                      <Moon className="h-4 w-4 text-emerald-600" />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={t.nav.menu}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
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
            className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0A1410]/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden text-slate-900 dark:text-slate-100"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-500 transition-all"
                >
                  <span>{item.name}</span>
                </a>
              ))}

              {/* Language Selector in Mobile Drawer */}
              <div className="pt-2">
                <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1 flex items-center gap-1.5">
                  <Languages className="h-3.5 w-3.5" />
                  <span>Til / Язык / Language</span>
                </div>
                <LanguageSelect isMobileDrawer />
              </div>

              <hr className="my-2 border-slate-200 dark:border-slate-800" />
              <a
                href="/Musurmon-Azamqulov-Resume.pdf"
                download="Musurmon Azamqulov - Professional Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20"
              >
                <Download className="h-4 w-4" />
                <span>{t.nav.downloadCv}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

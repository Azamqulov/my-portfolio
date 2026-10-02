"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
  Play,
  GitBranch,
  Cpu,
  Zap,
  Sparkles,
} from "lucide-react";

interface CodeTab {
  id: string;
  filename: string;
  badge: string;
  color: string;
  code: string;
}

const CODE_TABS: CodeTab[] = [
  {
    id: "hero",
    filename: "Hero.tsx",
    badge: "UI",
    color: "#38BDF8",
    code: `export function Developer() {
  const stack = ["Next.js 14", "React", "TypeScript"];
  return <FullStackEngineer ready={true} stack={stack} />;
}`,
  },
  {
    id: "api",
    filename: "api.ts",
    badge: "API",
    color: "#60A5FA",
    code: `export async function GET() {
  const projects = await db.projects.findMany();
  return Response.json({ status: 200, count: 16 });
}`,
  },
  {
    id: "architecture",
    filename: "config.ts",
    badge: "Config",
    color: "#34D399",
    code: `export const SystemConfig = {
  speed: "100/100 Lighthouse",
  render: "Zero-Latency Edge SSR",
  quality: "100% Type-Safe Architecture",
};`,
  },
];

export const DeveloperWorkspace: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isRunningTest, setIsRunningTest] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  // Subtle 3D Parallax Tilt (max 5 degrees)
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const activeTab = CODE_TABS[activeTabIdx];
  const fullText = activeTab.code;

  // Typewriter effect & Auto-Next tab rotation
  useEffect(() => {
    if (isPaused) return;

    if (charCount < fullText.length) {
      // Type characters smoothly
      const timer = setTimeout(() => {
        setCharCount((prev) => Math.min(prev + 1, fullText.length));
      }, 24);
      return () => clearTimeout(timer);
    } else {
      // Finished typing: pause 2.2s so user can read, then switch to next tab
      const pauseTimer = setTimeout(() => {
        setActiveTabIdx((prev) => (prev + 1) % CODE_TABS.length);
        setCharCount(0);
      }, 2200);
      return () => clearTimeout(pauseTimer);
    }
  }, [charCount, fullText, isPaused]);

  const handleTabClick = (index: number) => {
    setActiveTabIdx(index);
    setCharCount(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTilt({
      x: (y - 0.5) * -5,
      y: (x - 0.5) * 6,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsPaused(false);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleRunTests = () => {
    if (isRunningTest) return;
    setIsRunningTest(true);
    setTestResult(null);

    setTimeout(() => {
      setIsRunningTest(false);
      setTestResult("✓ 42/42 tests passed in 0.3s");
      setTimeout(() => setTestResult(null), 3500);
    }, 600);
  };

  // Slice text according to current typewriter position
  const displayedText = fullText.slice(0, charCount);
  const displayedLines = displayedText.split("\n");
  const totalLines = fullText.split("\n");

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsPaused(true)}
      className="relative w-full max-w-[580px] xl:max-w-[620px] [perspective:1000px] select-none"
    >
      {/* Soft natural ambient glow (matches site theme) */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-sky-500/10 via-blue-600/10 to-indigo-500/10 rounded-3xl blur-2xl -z-10 dark:opacity-70 opacity-30 pointer-events-none" />

      {/* Main Glassmorphic Studio Window */}
      <motion.div
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="relative w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0B101D]/95 backdrop-blur-2xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col"
      >
        {/* Top Window Bar (Linear / macOS style) */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0E1526]/80 backdrop-blur-md">
          {/* Traffic Lights & Git Branch */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/40 dark:border-slate-700/50 text-[10px] font-mono text-slate-600 dark:text-slate-400">
              <GitBranch className="h-3 w-3 text-sky-500" />
              <span>main</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">prod-ready</span>
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopyCode}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
            title="Kodni nusxalash"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-medium">Nusxalandi</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Nusxalash</span>
              </>
            )}
          </button>
        </div>

        {/* Clickable Animated Tabs Row */}
        <div className="flex items-center px-2 pt-2 bg-slate-100/60 dark:bg-[#090D18]/60 border-b border-slate-200/80 dark:border-slate-800/80 overflow-x-auto no-scrollbar">
          {CODE_TABS.map((tab, idx) => {
            const isActive = idx === activeTabIdx;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(idx)}
                className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-t-xl text-xs font-mono whitespace-nowrap shrink-0 transition-all duration-200 border-t border-x ${
                  isActive
                    ? "bg-white dark:bg-[#0B101D] text-slate-900 dark:text-sky-300 font-semibold border-slate-200/90 dark:border-slate-800/90 shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 border-transparent hover:bg-white/40 dark:hover:bg-slate-800/40"
                }`}
              >
                <span
                  className="h-2 w-2 rounded-full shrink-0 transition-transform group-hover:scale-125"
                  style={{ backgroundColor: tab.color }}
                />
                <span className="whitespace-nowrap font-medium">{tab.filename}</span>

                {tab.badge && (
                  <span className="whitespace-nowrap text-[9px] px-1.5 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 font-sans font-semibold">
                    {tab.badge}
                  </span>
                )}

                {/* Animated active tab indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-sky-500"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Code Content Window with Typewriter Effect */}
        <div className="relative p-4 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto min-h-[140px] sm:min-h-[150px] bg-white dark:bg-[#0B101D] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex w-full"
            >
              {/* Line Numbers Gutter */}
              <div className="select-none pr-3.5 text-right border-r border-slate-200/60 dark:border-slate-800/60 space-y-0.5">
                {totalLines.map((_, i) => (
                  <div
                    key={i}
                    className={`leading-relaxed transition-colors duration-200 ${
                      i < displayedLines.length
                        ? "text-slate-500 dark:text-slate-400 font-semibold"
                        : "text-slate-300 dark:text-slate-700"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>

              {/* Typed Lines with Colorful Syntax Highlighting */}
              <div className="pl-3.5 text-slate-800 dark:text-slate-200 overflow-x-auto font-mono whitespace-pre leading-relaxed flex-1">
                {displayedLines.map((line, i) => {
                  const parts = line.split(
                    /('(?:\\'|[^'])*'|"(?:\\"|[^"])*"|\b(?:export|default|const|return|function|async|await|import|from|as|type|interface)\b|<\/?[A-Za-z][A-Za-z0-9.]*|\b\d+\b)/g
                  );

                  const isCurrentTypingLine = i === displayedLines.length - 1;

                  return (
                    <div key={i} className="leading-relaxed">
                      {parts.map((part, pIdx) => {
                        if (!part) return null;
                        if (part.startsWith('"') || part.startsWith("'")) {
                          return (
                            <span key={pIdx} className="text-emerald-600 dark:text-emerald-400 font-normal">
                              {part}
                            </span>
                          );
                        }
                        if (
                          /^(export|default|const|return|function|async|await|import|from|as|type|interface)$/.test(
                            part
                          )
                        ) {
                          return (
                            <span key={pIdx} className="text-purple-600 dark:text-purple-400 font-semibold">
                              {part}
                            </span>
                          );
                        }
                        if (part.startsWith("<") || /^[A-Z][a-zA-Z0-9]*$/.test(part)) {
                          return (
                            <span key={pIdx} className="text-sky-600 dark:text-sky-300 font-medium">
                              {part}
                            </span>
                          );
                        }
                        if (/^\d+$/.test(part)) {
                          return (
                            <span key={pIdx} className="text-amber-600 dark:text-amber-400">
                              {part}
                            </span>
                          );
                        }
                        return <span key={pIdx}>{part}</span>;
                      })}

                      {/* Blinking Typewriter Cursor on active line */}
                      {isCurrentTypingLine && (
                        <span className="inline-block w-1.5 h-3.5 bg-sky-500 rounded-sm animate-pulse ml-0.5 align-middle" />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Interactive Engineering Status Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 py-2 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-[#0E1526]/90 text-xs font-mono">
          {/* Status Message */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>

            {testResult ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold animate-pulse">
                {testResult}
              </span>
            ) : isRunningTest ? (
              <span className="text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                <Cpu className="h-3 w-3 animate-spin" /> Testlar tekshirilmoqda...
              </span>
            ) : (
              <span className="text-slate-600 dark:text-slate-400 text-[11px]">
                {charCount < fullText.length ? "Avtomatik kod yozilmoqda..." : "Kod tayyor • Keyingi tabga o'tiladi"}
              </span>
            )}
          </div>

          {/* Test Trigger Button */}
          <button
            onClick={handleRunTests}
            type="button"
            disabled={isRunningTest}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-sky-500/10 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400 hover:bg-sky-500/20 transition-all border border-sky-500/20 active:scale-95"
            title="Avtomatik testlarni ishga tushirish"
          >
            <Play className={`h-3 w-3 ${isRunningTest ? "animate-spin" : ""}`} />
            <span>Testni tekshirish</span>
          </button>
        </div>
      </motion.div>

      {/* Floating Telemetry Badge: 100/100 Lighthouse */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        className="hidden sm:flex absolute -top-3.5 -right-2.5 z-30 items-center gap-1.5 rounded-xl px-3 py-1.5 backdrop-blur-xl bg-white/95 dark:bg-[#0D1424]/95 border border-slate-200/90 dark:border-slate-800/90 shadow-md shadow-sky-500/5 cursor-pointer text-slate-800 dark:text-slate-200"
      >
        <Zap className="h-3.5 w-3.5 text-sky-500" />
        <span className="text-[11px] font-mono font-bold tracking-tight">100/100 Lighthouse</span>
      </motion.div>
    </div>
  );
};

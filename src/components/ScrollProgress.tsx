"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-slate-200/20 dark:bg-slate-800/20">
      <motion.div
        style={{ scaleX }}
        className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 origin-left shadow-[0_0_12px_rgba(56,189,248,0.7)]"
      />
    </div>
  );
};

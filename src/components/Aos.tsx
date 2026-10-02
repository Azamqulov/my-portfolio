"use client";

import React from "react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

export type AosAnimation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up";

interface AosProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animation?: AosAnimation;
  delay?: number; // in seconds, e.g. 0.1
  duration?: number; // in seconds, default 0.6
  amount?: number | "some" | "all"; // viewport trigger threshold
  once?: boolean;
  className?: string;
  distance?: number; // travel distance in px (default: 30)
}

const getVariants = (animation: AosAnimation, distance: number): Variants => {
  switch (animation) {
    case "fade-up":
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    case "fade-down":
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    case "fade-left":
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case "fade-right":
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case "zoom-in":
      return {
        hidden: { opacity: 0, scale: 0.92 },
        visible: { opacity: 1, scale: 1 },
      };
    case "zoom-out":
      return {
        hidden: { opacity: 0, scale: 1.08 },
        visible: { opacity: 1, scale: 1 },
      };
    case "flip-up":
      return {
        hidden: { opacity: 0, rotateX: 25, y: distance },
        visible: { opacity: 1, rotateX: 0, y: 0 },
      };
    default:
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
  }
};

/**
 * Reusable Animate-On-Scroll (AOS) wrapper component using Framer Motion.
 * Guarantees smooth 60fps entrance reveals without layout shifts or horizontal overflow.
 */
export const Aos: React.FC<AosProps> = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  amount = 0.15,
  once = true,
  className = "",
  distance = 28,
  ...props
}) => {
  const variants = getVariants(animation, distance);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "-30px 0px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface AosContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  stagger?: number; // delay between each child in seconds
  delayChildren?: number;
  amount?: number | "some" | "all";
  once?: boolean;
  className?: string;
}

/**
 * Container component that automatically staggers child AOS items.
 */
export const AosContainer: React.FC<AosContainerProps> = ({
  children,
  stagger = 0.08,
  delayChildren = 0.05,
  amount = 0.12,
  once = true,
  className = "",
  ...props
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "-30px 0px" }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const AosItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  animation?: AosAnimation;
  distance?: number;
}> = ({ children, className = "", animation = "fade-up", distance = 24 }) => {
  const variants = getVariants(animation, distance);

  return (
    <motion.div
      variants={variants}
      transition={{
        duration: 0.55,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

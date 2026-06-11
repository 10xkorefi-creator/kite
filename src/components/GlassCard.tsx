"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverGlow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  hoverGlow = false,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom springy ease
      }}
      whileHover={{
        y: -4,
        borderColor: "rgba(2, 132, 199, 0.25)",
        boxShadow: hoverGlow
          ? "0 10px 30px -10px rgba(2, 132, 199, 0.15), 0 1px 1px 0 rgba(255, 255, 255, 0.5) inset"
          : "0 10px 25px -10px rgba(30, 41, 59, 0.06)",
      }}
      className={`glassmorphism rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if preloader has already played in this browser session
    const played = sessionStorage.getItem("kite-preloader-played");
    if (!played) {
      setShowPreloader(true);
      const timer = setTimeout(() => {
        setShowPreloader(false);
        sessionStorage.setItem("kite-preloader-played", "true");
      }, 1500); // 1.5s duration
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f2a4a] text-white"
        >
          {/* Logo container */}
          <div className="flex flex-col items-center">
            {/* Custom animated SVG of the Kite logo */}
            <svg 
              className="w-24 h-24 sm:w-28 sm:h-28" 
              viewBox="-40 -50 80 115" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left Leaf (White) - hide/show pulse */}
              <motion.polygon 
                points="-2,-32 -32,4 -2,60" 
                fill="#ffffff"
                animate={{ opacity: [0.15, 1, 0.15] }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              {/* Right Leaf (Blue) - alternating hide/show pulse */}
              <motion.polygon 
                points="2,-42 32,-6 2,50" 
                fill="#38bdf8"
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </svg>

            {/* Wordmark fading in */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-white/90 font-sans"
            >
              Kite Finance
            </motion.h1>

            {/* Subtle animated bar */}
            <div className="mt-8 w-24 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="relative h-full bg-sky-400 w-12"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

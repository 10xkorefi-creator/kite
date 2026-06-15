"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const terms = [
  { 
    label: "Loan Amount", 
    value: "₹10 Lakhs to ₹1 Crore",
    icon: "/icon-money-bag.svg"
  },
  { 
    label: "Interest Rates**", 
    value: "Starting from 15% p.a.",
    icon: "/icon-calculator.svg"
  },
  { 
    label: "Loan Tenure", 
    value: "1 month – 48 months",
    icon: "/icon-clock-fast.svg"
  },
  { 
    label: "Pre-Closure Fee***", 
    value: "₹0/-",
    icon: "/icon-shield-check.svg"
  },
];

const footnotes = [
  "* Available after payment of first EMI, subject to applicable terms",
  "** Final interest rate determined based on business profile, revenues and credit assessment",
  "*** Pre-closure charges, if any, shall be disclosed in the Key Fact Statement and sanction letter",
];

export default function Terms() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <section id="terms" className="relative scroll-mt-24 bg-[#0a1f3d] py-24 sm:py-32 text-white border-t border-white/5 overflow-hidden">
      {/* Decorative Doodles & Assets */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <img 
          src="/decor-sparkles.svg" 
          alt="" 
          className="absolute right-12 top-20 w-12 brightness-0 invert" 
        />
        <img 
          src="/decor-arrow-doodle.svg" 
          alt="" 
          className="absolute left-10 top-1/4 w-16 -rotate-12 brightness-0 invert" 
        />
        <img 
          src="/decor-kite-string.svg" 
          alt="" 
          className="absolute right-16 bottom-16 w-20 opacity-50 brightness-0 invert" 
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        {/* Section Heading with Accent Swoosh */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl inline-block relative pb-2">
            Terms we offer*
            <img
              src="/decor-swoosh.svg"
              alt=""
              aria-hidden="true"
              className="absolute left-0 bottom-0 w-full h-1.5 opacity-60 brightness-0 invert"
            />
          </h2>
        </div>

        {/* Premium Glassmorphic Table Container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden backdrop-blur-md shadow-2xl"
        >
          {terms.map((term, index) => (
            <motion.div
              key={term.label}
              variants={item}
              whileHover={reduceMotion ? {} : { backgroundColor: "rgba(255, 255, 255, 0.03)" }}
              className={`flex items-center justify-between p-5 sm:p-6 sm:px-8 transition-colors duration-200 gap-4 ${
                index !== terms.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-4">
                <img
                  src={term.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 sm:h-6 sm:w-6 object-contain brightness-0 invert"
                />
                <span className="text-white/85 font-semibold text-xs sm:text-base md:text-lg">
                  {term.label}
                </span>
              </div>
              <span className="text-white font-extrabold text-xs sm:text-lg md:text-xl font-sans tracking-wide text-right">
                {term.value}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnotes Styled Cleanly */}
        <div className="mx-auto mt-16 max-w-3xl space-y-2.5 text-left text-[11px] sm:text-xs text-white/50 leading-relaxed border-t border-white/10 pt-8">
          {footnotes.map((note) => (
            <p key={note} className="flex items-start gap-1">
              <span className="select-none">•</span>
              <span>{note}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

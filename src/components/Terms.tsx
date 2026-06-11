"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const terms = [
  { label: "Loan Amount", value: "₹ 5 Lakhs to 1 Crore" },
  { label: "Interest Rates**", value: "1 - 2% per month" },
  { label: "Loan Tenure", value: "1 month - 5 years" },
  { label: "Pre-Closure Fee***", value: "₹0/-" },
];

const footnotes = [
  "* Disbursals detailed behavior under standard process",
  "** Based on health of your business, revenue and overall turnover",
  "*** Closure charge may apply under some circumstances",
];

export default function Terms() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <section id="terms" className="scroll-mt-24 bg-[#0a1f3d] py-16 sm:py-24 text-white border-t border-white/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Terms we offer*
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-x-12 gap-y-6 sm:grid-cols-2 text-base sm:text-lg max-w-2xl mx-auto"
        >
          {terms.map((term) => (
            <motion.div
              key={term.label}
              variants={item}
              className="flex justify-between border-b border-white/10 pb-3"
            >
              <span className="text-white/70 font-medium">{term.label} :</span>
              <span className="text-white font-bold">{term.value}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mx-auto mt-12 max-w-2xl space-y-2 text-left text-xs text-white/50 leading-relaxed">
          {footnotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
